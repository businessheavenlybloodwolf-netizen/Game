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

Optional sind auch `intensity` (0–1) und `durationMs` möglich, um den Puls direkt festzulegen. Das ist der Weg für:
- **Unity-Spiele** über eine BepInEx-Mod, die im Schadens-Code des Spielers diese Anfrage schickt
- **Minecraft** über eine Fabric/Forge-Mod oder ein Skript-Mod
- **eigene Spiele**, wo das ein einziger `fetch()`-Aufruf ist (CORS ist erlaubt)

`GET http://127.0.0.1:3110/` zeigt den Status: ob Intiface verbunden ist und welche Geräte bereit sind.

## Hinweis zu Anti-Cheat

Bitte **keine Speicher-Ausleser** (Memory Reading) oder injizierten DLLs bei Online-Spielen mit Anti-Cheat
(z. B. Valorant, Fortnite, Apex) benutzen, das kann zum Bann führen. Offizielle Schnittstellen wie GSI,
Logdateien und Mods in Einzelspieler-Spielen sind die sicheren Wege.
