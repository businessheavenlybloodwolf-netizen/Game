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

Jede Welt ist ein frei begehbares **Reich**, eine **große, zusammenhängende Landschaft**, keine schwebenden Inseln mehr:
- Das Gelände hat Hügel und Bergrücken entlang der Wege, und ein Gebirgsring am Horizont bildet die Weltgrenze. Jede Welt hat ihren eigenen Boden:

  | Welt | Boden |
  |---|---|
  | Blütenwiesen | Wiese mit 3D-Gras |
  | Kristallschlucht | Kristall |
  | Wolkenwerft | Wolkenhügel |
  | Glutvulkan | Basalt |
  | Frostgipfel | Schnee |
  | Sonnenruinen | Sanddünen |
  | Korallentiefe | Meeresboden |
  | Nebelreich | Pflaster |

- Wälder, Palmen, Tannen, Korallen und Steine sind über die ganze Landschaft verteilt. Man kann überall hinlaufen, zu steile Hänge bremsen.
- **Umgebung je Welt** mit jeweils eigener Deko, großen Wahrzeichen als Orientierungspunkte und schwebenden Partikeln:

  | Welt | Deko | Wahrzeichen | Partikel |
  |---|---|---|---|
  | Blütenwiesen | Büsche mit Beeren, Blumenwiesen, Pilze, Zäune | Riesenbaum, Windmühle mit drehenden Flügeln | Glühwürmchen |
  | Kristallschlucht | leuchtende Pilze, Kristallspitzen | Kristalltürme | Kristallfunken |
  | Wolkenwerft | Wolkenbausche, Zäune | Ballon-Türme, Windmühle | Glitzern |
  | Glutvulkan | rauchende Schlote mit Funkenflug, tote Bäume | Vulkane | Glut |
  | Frostgipfel | Schneehaufen, Eiszapfen | Eisbögen | Schneefall |
  | Sonnenruinen | Kakteen, Ruinensäulen | Pyramiden | Sandstaub |
  | Korallentiefe | Seetang, Muscheln, leuchtende Pilze | Schiffswracks | Blasen |
  | Nebelreich | Laternen, Zahnräder, tote Bäume | Uhrtürme | Nebelschwaden |
- Alle Plattformen stehen als **Felssäulen und Tafelberge** auf dem Boden. Wer von einem Weg fällt, landet einfach in der Landschaft.
- Das Reich selbst hat **keine Löcher**: Es ist durchgehend begehbar.
- In der Mitte liegt eine **Hub-Insel** mit dem Luftschiff **Leuchtfeder**, der Händlerin, einem Glimmling, der sein Kuscheltier vermisst,
  dem **Nebeltor** zum Boss und einem goldenen **Bonustor**.
- Vom Hub führen **5 lange Inselketten** in alle Richtungen, jede mit zwei Arenen, und sie enden an einem **Gipfel**.
- **Röhren zu den Herausforderungen:** An der ersten Arena jeder Inselkette steht eine **Röhre** in der Farbe der Welt, mit Namen und gefundenen Splittern.
  Lumi hüpft auf den Rand, sinkt hinein und landet im **Herausforderungs-Level** (Sublevel). Nach dem Ziel hüpft Lumi oben wieder aus der Röhre heraus.
  Das Bonus-Level erreicht man über eine **goldene Röhre**, die sich erst mit dem Geheimschlüssel öffnet.
- **Sublevel:** Jede Herausforderung liegt in einem eigenen **Flusstal**. Darin fließt je nach Welt Wasser, Lava, Treibsand, Wolken oder Nebel.
  Der Weg führt über natürlich geformte Felsen und Hügel, die aus dem Fluss ragen, statt über kantige Plattformen.
  Neue Herausforderungs-Arten sind **Trittsteine** im Zickzack und **Hügelsprünge** auf und ab, dazu Fahrstühle, Bröckelfelsen, Aufwinde und mehr.
  Wer in den Fluss fällt, startet am letzten Checkpoint neu. Ziel, 2 Geheimnisse, alle Funken und die Zeitmedaille gibt es wie gewohnt.
- **Quests:** In jedem Reich geben 6 Glimmlinge Aufträge (gelbes **!** über dem Kopf). Pro Reich sind es 6 von 8 Quest-Arten, jedes Reich in anderer Mischung:

| Quest | Aufgabe |
|---|---|
| Glühbeeren-Ernte | 6 Glühbeeren auf den Inseln einsammeln und zurückbringen |
| Eilige Post | ein Paket zu einem anderen Glimmling tragen (bei Absturz fällt es zurück) |
| Wettlauf | in begrenzter Zeit die goldene Flagge erreichen |
| Funkenwusel-Jagd | einen flinken Funkenwusel dreimal fangen (am Rand in die Enge treiben) |
| Nebel vertreiben | 5 Nebelwesen in einem Nebelnest besiegen |
| Laternenfest | 4 Laternen anzünden, bevor die ersten wieder ausgehen |
| Verirrte Kleine | 3 kleine Glimmlinge finden. Sie folgen Lumi und werden heimgebracht |
| Aussichtspunkt | das Fernrohr auf einer hohen Wolkenplattform erreichen |

  Eine Quest ist immer aktiv. Oben rechts steht das Ziel, und eine **goldene Lichtsäule** zeigt in der Welt, wohin es geht.
  Das **Quest-Log** im Pausenmenü listet alle Quests des Reichs. Belohnung: je ein Mondsplitter und 25 Funken.

**Mondsplitter pro Reich: 53.** Insgesamt sind es **424**.

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
| 6 Quests | 6 |
| 5 Herausforderungen in der Welt (Ziel, 2 Geheimnisse, alle Funken) | 20 |
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

Das Spiel ist eine reine **PC-Version** (Tastatur, Maus, Gamepad). Alle Stufen nutzen den runden Next-Gen-Look, Niedrig und Mittel sind für schwächere PCs.

| Stufe | Auflösung | Extras |
|---|---|---|
| Niedrig | 1× | 1024er-Schatten, wenig Gras, Hintergrund-Inseln eingefroren |
| Mittel | bis 1,25× | 2048er-Schatten, Gras, Lichtstrahlen |
| Hoch (Standard) | bis 1,5× | animiertes 3D-Gras, 2048er-Schatten |
| Ultra | **bis 3840×2160 (4K)**, auf kleineren Bildschirmen als Supersampling | + **Ambient Occlusion (GTAO)**, mehr als doppelt so dichtes Gras, 4096er-Schatten, mehr Deko und Partikel, weitere Sicht |

**Next-Gen-Renderer (alle Stufen):**
- **PBR-Materialien** (physikalisch basiert) mit Rauheit und Metall je Oberfläche: Eis und Kristalle glänzen, Metall spiegelt, Erde und Stein bleiben matt.
- **Normal-Maps**, die beim Start aus den gemalten Texturen berechnet werden: Fugen, Risse, Maserung und Pflastersteine bekommen echte Tiefe im Licht.
- **Image Based Lighting:** Der Himmel jeder Welt wird in eine Umgebungskarte gerendert. Daraus kommen weiches Rundum-Licht und Spiegelungen.
- **Filmisches Tone-Mapping** (HDR) und **Farbkorrektur** mit Kontrast, Sättigung, Split-Toning, Vignette und dezenter chromatischer Aberration.
- **Lichtstrahlen (God Rays)**, wenn man Richtung Sonne schaut, und HDR-Bloom auf allem, was leuchtet.
- **Prozedurale Schichtwolken** am Himmel, die langsam ziehen, in der passenden Farbe jeder Welt.
- **Animiertes 3D-Gras** auf allen Wiesen: Hunderttausende Halme mit Wind, Lumi drückt sie beim Durchlaufen zur Seite.
- **Nichts Kantiges mehr:**
  - Plattformen mit abgerundeter Oberkante, über die das Gras weich hinüberläuft.
  - Bauchige, organisch verbeulte Felsen unter den schwebenden Inseln statt Kegeln und Pyramiden.
  - Abgerundete Kisten, Brücken, Schilder und Blöcke, runde Kiesel statt Vielecke.
  - Alle runden Formen sind fein unterteilt. Nur Kristalle behalten bewusst ihre Facetten.

**Performance:** Unbewegliche Teile werden beim Laden pro Material zu großen Meshes verschmolzen (Static Batching in 60-m-Kacheln),
Funken per Instancing gezeichnet und Figuren intern zusammengefasst. Das Bild bleibt dabei identisch, aber ein Reich braucht nur noch rund
330 statt über 1000 Draw Calls. Ab „Mittel“ schweben die Hintergrund-Inseln weiter und werfen Schatten, auf „Niedrig“ sind sie eingefroren.
Dazu kommt eine **dynamische Auflösung**: Fällt die Bildrate unter etwa 50 FPS, sinkt die Renderauflösung schrittweise (bis 55 %) und steigt bei
Luft wieder an. **F3** (oder das Menü) blendet eine FPS-Anzeige mit aktueller Auflösung ein.
Alle Partikel (Schnee, Blasen, Funkeln, Staub) werden gebündelt als Punktwolken gezeichnet – wenige Draw Calls statt einem pro Partikel.
In heißen Schleifen wird kein Speicher mehr pro Bild erzeugt (verhindert Ruckler durch Speicherbereinigung).

## Qualitätssicherung

Der Generator notiert jeden Sprung des Levels, auch die Wege zu allen Geheimnissen. Ein Test-Bot springt jeden einzelnen davon mit
der echten Spielphysik nach (`__lumi.debugTestLevel(welt, level)` in der Browser-Konsole). Aktueller Stand: **alle 2259 Sprünge sind schaffbar**: 572 in den 8 Reichen und 1687 in den 40 Herausforderungs-Sublevels, 8 Bonus- und 8 Boss-Leveln. Ein zweiter Bot nimmt alle 48 Quests an und schließt sie ab.

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
| `src/quests.js` | Quest-System: 8 Quest-Arten, Auftraggeber, Ziele, Quest-Log |
| `src/terrain.js` | Landschaft: Höhenfeld, Seen, Gebirgsring, triplanare Bodentexturen |
| `src/env.js` | Umgebung je Welt: Deko-Sets und Wahrzeichen |
| `src/shapes.js` | runde Grundformen (Plattformen, Felsen, abgerundete Quader) |
| `src/cutscene.js` | Cutscene-Regie zu allen Textboxen |
| `src/boss.js` | 8 eigenständige Bosse (gemeinsame Basis + eigene Angriffe und Schwachstellen) |
| `src/i18n/` | alle Texte in 6 Sprachen |
| `src/models.js` | alle 3D-Modelle |
| `src/textures.js` | prozedurale Texturen |
| `src/audio.js` | Synthesizer, Soundeffekte und komponierte Musikstücke |
| `src/ui.js`, `src/style.css` | HUD, Menüs, Dialogboxen |

Engine: [three.js](https://threejs.org) (MIT). Gebündelt mit esbuild.
