# LUMI und das Morgenlicht

Ein 3D-Platformer im Browser. Welt, Figuren, Story, Texturen, Musik und Sound sind komplett selbstgemacht.
Es gibt keine einzige Bild- oder Audiodatei: Alle Texturen werden beim Start auf Canvas gemalt, alle Figuren
aus Grundformen gebaut und Musik und Soundeffekte live mit der WebAudio-API synthetisiert.

## Spielen

- **Am einfachsten:** `lumi.html` doppelt anklicken. Das ist eine einzige Datei, sie läuft offline in jedem modernen Browser.
- Alternativ `index.html` (lädt `game.js` aus demselben Ordner).

## Story

Hoch über dem Wolkenmeer schweben die Inseln von **Lumeria**. Graf Nebelmaul hat das *Morgenlicht*, den Kristall auf dem
alten Leuchtturm, in sieben Splitter zerschlagen und jedem seiner Nebelfürsten einen gegeben. Den Kern behält er selbst.
Aus dem letzten Funken erwacht **Lumi**, ein kleiner Laternengeist. Die Stimme der Leuchtturmwärterin **Elva** führt Lumi durch acht Welten.

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

- **Pro Welt 7 Level:** 5 normale Level, ein Bosslevel und ein geheimes Bonuslevel. Insgesamt sind das **56 Level**.
- **Sternenpfade (nach dem Finale):** 56 weitere, schwerere Nachtversionen mit eigenen Geheimnissen und stärkeren Bossen. Insgesamt sind das **112 Level**.
- **Geheimnisse pro Level:** 3 Mondsteine (Mutpfad, Versteck und alle Funken). Verstecke sind unsichtbare Geisterplatten, Höhlen unter der Startinsel oder hohe Wolkenschätze.
  Dazu kommt ein **Geheimschlüssel** pro Welt (öffnet das Bonuslevel) und eine **Zeitmedaille** pro Level.
- **288 Mondsteine** insgesamt (144 je Modus). Neue Welten brauchen eine Mindestzahl an Mondsteinen.
- **Spielzeit:** Für alle Geheimnisse in beiden Modi rechne ich mit über 20 Stunden. Das ist eine Schätzung, kein Messwert, und hängt stark vom Spieler ab.

Die ersten Level der Welten 1–3 sind handgebaut. Alle anderen baut ein **Level-Generator** (`src/generator.js`) aus Bausteinen
wie Sprungreihen, Treppen, Fahrstühlen, Aufwinden, Blinkplatten, Geysirfeldern und Brücken, mit festem Seed. Jedes Level ist also immer gleich, aber jedes ist anders.

## Qualitätssicherung

Der Generator notiert jeden Sprung des Levels, auch die Wege zu allen Geheimnissen. Ein Test-Bot springt jeden einzelnen davon mit
der echten Spielphysik nach (`__lumi.debugTestLevel(welt, level)` in der Browser-Konsole). Aktueller Stand: **3095 von 3095 Sprüngen in 112 Leveln sind schaffbar.**

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

Fortschritt wird im Browser gespeichert (`localStorage`). Mit `lumi.html?w=4&l=0` startet man direkt in ein Level (Welt 5, Level 1; zum Testen).

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
| `src/worlds.js` | die 8 Welten: Farben, Mechaniken, Gegner, Bosse |
| `src/generator.js` | prozeduraler Level-Generator inkl. Geheimnisse |
| `src/levels.js` | handgebaute Level |
| `src/boss.js` | Bosse (parametrisiert pro Welt) |
| `src/i18n/` | alle Texte in 6 Sprachen |
| `src/models.js` | alle 3D-Modelle |
| `src/textures.js` | prozedurale Texturen |
| `src/audio.js` | Synthesizer, Soundeffekte und komponierte Musikstücke |
| `src/ui.js`, `src/style.css` | HUD, Menüs, Dialogboxen |

Engine: [three.js](https://threejs.org) (MIT). Gebündelt mit esbuild.
