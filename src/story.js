// Die Geschichte von Lumi und dem Morgenlicht
export const INTRO = [
  { who: 'Erzählung', text: 'Hoch über dem Wolkenmeer schweben die Inseln von Lumeria. Jeden Morgen schickte das Morgenlicht – ein Kristall auf dem alten Leuchtturm – seine Strahlen über das Land.' },
  { who: 'Erzählung', text: 'Doch in einer sternenlosen Nacht kroch Graf Nebelmaul aus der Tiefe. Mit einem Hieb zerbrach er das Morgenlicht in drei Splitter und verstreute sie über die Inseln. Den leuchtenden Kern behielt er für sich.' },
  { who: 'Erzählung', text: 'Seitdem steigt der Nebel. Die Blüten schließen sich, die Kristalle verstummen und die Luftschiffe bleiben am Boden.' },
  { who: 'Erzählung', text: 'Im erloschenen Leuchtturm glimmt aber noch ein allerletzter Funke … und aus ihm erwacht Lumi, ein kleiner Laternengeist.' },
  { who: 'Lumi', text: 'Wo … wo bin ich? Und warum ist alles so grau? Ich spüre es – die Splitter rufen nach mir!' },
];

export const LEVEL_STORY = [
  {
    before: [
      { who: 'Elva', text: 'Lumi, du bist wach! Ich bin Elva. Dreihundert Jahre habe ich den Leuchtturm gehütet – jetzt bin ich nur noch eine Stimme im Wind.' },
      { who: 'Elva', text: 'Der erste Splitter ist in die Blütenwiesen gefallen. Folge dem Lichtstrahl, sammle Funken und hüte dich vor den Neblingen!' },
    ],
    after: [
      { who: 'Lumi', text: 'Der erste Splitter! Er ist ganz warm – wie ein kleiner Sonnenaufgang.' },
      { who: 'Elva', text: 'Sieh nur, die Blüten öffnen sich wieder! Der zweite Splitter liegt in der Kristallschlucht. Dort ist es dunkel … aber du bist ja eine Laterne.' },
    ],
  },
  {
    before: [
      { who: 'Elva', text: 'Die Kristallschlucht. Früher haben die Kristalle hier gesungen. Vorsicht: Der Nebel hat den Boden mürbe gemacht.' },
    ],
    after: [
      { who: 'Lumi', text: 'Hörst du das? Die Kristalle summen wieder!' },
      { who: 'Elva', text: 'Der dritte Splitter wurde zur Wolkenwerft geweht, wo die Luftschiffe gebaut werden. Lass dich von den Aufwinden tragen!' },
    ],
  },
  {
    before: [
      { who: 'Elva', text: 'Die Wolkenwerft! Die Schiffsbauer haben überall Windmaschinen aufgestellt. Wenn du hineinläufst, tragen sie dich nach oben.' },
    ],
    after: [
      { who: 'Elva', text: 'Alle drei Splitter! Doch ohne seinen Kern wird das Morgenlicht nie wieder leuchten. Graf Nebelmaul hält ihn im Nebelturm gefangen.' },
      { who: 'Lumi', text: 'Dann gehe ich eben in den Nebelturm. Ich hab keine Angst. … Na gut, ein bisschen.' },
    ],
  },
  {
    before: [
      { who: 'Graf Nebelmaul', text: 'Wer wagt es, mit so einer winzigen Funzel meinen Turm zu betreten? Der Nebel gehört mir! MIR ALLEIN!' },
      { who: 'Lumi', text: 'Das Morgenlicht gehört allen. Und ich hole es mir zurück!' },
    ],
    after: [],
  },
];

export const ENDING = [
  { who: 'Lumi', text: 'Der Kern des Morgenlichts! Jetzt ist es wieder ganz!' },
  { who: 'Erzählung', text: 'Lumi brachte den Kern und die drei Splitter zurück zum Leuchtturm. Als die Sonne aufging, flammte das Morgenlicht heller als je zuvor.' },
  { who: 'Erzählung', text: 'Der Nebel sank zurück in die Tiefe – und mit ihm ein ziemlich beschämter Graf Nebelmaul, der seitdem nur noch als harmloser Morgendunst über die Wiesen zieht.' },
  { who: 'Elva', text: 'Danke, Lumi. Ab heute leuchtest du über Lumeria. Und wer weiß – vielleicht wartet hinter dem Wolkenmeer schon das nächste Abenteuer …' },
];
