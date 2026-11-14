# LUMI und das Morgenlicht

Ein 3D-Platformer im Browser. Welt, Figuren, Story, Texturen, Musik und Sound sind komplett selbstgemacht.
Es gibt keine einzige Bild- oder Audiodatei: Alle Texturen werden beim Start auf Canvas gemalt, alle Figuren
aus Grundformen gebaut und Musik und Soundeffekte live mit der WebAudio-API synthetisiert.

## Spielen

- **Am einfachsten:** `lumi.html` doppelt anklicken. Das ist eine einzige Datei, sie läuft offline in jedem modernen Browser.
- Alternativ `index.html` (lädt `game.js` aus demselben Ordner).

## Story

Hoch über dem Wolkenmeer schweben die Inseln von **Lumeria**. Graf Nebelmaul hat das *Morgenlicht*, den Kristall
auf dem alten Leuchtturm, zerschlagen. Aus dem letzten Funken erwacht **Lumi**, ein kleiner Laternengeist. Begleitet von
der Stimme der Leuchtturmwärterin **Elva** holt Lumi die drei Splitter zurück und stellt den Grafen in seinem Turm.

| Welt | Name | Neue Elemente |
|---|---|---|
| 1 | Blütenwiesen | Neblinge, Sprungblüten, bewegliche Plattformen, Säulen-Parcours |
| 2 | Kristallschlucht | Bröckelplatten, Kristallrotoren, Dornlinge, Aufzug |
| 3 | Wolkenwerft | Aufwinde, Flatterlinge, Planke mit Rotor |
| 4 | Nebelturm | Bosskampf gegen Graf Nebelmaul (3 Phasen) |

## Steuerung

| Aktion | Tastatur / Maus | Gamepad |
|---|---|---|
| Laufen | WASD / Pfeiltasten | linker Stick |
| Springen / Doppelsprung | Leertaste (2×) | A |
| Drehattacke | F / J / Linksklick | X / B |
| Stampfen (in der Luft) | Shift / C / Rechtsklick | LB / RB / Trigger |
| Kamera | Maus (ins Bild klicken) / Q, E, R, V | rechter Stick |
| Pause | Esc / P | Start |
| Ton an/aus | M | |

Auf Handy und Tablet erscheinen Touch-Steuerelemente (Stick links, Knöpfe rechts, Kamera durch Wischen).

Fortschritt wird im Browser gespeichert (`localStorage`). Mit `lumi.html?level=2` startet man direkt in einer Welt (zum Testen).

## Entwickeln

```bash
npm install
npm run build   # erzeugt game.js, index.html und lumi.html aus src/
```

| Datei | Inhalt |
|---|---|
| `src/main.js` | Spielablauf, Zustände, Kamera, Hauptschleife |
| `src/player.js` | Lumis Steuerung, Physik, Animation |
| `src/world.js` | Level-Bausteine (Plattformen, Gegner, Fallen, Deko) |
| `src/levels.js` | Level-Design der 4 Welten |
| `src/boss.js` | Graf Nebelmaul |
| `src/models.js` | alle 3D-Modelle |
| `src/textures.js` | prozedurale Texturen |
| `src/audio.js` | Synthesizer, Soundeffekte und komponierte Musikstücke |
| `src/story.js` | alle Dialoge |
| `src/ui.js`, `src/style.css` | HUD, Menüs, Dialogboxen |

Engine: [three.js](https://threejs.org) (MIT). Gebündelt mit esbuild.
