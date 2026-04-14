// ================================================================
// images.js — Photo path mapping for each driver
// Set photo: "public/photos/filename.png" for each driver id
// ================================================================

const DRIVER_PHOTOS = {
  1: "public/photos/lewis-hamilton.png",  // Lewis Hamilton
  2: "public/photos/max-verstappen.png",  // Max Verstappen
  3: "public/photos/valtteri-bottas.png",  // Valtteri Bottas
  4: "public/photos/sergio-perez.png",  // Sergio Perez
  5: "public/photos/charles-leclerc.png",  // Charles Leclerc
  6: "public/photos/carlos-sainz-jr.png",  // Carlos Sainz Jr.
  7: "public/photos/lando-norris.png",  // Lando Norris
  8: "public/photos/daniel-ricciardo.png",  // Daniel Ricciardo
  9: "public/photos/pierre-gasly.png",  // Pierre Gasly
  10: "public/photos/yuki-tsunoda.png",  // Yuki Tsunoda
  11: "public/photos/fernando-alonso.png",  // Fernando Alonso
  12: "public/photos/esteban-ocon.png",  // Esteban Ocon
  13: "public/photos/sebastian-vettel.png",  // Sebastian Vettel
  14: "public/photos/lance-stroll.png",  // Lance Stroll
  15: "public/photos/kimi-raikkonen.png",  // Kimi Raikkonen
  16: "public/photos/george-russell.png",  // George Russell
  17: "public/photos/mick-schumacher.png",  // Mick Schumacher
  19: "public/photos/alexander-albon.png",  // Alexander Albon
  20: "public/photos/kevin-magnussen.png",  // Kevin Magnussen
  21: "public/photos/guanyu-zhou.png",  // Guanyu Zhou
  22: "public/photos/oscar-piastri.png",  // Oscar Piastri
  23: "public/photos/nicholas-latifi.png",  // Nicholas Latifi
  24: "public/photos/nyck-de-vries.png",  // Nyck de Vries
  25: "public/photos/logan-sargeant.png",  // Logan Sargeant
  26: "public/photos/liam-lawson.png",  // Liam Lawson
  27: "public/photos/oliver-bearman.png",  // Oliver Bearman
  28: "public/photos/franco-colapinto.png",  // Franco Colapinto
  29: "public/photos/kimi-antonelli.png",  // Kimi Antonelli
  30: "public/photos/jack-doohan.png",  // Jack Doohan
  31: "public/photos/michael-schumacher.png",  // Michael Schumacher
  32: "public/photos/ayrton-senna.png",  // Ayrton Senna
  33: "public/photos/alain-prost.png",  // Alain Prost
  34: "public/photos/niki-lauda.png",  // Niki Lauda
  35: "public/photos/juan-manuel-fangio.png",  // Juan Manuel Fangio
  36: "public/photos/nelson-piquet.png",  // Nelson Piquet
  37: "public/photos/nigel-mansell.png",  // Nigel Mansell
  38: "public/photos/jackie-stewart.png",  // Jackie Stewart
  39: "public/photos/gilles-villeneuve.png",  // Gilles Villeneuve
  40: "public/photos/jim-clark.png",  // Jim Clark
  41: "public/photos/jenson-button.png",  // Jenson Button
  42: "public/photos/rubens-barrichello.png",  // Rubens Barrichello
  43: "public/photos/nico-rosberg.png",  // Nico Rosberg
  44: "public/photos/felipe-massa.png",  // Felipe Massa
  45: "public/photos/graham-hill.png",  // Graham Hill
  46: "public/photos/emerson-fittipaldi.png",  // Emerson Fittipaldi
  47: "public/photos/james-hunt.png",  // James Hunt
  48: "public/photos/mario-andretti.png",  // Mario Andretti
  49: "public/photos/jack-brabham.png",  // Jack Brabham
  50: "public/photos/denny-hulme.png",  // Denny Hulme
  51: "public/photos/damon-hill.png",  // Damon Hill
  52: "public/photos/mika-hakkinen.png",  // Mika Hakkinen
  53: "public/photos/david-coulthard.png",  // David Coulthard
  54: "public/photos/keke-rosberg.png",  // Keke Rosberg
  55: "public/photos/antonio-giovinazzi.png",  // Antonio Giovinazzi
  56: "public/photos/alberto-ascari.png",  // Alberto Ascari
  57: "public/photos/nino-farina.png",  // Nino Farina
  58: "public/photos/jochen-rindt.png",  // Jochen Rindt
  59: "public/photos/john-surtees.png",  // John Surtees
  60: "public/photos/jacques-villeneuve.png",  // Jacques Villeneuve
  61: "public/photos/romain-grosjean.png",  // Romain Grosjean
  62: "public/photos/ralf-schumacher.png",  // Ralf Schumacher
  63: "public/photos/heinz-harald-frentzen.png",  // Heinz-Harald Frentzen
  64: "public/photos/giancarlo-fisichella.png",  // Giancarlo Fisichella
  65: "public/photos/mark-webber.png",  // Mark Webber
  66: "public/photos/daniil-kvyat.png",  // Daniil Kvyat
  67: "public/photos/pastor-maldonado.png",  // Pastor Maldonado
  68: "public/photos/carlos-reutemann.png",  // Carlos Reutemann
  69: "public/photos/ronnie-peterson.png",  // Ronnie Peterson
  70: "public/photos/jacky-ickx.png",  // Jacky Ickx
  71: "public/photos/rene-arnoux.png",  // René Arnoux
  72: "public/photos/juan-pablo-montoya.png",  // Juan Pablo Montoya
  73: "public/photos/bruce-mclaren.png",  // Bruce McLaren
  74: "public/photos/heikki-kovalainen.png",  // Heikki Kovalainen
  75: "public/photos/jos-verstappen.png",  // Jos Verstappen
  76: "public/photos/jarno-trulli.png",  // Jarno Trulli
  77: "public/photos/isack-hadjar.png",  // Isack Hadjar
  78: "public/photos/gabriel-bortoleto.png",  // Gabriel Bortoleto
  79: "public/photos/nico-hulkenberg.png",  // Nico Hulkenberg
  80: "public/photos/jody-scheckter.png",  // Jody Scheckter
  81: "public/photos/robert-kubica.png",  // Robert Kubica
};

// Attach photos to DRIVERS array at runtime
(function() {
  DRIVER_PHOTOS && DRIVERS.forEach(d => {
    if (DRIVER_PHOTOS[d.id] !== undefined) d.photo = DRIVER_PHOTOS[d.id];
  });
})();
