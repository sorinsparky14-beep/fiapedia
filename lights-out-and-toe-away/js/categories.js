const CATS = [
  
  {id:"sauber",g:"team",label:"Drove for\nSauber",img:IMG_TEAM_SAUBER,carImg:true,badge:"b-team",check:d=>d.teams.includes("Sauber")},
  {id:"alfa_romeo",g:"team",label:"Drove for\nAlfa Romeo",img:IMG_TEAM_ALFA_ROMEO,carImg:true,badge:"b-team",check:d=>d.teams.includes("Alfa Romeo")},
  {id:"minardi",g:"team",label:"Drove for\nMinardi",img:IMG_TEAM_MINARDI,carImg:true,badge:"b-team",check:d=>d.teams.includes("Minardi")},
  {id:"toro_rosso",g:"team",label:"Drove for\nToro Rosso",img:IMG_TEAM_TORO_ROSSO,carImg:true,badge:"b-team",check:d=>d.teams.includes("Toro Rosso")},
  {id:"benetton",g:"team",label:"Drove for\nBenetton",img:IMG_TEAM_BENETTON,carImg:true,badge:"b-team",check:d=>d.teams.includes("Benetton")},
  {id:"lotus",g:"team",label:"Drove for\nLotus",img:IMG_TEAM_LOTUS,carImg:true,badge:"b-team",check:d=>d.teams.includes("Lotus")},
  {id:"renault",g:"team",label:"Drove for\nRenault",img:IMG_TEAM_RENAULT,carImg:true,badge:"b-team",check:d=>d.teams.includes("Renault")},
  {id:"alpine",g:"team",label:"Drove for\nAlpine",img:IMG_TEAM_ALPINE,carImg:true,badge:"b-team",check:d=>d.teams.includes("Alpine")},
  {id:"AlphaTauri / Racing Bulls",g:"team",label:"Drove for\nAlphaTauri / Racing Bulls",img:IMG_TEAM_ALPHATAURI,carImg:true,badge:"b-team",check:d=>d.teams.includes("AlphaTauri/Racing Bulls")},
  {id:"tyrrell",g:"team",label:"Drove for\nTyrrell",img:IMG_TEAM_TYRRELL,carImg:true,badge:"b-team",check:d=>d.teams.includes("Tyrrell")},
  {id:"brawn",g:"team",label:"Drove for\nBrawn GP",img:IMG_TEAM_BRAWN,carImg:true,badge:"b-team",check:d=>d.teams.includes("Brawn GP")},
  {id:"mercedes",g:"team",label:"Drove for\nMercedes",img:IMG_TEAM_MERCEDES,carImg:true,badge:"b-team",check:d=>d.teams.includes("Mercedes")},
  {id:"ferrari",g:"team",label:"Drove for\nFerrari",img:IMG_TEAM_FERRARI,carImg:true,badge:"b-team",check:d=>d.teams.includes("Ferrari")},
  {id:"mclaren",g:"team",label:"Drove for\nMcLaren",img:IMG_TEAM_MCLAREN,carImg:true,badge:"b-team",check:d=>d.teams.includes("McLaren")},
  {id:"williams",g:"team",label:"Drove for\nWilliams",img:IMG_TEAM_WILLIAMS,carImg:true,badge:"b-team",check:d=>d.teams.includes("Williams")},
  {id:"redbull",g:"team",label:"Drove for\nRed Bull",img:IMG_TEAM_REDBULL,carImg:true,badge:"b-team",check:d=>d.teams.includes("Red Bull")},
  {id:"jordan",g:"team",label:"Drove for\nJordan",img:IMG_TEAM_JORDAN,carImg:true,badge:"b-team",check:d=>d.teams.includes("Jordan")},
  {id:"Force India / Racing Point",g:"team",label:"Drove for\nForce India / Racing Point",img:IMG_TEAM_FORCE_INDIA,carImg:true,badge:"b-team",check:d=>d.teams.includes("Force India/Racing Point")},
  {id:"aston",g:"team",label:"Drove for\nAston Martin",img:IMG_TEAM_ASTON,carImg:true,badge:"b-team",check:d=>d.teams.includes("Aston Martin")},
  {id:"haas",g:"team",label:"Drove for\nHaas",img:IMG_TEAM_HAAS,carImg:true,badge:"b-team",check:d=>d.teams.includes("Haas")},
  {id:"brabham",g:"team",label:"Drove for\nBrabham",img:IMG_TEAM_BRABHAM,carImg:true,badge:"b-team",check:d=>d.teams.includes("Brabham")},
  
  {id:"nat-brit",g:"nat",label:"British\nDriver",img:IMG_FLAG_BRITISH,flagImg:true,badge:"b-nat",check:d=>d.nat==="british"},
  {id:"nat-ger",g:"nat",label:"German\nDriver",img:IMG_FLAG_GERMAN,flagImg:true,badge:"b-nat",check:d=>d.nat==="german"},
  {id:"nat-bra",g:"nat",label:"Brazilian\nDriver",img:IMG_FLAG_BRAZILIAN,flagImg:true,badge:"b-nat",check:d=>d.nat==="brazilian"},
  {id:"nat-fin",g:"nat",label:"Finnish\nDriver",img:IMG_FLAG_FINNISH,flagImg:true,badge:"b-nat",check:d=>d.nat==="finnish"},
  {id:"nat-fra",g:"nat",label:"French\nDriver",img:IMG_FLAG_FRENCH,flagImg:true,badge:"b-nat",check:d=>d.nat==="french"},
  {id:"nat-ita",g:"nat",label:"Italian\nDriver",img:IMG_FLAG_ITALIAN,flagImg:true,badge:"b-nat",check:d=>d.nat==="italian"},
  {id:"nat-esp",g:"nat",label:"Spanish\nDriver",img:IMG_FLAG_SPANISH,flagImg:true,badge:"b-nat",check:d=>d.nat==="spanish"},
  {id:"nat-aus",g:"nat",label:"Australian\nDriver",img:IMG_FLAG_AUSTRALIAN,flagImg:true,badge:"b-nat",check:d=>d.nat==="australian"},
  {id:"nat-ned",g:"nat",label:"Dutch\nDriver",img:IMG_FLAG_DUTCH,flagImg:true,badge:"b-nat",check:d=>d.nat==="dutch"},
  {id:"nat-aut",g:"nat",label:"Austrian\nDriver",img:IMG_FLAG_AUSTRIAN,flagImg:true,badge:"b-nat",check:d=>d.nat==="austrian"},
  {id:"nat-can",g:"nat",label:"Canadian\nDriver",img:IMG_FLAG_CANADIAN,flagImg:true,badge:"b-nat",check:d=>d.nat==="canadian"},
  {id:"nat-mex",g:"nat",label:"Mexican\nDriver",img:IMG_FLAG_MEXICAN,flagImg:true,badge:"b-nat",check:d=>d.nat==="mexican"},
  {id:"nat-mon",g:"nat",label:"Monegasque\nDriver",img:IMG_FLAG_MONEGASQUE,flagImg:true,badge:"b-nat",check:d=>d.nat==="monegasque"},
  {id:"nat-bel",g:"nat",label:"Belgian\nDriver",img:IMG_FLAG_BELGIAN,flagImg:true,badge:"b-nat",check:d=>d.nat==="belgian"},
  {id:"nat-nzl",g:"nat",label:"New Zealand\nDriver",img:IMG_FLAG_NEW_ZEALAND,flagImg:true,badge:"b-nat",check:d=>d.nat==="new zealander"},
  {id:"nat-rus",g:"nat",label:"Russian\nDriver",img:IMG_FLAG_RUSSIAN,flagImg:true,badge:"b-nat",check:d=>d.nat==="russian"},
  {id:"nat-usa",g:"nat",label:"American\nDriver",img:IMG_FLAG_AMERICAN,flagImg:true,badge:"b-nat",check:d=>d.nat==="american"},
  {id:"nat-swe",g:"nat",label:"Swedish\nDriver",img:IMG_FLAG_SWEDISH,flagImg:true,badge:"b-nat",check:d=>d.nat==="swedish"},
  {id:"nat-jpn",g:"nat",label:"Japanese\nDriver",img:IMG_FLAG_JAPANESE,flagImg:true,badge:"b-nat",check:d=>d.nat==="japanese"},
  {id:"nat-sui",g:"nat",label:"Swiss\nDriver",img:IMG_FLAG_SWISS,flagImg:true,badge:"b-nat",check:d=>d.nat==="swiss"},
  
  {id:"champ",g:"trophy",label:"World\nChampion",img:IMG_WILD_CHAMPIONS,flagImg:true,badge:"b-troph",check:d=>d.champ},
  {id:"multi2",g:"trophy",label:"2+ World\nTitles",img:IMG_WILD_TITLES,flagImg:true,badge:"b-troph",check:d=>d.champN>=2},
  {id:"multi3",g:"trophy",label:"3+ World\nTitles",img:IMG_WILD_TITLES,flagImg:true,badge:"b-troph",check:d=>d.champN>=3},
  {id:"gpwin",g:"trophy",label:"GP Winner\n(1+ win)",img:IMG_WILD_RACE_WINS,flagImg:true,badge:"b-troph",check:d=>d.wins>=1},
  {id:"wins2",g:"trophy",label:"2+ Grand\nPrix Wins",img:IMG_WILD_RACE_WINS,flagImg:true,badge:"b-troph",check:d=>d.wins>=2},
  {id:"wins10",g:"trophy",label:"10+ Race\nWins",img:IMG_WILD_RACE_WINS,flagImg:true,badge:"b-troph",check:d=>d.wins>=10},
  {id:"wins25",g:"trophy",label:"25+ Race\nWins",img:IMG_WILD_RACE_WINS,flagImg:true,badge:"b-troph",check:d=>d.wins>=25},
  {id:"wins50",g:"trophy",label:"50+ Race\nWins",img:IMG_WILD_RACE_WINS,flagImg:true,badge:"b-troph",check:d=>d.wins>=50},
  {id:"gslam",g:"trophy",label:"Grand Slam\nWinner",img:IMG_ERA_GRAND_SLAM,flagImg:true,badge:"b-troph",check:d=>d.gSlam&&d.gSlam>=1},
  {id:"gslam2",g:"trophy",label:"2+ Grand Slam\nWinner",img:IMG_ERA_GRAND_SLAM,flagImg:true,badge:"b-troph",check:d=>d.gSlam&&d.gSlam>=2},
  {id:"fl5",g:"trophy",label:"5+ Career\nFastest Laps",img:IMG_WILD_FASTEST_LAP,flagImg:true,badge:"b-troph",check:d=>d.fastLaps>=5},
  {id:"fl10",g:"trophy",label:"10+ Career\nFastest Laps",img:IMG_WILD_FASTEST_LAP,flagImg:true,badge:"b-troph",check:d=>d.fastLaps>=10},
  {id:"fl15",g:"trophy",label:"15+ Career\nFastest Laps",img:IMG_WILD_FASTEST_LAP,flagImg:true,badge:"b-troph",check:d=>d.fastLaps>=15},
  {id:"fl20",g:"trophy",label:"20+ Career\nFastest Laps",img:IMG_WILD_FASTEST_LAP,flagImg:true,badge:"b-troph",check:d=>d.fastLaps>=20},
  {id:"pp1",g:"trophy",label:"1+ Career\nPole Position",img:IMG_WILD_POLE,flagImg:true,badge:"b-troph",check:d=>d.poles>=1},
  {id:"pp3",g:"trophy",label:"3+ Career\nPole Position",img:IMG_WILD_POLE,flagImg:true,badge:"b-troph",check:d=>d.poles>=3},
  {id:"pp5",g:"trophy",label:"5+ Career\nPole Position",img:IMG_WILD_POLE,flagImg:true,badge:"b-troph",check:d=>d.poles>=5},
  {id:"pp10",g:"trophy",label:"10+ Career\nPole Position",img:IMG_WILD_POLE,flagImg:true,badge:"b-troph",check:d=>d.poles>=10},
  {id:"pp15",g:"trophy",label:"15+ Career\nPole Position",img:IMG_WILD_POLE,flagImg:true,badge:"b-troph",check:d=>d.poles>=15},
  
  {id:"Monte-Carlo",g:"circuit",label:"Won at\nMonte-Carlo",img:IMG_CIRC_MONACO,flagImg:true,badge:"b-circ",check:d=>(d.circuits.monte_carlo||0)>=1},
  {id:"Spa-Francorchamps",g:"circuit",label:"Won at\nSpa-Francorchamps",img:IMG_CIRC_BELGIUM,flagImg:true,badge:"b-circ",check:d=>(d.circuits.spa||0)>=1},
  {id:"Monza",g:"circuit",label:"Won at\nMonza",img:IMG_CIRC_ITALY,flagImg:true,badge:"b-circ",check:d=>(d.circuits.monza||0)>=1},
  {id:"Suzuka",g:"circuit",label:"Won at\nSuzuka",img:IMG_CIRC_JAPAN,flagImg:true,badge:"b-circ",check:d=>(d.circuits.suzuka||0)>=1},
  {id:"Silverstone",g:"circuit",label:"Won at\nSilverstone",img:IMG_CIRC_GREAT_BRITAIN,flagImg:true,badge:"b-circ",check:d=>(d.circuits.silverstone||0)>=1},
  {id:"Montreal",g:"circuit",label:"Won at\nMontreal",img:IMG_CIRC_CANADA,flagImg:true,badge:"b-circ",check:d=>(d.circuits.montreal||0)>=1},
  {id:"Interlagos",g:"circuit",label:"Won at\nInterlagos",img:IMG_CIRC_BRAZIL,flagImg:true,badge:"b-circ",check:d=>(d.circuits.interlagos||0)>=1},
  {id:"Marina Bay",g:"circuit",label:"Won at\nMarina Bay",img:IMG_CIRC_SINGAPORE,flagImg:true,badge:"b-circ",check:d=>(d.circuits.marina_bay||0)>=1},
  {id:"Austin",g:"circuit",label:"Won at\nAustin",img:IMG_CIRC_USA,flagImg:true,badge:"b-circ",check:d=>(d.circuits.austin||0)>=1},
  {id:"Yas Marina",g:"circuit",label:"Won at\nYas Marina",img:IMG_CIRC_UAE,flagImg:true,badge:"b-circ",check:d=>(d.circuits.yas_marina||0)>=1},
  {id:"Baku",g:"circuit",label:"Won at\nBaku",img:IMG_CIRC_AZERBAIJAN,flagImg:true,badge:"b-circ",check:d=>(d.circuits.baku||0)>=1},
  {id:"Sakhir",g:"circuit",label:"Won at\nSakhir",img:IMG_CIRC_BAHRAIN,flagImg:true,badge:"b-circ",check:d=>(d.circuits.sakhir||0)>=1},
  {id:"Barcelona-Catalunya",g:"circuit",label:"Won at\nBarcelona-Catalunya",img:IMG_CIRC_SPAIN,flagImg:true,badge:"b-circ",check:d=>(d.circuits.barcelona||0)>=1},
  {id:"Zandvoort",g:"circuit",label:"Won at\nZandvoort",img:IMG_CIRC_NETHERLANDS,flagImg:true,badge:"b-circ",check:d=>(d.circuits.zandvoort||0)>=1},
  {id:"Red Bull Ring",g:"circuit",label:"Won at\nRed Bull Ring",img:IMG_CIRC_AUSTRIA,flagImg:true,badge:"b-circ",check:d=>(d.circuits.red_bull_ring||0)>=1},
  {id:"Hungaroring",g:"circuit",label:"Won at\nHungaroring",img:IMG_CIRC_HUNGARY,flagImg:true,badge:"b-circ",check:d=>(d.circuits.hungaroring||0)>=1},
  {id:"Albert Park",g:"circuit",label:"Won at\nAlbert Park",img:IMG_CIRC_AUSTRALIA,flagImg:true,badge:"b-circ",check:d=>(d.circuits.albert_park||0)>=1},
  {id:"Sepang",g:"circuit",label:"Won at\nSepang",img:IMG_CIRC_MALAYSIA,flagImg:true,badge:"b-circ",check:d=>(d.circuits.sepang||0)>=1},
  {id:"Hockenheim",g:"circuit",label:"Won at\nHockenheim",img:IMG_CIRC_GERMANY_FLAG,flagImg:true,badge:"b-circ",check:d=>(d.circuits.hockenheim||0)>=1},
  {id:"Nürburgring",g:"circuit",label:"Won at\nNürburgring",img:IMG_CIRC_GERMANY,flagImg:true,badge:"b-circ",check:d=>(d.circuits.nurburgring||0)>=1},
  {id:"Estoril",g:"circuit",label:"Won at\nEstoril",img:IMG_CIRC_PORTUGAL,flagImg:true,badge:"b-circ",check:d=>(d.circuits.estoril||0)>=1},
  {id:"Buenos Aires",g:"circuit",label:"Won at\nBuenos Aires",img:IMG_CIRC_ARGENTINA,flagImg:true,badge:"b-circ",check:d=>(d.circuits.buenos_aires||0)>=1},
  {id:"Shanghai",g:"circuit",label:"Won at\nShanghai",img:IMG_CIRC_CHINA,flagImg:true,badge:"b-circ",check:d=>(d.circuits.shanghai||0)>=1},
  {id:"Paul Ricard",g:"circuit",label:"Won at\nPaul Ricard",img:IMG_CIRC_FRANCE_FLAG,flagImg:true,badge:"b-circ",check:d=>(d.circuits.paul_ricard||0)>=1},
  {id:"Kyalami",g:"circuit",label:"Won at\nKyalami",img:IMG_CIRC_SOUTH_AFRICA,flagImg:true,badge:"b-circ",check:d=>(d.circuits.kyalami||0)>=1},
  {id:"Brands Hatch",g:"circuit",label:"Won at\nBrands Hatch",img:IMG_CIRC_GREAT_BRITAIN_FLAG,flagImg:true,badge:"b-circ",check:d=>(d.circuits.brands_hatch||0)>=1},
  {id:"Watkins Glen",g:"circuit",label:"Won at\nWatkins Glen",img:IMG_CIRC_USA_FLAG,flagImg:true,badge:"b-circ",check:d=>(d.circuits.watkins_glen||0)>=1},
  {id:"Magny-Cours",g:"circuit",label:"Won at\nMagny-Cours",img:IMG_CIRC_FRANCE,flagImg:true,badge:"b-circ",check:d=>(d.circuits.magny_cours||0)>=1},
  {id:"Mexico",g:"circuit",label:"Won at\nMexico",img:IMG_CIRC_MEXICO,flagImg:true,badge:"b-circ",check:d=>(d.circuits.mexico||0)>=1},
  
  {id:"Ross Brawn",g:"tp",label:"Under\nRoss Brawn",img:IMG_TP_ROSS_BRAWN,badge:"b-tp",check:d=>d.tps.includes("Ross Brawn")},
  {id:"Toto Wolff",g:"tp",label:"Under\nToto Wolff",img:IMG_TP_TOTO_WOLFF,badge:"b-tp",check:d=>d.tps.includes("Toto Wolff")},
  {id:"Christian Horner",g:"tp",label:"Under\nChristian Horner",img:IMG_TP_CHRISTIAN_HORNER,badge:"b-tp",check:d=>d.tps.includes("Christian Horner")},
  {id:"Flavio Briatore",g:"tp",label:"Under\nFlavio Briatore",img:IMG_TP_FLAVIO_BRIATORE,badge:"b-tp",check:d=>d.tps.includes("Flavio Briatore")},
  {id:"Ron Dennis",g:"tp",label:"Under\nRon Dennis",img:IMG_TP_RON_DENNIS,badge:"b-tp",check:d=>d.tps.includes("Ron Dennis")},
  {id:"Sir Frank Williams",g:"tp",label:"Under\nSir Frank Williams",img:IMG_TP_FRANK_WILLIAMS,badge:"b-tp",check:d=>d.tps.includes("Sir Frank Williams")},
  {id:"Fred Vasseur",g:"tp",label:"Under\nFred Vasseur",img:IMG_TP_FREDERIC_VASSEUR,badge:"b-tp",check:d=>d.tps.includes("Fred Vasseur")},
  {id:"Eddie Jordan",g:"tp",label:"Under\nEddie Jordan",img:IMG_TP_EDDIE_JORDAN,badge:"b-tp",check:d=>d.tps.includes("Eddie Jordan")},
  {id:"Jean Todt",g:"tp",label:"Under\nJean Todt",img:IMG_TP_JEAN_TODT,badge:"b-tp",check:d=>d.tps.includes("Jean Todt")},
  {id:"Franz Tost",g:"tp",label:"Under\nFranz Tost",img:IMG_TP_FRANZ_TOST,badge:"b-tp",check:d=>d.tps.includes("Franz Tost")},
  {id:"Colin Chapman",g:"tp",label:"Under\nColin Chapman",img:IMG_TP_COLIN_CHAPMAN,badge:"b-tp",check:d=>d.tps.includes("Colin Chapman")},
  {id:"Guenther Steiner",g:"tp",label:"Under\nGuenther Steiner",img:IMG_TP_GUENTHER_STEINER,badge:"b-tp",check:d=>d.tps.includes("Guenther Steiner")},
  {id:"Marco Piccinini",g:"tp",label:"Under\nMarco Piccinini",img:IMG_TP_MARCO_PICCININI,badge:"b-tp",check:d=>d.tps.includes("Marco Piccinini")},
  {id:"Claire Williams",g:"tp",label:"Under\nClaire Williams",img:IMG_TP_CLAIRE_WILLIAMS,badge:"b-tp",check:d=>d.tps.includes("Claire Williams")},
  {id:"Bernie Ecclestone",g:"tp",label:"Under\nBernie Ecclestone",img:IMG_TP_BERNIE_ECCLESTONE,badge:"b-tp",check:d=>d.tps.includes("Bernie Ecclestone")},
  {id:"Ken Tyrrell",g:"tp",label:"Under\nKen Tyrrell",img:IMG_TP_KEN_TYRRELL,badge:"b-tp",check:d=>d.tps.includes("Ken Tyrrell")},
  {id:"Giancarlo Minardi",g:"tp",label:"Under\nGiancarlo Minardi",img:IMG_TP_GIANCARLO_MINARDI,badge:"b-tp",check:d=>d.tps.includes("Giancarlo Minardi")},
  
  {id:"born-2000s",g:"wild",label:"Born in\nthe 2000s",img:IMG_BORN_2000S,flagImg:true,badge:"b-wild",check:d=>d.birthY>=2000},
  {id:"born-1990s",g:"wild",label:"Born in\nthe 1990s",img:IMG_BORN_1990S,flagImg:true,badge:"b-wild",check:d=>d.birthY>=1990&&d.birthY<2000},
  {id:"born-1980s",g:"wild",label:"Born in\nthe 1980s",img:IMG_BORN_1980S,flagImg:true,badge:"b-wild",check:d=>d.birthY>=1980&&d.birthY<1990},
  {id:"born-1970s",g:"wild",label:"Born in\nthe 1970s",img:IMG_BORN_1970S,flagImg:true,badge:"b-wild",check:d=>d.birthY>=1970&&d.birthY<1980},
  {id:"born-1960s",g:"wild",label:"Born in\nthe 1960s",img:IMG_BORN_1960S,flagImg:true,badge:"b-wild",check:d=>d.birthY>=1960&&d.birthY<1970},
  {id:"born-1950s",g:"wild",label:"Born in\nthe 1950s",img:IMG_BORN_1950S,flagImg:true,badge:"b-wild",check:d=>d.birthY>=1950&&d.birthY<1960},
  {id:"era1950_70",g:"wild",label:"Raced\n1950–1970",img:IMG_ERA_1950_70,flagImg:true,badge:"b-wild",check:d=>d.decades.some(x=>[1950,1960].includes(x))},
  {id:"era1970_80",g:"wild",label:"Raced\n1970–1980",img:IMG_ERA_1970_80,flagImg:true,badge:"b-wild",check:d=>d.decades.includes(1970)},
  {id:"era1980_90",g:"wild",label:"Raced\n1980–1990",img:IMG_ERA_1980_90,flagImg:true,badge:"b-wild",check:d=>d.decades.includes(1980)},
  {id:"era1990_00",g:"wild",label:"Raced\n1990–2000",img:IMG_ERA_1990_00,flagImg:true,badge:"b-wild",check:d=>d.decades.includes(1990)},
  {id:"era2000_10",g:"wild",label:"Raced\n2000–2010",img:IMG_ERA_2000_10,flagImg:true,badge:"b-wild",check:d=>d.decades.includes(2000)},
  {id:"era2010_20",g:"wild",label:"Raced\n2010–2020",img:IMG_ERA_2010_20,flagImg:true,badge:"b-wild",check:d=>d.decades.includes(2010)},
  {id:"era2020",g:"wild",label:"Active in\n2020s",img:IMG_ERA_ACTIVE2020,flagImg:true,badge:"b-wild",check:d=>d.decades.includes(2020)},
  {id:"t3",g:"wild",label:"Drove for\n3+ Teams",img:IMG_WILD_TEAMS,flagImg:true,badge:"b-wild",check:d=>d.teamN>=3},
  {id:"t4",g:"wild",label:"Drove for\n4+ Teams",img:IMG_WILD_TEAMS,flagImg:true,badge:"b-wild",check:d=>d.teamN>=4},
  {id:"t5",g:"wild",label:"Drove for\n5+ Teams",img:IMG_WILD_TEAMS,flagImg:true,badge:"b-wild",check:d=>d.teamN>=5},
  {id:"eu1",g:"wild",label:"Europe\n1+ Race Wins",img:IMG_CONT_EUROPE,flagImg:true,badge:"b-wild",check:d=>(d.contWins.eu||0)>=1},
  {id:"eu2",g:"wild",label:"Europe\n2+ Race Wins",img:IMG_CONT_EUROPE,flagImg:true,badge:"b-wild",check:d=>(d.contWins.eu||0)>=2},
  {id:"eu3",g:"wild",label:"Europe\n3+ Race Wins",img:IMG_CONT_EUROPE,flagImg:true,badge:"b-wild",check:d=>(d.contWins.eu||0)>=3},
  {id:"eu5",g:"wild",label:"Europe\n5+ Race Wins",img:IMG_CONT_EUROPE,flagImg:true,badge:"b-wild",check:d=>(d.contWins.eu||0)>=5},
  {id:"na2",g:"wild",label:"North America\n1+ Race Wins",img:IMG_CONT_NORTH_AMERICA,flagImg:true,badge:"b-wild",check:d=>(d.contWins.na||0)>=1},
  {id:"na3",g:"wild",label:"North America\n2+ Race Wins",img:IMG_CONT_NORTH_AMERICA,flagImg:true,badge:"b-wild",check:d=>(d.contWins.na||0)>=2},
  {id:"sa2",g:"wild",label:"South America\n1+ Race Wins",img:IMG_CONT_SOUTH_AMERICA,flagImg:true,badge:"b-wild",check:d=>(d.contWins.sa||0)>=1},
  {id:"as2",g:"wild",label:"Asia-Oceania\n1+ Race Wins",img:IMG_CONT_ASIA,flagImg:true,badge:"b-wild",check:d=>(d.contWins.as||0)>=1},
  {id:"as3",g:"wild",label:"Asia-Oceania\n2+ Race Wins",img:IMG_CONT_ASIA,flagImg:true,badge:"b-wild",check:d=>(d.contWins.as||0)>=2},
  {id:"af1",g:"wild",label:"Africa\n1 Race Win",img:IMG_CONT_AFRICA,flagImg:true,badge:"b-wild",check:d=>(d.contWins.af||0)>=1},
  {id:"cont3",g:"wild",label:"Global\n3+ Continents Won",img:IMG_CONT_WORLD,flagImg:true,badge:"b-wild",check:d=>{const c=d.contWins;return [c.eu,c.na,c.sa,c.as,c.oc,c.af].filter(v=>v>0).length>=3;}},
  {id:"top2t",g:"wild",label:"Raced in\nTop 2 Teams",img:IMG_WILD_TEAMS,flagImg:true,badge:"b-wild",check:d=>{const tops=["Ferrari","McLaren"];return tops.every(t=>d.teams.includes(t));}},
  {id:"wc2circ",g:"wild",label:"Wins at\n2+ Top 5 Circuits",img:IMG_WILD_CIRCUITS,flagImg:true,badge:"b-wild",check:d=>{const top5=["monza","monte_carlo","silverstone","spa","interlagos"];return top5.filter(c=>(d.circuits[c]||0)>=1).length>=2;}},
  {id:"wc3circ",g:"wild",label:"Wins at\n2+ Top 3 Circuits",img:IMG_WILD_CIRCUITS,flagImg:true,badge:"b-wild",check:d=>{const top3=["monza","monte_carlo","silverstone"];return top3.filter(c=>(d.circuits[c]||0)>=1).length>=2;}},
  
  {id:"Graham Hill",g:"tm",label:"Teammate\nof Graham Hill",img:IMG_GRAHAM_HILL,badge:"b-tm",check:d=>{const n=d.name.toLowerCase();return ["innes ireland","jo bonnier","dan gurney","tony brooks","richie ginther","jackie stewart","jim clark","mario andretti","carlos reutemann","jochen rindt","wilson fittipaldi"].includes(n);}},
  {id:"Fernando Alonso",g:"tm",label:"Teammate\nof Fernando Alonso",img:IMG_ALONSO,badge:"b-tm",check:d=>{const n=d.name.toLowerCase();return ["jarno trulli","jacques villeneuve","giancarlo fisichella","lewis hamilton","romain grosjean","felipe massa","kimi räikkönen","jenson button","stoffel vandoorne","lando norris","esteban ocon","lance stroll","nelson piquet jr.","alex yoong"].includes(n);}},
  {id:"Lewis Hamilton",g:"tm",label:"Teammate\nof Lewis Hamilton",img:IMG_HAMILTON,badge:"b-tm",check:d=>{const n=d.name.toLowerCase();return ["fernando alonso","heikki kovalainen","jenson button","nico rosberg","valtteri bottas","george russell","kimi antonelli","charles leclerc"].includes(n);}},
  {id:"Michael Schumacher",g:"tm",label:"Teammate\nof Michael Schumacher",img:IMG_SCHUMACHER,badge:"b-tm",check:d=>{const n=d.name.toLowerCase();return ["andrea de cesaris","nelson piquet","martin brundle","riccardo patrese","jos verstappen","jj lehto","johnny herbert","eddie irvine","rubens barrichello","felipe massa","nico rosberg"].includes(n);}},
  {id:"Andrea de Cesaris",g:"tm",label:"Teammate\nof Andrea de Cesaris",img:IMG_DE_CESARIS,badge:"b-tm",check:d=>{const n=d.name.toLowerCase();return ["john watson","jacques laffite","alessandro nannini","riccardo patrese","stefano modena","alex caffi","gianni morbidelli","michael schumacher","roberto moreno","ukyo katayama","rubens barrichello","heinz-harald frentzen","bruno giacomelli","bertrand gachot"].includes(n);}},
  {id:"Nico Hülkenberg",g:"tm",label:"Teammate\nof Nico Hülkenberg",img:IMG_HULKENBERG,badge:"b-tm",check:d=>{const n=d.name.toLowerCase();return ["rubens barrichello","sergio pérez","carlos sainz jr.","daniel ricciardo","lance stroll","sebastian vettel","kevin magnussen","oliver bearman","gabriel bortoleto","jolyon palmer","esteban gutiérrez"].includes(n);}},
  {id:"Rubens Barrichello",g:"tm",label:"Teammate\nof Rubens Barrichello",img:IMG_BARRICHELLO,badge:"b-tm",check:d=>{const n=d.name.toLowerCase();return ["thierry boutsen","eddie irvine","aguri suzuki","andrea de cesaris","martin brundle","jos verstappen","johnny herbert","michael schumacher","jenson button","nico hülkenberg","pastor maldonado","ivan capelli","jan magnussen"].includes(n);}},
  {id:"Nelson Piquet",g:"tm",label:"Teammate\nof Nelson Piquet",img:IMG_PIQUET,badge:"b-tm",check:d=>{const n=d.name.toLowerCase();return ["niki lauda","john watson","riccardo patrese","teo fabi","marc surer","nigel mansell","satoru nakajima","alessandro nannini","roberto moreno","michael schumacher","héctor rebaque"].includes(n);}},
  {id:"Riccardo Patrese",g:"tm",label:"Teammate\nof Riccardo Patrese",img:IMG_PATRESE,badge:"b-tm",check:d=>{const n=d.name.toLowerCase();return ["alan jones","jochen mass","nelson piquet","eddie cheever","elio de angelis","derek warwick","andrea de cesaris","nigel mansell","martin brundle","thierry boutsen","michael schumacher"].includes(n);}},
  {id:"Max Verstappen",g:"tm",label:"Teammate\nof Max Verstappen",img:IMG_VERSTAPPEN,badge:"b-tm",check:d=>{const n=d.name.toLowerCase();return ["carlos sainz jr.","daniel ricciardo","pierre gasly","alexander albon","sergio pérez","liam lawson","isack hadjar","yuki tsunoda"].includes(n);}},
  {id:"Sebastian Vettel",g:"tm",label:"Teammate\nof Sebastian Vettel",img:IMG_VETTEL,badge:"b-tm",check:d=>{const n=d.name.toLowerCase();return ["nick heidfeld","vitantonio liuzzi","mark webber","daniel ricciardo","kimi räikkönen","charles leclerc","lance stroll","nico hülkenberg"].includes(n);}},
  {id:"Daniel Ricciardo",g:"tm",label:"Teammate\nof Daniel Ricciardo",img:IMG_RICCIARDO,badge:"b-tm",check:d=>{const n=d.name.toLowerCase();return ["sebastian vettel","max verstappen","lando norris","nico hülkenberg","esteban ocon","liam lawson","yuki tsunoda","daniil kvyat","vitantonio liuzzi","jean-éric vergne","narain karthikeyan"].includes(n);}},
  {id:"Ayrton Senna",g:"tm",label:"Teammate\nof Ayrton Senna",img:IMG_SENNA,badge:"b-tm",check:d=>{const n=d.name.toLowerCase();return ["alain prost","mika häkkinen","damon hill","gerhard berger","elio de angelis","satoru nakajima","michael andretti","johnny cecotto"].includes(n);}},
  {id:"Alain Prost",g:"tm",label:"Teammate\nof Alain Prost",img:IMG_PROST,badge:"b-tm",check:d=>{const n=d.name.toLowerCase();return ["niki lauda","keke rosberg","ayrton senna","nigel mansell","damon hill","jean alesi","rené arnoux","john watson","eddie cheever","stefan johansson"].includes(n);}},
  {id:"Nigel Mansell",g:"tm",label:"Teammate\nof Nigel Mansell",img:IMG_MANSELL,badge:"b-tm",check:d=>{const n=d.name.toLowerCase();return ["mario andretti","keke rosberg","nelson piquet","alain prost","damon hill","mika häkkinen","riccardo patrese","gerhard berger","elio de angelis"].includes(n);}},
];

const LINES=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
function checkWin(board){
  for(const l of LINES){
    const [a,b,c]=l;
    if(board[a]&&board[b]&&board[c]&&board[a].p===board[b].p&&board[b].p===board[c].p)
      return{p:board[a].p,l};
  }
  if(board.every(c=>c!==null))return{p:"draw",l:[]};
  return null;
}

function countValid(a,b){return DB.filter(d=>{try{return a.check(d)&&b.check(d);}catch(e){return false;}}).length;}

function gridCanAssign(rows, cols){
  const cells=[];
  for(let r=0;r<rows.length;r++){
    for(let c=0;c<cols.length;c++){
      const rc=rows[r], cc=cols[c];
      const drivers=[];
      for(let d=0;d<DB.length;d++){
        try{ if(rc.check(DB[d])&&cc.check(DB[d])) drivers.push(d); }catch(e){}
      }
      if(drivers.length<2) return false; 
      cells.push(drivers);
    }
  }
  const matchDriver={};
  function augment(cell,seen){
    for(let k=0;k<cells[cell].length;k++){
      const drv=cells[cell][k]; if(seen[drv]) continue; seen[drv]=true;
      if(matchDriver[drv]===undefined||augment(matchDriver[drv],seen)){ matchDriver[drv]=cell; return true; }
    }
    return false;
  }
  let matched=0;
  for(let i=0;i<cells.length;i++){ if(augment(i,{})) matched++; }
  return matched===cells.length;
}

let _pairIdx=null;
function getPairIndex(){
  if(_pairIdx) return _pairIdx;
  _pairIdx={};
  for(let i=0;i<CATS.length;i++){
    for(let j=0;j<CATS.length;j++){
      if(i===j||CATS[i].g===CATS[j].g) continue;
      if(countValid(CATS[i],CATS[j])>=2){
        if(!_pairIdx[i]) _pairIdx[i]=[];
        _pairIdx[i].push(j);
      }
    }
  }
  return _pairIdx;
}

function shuffle(arr){return arr.sort(()=>Math.random()-.5);}

function buildGrid(){
  const pairIdx=getPairIndex();

  for(let t=0;t<2000;t++){
    const rowCands=shuffle(Object.keys(pairIdx).map(Number)).slice(0,30);
    for(let ri=0;ri<rowCands.length-2;ri++){
      const r0=rowCands[ri];
      const r1cands=rowCands.slice(ri+1).filter(r=>CATS[r].g!==CATS[r0].g);
      if(!r1cands.length) continue;
      const r1=r1cands[Math.floor(Math.random()*r1cands.length)];
      const r2cands=rowCands.filter(r=>r!==r0&&r!==r1&&CATS[r].g!==CATS[r0].g&&CATS[r].g!==CATS[r1].g);
      if(!r2cands.length) continue;
      const r2=r2cands[Math.floor(Math.random()*r2cands.length)];

      const validForR0=new Set(pairIdx[r0]||[]);
      const validForR1=new Set(pairIdx[r1]||[]);
      const validForR2=new Set(pairIdx[r2]||[]);
      const rowIdxSet=new Set([r0,r1,r2]);
      const rowGroups=new Set([CATS[r0].g,CATS[r1].g,CATS[r2].g]);

      const colCands=[];
      for(let ci=0;ci<CATS.length;ci++){
        if(rowIdxSet.has(ci)) continue;
        if(rowGroups.has(CATS[ci].g)) continue;
        if(validForR0.has(ci)&&validForR1.has(ci)&&validForR2.has(ci)) colCands.push(ci);
      }
      if(colCands.length<3) continue;

      const shuffledCols=shuffle([...colCands]);
      const c0=shuffledCols[0];
      const c1cands=shuffledCols.slice(1).filter(c=>CATS[c].g!==CATS[c0].g);
      if(!c1cands.length) continue;
      const c1=c1cands[0];
      const c2cands=shuffledCols.filter(c=>c!==c0&&c!==c1&&CATS[c].g!==CATS[c0].g&&CATS[c].g!==CATS[c1].g);
      if(!c2cands.length) continue;
      const c2=c2cands[0];

      const rows=[CATS[r0],CATS[r1],CATS[r2]];
      const cols=[CATS[c0],CATS[c1],CATS[c2]];

      
      if(!gridCanAssign(rows,cols)) continue;

      return{rows,cols};
    }
  }
  return{rows:[CATS[0],CATS[21],CATS[40]],cols:[CATS[60],CATS[107],CATS[148]]};
}