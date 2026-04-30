const CONTINENT_GROUPS = {
  "South America": ["Brazilian","Argentinian","Colombian","Venezuelan","Uruguayan","Paraguayan","Bolivian","Peruvian","Chilean","Ecuadorian"],
  "North America": ["American","Canadian","Mexican"],
  "Asia":          ["Japanese","Chinese","South Korean","Thai","Malaysian","Indonesian","Vietnamese","Indian","Singaporean"],
  "Africa":        ["South African","Zimbabwean","Namibian","Moroccan","Egyptian","Nigerian","Kenyan"],
  "Oceania":       ["Australian","New Zealander"],
};

const EUROPEAN_NATIONALITIES = new Set([
  "German","French","British","Dutch","Belgian","Spanish","Italian","Monegasque",
  "Austrian","Finnish","Swedish","Danish","Norwegian","Swiss","Portuguese","Irish",
  "Polish","Russian","Czech","Hungarian","Romanian","Luxembourg","Estonian",
  "Latvian","Lithuanian","Slovenian","Croatian","Serbian","Slovak","Bulgarian",
  "Ukrainian","Belarusian","Moldovan"
]);

const EUROPEAN_NEIGHBOURS = {
  "German":       ["French","Belgian","Dutch","Polish","Czech","Austrian","Swiss","Danish","Luxembourg"],
  "French":       ["German","Belgian","Spanish","Italian","Swiss","Luxembourg","Monegasque"],
  "British":      ["Irish","Belgian","Dutch","French"],
  "Dutch":        ["German","Belgian","French","British"],
  "Belgian":      ["French","Dutch","German","British","Luxembourg"],
  "Spanish":      ["French","Portuguese","Monegasque"],
  "Italian":      ["French","Swiss","Austrian","Slovenian","Monegasque"],
  "Monegasque":   ["French","Italian","Spanish"],
  "Austrian":     ["German","Swiss","Italian","Czech","Slovak","Hungarian","Slovenian"],
  "Finnish":      ["Swedish","Norwegian","Russian"],
  "Swedish":      ["Finnish","Norwegian","Danish"],
  "Danish":       ["Swedish","Norwegian","German"],
  "Norwegian":    ["Swedish","Finnish","Danish"],
  "Swiss":        ["German","French","Italian","Austrian"],
  "Portuguese":   ["Spanish"],
  "Irish":        ["British"],
  "Polish":       ["German","Czech","Slovak","Ukrainian","Belarusian","Lithuanian","Russian"],
  "Russian":      ["Finnish","Polish","Ukrainian","Estonian","Latvian","Lithuanian","Norwegian"],
  "Czech":        ["German","Austrian","Polish","Slovak"],
  "Slovak":       ["Czech","Austrian","Polish","Hungarian"],
  "Hungarian":    ["Austrian","Slovak","Romanian","Serbian","Croatian","Slovenian"],
  "Romanian":     ["Hungarian","Bulgarian","Serbian","Moldovan","Ukrainian"],
  "Luxembourg":   ["French","German","Belgian"],
  "Estonian":     ["Finnish","Latvian","Russian"],
  "Latvian":      ["Estonian","Lithuanian","Russian","Belarusian"],
  "Lithuanian":   ["Latvian","Polish","Russian","Belarusian"],
  "Slovenian":    ["Italian","Austrian","Hungarian","Croatian"],
  "Croatian":     ["Slovenian","Hungarian","Serbian","Bosnian"],
  "Serbian":      ["Hungarian","Romanian","Bulgarian","Croatian","Bosnian","Macedonian"],
  "Bulgarian":    ["Romanian","Serbian","Turkish","Macedonian","Greek"],
};

function getNationalityResult(guessNat, targetNat) {
  if (guessNat === targetNat) return 'correct';

  const targetIsEuropean = EUROPEAN_NATIONALITIES.has(targetNat);
  const guessIsEuropean  = EUROPEAN_NATIONALITIES.has(guessNat);

  
  if (targetIsEuropean && guessIsEuropean) {
    const neighboursOfTarget = EUROPEAN_NEIGHBOURS[targetNat] || [];
    const neighboursOfGuess  = EUROPEAN_NEIGHBOURS[guessNat]  || [];
    return (neighboursOfTarget.includes(guessNat) || neighboursOfGuess.includes(targetNat)) ? 'close' : 'wrong';
  }

  
  if (targetIsEuropean !== guessIsEuropean) return 'wrong';

  
  for (const group of Object.values(CONTINENT_GROUPS)) {
    if (group.includes(targetNat) && group.includes(guessNat)) return 'close';
  }

  return 'wrong';
}