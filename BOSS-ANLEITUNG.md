# LUMI – So besiegst du jeden Boss

Jeder der acht Bosse kämpft anders: eigene Gestalt, eigene Angriffe, eigene Schwachstelle.
Alle Zahlen in dieser Anleitung stammen direkt aus dem Spielcode (`src/boss.js`).

---

## 1. Zum Boss kommen

- Jeder Boss wartet hinter dem **Nebeltor** (lila Ring) auf der Hub-Insel seines Reichs.
- Das Tor öffnet sich erst mit genug **Mondsplittern aus diesem Reich**:

| Reich | Boss | Gestalt | Mondsplitter fürs Nebeltor | Treffer nötig |
|---|---|---|---|---|
| 1 Blütenwiesen | Moderich der Welke | Knollen-Pflanze | 5 | 3 |
| 2 Kristallschlucht | Splitterzahn | Kristall-Stier | 6 | 3 |
| 3 Wolkenwerft | Kapitän Dunstbart | Luftschiff | 7 | 4 |
| 4 Glutvulkan | Schwelgrimm | Magma-Golem | 8 | 4 |
| 5 Frostgipfel | Frierich der Eisige | Eis-Kreisel | 9 | 4 |
| 6 Sonnenruinen | Der Sandflüsterer | Sandwurm | 10 | 5 |
| 7 Korallentiefe | Tiefenschlund | Riesenkrake | 11 | 5 |
| 8 Nebelreich | Graf Nebelmaul | Nebelgraf (3 Phasen) | 12 | 6 |

Im ⭐-Modus hat jeder Boss einen Treffer mehr und ist 15 % schneller.

- Vor dem Tor auf **Enter / T** (Gamepad: **Y**, Handy: **!**) drücken.
- Hinter dem Tor folgen ein paar Sprünge zur runden **Arena**. Die Laterne am Eingang ist dein Checkpoint.
  Neben ihr verrät ein Hinweis, worauf es bei diesem Boss ankommt.
- Der Kampf beginnt, sobald du ein Stück in die Arena läufst.

---

## 2. Was für alle Bosse gilt

- **Du hast 3 Herzen.** Sind alle weg, startest du an der Arena-Laterne neu und verlierst 10 Funken.
  **Der Boss behält seinen Schaden**, du musst also nicht von vorne anfangen.
- **Rote Markierungen am Boden** (Ringe, Linien, Streifen) zeigen immer genau, wo gleich etwas einschlägt.
  Wer mit dem ganzen Körper draußen steht, bleibt heil.
- **Ringwellen** (lila, orange oder hellblau) laufen über den Boden: **drüberspringen**.
- Nach jedem Treffer wird der Boss **schneller und aggressiver**. In den Tabellen unten steht eine Spalte pro Runde.
- **Helfer** (bei den meisten Bossen ab Runde 2): Neblinge und Flatterlinge mit Draufspringen oder Drehattacke erledigen,
  **Dornlinge nur mit der Drehattacke**.
- Die **Arena hat keinen Zaun**. Wer beim Ausweichen hinunterfällt, verliert ein Herz.
- **Steuerung zur Erinnerung:** Springen (Leertaste/A, zweimal = Doppelsprung), **Drehattacke** (F/J/Linksklick, X/B),
  **Stampfen** in der Luft (Shift/C/Rechtsklick, LB/RB).
- **Debug-Ansicht F4:** zeigt alle Hitboxen. Die Farben bedeuten:
  - **rot:** Schaden
  - **grün:** draufspringen
  - **gelb:** stampfen
  - **türkis:** Drehattacke
  - **blau:** fester Körper, auf dem man stehen kann

  Schadenszonen sind etwas kleiner als das Modell, Trefferzonen etwas größer. Knappe Manöver werden also belohnt.
- Nach jedem Sieg gibt es einen **großen Mondsplitter (zählt 3)** und den **Kristall des Morgenlichts**.

---

## 3. Die Bosse im Einzelnen

### Reich 1 – Moderich der Welke (Blütenwiesen)

Eine bissige Knollen-Pflanze, die zwischen **sechs Blumenlöchern** hin- und hertaucht.

**Ablauf einer Runde**
1. Moderich taucht ab. Am Loch, aus dem er gleich kommt, **bebt die Erde** (brauner Ring, Erdbrocken).
   Er wählt meist eines der beiden Löcher, die **dir am nächsten** sind. Stell dich also nicht direkt daneben.
2. Er schießt hervor (Berühren kostet ein Herz) und **spuckt Samen** in Bögen nach dir. Dabei zielt er etwas vor dich.
   Ab Runde 2 kommt bei jedem zweiten Schuss ein **Fächer** aus drei Samen dazu, außerdem ein Nebling.
3. Danach ist er erschöpft und **welkt**: Er sackt zusammen und schwankt.
   **Jetzt auf seinen Kopf springen!** Danach taucht er ab, und alles beginnt von vorn.

| Runde | 1 | 2 | 3 |
|---|---|---|---|
| Vorwarnung am Loch | 1,2 s | 1,1 s | 0,9 s |
| Samen pro Runde | 3 | 4 | 5 |
| Abstand der Samen | 1,1 s | 0,95 s | 0,8 s |
| Zeit zum Draufspringen (welk) | 3,0 s | 2,65 s | 2,3 s |

**Tipp:** Stell dich mittig zwischen zwei Löcher. Sobald er spuckt, lauf seitlich weg.
Beim Welken genügt ein einfacher Sprung, er ist dann nur noch knapp 1,5 m hoch.

---

### Reich 2 – Splitterzahn (Kristallschlucht)

Ein vierbeiniger **Kristall-Stier**. In der Arena stehen **sechs Kristallsäulen** in einem Ring.

**Ablauf**
1. **Zielen:** Er scharrt, und eine **rote Linie** zeigt seine Laufbahn. In den ersten 70 % der Zeit folgt die Linie dir,
   danach ist die Richtung **festgelegt**.
2. **Ansturm:** Er rennt die Linie entlang. Wer im Weg steht, nimmt Schaden.
3. Trifft er eine **Kristallsäule**, zerschellt sie, und er **steckt benommen fest**. **Jetzt auf seinen Rücken springen!**
   Rennt er nur bis zum Rand, rutscht er aus und löst eine kleine Welle aus (drüberspringen). Dann zielt er erneut.
4. Sind alle sechs Säulen zerstört, **wachsen sie nach**.

| Runde | 1 | 2 | 3 |
|---|---|---|---|
| Zielzeit | 1,2 s | 1,1 s | 1,0 s |
| Ansturm-Tempo | 15 m/s | 16,7 m/s | 18,4 m/s |
| Zeit zum Draufspringen (steckt fest) | 3,0 s | 2,7 s | 2,4 s |
| Helfer beim Säulentreffer | – | Dornling | Dornling |

**Tipp:** Stell dich **direkt vor eine Säule**, sodass er dich und die Säule in einer Linie sieht.
Sobald die Linie dir nicht mehr folgt, **spring zur Seite**. Er donnert in die Säule. Dann ein Doppelsprung auf seinen Rücken.

---

### Reich 3 – Kapitän Dunstbart (Wolkenwerft)

Dunstbart **kreist mit seinem Luftschiff** außerhalb der Arena und ist mit Sprüngen **nicht erreichbar**.
Du besiegst ihn mit **seinen eigenen Bomben**.

**Ablauf**
1. **Salve:** Die Kanone feuert **Zünderbomben**. Sie fliegen im Bogen zu dir und rechnen deine Laufrichtung voraus.
   Ab Runde 3 fliegen zur ersten Bombe noch zwei weitere links und rechts.
2. Gelandete Bomben **blinken** und haben einen roten Ring (2,2 m Explosionsradius). Nach ein paar Sekunden gehen sie hoch.
3. **Lauf zu einer blinkenden Bombe und mach die Drehattacke!** Die Bombe fliegt leuchtend zurück zum Schiff und
   explodiert dort. Das ist ein **Treffer**.
4. Danach lädt er 3,2 s nach. Ab Runde 2 lässt er dabei einen Flatterling los.

| Runde | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| Bomben pro Salve | 3 | 4 | 5 (+2 seitlich) | 6 (+2 seitlich) |
| Abstand der Bomben | 1,25 s | 1,1 s | 0,95 s | 0,8 s |
| Zündzeit | 2,6 s | 2,4 s | 2,2 s | 2,0 s |

**Tipp:** Du musst nicht jede Bombe zurückschlagen. Lauf erst aus allen roten Ringen heraus und warte, bis die Salve vorbei ist.
Nimm dir dann eine Bombe, die **gerade erst gelandet** ist. Die Drehattacke trifft bis etwa 2 m Abstand.

---

### Reich 4 – Schwelgrimm (Glutvulkan)

Ein riesiger **Magma-Golem** in der Mitte. Sein Körper ist fest und glühend heiß, also nicht anfassen.
Seine Schwachstellen sind die **zwei schwebenden Fäuste**.

**Angriffe**
- **Faustschlag:** Eine Faust steigt über dich. Ein **oranger Ring** zeigt die Einschlagstelle, dann kracht sie herunter.
  Danach **steckt sie im Boden fest**.
- **Feuerring:** Bei jeder dritten Aktion stampft er, und ein **oranger Ring** rast über die ganze Arena: **drüberspringen**.
- **Lavaregen** (ab Runde 2): Zusammen mit dem Feuerring fallen drei Lavabrocken in deiner Nähe vom Himmel (rote Ringe).
- Ab **Runde 3** schlagen **beide Fäuste** abwechselnd zu.

**So triffst du ihn:** Spring auf die **feststeckende Faust** und **stampfe** (in der Luft Stampfen drücken).
Draufspringen allein reicht nicht.

| Runde | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| Vorwarnung (Ring) | 1,05 s | 0,95 s | 0,86 s | 0,77 s |
| Faust steckt fest | 3,0 s | 2,75 s | 2,5 s | 2,25 s |
| Lavaregen | – | ja | ja | ja |
| Fäuste im Einsatz | 1 | 1 | 2 | 2 |

**Tipp:** Lauf aus dem Ring und warte den Einschlag ab. Am Einschlag entsteht eine kleine Welle, also kurz hüpfen.
Dann **Sprung, Doppelsprung, Stampfen** auf die Faust. Sie ist etwa 2,2 m hoch, der Doppelsprung reicht locker.

---

### Reich 5 – Frierich der Eisige (Frostgipfel)

Ein stacheliger **Eis-Kreisel**. Zu Kampfbeginn **friert die ganze Arena zu**, und der Boden wird **rutschig**!

**Ablauf**
1. **Eislauf:** Frierich gleitet in Achterschleifen durch die Arena und greift abwechselnd an:
   - **Schneeball:** Er rollt auf dich zu und wird dabei größer. Ausweichen oder drüberspringen.
   - **Eisstacheln:** Hellblaue Ringe erscheinen unter dir und um dich herum, kurz danach schießen Stacheln hoch.
2. **Wirbel:** Er dreht sich 2,2 s lang und verfolgt dich. Weglaufen!
3. Dann **rutscht er aus** und liegt flach auf dem Eis. **Jetzt draufspringen!**

| Runde | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| Angriffe vor dem Wirbel | 3 | 4 | 5 | 6 |
| Eisstacheln pro Angriff | 4 | 5 | 6 | 7 |
| Vorwarnung Stacheln | 0,82 s | 0,77 s | 0,71 s | 0,66 s |
| Zeit zum Draufspringen (liegt) | 3,0 s | 2,7 s | 2,4 s | 2,1 s |

**Tipp:** Auf Eis bremst Lumi schlecht. Wechsle **früh** die Richtung und mach lieber kleine Sprünge.
Nach dem Sieg ist der Boden wieder normal.

---

### Reich 6 – Der Sandflüsterer (Sonnenruinen)

Ein gewaltiger **Sandwurm**. Kopf und Körper sind gefährlich. Die Schwachstelle ist das **leuchtende Juwel an seinem Schwanz**.

**Ablauf**
1. **Jagd:** Ein **wandernder Sandhügel** folgt dir unter der Oberfläche. Ab Runde 2 spuckt er dabei Sandbälle.
2. **Vorwarnung:** Der Hügel bleibt stehen, ein **brauner Ring** erscheint, und der Boden bebt.
3. **Ausbruch:** Der Wurm schießt als Säule aus dem Sand (die Säule kostet ein Herz). Er schwingt sich im Bogen etwa 9 m weiter und taucht wieder ein.
4. **Schwanz:** An einer anderen Stelle, mindestens 4 m von dir entfernt, taucht der **Schwanz mit dem goldenen Juwel** auf (gelber Ring).
   **Drehattacke, Stampfen oder Draufspringen**, alles zählt!

| Runde | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Jagd-Tempo | 6,0 m/s | 6,6 m/s | 7,2 m/s | 7,8 m/s | 8,4 m/s |
| Jagddauer | 3,2 s | 3,0 s | 2,8 s | 2,6 s | 2,4 s |
| Vorwarnung | 0,66 s | 0,61 s | 0,56 s | 0,51 s | 0,5 s |
| Schwanz sichtbar | 3,6 s | 3,35 s | 3,1 s | 2,85 s | 2,6 s |

Lumi läuft 8,6 m/s, ist also immer etwas schneller als der Hügel.

**Tipp:** **Bleib immer in Bewegung**, am besten im großen Kreis. Sobald der braune Ring erscheint, lauf einfach weiter,
denn der Hügel bleibt dann stehen. Wenn der Wurm abtaucht, such den **gelben Ring** und renn hin.

---

### Reich 7 – Tiefenschlund (Korallentiefe)

Eine **Riesenkrake**, die hoch über der Arena schwebt, viel zu hoch für einen normalen Sprung.

**Ablauf**
1. **Tintenkugeln:** Sie wirft Kugeln in Bögen nach dir (rote Ringe).
2. **Tentakel-Schläge:** **Rote Streifen** am Boden zeigen, wo ein Tentakel quer über die Arena niedersaust.
   Der erste zielt genau auf dich, die weiteren etwas daneben. Spring seitlich aus dem Streifen.
   Liegende Tentakel nicht berühren.
3. **Erschöpft:** Die Krake sinkt tiefer und schwankt. Neben dir entstehen **zwei Blasenströme**.
   **Stell dich hinein, lass dich hochtragen und spring der Krake auf den Kopf!**
   Die Schwerkraft ist hier geringer, du kannst in der Luft gut lenken.

| Runde | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Tintenkugeln | 3 | 4 | 5 | 6 | 7 |
| Tentakel-Schläge | 3 | 4 | 5 | 5 | 5 |
| Vorwarnung Tentakel | 0,74 s | 0,67 s | 0,61 s | 0,54 s | 0,48 s |
| Zeit zum Hochfliegen | 7,0 s | 6,6 s | 6,2 s | 5,8 s | 5,4 s |

**Tipp:** Lass dich im Blasenstrom ganz nach oben treiben (bis etwa 14 m). Dann **lenk zur Krake hin** und lass dich auf sie fallen.
Die Blasenströme stehen 4,4 m von der Mitte entfernt, ein kurzer Schwebeflug genügt.

---

### Reich 8 – Graf Nebelmaul (Nebelreich, Finale)

Der Herr des Nebels. Sein Kampf hat **drei Phasen** und vereint vieles, was du vorher gelernt hast.

**Grundmuster (alle Phasen)**
1. **Schweben und Werfen:** Er kreist hoch oben und wirft Nebelkugeln (rote Ringe).
2. **Schatten:** Ein dunkler Kreis folgt dir, dann **stürzt er herab**. Raus aus dem Schatten!
3. **Schockwelle:** Ein lila Ring rast nach außen: **drüberspringen**.
4. **Benommen:** Sein Kristall flackert. **Sprung und Doppelsprung auf den Kopf!**

**Phase 1** (Treffer 1–2): nur das Grundmuster.

**Phase 2** (Treffer 3–4): **Zwei Nebel-Doppelgänger** kreisen mit ihm und werfen mit.
- Die Doppelgänger haben einen **grauen** Kristall, nur das **Original leuchtet**.
- Beim Absturz landen die Doppelgänger links und rechts von dir, zerplatzen und senden eigene **Wellen** aus.
  Danach ist nur noch das Original da, und es ist benommen.

**Phase 3** (Treffer 5–6): **Sturm**.
- Zwischen den Würfen regnen **vier Nebelkugeln** senkrecht vom Himmel.
- Beim Aufprall kommen **zwei Schockwellen** kurz nacheinander. Zweimal springen!

| Runde | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Würfe vor dem Absturz | 3 | 4 | 5 | 6 | 6 | 6 |
| Schatten-Vorwarnung | 1,2 s | 1,06 s | 0,94 s | 0,82 s | 0,7 s | 0,65 s |
| Benommen | 3,3 s | 3,0 s | 2,7 s | 2,4 s | 2,1 s | 2,0 s |
| Helfer (Neblinge) | – | 1 | 2 | 3 | 3 | 3 |

Nach dem letzten Treffer schrumpft der Graf zusammen, und der **Kern des Morgenlichts** erscheint in der Arenamitte.
Sammle ihn ein, dann beginnt das Finale.

---

## 4. Kurzfassung

| Boss | Wie triffst du ihn? |
|---|---|
| Moderich | Wenn er **welkt**: auf den Kopf springen |
| Splitterzahn | Vor eine **Kristallsäule** locken, dann auf den Rücken springen |
| Dunstbart | Blinkende **Bombe mit der Drehattacke** zurückschlagen |
| Schwelgrimm | Auf die **feststeckende Faust stampfen** |
| Frierich | Nach dem Wirbel **ausrutschen lassen**, dann draufspringen |
| Sandflüsterer | **Schwanz-Juwel**: drehen, stampfen oder draufspringen |
| Tiefenschlund | **Blasenstrom** hoch, dann auf den Kopf springen |
| Graf Nebelmaul | Nach dem Absturz auf den **leuchtenden** Kristall springen |
