# LUMI und das Morgenlicht

Ein 3D-Platformer im Browser. Welt, Figuren, Story, Texturen, Musik und Sound sind komplett selbstgemacht.
Es gibt keine einzige Bild- oder Audiodatei: Alle Texturen werden beim Start auf Canvas gemalt, alle Figuren
aus Grundformen gebaut und Musik und Soundeffekte live mit der WebAudio-API synthetisiert.

## Spielen

**Boss-Anleitung:** siehe [BOSS-ANLEITUNG.md](BOSS-ANLEITUNG.md).

**Veröffentlichen auf Steam / itch.io:** siehe [PUBLISHING.md](PUBLISHING.md) – `npm run package` baut die HTML5-Version für itch.io
sowie Desktop-Versionen für Windows, Linux/Steam Deck und macOS. Fertige Store-Grafiken liegen in `store/`.

- **Am einfachsten:** `lumi.html` doppelt anklicken. Das ist eine einzige Datei, sie läuft offline in jedem modernen Browser.
- Alternativ `index.html` (lädt `game.js` aus demselben Ordner).

## Story

Hoch über dem Wolkenmeer schweben die Inseln von **Lumeria**. Graf Nebelmaul hat das *Morgenlicht*, den Kristall auf dem
alten Leuchtturm, in sieben Splitter zerschlagen und jedem seiner Nebelfürsten einen gegeben. Den Kern behält er selbst.
Aus dem letzten Funken erwacht **Lumi**, ein kleiner Laternengeist. Die Stimme der Leuchtturmwärterin **Elva** führt Lumi durch acht Reiche. Mit ihrem alten Luftschiff **Leuchtfeder**,
dessen Laterne nur mit **Mondsplittern** leuchtet, reist Lumi von Reich zu Reich.

**Cutscenes:** Jede Textbox läuft zusammen mit einer Szene im Spiel, mit Kinobalken, Kamerafahrten und Effekten:
- **Intro:** Rundflug über Lumeria. Graf Nebelmaul zerschlägt das Morgenlicht in sieben Splitter, die davonfliegen. Der Nebel steigt und die Welt wird grau. Ein Funke fliegt aus dem Leuchtturm, und Lumi erwacht.
- **Ankunft in jedem Reich:** Rundflug über das neue Reich, Elva als tanzendes Licht im Wind, Blick auf das Nebeltor und auf die Leuchtfeder.
- **Nach jedem Boss:** Lumi mit dem schwebenden Splitter, dann eine Kranfahrt, während die Welt wieder aufblüht.
- **Ende:** Der Kern fliegt in den Leuchtturm, das Leuchtfeuer flammt auf, und Nebelmaul verweht als Morgendunst.
- **Gespräche** mit den Glimmlingen als Zwei-Personen-Einstellung, dazu ein kurzer Kino-Auftritt jedes Bosses.

Die **Leuchtfeder** ist ein richtiges Luftschiff: Bootsrumpf mit hochgezogenem Bug, Holzdeck, goldene Reling, leuchtende Bullaugen, Kajüte mit Schornstein, Federflügel, Ballon mit Spanten und Leitwerk, Propeller, Ruder, Laternenmast und eine leuchtende Feder als Galionsfigur.

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

Jeder Boss hat ein eigenes Modell, eigene Angriffe und eine eigene Schwachstelle: eine abtauchende Knollen-Pflanze, einen Kristall-Stier, ein Bomben-Luftschiff, einen Magma-Golem, einen Eis-Kreisel auf glatter Arena, einen Sandwurm, eine Riesenkrake und den dreiphasigen Grafen mit Doppelgängern.

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
| Mittel (Standard auf Handys) | bis 1,5× | 1024er-Schatten, ohne Kantenglättung und Punktlicht |
| Hoch (Standard auf dem PC) | bis 1,5× | **Next-Gen-Renderer** (siehe unten), animiertes 3D-Gras, 2048er-Schatten |
| Ultra | **bis 3840×2160 (4K)**, auf kleineren Bildschirmen als Supersampling | Next-Gen + **Ambient Occlusion (GTAO)**, mehr als doppelt so dichtes Gras, 4096er-Schatten, mehr Deko und Partikel, weitere Sicht |

**Next-Gen-Renderer (nur PC-Stufen Hoch und Ultra)**, die Handy-Stufen behalten den klassischen Toon-Look:
- **PBR-Materialien** (physikalisch basiert) mit Rauheit und Metall je Oberfläche: Eis und Kristalle glänzen, Metall spiegelt, Erde und Stein bleiben matt.
- **Normal-Maps**, die beim Start aus den gemalten Texturen berechnet werden: Fugen, Risse, Maserung und Pflastersteine bekommen echte Tiefe im Licht.
- **Image Based Lighting:** Der Himmel jeder Welt wird in eine Umgebungskarte gerendert. Daraus kommen weiches Rundum-Licht und Spiegelungen.
- **Filmisches Tone-Mapping** (HDR) und **Farbkorrektur** mit Kontrast, Sättigung, Split-Toning, Vignette und dezenter chromatischer Aberration.
- **Lichtstrahlen (God Rays)**, wenn man Richtung Sonne schaut, und HDR-Bloom auf allem, was leuchtet.
- **Prozedurale Schichtwolken** am Himmel, die langsam ziehen, in der passenden Farbe jeder Welt.
- **Animiertes 3D-Gras** auf allen Wiesen: Hunderttausende Halme mit Wind, Lumi drückt sie beim Durchlaufen zur Seite. In der Ferne blenden sie weich aus.
- **Feinere Geometrie:** Runde Formen werden doppelt so fein unterteilt (glatte Silhouetten), dünnere Konturlinien, weichere Schatten mit größerer Reichweite.

**Performance:** Unbewegliche Teile werden beim Laden pro Material zu großen Meshes verschmolzen (Static Batching in 60-m-Kacheln),
Funken per Instancing gezeichnet und Figuren intern zusammengefasst. Das Bild bleibt dabei identisch, aber ein Reich braucht nur noch rund
330 statt über 1000 Draw Calls. Auf dem PC schweben die Hintergrund-Inseln weiter und werfen Schatten, auf dem Handy sind sie eingefroren.
Dazu kommt eine **dynamische Auflösung**: Fällt die Bildrate unter etwa 50 FPS, sinkt die Renderauflösung schrittweise (bis 55 %) und steigt bei
Luft wieder an. **F3** (oder das Menü) blendet eine FPS-Anzeige mit aktueller Auflösung ein.
Alle Partikel (Schnee, Blasen, Funkeln, Staub) werden gebündelt als Punktwolken gezeichnet – wenige Draw Calls statt einem pro Partikel.
In heißen Schleifen wird kein Speicher mehr pro Bild erzeugt (verhindert Ruckler durch Speicherbereinigung).
**Handy-Stufen** verzichten zusätzlich auf Kantenglättung und Lumis Punktlicht, nutzen 1024er-Schatten ohne Weichzeichnung und weniger Umgebungspartikel.

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

**Speichern:** automatisch, ohne Speicherpunkte. Das Spiel speichert bei jedem Mondsplitter, Schlüssel, Boss, jeder Reise, alle 15 Sekunden und beim Schließen oder Minimieren des Fensters. Eine kleine Anzeige „💾 Gespeichert“ bestätigt das. Gespeichert wird im Browser (`localStorage`) bzw. im Profil der Desktop-App. „Fortsetzen“ im Titelmenü führt zurück ins zuletzt besuchte Reich.

**3 Speicherplätze:** Unter *Spielstände* im Titelmenü siehst du jeden Platz mit Reich, Mondsplittern, Kristallen und Speicherzeit. Jeder Platz lässt sich spielen, auf einen anderen Platz kopieren oder löschen (mit Rückfrage). *Neues Abenteuer* fragt nach dem Platz, *Fortsetzen* spielt den zuletzt benutzten. Ältere Spielstände landen automatisch auf Platz 1.

**Speicherstand als Datei:** Unter *Speicherstand* im Haupt- und Pausenmenü lässt sich der Fortschritt als `.lumi-save`-Datei exportieren
(Desktop-App: Speichern-Dialog, Standardordner *Dokumente*; Browser: Download) und wieder laden, z. B. als Sicherung oder für ein anderes Gerät.
Beim Laden wird die Datei geprüft, und vor dem Überschreiben fragt das Spiel nach. Zum Testen: `lumi.html?w=4` startet direkt im Reich 5, `lumi.html?w=4&l=0` in dessen erster Herausforderung.

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
| `src/boss.js` | 8 eigenständige Bosse (gemeinsame Basis + eigene Angriffe und Schwachstellen) |
| `src/i18n/` | alle Texte in 6 Sprachen |
| `src/models.js` | alle 3D-Modelle |
| `src/textures.js` | prozedurale Texturen |
| `src/audio.js` | Synthesizer, Soundeffekte und komponierte Musikstücke |
| `src/ui.js`, `src/style.css` | HUD, Menüs, Dialogboxen |

Engine: [three.js](https://threejs.org) (MIT). Gebündelt mit esbuild.
