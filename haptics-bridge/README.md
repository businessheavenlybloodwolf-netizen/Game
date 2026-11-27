# Haptics Bridge

Lässt Geräte über **Intiface Central** vibrieren, wenn du in Spielen Schaden nimmst. Die Vibration ist umso stärker, je mehr Schaden du nimmst.
Beim Tod kommt ein langer, starker Puls und bei wenig Leben ein Herzschlag-Puls.

Das Tool ist eigenständig und hat nichts mit dem Spiel in diesem Repository zu tun. Es braucht nur **Node.js 22** oder neuer und keine weiteren Pakete.

```
Spiel ──(GSI / Logdatei / HTTP)──> Haptics Bridge ──(WebSocket, Buttplug)──> Intiface Central ──> Gerät
```

## Schnellstart

1. [Intiface Central](https://intiface.com/central/) starten, **Start Server** drücken und das Gerät verbinden.
2. In diesem Ordner: `npm start`
3. Test ohne Spiel, in einem zweiten Terminal: `npm run hit` (oder `node tools/send.mjs damage 50`, `node tools/send.mjs death`)

Ohne Gerät ausprobieren: `npm run dry` zeigt die Stärke als Balken in der Konsole an.

Die Bridge muss immer laufen. Die Spiel-Adapter unten schicken ihr nur die Events.

## Deine Spiele

| Spiel | Weg | Was vibriert | Anti-Cheat |
|---|---|---|---|
| **VRChat** | OSC (eingebaut) | Berührungen am Avatar (Contacts), Treffer | sicher, offizielle Schnittstelle |
| **Minecraft** (Java) | eigene Fabric-Mod | jeder Schaden, Tod, Herzschlag bei wenig Leben | nur Client-Mod, auf Servern unsichtbar |
| **Spider-Man Remastered** | Bildschirm: Lebensbalken | Schaden nach Stärke, Herzschlag | sicher, nur Bildschirm lesen |
| **Voidtrain** | Bildschirm: Lebensbalken | Schaden nach Stärke, Herzschlag | sicher, nur Bildschirm lesen |
| **Phasmophobia** | Bildschirm: Tod-Erkennung (experimentell) | Tod | sicher, nur Bildschirm lesen |

### VRChat

1. In VRChat OSC einschalten: Action-Menü → Options → OSC → **Enabled**.
2. `config.json` anlegen und die Parameter deines Avatars eintragen:
   ```json
   "vrchat": {
     "enabled": true,
     "params": [
       { "name": "Haptics_Touch", "mode": "level", "scale": 1.0 },
       { "name": "Haptics_Hit",   "mode": "trigger", "event": "hit" }
     ]
   }
   ```
   - `level`: Der Wert (0–1) wird direkt zur Vibration. Das passt für **Proximity**-Contacts: je näher, desto stärker.
   - `trigger`: Wenn der Wert über `threshold` steigt, wird ein Event ausgelöst, z. B. ein kurzer Puls bei einer Ohrfeige.
3. `npm run vrchat` starten. Mit `"logUnknown": true` (Standard) zeigt die Bridge jeden Parameter, den dein Avatar sendet.
   So findest du die Namen schnell, auch bei Avataren, die schon für OscGoesBrrr oder SPS eingerichtet sind.

**Avatar einrichten** (Unity mit VRChat SDK): An die gewünschte Körperstelle einen **VRC Contact Receiver** hängen.
Dort `Receiver Type: Proximity` wählen, unter Collision Tags z. B. `Hand` und `Finger` eintragen und als Parameter `Haptics_Touch` setzen.
Den Parameter zusätzlich als Float in den **Expression Parameters** anlegen (Synced kann aus bleiben), sonst schickt VRChat ihn nicht per OSC.
Nach dem Hochladen in VRChat einmal den OSC-Cache zurücksetzen: Options → OSC → **Reset Config**.

Hinweis: VRChat sendet nur an einen Port (9001). OscGoesBrrr und die Bridge können also nicht gleichzeitig zuhören, außer du nutzt einen OSC-Router.
VRChat selbst hat keine Lebenspunkte. „Schaden“ gibt es nur in Welten mit eigenem Kampfsystem, und die geben ihn nicht nach außen weiter.

### Minecraft (Java Edition, Fabric)

1. [Fabric Loader](https://fabricmc.net/use/) für **Minecraft 1.21.1** installieren und [Fabric API](https://modrinth.com/mod/fabric-api) in den `mods`-Ordner legen.
2. Die Mod `haptics-bridge-minecraft-1.0.0.jar` ebenfalls in `%AppData%\.minecraft\mods` legen.
   Fertig zum Herunterladen im Release [minecraft-v1.0.0](https://github.com/businessheavenlybloodwolf-netizen/Game/releases/tag/minecraft-v1.0.0): Die ZIP enthält die Bridge als `.exe`, eine für Minecraft eingestellte `config.json`, die Mod, die Fabric API und eine Anleitung.
3. Bridge starten, dann Minecraft starten. Ein Herz Schaden (2 von 20 HP) gibt eine leichte, viel Schaden eine starke Vibration.

Für eine andere Minecraft-Version die Versionsnummern in `minecraft-mod/gradle.properties` anpassen.

**Ohne Mod**, nur den Tod über die Chat-Logdatei: In `config.json` den Eintrag „Minecraft-Tod“ unter `logWatchers`
aus `config.example.json` übernehmen, `DEINNAME` und `DEIN_SPIELERNAME` ersetzen und `enabled` auf `true` setzen.

### Spider-Man Remastered und Voidtrain (Lebensbalken vom Bildschirm)

Diese Spiele haben keine Schnittstelle. Der **Bildschirm-Wächter** (`screen-watch/`, Windows) misst deshalb, wie voll der Lebensbalken ist.

1. Im Spiel **Randloses Fenster / Borderless** einstellen (bei Exklusiv-Vollbild sieht das Skript nur Schwarz) und **HDR aus**.
2. Einmal einmessen, mit vollem Leben im Spiel:
   ```
   screen-watch\screen-watch.bat spiderman -Calibrate
   ```
   Du hast je 5 Sekunden, um die Maus ins Spiel auf das linke und dann das rechte Ende des Lebensbalkens zu bewegen.
   Danach steht angezeigt, wie viel Prozent erkannt werden. Bei vollem Leben sollten es fast 100 % sein.
3. Starten (die Bridge muss laufen):
   ```
   screen-watch\screen-watch.bat spiderman
   ```
   Für Voidtrain genauso mit `voidtrain`. Mit `-Monitor` siehst du die erkannten Werte live.

Einstellungen in `screen-watch/profiles/<spiel>.json`:
- `tolerance`: wie stark die Farbe abweichen darf. Erhöhen bei Farbverläufen, senken bei Fehlalarmen.
- `minDrop`: ab welchem Verlust eine Vibration ausgelöst wird.
- `stableFrames`: wie viele Bilder ein Wert gleich bleiben muss, gegen Flackern.
- `hiddenBelow`: darunter gilt der Balken als ausgeblendet (Menü, Zwischensequenz). Dann gibt es keine Vibration.

Nach einer Änderung der Auflösung, der HUD-Größe oder der Fenstergröße neu einmessen.
Das gilt auch für jedes andere Spiel mit Lebensbalken: `profiles/beispiel.json` kopieren und umbenennen.

### Phasmophobia (experimentell)

Phasmophobia hat keine Lebenspunkte und ist ein Online-Spiel, darum gibt es hier **keine Mod**.
Der Bildschirm-Wächter erkennt stattdessen, wenn das Bild nach dem eigenen Tod für längere Zeit fast farblos wird (Geister-Ansicht):
```
screen-watch\screen-watch.bat phasmophobia -Monitor
```
Mit `-Monitor` siehst du die Sättigung live. Schau einmal, welche Werte im Leben und welche nach dem Tod erscheinen,
und stell `saturationBelow` in `profiles/phasmophobia.json` zwischen beide Werte.
Das Spiel ist sehr dunkel, darum zählen nur ausreichend helle Pixel (`minBrightShare`).
Diese Erkennung ist noch nicht im Spiel getestet.

## Einstellungen

`config.example.json` nach `config.json` kopieren und anpassen. Was du weglässt, bleibt beim Standardwert.

| Feld | Bedeutung |
|---|---|
| `maxIntensity` | Obergrenze für alles (0–1), Standard 0.8 |
| `devices` | Nur Geräte, deren Name einen dieser Texte enthält, z. B. `["Lush"]`. Leer heißt alle. |
| `events.damage` | `minIntensity`/`intensity` und `minDurationMs`/`durationMs`, je nach Schaden im Verhältnis zu `referenceMax`. `fadeMs` ist das Ausklingen. |
| `events.death`, `events.hit` | feste Pulse. Du kannst beliebige eigene Event-Typen ergänzen. |
| `lowHealth` | Herzschlag unter `threshold` (Anteil der max. HP). Funktioniert nur bei Spielen, die die HP melden (CS2, Dota 2). |
| `token` | Wenn gesetzt, muss jede Anfrage diesen Token mitschicken (auch in den `.cfg`-Dateien unten eintragen). |
| `port` | Port der Bridge, Standard 3110. Sie ist nur lokal erreichbar (127.0.0.1). |

## Spiele anbinden

### Counter-Strike 2 und Dota 2 (Game State Integration)

Valve-Spiele melden ihren Zustand offiziell selbst. Dabei wird nichts ins Spiel eingegriffen, das ist also **sicher gegenüber VAC/Anti-Cheat**.

- **CS2:** `game-configs/gamestate_integration_haptics_cs2.cfg` kopieren nach
  `…\Steam\steamapps\common\Counter-Strike Global Offensive\game\csgo\cfg\`
- **Dota 2:** `game-configs/gamestate_integration_haptics_dota2.cfg` kopieren nach
  `…\Steam\steamapps\common\dota 2 beta\game\dota\cfg\gamestate_integration\` (Ordner ggf. anlegen)
  und in Steam als Startoption `-gamestateintegration` setzen.

Danach das Spiel neu starten. Beim Zuschauen nach dem eigenen Tod wird nicht vibriert.

### Spiele mit Logdatei

Viele Spiele, Server und Mods schreiben Schaden oder Tod in eine Textdatei. In `config.json` unter `logWatchers` trägst du die Datei und Regeln (reguläre Ausdrücke) ein:

```json
"logWatchers": [
  {
    "name": "MeinSpiel",
    "file": "C:/Users/DU/AppData/LocalLow/Firma/Spiel/Player.log",
    "rules": [
      { "match": "Player took (\\d+) damage", "event": "damage", "amountGroup": 1, "max": 100 },
      { "match": "Player died", "event": "death" }
    ]
  }
]
```

`amountGroup` gibt an, welche Klammergruppe die Schadenszahl enthält. Ohne diese Angabe gibt es einen Puls mittlerer Stärke.

### Alles andere: HTTP-Event

Jedes Programm, jede Mod und jedes Skript kann direkt Events schicken:

```
POST http://127.0.0.1:3110/event
{ "type": "damage", "amount": 25, "max": 100 }
```

Optional sind auch `intensity` (0–1) und `durationMs` möglich, um den Puls direkt festzulegen.
Dazu gibt es zwei Sondertypen: `{ "type": "health", "value": 0.4 }` meldet die aktuellen Lebenspunkte (für den Herzschlag),
`{ "type": "level", "key": "x", "value": 0.5 }` setzt eine dauerhafte Stärke (0 beendet sie). Das ist der Weg für:
- **Unity-Spiele** über eine BepInEx-Mod, die im Schadens-Code des Spielers diese Anfrage schickt
- **Minecraft** über eine Fabric/Forge-Mod oder ein Skript-Mod
- **eigene Spiele**, wo das ein einziger `fetch()`-Aufruf ist (CORS ist erlaubt)

`GET http://127.0.0.1:3110/` zeigt den Status: ob Intiface verbunden ist und welche Geräte bereit sind.

## Hinweis zu Anti-Cheat

Bitte **keine Speicher-Ausleser** (Memory Reading) oder injizierten DLLs bei Online-Spielen mit Anti-Cheat
(z. B. Valorant, Fortnite, Apex) benutzen, das kann zum Bann führen. Offizielle Schnittstellen wie GSI,
Logdateien und Mods in Einzelspieler-Spielen sind die sicheren Wege.
