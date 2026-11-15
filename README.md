# LUMI und das Morgenlicht

Ein 3D-Platformer im Browser. Welt, Figuren, Story, Texturen, Musik und Sound sind komplett selbstgemacht.
Es gibt keine einzige Bild- oder Audiodatei: Alle Texturen werden beim Start auf Canvas gemalt, alle Figuren
aus Grundformen gebaut und Musik und Soundeffekte live mit der WebAudio-API synthetisiert.

## Spielen

**Veröffentlichen auf Steam / itch.io:** siehe [PUBLISHING.md](PUBLISHING.md) – `npm run package` baut die HTML5-Version für itch.io
sowie Desktop-Versionen für Windows, Linux/Steam Deck und macOS. Fertige Store-Grafiken liegen in `store/`.

- **Am einfachsten:** `lumi.html` doppelt anklicken. Das ist eine einzige Datei, sie läuft offline in jedem modernen Browser.
- Alternativ `index.html` (lädt `game.js` aus demselben Ordner).

## Story

Hoch über dem Wolkenmeer schweben die Inseln von **Lumeria**. Graf Nebelmaul hat das *Morgenlicht*, den Kristall auf dem
alten Leuchtturm, in sieben Splitter zerschlagen und jedem seiner Nebelfürsten einen gegeben. Den Kern behält er selbst.
Aus dem letzten Funken erwacht **Lumi**, ein kleiner Laternengeist. Die Stimme der Leuchtturmwärterin **Elva** führt Lumi durch acht Reiche. Mit ihrem alten Luftschiff **Leuchtfeder**,
dessen Laterne nur mit **Mondsplittern** leuchtet, reist Lumi von Reich zu Reich.

**Sprachen:** Deutsch, English, Français, Español, Italiano, Türkçe. Story, Menüs und Hinweise sind komplett übersetzt.
Die Sprache wird automatisch erkannt und ist im Hauptmenü und im Pausenmenü umschaltbar.

## Inhalt

| Welt | Thema | Besonderheiten | Boss |
|---|---|---|---|
| 1 | Blütenwiesen | Sprungblüten, bewegliche Plattformen | Moderich der Welke |
| 2 | Kristallschlucht | Bröckelplatten, Kristallrotoren, Aufzüge | Splitterzahn |
| 3 | Wolkenwerft | Aufwinde, Luftschiffe, kreisende Plattformen | Kapitän Dunstbart |
| 4 | Glutvulkan | Lavasee, Feuergeysire | Schwelgrimm |
| 5 | Frostgipfel | rutschiges Eis, Blinkplatten | Frierich der Eisige |
| 6 | Sonnenruinen | Säulen, Sonnenplatten im Takt | Der Sandflüsterer |
| 7 | Korallentiefe | geringe Schwerkraft, Blasenströme, Quallen | Tiefenschlund |
| 8 | Nebelreich | Uhrwerk, alles gemischt, Finale | Graf Nebelmaul |

### Offene Welt

Jede Welt ist ein frei begehbares **Reich**:
- In der Mitte liegt eine **Hub-Insel** mit dem Luftschiff **Leuchtfeder**, der Händlerin, einem Glimmling, der sein Kuscheltier vermisst,
  dem **Nebeltor** zum Boss und einem goldenen **Bonustor**.
- Vom Hub führen **5 Inselketten** in alle Richtungen. Jede hat eine Arena mit **Lichttor** zu einer Herausforderung und endet an einem **Gipfel**.

**Mondsplitter pro Reich: 47.** Insgesamt sind es **376**.

| Quelle | Anzahl |
|---|---|
| Gipfel | 5 |
| Mutpfade (Seitenwege mit schweren Sprüngen) | 3 |
| Verstecke (Geisterplatten, Höhle unter dem Hub, Wolkenschatz) | 3 |
| Stampfstellen | 2 |
| Kisten | 2 |
| 5 Mondfunken einsammeln | 1 |
| Kuscheltier zurückbringen | 1 |
| Ringlauf um den Hub | 1 |
| Händlerin (100 Funken) | 1 |
| Nebelnest räumen | 1 |
| 5 Herausforderungen hinter Lichttoren (Ziel, 2 Geheimnisse, alle Funken) | 20 |
| Bonustor (braucht den Geheimschlüssel) | 4 |
| Boss (großer Splitter) | 3 |

**Fortschritt:**
- Das Nebeltor öffnet sich ab 5 bis 12 Mondsplittern.
- Ins nächste Reich fliegt die Leuchtfeder, wenn der Boss besiegt ist und genug Mondsplitter gesammelt sind (10 bis 22).
- Die **Mondliste** im Pausenmenü zeigt, was schon gefunden ist.
- Es gibt kein Game Over: Wer abstürzt oder alle Herzen verliert, verliert 10 Funken und startet am letzten Checkpoint neu.

Die ersten Herausforderungen der Welten 1–3 sind handgebaut. Alle Reiche und übrigen Herausforderungen baut ein **Level-Generator** (`src/generator.js`)
aus Bausteinen wie Sprungreihen, Treppen, Fahrstühlen, Aufwinden, Blinkplatten, Geysirfeldern und Brücken, mit festem Seed.

### Grafik

Die Grafikstufe lässt sich im Haupt- und Pausenmenü umschalten.

| Stufe | Auflösung | Extras |
|---|---|---|
| Niedrig | 1× | weniger Deko, 1024er-Schatten |
| Mittel (Standard auf Handys) | bis 1,5× | wie bisher |
| Hoch (Standard auf dem PC) | bis 2× | Bloom-Leuchten |
| Ultra | **bis 3840×2160 (4K)**, auf kleineren Bildschirmen als Supersampling | 4096er-Schatten, doppelt so scharfe Texturen, mehr Deko, weitere Sicht |

**Sparmodus nur auf dem Handy (Niedrig/Mittel):** Unbewegliche Teile werden beim Laden zu großen Meshes verschmolzen (Static Batching in 60-m-Kacheln),
Funken per Instancing gezeichnet und Hintergrund-Inseln eingefroren. Das senkt die Draw Calls in einem Reich auf etwa ein Drittel.
**Auf dem PC (Hoch/Ultra)** bleibt alles einzeln: schwebende Hintergrund-Inseln mit Schatten, einzelne Funken, Wolken und Figurenteile.

## Qualitätssicherung

Der Generator notiert jeden Sprung des Levels, auch die Wege zu allen Geheimnissen. Ein Test-Bot springt jeden einzelnen davon mit
der echten Spielphysik nach (`__lumi.debugTestLevel(welt, level)` in der Browser-Konsole). Aktueller Stand: **1952 von 1952 Sprüngen in 8 Reichen und 56 Herausforderungen sind schaffbar.**

## Steuerung

| Aktion | Tastatur / Maus | Gamepad |
|---|---|---|
| Laufen | WASD / Pfeiltasten | linker Stick |
| Springen / Doppelsprung | Leertaste (2×) | A |
| Drehattacke | F / J / Linksklick | X / B |
| Stampfen (in der Luft) | Shift / C / Rechtsklick | LB / RB / Trigger |
| Kamera | Maus (ins Bild klicken) / Q, E, R, V | rechter Stick |
| Interagieren (Tore, Schiff, NPCs) | Enter / T | Y |
| Pause | Esc / P | Start |
| Ton an/aus | M | |

Auf Handy und Tablet erscheinen Touch-Steuerelemente (Stick links, Knöpfe rechts, Kamera durch Wischen).

Fortschritt wird im Browser gespeichert (`localStorage`). Zum Testen: `lumi.html?w=4` startet direkt im Reich 5, `lumi.html?w=4&l=0` in dessen erster Herausforderung.

## Entwickeln

```bash
npm install
npm run build     # erzeugt game.js, index.html und lumi.html aus src/
npm run package   # Release-Pakete (itch.io-ZIP, Windows, Linux, macOS) nach ./release
npm run icons     # App-Icons aus assets/icon.svg
node tools/store-art.cjs   # Store-Grafiken nach ./store
```

| Datei | Inhalt |
|---|---|
| `src/main.js` | Spielablauf, Zustände, Kamera, Hauptschleife |
| `src/player.js` | Lumis Steuerung, Physik, Animation |
| `src/world.js` | Level-Bausteine (Plattformen, Gegner, Fallen, Deko) |
| `src/worlds.js` | die 8 Welten: Farben, Mechaniken, Gegner, Bosse |
| `src/generator.js` | prozeduraler Generator für Reiche (offene Welt) und Herausforderungen |
| `src/gfx.js` | Grafikstufen, Bloom, 4K |
| `src/levels.js` | handgebaute Level |
| `src/boss.js` | Bosse (parametrisiert pro Welt) |
| `src/i18n/` | alle Texte in 6 Sprachen |
| `src/models.js` | alle 3D-Modelle |
| `src/textures.js` | prozedurale Texturen |
| `src/audio.js` | Synthesizer, Soundeffekte und komponierte Musikstücke |
| `src/ui.js`, `src/style.css` | HUD, Menüs, Dialogboxen |

Engine: [three.js](https://threejs.org) (MIT). Gebündelt mit esbuild.
