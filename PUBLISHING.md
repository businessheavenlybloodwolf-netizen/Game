# LUMI veröffentlichen – Steam & itch.io

## 1. Alles bauen

```bash
npm install
npm run package        # baut alles nach ./release
node tools/store-art.cjs   # (optional) Store-Grafiken neu rendern → ./store
```

Ergebnis in `release/`:

| Datei | Wofür |
|---|---|
| `lumi-test.html` | eine einzige Datei zum Testen: doppelklicken, läuft im Browser |
| `lumi-web-itch.zip` | HTML5-Version für itch.io (Browser-Spiel) |
| `LUMI-win32-x64.zip` | Windows (Steam-Depot und itch.io-Download) |
| `LUMI-linux-x64.zip` | Linux und Steam Deck |
| `LUMI-darwin-arm64.zip` / `LUMI-darwin-x64.zip` | macOS Apple Silicon / Intel (unsigniert, siehe unten) |
| `build/` | entpackte Ordner, aus denen Steam hochlädt |

Die Desktop-Version startet im Vollbild (`F11` oder `Alt+Enter` wechselt; Startoption `--windowed` für Fenster) und hat im Titelmenü „Spiel beenden“.
Der Spielstand liegt im Benutzerprofil des Spiels.

## 2. itch.io

1. Auf itch.io: **Dashboard → Create new project**
2. **Kind of project:** `HTML`
3. **Uploads:**
   - `lumi-web-itch.zip` hochladen → Haken bei **„This file will be played in the browser“**
   - optional zusätzlich `LUMI-win32-x64.zip` (Plattform: Windows), `LUMI-linux-x64.zip` (Linux), `LUMI-darwin-arm64.zip` (macOS)
4. **Embed options:** Viewport `1280 × 720`, Haken bei **Fullscreen button** und **Mobile friendly** (Ausrichtung: Landscape)
5. **Cover image:** `store/itch/cover_630x500.png`; **Screenshots:** `store/screenshots/*`
6. Speichern → Vorschau testen → veröffentlichen

Mit dem Kommandozeilen-Tool **butler** (optional, für Updates):
```bash
butler push release/lumi-web-itch.zip DEINNAME/lumi:html
butler push release/build/LUMI-win32-x64 DEINNAME/lumi:windows
butler push release/build/LUMI-linux-x64 DEINNAME/lumi:linux
```

## 3. Steam

Voraussetzungen (nur du kannst das erledigen): ein **Steamworks-Partnerkonto** und die **Steam-Direct-Gebühr (100 US-$ pro Spiel)**.
Danach bekommst du eine **App-ID** und legst **Depots** an (je eins für Windows, Linux, macOS).

1. In `steam/app_build.vdf` und den drei `steam/depot_*.vdf` die Platzhalter `DEINE_APP_ID` / `DEIN_DEPOT_…` durch deine Nummern ersetzen.
2. **Steamworks SDK** herunterladen (partner.steamgames.com → SDK), `tools/ContentBuilder` öffnen.
3. Hochladen:
   ```bash
   steamcmd +login DEIN_STEAM_LOGIN +run_app_build /pfad/zu/Game/steam/app_build.vdf +quit
   ```
4. In Steamworks → **Installation → General**, Startoptionen anlegen:
   - Windows: Programm `LUMI.exe`
   - Linux / Steam Deck: Programm `lumi`, Argumente `--no-sandbox`
   - macOS: Programm `LUMI.app`
5. Build in Steamworks unter **SteamPipe → Builds** auf den Branch `default` setzen.
6. **Store-Seite:** alle Grafiken liegen fertig in `store/steam/` in den verlangten Größen:
   - Header 920×430, Small 462×174, Main 1232×706, Vertical 748×896
   - Library Capsule 600×900, Library Hero 3840×1240, Library Logo 1280×720 (transparent), Page Background 1438×810
   - Screenshots 1920×1080: `store/screenshots/`
7. Steam-Deck: Das Spiel unterstützt Gamepad komplett (Stick, A = Springen, X/B = Drehattacke, LB/RB = Stampfen, Start = Pause).
   In Steamworks die Deck-Kompatibilitätsprüfung beantragen.

### Hinweise
- **macOS:** Die Mac-Builds sind **nicht signiert/notarisiert**. Für Steam/itch auf dem Mac brauchst du ein Apple-Developer-Konto (99 $/Jahr) und
  `codesign` + `notarytool` auf einem Mac – sonst blockiert macOS den Start. Windows und Linux brauchen das nicht.
- **Windows SmartScreen** kann bei unsignierten `.exe` warnen. Über Steam installiert ist das in der Praxis kein Problem; für itch.io-Downloads optional ein Code-Signing-Zertifikat.
- **Steam-Erfolge / Cloud-Speicher** sind noch nicht eingebaut. Dafür bräuchte man die Steamworks-Anbindung (z. B. `steamworks.js`) und deine App-ID.
- **Inhalte & Rechte:** Grafik, Musik, Sound und Story sind komplett im Code erzeugt. Fremdcode: three.js (MIT) und Electron (MIT) – siehe `THIRD_PARTY_LICENSES.md`.
