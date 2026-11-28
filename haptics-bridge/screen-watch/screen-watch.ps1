<#
  Bildschirm-Wächter für Spiele ohne Schnittstelle (Spider-Man, Voidtrain, Phasmophobia, ...).
  Liest nur Pixel vom Bildschirm, greift nicht ins Spiel ein.

    screen-watch.bat spiderman              starten (nutzt profiles\spiderman.json)
    screen-watch.bat spiderman -Calibrate   Lebensbalken einmessen
    screen-watch.bat spiderman -Monitor     Live-Werte anzeigen (zum Einstellen)

  Das Spiel muss im Modus "Randloses Fenster" (Borderless) laufen, HDR aus.
#>
param(
  [Parameter(Mandatory = $true, Position = 0)][string]$Game,
  [switch]$Calibrate,
  [switch]$Monitor
)
$ErrorActionPreference = 'Stop'

$profilePath = if (Test-Path $Game) { (Resolve-Path $Game).Path } else { Join-Path $PSScriptRoot "profiles\$Game.json" }
if (-not (Test-Path $profilePath)) {
  Write-Host "Profil nicht gefunden: $profilePath" -ForegroundColor Red
  Write-Host "Vorhanden: $((Get-ChildItem (Join-Path $PSScriptRoot 'profiles') -Filter *.json | ForEach-Object BaseName) -join ', ')"
  exit 1
}
$cfg = Get-Content $profilePath -Raw -Encoding UTF8 | ConvertFrom-Json

Add-Type -AssemblyName System.Windows.Forms
Add-Type -ReferencedAssemblies System.Drawing -TypeDefinition @"
using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.Runtime.InteropServices;

public static class HbScreen {
  [DllImport("user32.dll")] public static extern bool SetProcessDPIAware();

  static byte[] Grab(int x, int y, int w, int h, out int stride) {
    using (var bmp = new Bitmap(w, h, PixelFormat.Format32bppArgb)) {
      using (var g = Graphics.FromImage(bmp)) g.CopyFromScreen(x, y, 0, 0, new Size(w, h));
      var d = bmp.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.ReadOnly, PixelFormat.Format32bppArgb);
      stride = d.Stride;
      var buf = new byte[stride * h];
      Marshal.Copy(d.Scan0, buf, 0, buf.Length);
      bmp.UnlockBits(d);
      return buf;
    }
  }

  // Anteil der Pixel auf der Linie x1..x2 (Höhe y, +-1 Pixel), die der Balkenfarbe ähneln.
  public static double BarFraction(int x1, int x2, int y, int r, int g, int b, int tol) {
    int w = Math.Max(1, x2 - x1 + 1), stride;
    var px = Grab(x1, y - 1, w, 3, out stride);
    int hit = 0;
    for (int i = 0; i < w; i++) {
      for (int row = 0; row < 3; row++) {
        int o = row * stride + i * 4; // Reihenfolge B, G, R, A
        if (Math.Abs(px[o + 2] - r) <= tol && Math.Abs(px[o + 1] - g) <= tol && Math.Abs(px[o] - b) <= tol) { hit++; break; }
      }
    }
    return (double)hit / w;
  }

  // Durchschnittsfarbe der mittleren Hälfte der Linie (zum Einmessen bei vollem Leben).
  public static int[] AverageColor(int x1, int x2, int y) {
    int w = Math.Max(1, x2 - x1 + 1), stride;
    var px = Grab(x1, y, w, 1, out stride);
    long r = 0, g = 0, b = 0; int n = 0;
    for (int i = w / 4; i < Math.Max(w / 4 + 1, 3 * w / 4); i++) {
      int o = i * 4; b += px[o]; g += px[o + 1]; r += px[o + 2]; n++;
    }
    return new int[] { (int)(r / n), (int)(g / n), (int)(b / n) };
  }

  // [0] mittlere Farbsättigung der hellen Pixel, [1] Anteil heller Pixel.
  public static double[] Saturation(int sw, int sh) {
    int stride;
    var px = Grab(0, 0, sw, sh, out stride);
    double sat = 0; int bright = 0, total = 0;
    for (int y = 0; y < sh; y += 12) {
      for (int x = 0; x < sw; x += 12) {
        int o = y * stride + x * 4;
        int b = px[o], g = px[o + 1], r = px[o + 2];
        int mx = Math.Max(r, Math.Max(g, b)), mn = Math.Min(r, Math.Min(g, b));
        total++;
        if (mx < 40) continue; // fast schwarz: Sättigung sagt nichts aus
        bright++;
        sat += (double)(mx - mn) / mx;
      }
    }
    return new double[] { bright > 0 ? sat / bright : 0, (double)bright / Math.Max(1, total) };
  }
}
"@
[HbScreen]::SetProcessDPIAware() | Out-Null

$url = if ($cfg.bridge) { $cfg.bridge } else { 'http://127.0.0.1:3110/event' }
$token = if ($cfg.token) { $cfg.token } else { '' }
$script:warned = $false

function Send-Event($data) {
  $data.source = $cfg.name
  try {
    Invoke-RestMethod -Uri $url -Method Post -ContentType 'application/json' -Headers @{ 'X-Token' = $token } `
      -Body ($data | ConvertTo-Json -Compress) -TimeoutSec 1 | Out-Null
    $script:warned = $false
  } catch {
    if (-not $script:warned) { Write-Host 'Bridge nicht erreichbar. Läuft "npm start" im Ordner haptics-bridge?' -ForegroundColor Yellow }
    $script:warned = $true
  }
}

function Wait-Mouse($text) {
  Write-Host ''
  Write-Host $text -ForegroundColor Cyan
  for ($i = 5; $i -gt 0; $i--) { Write-Host "  $i ..." -NoNewline; Start-Sleep 1 }
  $p = [System.Windows.Forms.Cursor]::Position
  Write-Host "  gespeichert: $($p.X), $($p.Y)"
  return $p
}

function Set-Prop($obj, $name, $value) {
  if ($obj.PSObject.Properties[$name]) { $obj.$name = $value } else { $obj | Add-Member -NotePropertyName $name -NotePropertyValue $value }
}

# ---------- Einmessen ----------
if ($Calibrate) {
  if (-not $cfg.bar) { Write-Host 'Dieses Profil hat keinen Lebensbalken (nur Bildschirm-Erkennung), nichts einzumessen.'; exit 0 }
  Write-Host "Einmessen für $($cfg.name). Starte das Spiel mit VOLLEM Leben, sodass der Lebensbalken zu sehen ist."
  Write-Host 'Du hast jeweils 5 Sekunden, um die Maus im Spiel an die richtige Stelle zu bewegen.'
  $a = Wait-Mouse 'Maus auf das LINKE Ende des Lebensbalkens (mittig in der Höhe) ...'
  $b = Wait-Mouse 'Maus auf das RECHTE Ende des vollen Lebensbalkens ...'
  $x1 = [Math]::Min($a.X, $b.X); $x2 = [Math]::Max($a.X, $b.X); $y = [int](($a.Y + $b.Y) / 2)
  $c = [HbScreen]::AverageColor($x1, $x2, $y)
  Set-Prop $cfg.bar 'x1' $x1; Set-Prop $cfg.bar 'x2' $x2; Set-Prop $cfg.bar 'y' $y
  Set-Prop $cfg.bar 'color' @($c[0], $c[1], $c[2])
  $f = [HbScreen]::BarFraction($x1, $x2, $y, $c[0], $c[1], $c[2], [int]$cfg.bar.tolerance)
  $cfg | ConvertTo-Json -Depth 6 | Set-Content $profilePath -Encoding UTF8
  Write-Host ''
  Write-Host "Farbe: RGB($($c -join ', '))  Länge: $($x2 - $x1 + 1) px  Test: $([Math]::Round($f * 100)) % erkannt"
  if ($f -lt 0.8) { Write-Host 'Unter 80 %: Balken nicht genau getroffen, Leben nicht voll, oder Balken hat einen Farbverlauf (dann "tolerance" erhöhen). Noch mal versuchen.' -ForegroundColor Yellow }
  else { Write-Host "Gespeichert in $profilePath" -ForegroundColor Green }
  exit 0
}

# ---------- Beobachten ----------
$bar = $cfg.bar
if ($bar -and $null -eq $bar.x1) { Write-Host "Lebensbalken noch nicht eingemessen. Zuerst: screen-watch.bat $Game -Calibrate" -ForegroundColor Yellow; exit 1 }
$grey = $cfg.grey
$screen = [System.Windows.Forms.Screen]::PrimaryScreen.Bounds
$fps = if ($cfg.fps) { [double]$cfg.fps } else { 10 }
$delay = [int](1000 / $fps)

$last = $null; $pending = $null; $pendingCount = 0
$greySince = $null; $greyFired = $false; $frame = 0
$clock = [System.Diagnostics.Stopwatch]::StartNew()

Write-Host "Beobachte $($cfg.name) ... (Strg+C zum Beenden)" -ForegroundColor Green
while ($true) {
  $frame++
  $line = ''

  if ($bar) {
    $f = [HbScreen]::BarFraction([int]$bar.x1, [int]$bar.x2, [int]$bar.y, [int]$bar.color[0], [int]$bar.color[1], [int]$bar.color[2], [int]$bar.tolerance)
    $line += "Leben: {0,3} %  " -f [Math]::Round($f * 100)
    if ($f -lt [double]$bar.hiddenBelow) {
      $pending = $null; $pendingCount = 0   # Balken ausgeblendet (Menü, Zwischensequenz, Tod)
    } else {
      # Neuen Wert erst übernehmen, wenn er mehrere Bilder lang gleich bleibt (gegen Flackern und Effekte).
      if ($null -ne $pending -and [Math]::Abs($f - $pending) -lt 0.015) { $pendingCount++ } else { $pending = $f; $pendingCount = 1 }
      if ($pendingCount -eq [int]$bar.stableFrames) {
        if ($null -ne $last -and $pending -lt $last - [double]$bar.minDrop) {
          $amount = [Math]::Round(($last - $pending) * [double]$bar.maxHp, 1)
          Send-Event @{ type = 'damage'; amount = $amount; max = [double]$bar.maxHp }
          Write-Host "Schaden: $amount" -ForegroundColor Red
        }
        if ($null -eq $last -or [Math]::Abs($pending - $last) -ge 0.01) {
          $last = $pending
          Send-Event @{ type = 'health'; value = [Math]::Round($last, 3) }
        }
      }
    }
  }

  if ($grey -and ($frame % 3 -eq 0)) {
    $s = [HbScreen]::Saturation($screen.Width, $screen.Height)
    $line += "Sättigung: {0:0.000}  hell: {1,3} %" -f $s[0], [Math]::Round($s[1] * 100)
    $isGrey = $s[1] -ge [double]$grey.minBrightShare -and $s[0] -lt [double]$grey.saturationBelow
    if ($isGrey) {
      if ($null -eq $greySince) { $greySince = $clock.ElapsedMilliseconds }
      if (-not $greyFired -and $clock.ElapsedMilliseconds - $greySince -ge [int]$grey.holdMs) {
        Send-Event @{ type = $grey.event }
        Write-Host "Graues Bild erkannt -> $($grey.event)" -ForegroundColor Red
        $greyFired = $true
      }
    } elseif ($s[0] -gt [double]$grey.saturationBelow * 1.5) {
      $greySince = $null; $greyFired = $false
    }
  }

  if ($Monitor -and $line) { Write-Host "`r$line          " -NoNewline }
  Start-Sleep -Milliseconds $delay
}
