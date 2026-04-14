/* ═══════════════════════════════════════════
   Missing Grid – F1 Puzzle Game
   races.js  —  Race data
   ═══════════════════════════════════════════

   HOW TO ADD A NEW RACE:
   1. Add an entry to the RACES array below.
   2. Each race needs:
      - id        : unique string key  (e.g. 'bahrain_2024')
      - name      : Grand Prix name    (e.g. 'Bahrain Grand Prix')
      - year      : season year        (e.g. 2024)
      - flag      : flag emoji         (e.g. '🇧🇭')
      - hidden    : array of 1-based positions the player must guess
      - drivers   : array of driver objects in FINISH ORDER (P1 first)
        Each driver: { abbr, name, team, color, isDNF? }
        color = team hex colour

   TEAM COLOUR REFERENCE:
     Red Bull Racing Honda  #3671C6
     Ferrari                #E8002D
     Mercedes               #27F4D2
     McLaren Mercedes       #FF8000
     McLaren Renault        #FF8000
     Aston Martin           #229971
     Alpine Renault         #FF87BC
     Williams               #64C4FF
     AlphaTauri Honda       #5E8FAA
     RB                     #6692FF
     Haas Ferrari           #B6BABD
     Alfa Romeo Racing      #C92D4B
     Sauber                 #52E252
     Racing Point           #F596C8
     Renault                #FFD800
═══════════════════════════════════════════ */

const RACES = [

  /* ─────────────────────────────────────────
     QATAR 2023
  ───────────────────────────────────────── */
  {
    id:     'qatar_2023',
    difficulty: 'easy',
    name:   'Qatar Grand Prix',
    year:   2023,
    flag:   '🇶🇦',
    hidden: [1, 3, 5, 7, 10, 12, 15, 17, 20],
    drivers: [
      { abbr:'VER', name:'Max Verstappen', fullName:'Max Verstappen', team:'Red Bull', color:'#3671C6' },
      { abbr:'NOR', name:'Lando Norris', fullName:'Lando Norris', team:'McLaren', color:'#FF8000' },
      { abbr:'PIA', name:'Oscar Piastri', fullName:'Oscar Piastri', team:'McLaren', color:'#FF8000' },
      { abbr:'HAM', name:'Lewis Hamilton', fullName:'Lewis Hamilton', team:'Mercedes', color:'#27F4D2' },
      { abbr:'RUS', name:'George Russell', fullName:'George Russell', team:'Mercedes', color:'#27F4D2' },
      { abbr:'SAI', name:'Carlos Sainz', fullName:'Carlos Sainz', team:'Ferrari', color:'#E8002D' },
      { abbr:'LEC', name:'Charles Leclerc', fullName:'Charles Leclerc', team:'Ferrari', color:'#E8002D' },
      { abbr:'ALO', name:'Fernando Alonso', fullName:'Fernando Alonso', team:'Aston Martin', color:'#229971' },
      { abbr:'STR', name:'Lance Stroll', fullName:'Lance Stroll', team:'Aston Martin', color:'#229971' },
      { abbr:'GAS', name:'Pierre Gasly', fullName:'Pierre Gasly', team:'Alpine', color:'#FF87BC' },
      { abbr:'OCO', name:'Esteban Ocon', fullName:'Esteban Ocon', team:'Alpine', color:'#FF87BC' },
      { abbr:'TSU', name:'Yuki Tsunoda', fullName:'Yuki Tsunoda', team:'AlphaTauri', color:'#5E8FAA' },
      { abbr:'RIC', name:'Daniel Ricciardo', fullName:'Daniel Ricciardo', team:'AlphaTauri', color:'#5E8FAA' },
      { abbr:'HUL', name:'Nico Hülkenberg', fullName:'Nico Hülkenberg', team:'Haas', color:'#B6BABD' },
      { abbr:'MAG', name:'Kevin Magnussen', fullName:'Kevin Magnussen', team:'Haas', color:'#B6BABD' },
      { abbr:'BOT', name:'Valtteri Bottas', fullName:'Valtteri Bottas', team:'Alfa Romeo', color:'#C92D4B' },
      { abbr:'ZHO', name:'Zhou Guanyu', fullName:'Zhou Guanyu', team:'Alfa Romeo', color:'#C92D4B' },
      { abbr:'ALB', name:'Alex Albon', fullName:'Alex Albon', team:'Williams', color:'#64C4FF' },
      { abbr:'SAR', name:'Logan Sargeant', fullName:'Logan Sargeant', team:'Williams', color:'#64C4FF' },
      { abbr:'PER', name:'Sergio Perez', fullName:'Sergio Perez', team:'Red Bull', color:'#3671C6' },
    ]
  },

  /* ─────────────────────────────────────────
     BAHRAIN 2024
  ───────────────────────────────────────── */
  {
    id:     'bahrain_2024',
    difficulty: 'easy',
    name:   'Bahrain Grand Prix',
    year:   2024,
    flag:   '🇧🇭',
    hidden: [1, 4, 7, 10, 13, 16, 19],
    drivers: [
      { abbr:'VER', name:'Max Verstappen', fullName:'Max Verstappen', team:'Red Bull', color:'#3671C6' },
      { abbr:'SAI', name:'Carlos Sainz', fullName:'Carlos Sainz', team:'Ferrari', color:'#E8002D' },
      { abbr:'LEC', name:'Charles Leclerc', fullName:'Charles Leclerc', team:'Ferrari', color:'#E8002D' },
      { abbr:'PER', name:'Sergio Perez', fullName:'Sergio Perez', team:'Red Bull', color:'#3671C6' },
      { abbr:'HAM', name:'Lewis Hamilton', fullName:'Lewis Hamilton', team:'Mercedes', color:'#27F4D2' },
      { abbr:'ALO', name:'Fernando Alonso', fullName:'Fernando Alonso', team:'Aston Martin', color:'#229971' },
      { abbr:'NOR', name:'Lando Norris', fullName:'Lando Norris', team:'McLaren', color:'#FF8000' },
      { abbr:'PIA', name:'Oscar Piastri', fullName:'Oscar Piastri', team:'McLaren', color:'#FF8000' },
      { abbr:'RUS', name:'George Russell', fullName:'George Russell', team:'Mercedes', color:'#27F4D2' },
      { abbr:'STR', name:'Lance Stroll', fullName:'Lance Stroll', team:'Aston Martin', color:'#229971' },
      { abbr:'TSU', name:'Yuki Tsunoda', fullName:'Yuki Tsunoda', team:'RB', color:'#6692FF' },
      { abbr:'ZHO', name:'Zhou Guanyu', fullName:'Zhou Guanyu', team:'Sauber', color:'#52E252' },
      { abbr:'HUL', name:'Nico Hülkenberg', fullName:'Nico Hülkenberg', team:'Haas', color:'#B6BABD' },
      { abbr:'MAG', name:'Kevin Magnussen', fullName:'Kevin Magnussen', team:'Haas', color:'#B6BABD' },
      { abbr:'SAR', name:'Logan Sargeant', fullName:'Logan Sargeant', team:'Williams', color:'#64C4FF' },
      { abbr:'ALB', name:'Alex Albon', fullName:'Alex Albon', team:'Williams', color:'#64C4FF' },
      { abbr:'BOT', name:'Valtteri Bottas', fullName:'Valtteri Bottas', team:'Sauber', color:'#52E252' },
      { abbr:'GAS', name:'Pierre Gasly', fullName:'Pierre Gasly', team:'Alpine', color:'#FF87BC' },
      { abbr:'OCO', name:'Esteban Ocon', fullName:'Esteban Ocon', team:'Alpine', color:'#FF87BC', isDNF: true },
      { abbr:'RIC', name:'Daniel Ricciardo', fullName:'Daniel Ricciardo', team:'RB', color:'#6692FF', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     ABU DHABI 2021
  ───────────────────────────────────────── */
  {
    id:     'abu_dhabi_2021',
    difficulty: 'easy',
    name:   'Abu Dhabi Grand Prix',
    year:   2021,
    flag:   '🇦🇪',
    hidden: [1, 3, 5, 8, 10, 13, 15],
    drivers: [
      { abbr:'VER', name:'Max Verstappen', fullName:'Max Verstappen', team:'Red Bull Racing Honda', color:'#3671C6' },
      { abbr:'HAM', name:'Lewis Hamilton', fullName:'Lewis Hamilton', team:'Mercedes', color:'#27F4D2' },
      { abbr:'SAI', name:'Carlos Sainz', fullName:'Carlos Sainz', team:'Ferrari', color:'#E8002D' },
      { abbr:'TSU', name:'Yuki Tsunoda', fullName:'Yuki Tsunoda', team:'AlphaTauri Honda', color:'#5E8FAA' },
      { abbr:'GAS', name:'Pierre Gasly', fullName:'Pierre Gasly', team:'AlphaTauri Honda', color:'#5E8FAA' },
      { abbr:'BOT', name:'Valtteri Bottas', fullName:'Valtteri Bottas', team:'Mercedes', color:'#27F4D2' },
      { abbr:'NOR', name:'Lando Norris', fullName:'Lando Norris', team:'McLaren Mercedes', color:'#FF8000' },
      { abbr:'ALO', name:'Fernando Alonso', fullName:'Fernando Alonso', team:'Alpine Renault', color:'#FFD800' },
      { abbr:'OCO', name:'Esteban Ocon', fullName:'Esteban Ocon', team:'Alpine Renault', color:'#FFD800' },
      { abbr:'LEC', name:'Charles Leclerc', fullName:'Charles Leclerc', team:'Ferrari', color:'#E8002D' },
      { abbr:'VET', name:'Sebastian Vettel', fullName:'Sebastian Vettel', team:'Aston Martin Mercedes', color:'#229971' },
      { abbr:'RIC', name:'Daniel Ricciardo', fullName:'Daniel Ricciardo', team:'McLaren Mercedes', color:'#FF8000' },
      { abbr:'STR', name:'Lance Stroll', fullName:'Lance Stroll', team:'Aston Martin Mercedes', color:'#229971' },
      { abbr:'MSC', name:'Mick Schumacher', fullName:'Mick Schumacher', team:'Haas Ferrari', color:'#B6BABD' },
      { abbr:'PER', name:'Sergio Perez', fullName:'Sergio Perez', team:'Red Bull Racing Honda', color:'#3671C6', isDNF: true },
      { abbr:'LAT', name:'Nicholas Latifi', fullName:'Nicholas Latifi', team:'Williams Mercedes', color:'#64C4FF', isDNF: true },
      { abbr:'GIO', name:'Antonio Giovinazzi', fullName:'Antonio Giovinazzi', team:'Alfa Romeo Racing', color:'#C92D4B', isDNF: true },
      { abbr:'RUS', name:'George Russell', fullName:'George Russell', team:'Williams Mercedes', color:'#64C4FF', isDNF: true },
      { abbr:'RAI', name:'Kimi Räikkönen', fullName:'Kimi Räikkönen', team:'Alfa Romeo Racing', color:'#C92D4B', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     SÃO PAULO (BRAZIL) 2021
  ───────────────────────────────────────── */
  {
    id:     'sao_paulo_2021',
    difficulty: 'easy',
    name:   'São Paulo Grand Prix',
    year:   2021,
    flag:   '🇧🇷',
    hidden: [1, 4, 6, 9, 11, 14, 17],
    drivers: [
      { abbr:'HAM', name:'Lewis Hamilton', fullName:'Lewis Hamilton', team:'Mercedes', color:'#27F4D2' },
      { abbr:'VER', name:'Max Verstappen', fullName:'Max Verstappen', team:'Red Bull Racing Honda', color:'#3671C6' },
      { abbr:'BOT', name:'Valtteri Bottas', fullName:'Valtteri Bottas', team:'Mercedes', color:'#27F4D2' },
      { abbr:'PER', name:'Sergio Perez', fullName:'Sergio Perez', team:'Red Bull Racing Honda', color:'#3671C6' },
      { abbr:'LEC', name:'Charles Leclerc', fullName:'Charles Leclerc', team:'Ferrari', color:'#E8002D' },
      { abbr:'SAI', name:'Carlos Sainz', fullName:'Carlos Sainz', team:'Ferrari', color:'#E8002D' },
      { abbr:'GAS', name:'Pierre Gasly', fullName:'Pierre Gasly', team:'AlphaTauri Honda', color:'#5E8FAA' },
      { abbr:'OCO', name:'Esteban Ocon', fullName:'Esteban Ocon', team:'Alpine Renault', color:'#FFD800' },
      { abbr:'ALO', name:'Fernando Alonso', fullName:'Fernando Alonso', team:'Alpine Renault', color:'#FFD800' },
      { abbr:'NOR', name:'Lando Norris', fullName:'Lando Norris', team:'McLaren Mercedes', color:'#FF8000' },
      { abbr:'VET', name:'Sebastian Vettel', fullName:'Sebastian Vettel', team:'Aston Martin Mercedes', color:'#229971' },
      { abbr:'RAI', name:'Kimi Räikkönen', fullName:'Kimi Räikkönen', team:'Alfa Romeo Racing', color:'#C92D4B' },
      { abbr:'RUS', name:'George Russell', fullName:'George Russell', team:'Williams Mercedes', color:'#64C4FF' },
      { abbr:'GIO', name:'Antonio Giovinazzi', fullName:'Antonio Giovinazzi', team:'Alfa Romeo Racing', color:'#C92D4B' },
      { abbr:'TSU', name:'Yuki Tsunoda', fullName:'Yuki Tsunoda', team:'AlphaTauri Honda', color:'#5E8FAA' },
      { abbr:'LAT', name:'Nicholas Latifi', fullName:'Nicholas Latifi', team:'Williams Mercedes', color:'#64C4FF' },
      { abbr:'MAZ', name:'Nikita Mazepin', fullName:'Nikita Mazepin', team:'Haas Ferrari', color:'#B6BABD' },
      { abbr:'MSC', name:'Mick Schumacher', fullName:'Mick Schumacher', team:'Haas Ferrari', color:'#B6BABD' },
      { abbr:'RIC', name:'Daniel Ricciardo', fullName:'Daniel Ricciardo', team:'McLaren Mercedes', color:'#FF8000', isDNF: true },
      { abbr:'STR', name:'Lance Stroll', fullName:'Lance Stroll', team:'Aston Martin Mercedes', color:'#229971', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     ITALY (MONZA) 2021
  ───────────────────────────────────────── */
  {
    id:     'monza_2021',
    difficulty: 'easy',
    name:   'Italian Grand Prix',
    year:   2021,
    flag:   '🇮🇹',
    hidden: [1, 3, 5, 8, 10, 12, 15],
    drivers: [
      { abbr:'RIC', name:'Daniel Ricciardo', fullName:'Daniel Ricciardo', team:'McLaren Mercedes', color:'#FF8000' },
      { abbr:'NOR', name:'Lando Norris', fullName:'Lando Norris', team:'McLaren Mercedes', color:'#FF8000' },
      { abbr:'BOT', name:'Valtteri Bottas', fullName:'Valtteri Bottas', team:'Mercedes', color:'#27F4D2' },
      { abbr:'LEC', name:'Charles Leclerc', fullName:'Charles Leclerc', team:'Ferrari', color:'#E8002D' },
      { abbr:'PER', name:'Sergio Perez', fullName:'Sergio Perez', team:'Red Bull Racing Honda', color:'#3671C6' },
      { abbr:'SAI', name:'Carlos Sainz', fullName:'Carlos Sainz', team:'Ferrari', color:'#E8002D' },
      { abbr:'STR', name:'Lance Stroll', fullName:'Lance Stroll', team:'Aston Martin Mercedes', color:'#229971' },
      { abbr:'ALO', name:'Fernando Alonso', fullName:'Fernando Alonso', team:'Alpine Renault', color:'#FFD800' },
      { abbr:'RUS', name:'George Russell', fullName:'George Russell', team:'Williams Mercedes', color:'#64C4FF' },
      { abbr:'OCO', name:'Esteban Ocon', fullName:'Esteban Ocon', team:'Alpine Renault', color:'#FFD800' },
      { abbr:'LAT', name:'Nicholas Latifi', fullName:'Nicholas Latifi', team:'Williams Mercedes', color:'#64C4FF' },
      { abbr:'VET', name:'Sebastian Vettel', fullName:'Sebastian Vettel', team:'Aston Martin Mercedes', color:'#229971' },
      { abbr:'GIO', name:'Antonio Giovinazzi', fullName:'Antonio Giovinazzi', team:'Alfa Romeo Racing', color:'#C92D4B' },
      { abbr:'KUB', name:'Robert Kubica', fullName:'Robert Kubica', team:'Alfa Romeo Racing', color:'#C92D4B' },
      { abbr:'MSC', name:'Mick Schumacher', fullName:'Mick Schumacher', team:'Haas Ferrari', color:'#B6BABD' },
      { abbr:'MAZ', name:'Nikita Mazepin', fullName:'Nikita Mazepin', team:'Haas Ferrari', color:'#B6BABD', isDNF: true },
      { abbr:'HAM', name:'Lewis Hamilton', fullName:'Lewis Hamilton', team:'Mercedes', color:'#27F4D2', isDNF: true },
      { abbr:'VER', name:'Max Verstappen', fullName:'Max Verstappen', team:'Red Bull Racing Honda', color:'#3671C6', isDNF: true },
      { abbr:'GAS', name:'Pierre Gasly', fullName:'Pierre Gasly', team:'AlphaTauri Honda', color:'#5E8FAA', isDNF: true },
      { abbr:'TSU', name:'Yuki Tsunoda', fullName:'Yuki Tsunoda', team:'AlphaTauri Honda', color:'#5E8FAA', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     HUNGARY 2021
  ───────────────────────────────────────── */
  {
    id:     'hungary_2021',
    difficulty: 'easy',
    name:   'Hungarian Grand Prix',
    year:   2021,
    flag:   '🇭🇺',
    hidden: [1, 3, 5, 7, 9, 11, 13],
    drivers: [
      { abbr:'OCO', name:'Esteban Ocon', fullName:'Esteban Ocon', team:'Alpine Renault', color:'#FFD800' },
      { abbr:'HAM', name:'Lewis Hamilton', fullName:'Lewis Hamilton', team:'Mercedes', color:'#27F4D2' },
      { abbr:'SAI', name:'Carlos Sainz', fullName:'Carlos Sainz', team:'Ferrari', color:'#E8002D' },
      { abbr:'ALO', name:'Fernando Alonso', fullName:'Fernando Alonso', team:'Alpine Renault', color:'#FFD800' },
      { abbr:'GAS', name:'Pierre Gasly', fullName:'Pierre Gasly', team:'AlphaTauri Honda', color:'#5E8FAA' },
      { abbr:'TSU', name:'Yuki Tsunoda', fullName:'Yuki Tsunoda', team:'AlphaTauri Honda', color:'#5E8FAA' },
      { abbr:'LAT', name:'Nicholas Latifi', fullName:'Nicholas Latifi', team:'Williams Mercedes', color:'#64C4FF' },
      { abbr:'RUS', name:'George Russell', fullName:'George Russell', team:'Williams Mercedes', color:'#64C4FF' },
      { abbr:'VER', name:'Max Verstappen', fullName:'Max Verstappen', team:'Red Bull Racing Honda', color:'#3671C6' },
      { abbr:'RAI', name:'Kimi Räikkönen', fullName:'Kimi Räikkönen', team:'Alfa Romeo Racing', color:'#C92D4B' },
      { abbr:'RIC', name:'Daniel Ricciardo', fullName:'Daniel Ricciardo', team:'McLaren Mercedes', color:'#FF8000' },
      { abbr:'MSC', name:'Mick Schumacher', fullName:'Mick Schumacher', team:'Haas Ferrari', color:'#B6BABD' },
      { abbr:'GIO', name:'Antonio Giovinazzi', fullName:'Antonio Giovinazzi', team:'Alfa Romeo Racing', color:'#C92D4B' },
      { abbr:'MAZ', name:'Nikita Mazepin', fullName:'Nikita Mazepin', team:'Haas Ferrari', color:'#B6BABD', isDNF: true },
      { abbr:'NOR', name:'Lando Norris', fullName:'Lando Norris', team:'McLaren Mercedes', color:'#FF8000', isDNF: true },
      { abbr:'BOT', name:'Valtteri Bottas', fullName:'Valtteri Bottas', team:'Mercedes', color:'#27F4D2', isDNF: true },
      { abbr:'PER', name:'Sergio Perez', fullName:'Sergio Perez', team:'Red Bull Racing Honda', color:'#3671C6', isDNF: true },
      { abbr:'LEC', name:'Charles Leclerc', fullName:'Charles Leclerc', team:'Ferrari', color:'#E8002D', isDNF: true },
      { abbr:'STR', name:'Lance Stroll', fullName:'Lance Stroll', team:'Aston Martin Mercedes', color:'#229971', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     ITALY (MONZA) 2020
  ───────────────────────────────────────── */
  {
    id:     'monza_2020',
    difficulty: 'easy',
    name:   'Italian Grand Prix',
    year:   2020,
    flag:   '🇮🇹',
    hidden: [1, 3, 5, 7, 9, 11, 14],
    drivers: [
      { abbr:'GAS', name:'Pierre Gasly', fullName:'Pierre Gasly', team:'AlphaTauri Honda', color:'#5E8FAA' },
      { abbr:'SAI', name:'Carlos Sainz', fullName:'Carlos Sainz', team:'McLaren Renault', color:'#FF8000' },
      { abbr:'STR', name:'Lance Stroll', fullName:'Lance Stroll', team:'Racing Point BWT', color:'#F596C8' },
      { abbr:'NOR', name:'Lando Norris', fullName:'Lando Norris', team:'McLaren Renault', color:'#FF8000' },
      { abbr:'BOT', name:'Valtteri Bottas', fullName:'Valtteri Bottas', team:'Mercedes', color:'#27F4D2' },
      { abbr:'RIC', name:'Daniel Ricciardo', fullName:'Daniel Ricciardo', team:'Renault', color:'#FFD800' },
      { abbr:'HAM', name:'Lewis Hamilton', fullName:'Lewis Hamilton', team:'Mercedes', color:'#27F4D2' },
      { abbr:'OCO', name:'Esteban Ocon', fullName:'Esteban Ocon', team:'Renault', color:'#FFD800' },
      { abbr:'KVY', name:'Daniil Kvyat', fullName:'Daniil Kvyat', team:'AlphaTauri Honda', color:'#5E8FAA' },
      { abbr:'PER', name:'Sergio Perez', fullName:'Sergio Perez', team:'Racing Point BWT', color:'#F596C8' },
      { abbr:'LAT', name:'Nicholas Latifi', fullName:'Nicholas Latifi', team:'Williams Mercedes', color:'#64C4FF' },
      { abbr:'GRO', name:'Romain Grosjean', fullName:'Romain Grosjean', team:'Haas Ferrari', color:'#B6BABD' },
      { abbr:'RAI', name:'Kimi Räikkönen', fullName:'Kimi Räikkönen', team:'Alfa Romeo Racing', color:'#C92D4B' },
      { abbr:'RUS', name:'George Russell', fullName:'George Russell', team:'Williams Mercedes', color:'#64C4FF' },
      { abbr:'ALB', name:'Alex Albon', fullName:'Alex Albon', team:'Red Bull Racing Honda', color:'#3671C6' },
      { abbr:'GIO', name:'Antonio Giovinazzi', fullName:'Antonio Giovinazzi', team:'Alfa Romeo Racing', color:'#C92D4B' },
      { abbr:'VER', name:'Max Verstappen', fullName:'Max Verstappen', team:'Red Bull Racing Honda', color:'#3671C6', isDNF: true },
      { abbr:'LEC', name:'Charles Leclerc', fullName:'Charles Leclerc', team:'Ferrari', color:'#E8002D', isDNF: true },
      { abbr:'MAG', name:'Kevin Magnussen', fullName:'Kevin Magnussen', team:'Haas Ferrari', color:'#B6BABD', isDNF: true },
      { abbr:'VET', name:'Sebastian Vettel', fullName:'Sebastian Vettel', team:'Ferrari', color:'#E8002D', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     SAKHIR 2020
  ───────────────────────────────────────── */
  {
    id:     'sakhir_2020',
    difficulty: 'easy',
    name:   'Sakhir Grand Prix',
    year:   2020,
    flag:   '🇧🇭',
    hidden: [1, 3, 5, 7, 9, 12, 15],
    drivers: [
      { abbr:'PER', name:'Sergio Perez', fullName:'Sergio Perez', team:'Racing Point BWT', color:'#F596C8' },
      { abbr:'OCO', name:'Esteban Ocon', fullName:'Esteban Ocon', team:'Renault', color:'#FFD800' },
      { abbr:'STR', name:'Lance Stroll', fullName:'Lance Stroll', team:'Racing Point BWT', color:'#F596C8' },
      { abbr:'SAI', name:'Carlos Sainz', fullName:'Carlos Sainz', team:'McLaren Renault', color:'#FF8000' },
      { abbr:'RIC', name:'Daniel Ricciardo', fullName:'Daniel Ricciardo', team:'Renault', color:'#FFD800' },
      { abbr:'ALB', name:'Alex Albon', fullName:'Alex Albon', team:'Red Bull Racing Honda', color:'#3671C6' },
      { abbr:'KVY', name:'Daniil Kvyat', fullName:'Daniil Kvyat', team:'AlphaTauri Honda', color:'#5E8FAA' },
      { abbr:'BOT', name:'Valtteri Bottas', fullName:'Valtteri Bottas', team:'Mercedes', color:'#27F4D2' },
      { abbr:'RUS', name:'George Russell', fullName:'George Russell', team:'Mercedes', color:'#27F4D2' },
      { abbr:'NOR', name:'Lando Norris', fullName:'Lando Norris', team:'McLaren Renault', color:'#FF8000' },
      { abbr:'GAS', name:'Pierre Gasly', fullName:'Pierre Gasly', team:'AlphaTauri Honda', color:'#5E8FAA' },
      { abbr:'VET', name:'Sebastian Vettel', fullName:'Sebastian Vettel', team:'Ferrari', color:'#E8002D' },
      { abbr:'GIO', name:'Antonio Giovinazzi', fullName:'Antonio Giovinazzi', team:'Alfa Romeo Racing', color:'#C92D4B' },
      { abbr:'RAI', name:'Kimi Räikkönen', fullName:'Kimi Räikkönen', team:'Alfa Romeo Racing', color:'#C92D4B' },
      { abbr:'MAG', name:'Kevin Magnussen', fullName:'Kevin Magnussen', team:'Haas Ferrari', color:'#B6BABD' },
      { abbr:'AIT', name:'Jack Aitken', fullName:'Jack Aitken', team:'Williams Mercedes', color:'#64C4FF' },
      { abbr:'FIT', name:'Pietro Fittipaldi', fullName:'Pietro Fittipaldi', team:'Haas Ferrari', color:'#B6BABD' },
      { abbr:'LAT', name:'Nicholas Latifi', fullName:'Nicholas Latifi', team:'Williams Mercedes', color:'#64C4FF', isDNF: true },
      { abbr:'VER', name:'Max Verstappen', fullName:'Max Verstappen', team:'Red Bull Racing Honda', color:'#3671C6', isDNF: true },
      { abbr:'LEC', name:'Charles Leclerc', fullName:'Charles Leclerc', team:'Ferrari', color:'#E8002D', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     ADD MORE RACES HERE — copy the block above
     and fill in the data.
  ───────────────────────────────────────── */


  /* ─────────────────────────────────────────
     FRANCE (DIJON) 1979
  ───────────────────────────────────────── */
  {
    id:     'france_1979',
    difficulty: 'hard',
    name:   'French Grand Prix',
    year:   1979,
    flag:   '🇫🇷',
    hidden: [1, 3, 5, 7, 10, 13, 16],
    drivers: [
      { abbr:'JAB', name:'Jean-Pierre Jabouille', fullName:'Jean-Pierre Jabouille', team:'Renault', color:'#FFD800' },
      { abbr:'VIL', name:'Gilles Villeneuve', fullName:'Gilles Villeneuve', team:'Ferrari', color:'#E8002D' },
      { abbr:'ARN', name:'René Arnoux', fullName:'René Arnoux', team:'Renault', color:'#FFD800' },
      { abbr:'JON', name:'Alan Jones', fullName:'Alan Jones', team:'Williams Ford', color:'#64C4FF' },
      { abbr:'JAR', name:'Jean-Pierre Jarier', fullName:'Jean-Pierre Jarier', team:'Tyrrell Ford', color:'#5E8FAA' },
      { abbr:'REG', name:'Clay Regazzoni', fullName:'Clay Regazzoni', team:'Williams Ford', color:'#64C4FF' },
      { abbr:'SCH', name:'Jody Scheckter', fullName:'Jody Scheckter', team:'Ferrari', color:'#E8002D' },
      { abbr:'LAF', name:'Jacques Laffite', fullName:'Jacques Laffite', team:'Ligier Ford', color:'#888888' },
      { abbr:'ROS', name:'Keke Rosberg', fullName:'Keke Rosberg', team:'Wolf Ford', color:'#888888' },
      { abbr:'TAM', name:'Patrick Tambay', fullName:'Patrick Tambay', team:'McLaren Ford', color:'#FF8000' },
      { abbr:'WAT', name:'John Watson', fullName:'John Watson', team:'McLaren Ford', color:'#FF8000' },
      { abbr:'REB', name:'Hector Rebaque', fullName:'Hector Rebaque', team:'Lotus Ford', color:'#000000' },
      { abbr:'REU', name:'Carlos Reutemann', fullName:'Carlos Reutemann', team:'Lotus Ford', color:'#000000' },
      { abbr:'PAT', name:'Riccardo Patrese', fullName:'Riccardo Patrese', team:'Arrows Ford', color:'#888888' },
      { abbr:'MAS', name:'Jochen Mass', fullName:'Jochen Mass', team:'Arrows Ford', color:'#888888' },
      { abbr:'DEA', name:'Elio de Angelis', fullName:'Elio de Angelis', team:'Shadow Ford', color:'#888888' },
      { abbr:'GIA', name:'Bruno Giacomelli', fullName:'Bruno Giacomelli', team:'Alfa Romeo', color:'#C92D4B' },
      { abbr:'LAM', name:'Jan Lammers', fullName:'Jan Lammers', team:'Shadow Ford', color:'#888888' },
      { abbr:'PIR', name:'Didier Pironi', fullName:'Didier Pironi', team:'Tyrrell Ford', color:'#5E8FAA', isDNF: true },
      { abbr:'FIT', name:'Emerson Fittipaldi', fullName:'Emerson Fittipaldi', team:'Fittipaldi Ford', color:'#888888', isDNF: true },
      { abbr:'PIQ', name:'Nelson Piquet', fullName:'Nelson Piquet', team:'Brabham Alfa Romeo', color:'#888888', isDNF: true },
      { abbr:'AND', name:'Mario Andretti', fullName:'Mario Andretti', team:'Lotus Ford', color:'#000000', isDNF: true },
      { abbr:'ICK', name:'Jacky Ickx', fullName:'Jacky Ickx', team:'Ligier Ford', color:'#888888', isDNF: true },
      { abbr:'LAU', name:'Niki Lauda', fullName:'Niki Lauda', team:'Brabham Alfa Romeo', color:'#888888', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     JAPAN 1976
  ───────────────────────────────────────── */
  {
    id:     'japan_1976',
    difficulty: 'hard',
    name:   'Japanese Grand Prix',
    year:   1976,
    flag:   '🇯🇵',
    hidden: [1, 3, 5, 8, 11],
    drivers: [
      { abbr:'AND', name:'Mario Andretti', fullName:'Mario Andretti', team:'Lotus Ford', color:'#000000' },
      { abbr:'DEP', name:'Patrick Depailler', fullName:'Patrick Depailler', team:'Tyrrell Ford', color:'#5E8FAA' },
      { abbr:'HUN', name:'James Hunt', fullName:'James Hunt', team:'McLaren Ford', color:'#FF8000' },
      { abbr:'JON', name:'Alan Jones', fullName:'Alan Jones', team:'Surtees Ford', color:'#888888' },
      { abbr:'REG', name:'Clay Regazzoni', fullName:'Clay Regazzoni', team:'Ferrari', color:'#E8002D' },
      { abbr:'NIL', name:'Gunnar Nilsson', fullName:'Gunnar Nilsson', team:'Lotus Ford', color:'#000000' },
      { abbr:'LAF', name:'Jacques Laffite', fullName:'Jacques Laffite', team:'Ligier Matra', color:'#888888' },
      { abbr:'ERT', name:'Harald Ertl', fullName:'Harald Ertl', team:'Hesketh Ford', color:'#888888' },
      { abbr:'TAK', name:'Noritake Takahara', fullName:'Noritake Takahara', team:'Surtees Ford', color:'#888888' },
      { abbr:'JAR', name:'Jean-Pierre Jarier', fullName:'Jean-Pierre Jarier', team:'Shadow Ford', color:'#888888' },
      { abbr:'HAS', name:'Masahiro Hasemi', fullName:'Masahiro Hasemi', team:'Kojima Ford', color:'#888888' },
      { abbr:'SCH', name:'Jody Scheckter', fullName:'Jody Scheckter', team:'Tyrrell Ford', color:'#5E8FAA', isDNF: true },
      { abbr:'BIN', name:'Hans-Joachim Stuck', fullName:'Hans-Joachim Stuck', team:'Wolf-Williams', color:'#64C4FF', isDNF: true },
      { abbr:'PRY', name:'Tom Pryce', fullName:'Tom Pryce', team:'Shadow Ford', color:'#888888', isDNF: true },
      { abbr:'BRA', name:'Vittorio Brambilla', fullName:'Vittorio Brambilla', team:'March Ford', color:'#888888', isDNF: true },
      { abbr:'STU', name:'Hans Stuck', fullName:'Hans Stuck', team:'March Ford', color:'#888888', isDNF: true },
      { abbr:'MAS', name:'Jochen Mass', fullName:'Jochen Mass', team:'McLaren Ford', color:'#FF8000', isDNF: true },
      { abbr:'WAT', name:'John Watson', fullName:'John Watson', team:'Penske Ford', color:'#888888', isDNF: true },
      { abbr:'HOS', name:'Kazuyoshi Hoshino', fullName:'Kazuyoshi Hoshino', team:'Tyrrell Ford', color:'#5E8FAA', isDNF: true },
      { abbr:'MER', name:'Arturo Merzario', fullName:'Arturo Merzario', team:'Wolf-Williams', color:'#64C4FF', isDNF: true },
      { abbr:'FIT', name:'Emerson Fittipaldi', fullName:'Emerson Fittipaldi', team:'Fittipaldi Ford', color:'#888888', isDNF: true },
      { abbr:'PAC', name:'Carlos Pace', fullName:'Carlos Pace', team:'Brabham Alfa Romeo', color:'#888888', isDNF: true },
      { abbr:'LAU', name:'Niki Lauda', fullName:'Niki Lauda', team:'Ferrari', color:'#E8002D', isDNF: true },
      { abbr:'PER', name:'Larry Perkins', fullName:'Larry Perkins', team:'Brabham Alfa Romeo', color:'#888888', isDNF: true },
      { abbr:'PET', name:'Ronnie Peterson', fullName:'Ronnie Peterson', team:'March Ford', color:'#888888', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     AUSTRALIA 1994
  ───────────────────────────────────────── */
  {
    id:     'australia_1994',
    difficulty: 'hard',
    name:   'Australian Grand Prix',
    year:   1994,
    flag:   '🇦🇺',
    hidden: [1, 3, 5, 7, 10, 13],
    drivers: [
      { abbr:'MAN', name:'Nigel Mansell', fullName:'Nigel Mansell', team:'Williams Renault', color:'#64C4FF' },
      { abbr:'BER', name:'Gerhard Berger', fullName:'Gerhard Berger', team:'Ferrari', color:'#E8002D' },
      { abbr:'BRU', name:'Martin Brundle', fullName:'Martin Brundle', team:'McLaren Peugeot', color:'#FF8000' },
      { abbr:'BAR', name:'Rubens Barrichello', fullName:'Rubens Barrichello', team:'Jordan Hart', color:'#888888' },
      { abbr:'PAN', name:'Olivier Panis', fullName:'Olivier Panis', team:'Ligier Renault', color:'#888888' },
      { abbr:'ALE', name:'Jean Alesi', fullName:'Jean Alesi', team:'Ferrari', color:'#E8002D' },
      { abbr:'FRE', name:'Heinz-Harald Frentzen', fullName:'Heinz-Harald Frentzen', team:'Sauber Mercedes', color:'#27F4D2' },
      { abbr:'CFI', name:'Christian Fittipaldi', fullName:'Christian Fittipaldi', team:'Footwork Ford', color:'#888888' },
      { abbr:'MAR', name:'Pierluigi Martini', fullName:'Pierluigi Martini', team:'Minardi Ford', color:'#888888' },
      { abbr:'JAR', name:'Jyrki Jarvilehto', fullName:'Jyrki Jarvilehto', team:'Sauber Mercedes', color:'#27F4D2' },
      { abbr:'LAG', name:'Franck Lagorce', fullName:'Franck Lagorce', team:'Ligier Renault', color:'#888888' },
      { abbr:'HAK', name:'Mika Häkkinen', fullName:'Mika Häkkinen', team:'McLaren Peugeot', color:'#FF8000', isDNF: true },
      { abbr:'ALB', name:'Michele Alboreto', fullName:'Michele Alboreto', team:'Minardi Ford', color:'#888888', isDNF: true },
      { abbr:'BLU', name:'Mark Blundell', fullName:'Mark Blundell', team:'Tyrrell Yamaha', color:'#888888', isDNF: true },
      { abbr:'DEL', name:'Jean-Denis Delétraz', fullName:'Jean-Denis Delétraz', team:'Larrousse Ford', color:'#888888', isDNF: true },
      { abbr:'SAL', name:'Mika Salo', fullName:'Mika Salo', team:'Lotus Mugen Honda', color:'#000000', isDNF: true },
      { abbr:'DBR', name:'David Brabham', fullName:'David Brabham', team:'Simtek Ford', color:'#888888', isDNF: true },
      { abbr:'ZAN', name:'Alessandro Zanardi', fullName:'Alessandro Zanardi', team:'Lotus Mugen Honda', color:'#000000', isDNF: true },
      { abbr:'MSC', name:'Michael Schumacher', fullName:'Michael Schumacher', team:'Benetton Ford', color:'#27F4D2', isDNF: true },
      { abbr:'HIL', name:'Damon Hill', fullName:'Damon Hill', team:'Williams Renault', color:'#64C4FF', isDNF: true },
      { abbr:'SCH', name:'Domenico Schiattarella', fullName:'Domenico Schiattarella', team:'Simtek Ford', color:'#888888', isDNF: true },
      { abbr:'KAT', name:'Ukyo Katayama', fullName:'Ukyo Katayama', team:'Tyrrell Yamaha', color:'#888888', isDNF: true },
      { abbr:'NOD', name:'Hideki Noda', fullName:'Hideki Noda', team:'Larrousse Ford', color:'#888888', isDNF: true },
      { abbr:'MOR', name:'Gianni Morbidelli', fullName:'Gianni Morbidelli', team:'Footwork Ford', color:'#888888', isDNF: true },
      { abbr:'IRV', name:'Eddie Irvine', fullName:'Eddie Irvine', team:'Jordan Hart', color:'#888888', isDNF: true },
      { abbr:'HER', name:'Johnny Herbert', fullName:'Johnny Herbert', team:'Benetton Ford', color:'#27F4D2', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     BRAZIL 2008
  ───────────────────────────────────────── */
  {
    id:     'brazil_2008',
    difficulty: 'easy',
    name:   'Brazilian Grand Prix',
    year:   2008,
    flag:   '🇧🇷',
    hidden: [1, 3, 5, 8, 11, 14],
    drivers: [
      { abbr:'MAS', name:'Felipe Massa', fullName:'Felipe Massa', team:'Ferrari', color:'#E8002D' },
      { abbr:'ALO', name:'Fernando Alonso', fullName:'Fernando Alonso', team:'Renault', color:'#FFD800' },
      { abbr:'RAI', name:'Kimi Räikkönen', fullName:'Kimi Räikkönen', team:'Ferrari', color:'#E8002D' },
      { abbr:'VET', name:'Sebastian Vettel', fullName:'Sebastian Vettel', team:'STR Ferrari', color:'#5E8FAA' },
      { abbr:'HAM', name:'Lewis Hamilton', fullName:'Lewis Hamilton', team:'McLaren Mercedes', color:'#27F4D2' },
      { abbr:'GLO', name:'Timo Glock', fullName:'Timo Glock', team:'Toyota', color:'#888888' },
      { abbr:'KOV', name:'Heikki Kovalainen', fullName:'Heikki Kovalainen', team:'McLaren Mercedes', color:'#27F4D2' },
      { abbr:'TRU', name:'Jarno Trulli', fullName:'Jarno Trulli', team:'Toyota', color:'#888888' },
      { abbr:'WEB', name:'Mark Webber', fullName:'Mark Webber', team:'Red Bull Renault', color:'#3671C6' },
      { abbr:'HEI', name:'Nick Heidfeld', fullName:'Nick Heidfeld', team:'Sauber BMW', color:'#888888' },
      { abbr:'KUB', name:'Robert Kubica', fullName:'Robert Kubica', team:'Sauber BMW', color:'#888888' },
      { abbr:'ROS', name:'Nico Rosberg', fullName:'Nico Rosberg', team:'Williams Toyota', color:'#64C4FF' },
      { abbr:'BUT', name:'Jenson Button', fullName:'Jenson Button', team:'Honda', color:'#888888' },
      { abbr:'BOU', name:'Sébastien Bourdais', fullName:'Sébastien Bourdais', team:'STR Ferrari', color:'#5E8FAA' },
      { abbr:'BAR', name:'Rubens Barrichello', fullName:'Rubens Barrichello', team:'Honda', color:'#888888' },
      { abbr:'SUT', name:'Adrian Sutil', fullName:'Adrian Sutil', team:'Force India Ferrari', color:'#FF87BC' },
      { abbr:'NAK', name:'Kazuki Nakajima', fullName:'Kazuki Nakajima', team:'Williams Toyota', color:'#64C4FF' },
      { abbr:'FIS', name:'Giancarlo Fisichella', fullName:'Giancarlo Fisichella', team:'Force India Ferrari', color:'#FF87BC' },
      { abbr:'PIQ', name:'Nelson Piquet Jr.', fullName:'Nelson Piquet Jr.', team:'Renault', color:'#FFD800', isDNF: true },
      { abbr:'COU', name:'David Coulthard', fullName:'David Coulthard', team:'Red Bull Renault', color:'#3671C6', isDNF: true },
    ]
  },


  /* ─────────────────────────────────────────
     MONACO 1984
  ───────────────────────────────────────── */
  {
    id:     'monaco_1984',
    difficulty: 'medium',
    name:   'Monaco Grand Prix',
    year:   1984,
    flag:   '🇲🇨',
    hidden: [1, 3, 5, 7],
    drivers: [
      { abbr:'PRO', name:'Alain Prost', fullName:'Alain Prost', team:'McLaren TAG', color:'#FF8000' },
      { abbr:'SEN', name:'Ayrton Senna', fullName:'Ayrton Senna', team:'Toleman Hart', color:'#888888' },
      { abbr:'ARN', name:'René Arnoux', fullName:'René Arnoux', team:'Ferrari', color:'#E8002D' },
      { abbr:'ROS', name:'Keke Rosberg', fullName:'Keke Rosberg', team:'Williams Honda', color:'#64C4FF' },
      { abbr:'DEA', name:'Elio de Angelis', fullName:'Elio de Angelis', team:'Lotus Renault', color:'#000000' },
      { abbr:'ALB', name:'Michele Alboreto', fullName:'Michele Alboreto', team:'Ferrari', color:'#E8002D' },
      { abbr:'GHI', name:'Piercarlo Ghinzani', fullName:'Piercarlo Ghinzani', team:'Osella Alfa Romeo', color:'#888888' },
      { abbr:'LAF', name:'Jacques Laffite', fullName:'Jacques Laffite', team:'Williams Honda', color:'#64C4FF' },
      { abbr:'PAT', name:'Riccardo Patrese', fullName:'Riccardo Patrese', team:'Alfa Romeo', color:'#C92D4B', isDNF: true },
      { abbr:'LAU', name:'Niki Lauda', fullName:'Niki Lauda', team:'McLaren TAG', color:'#FF8000', isDNF: true },
      { abbr:'WIN', name:'Manfred Winkelhock', fullName:'Manfred Winkelhock', team:'ATS BMW', color:'#888888', isDNF: true },
      { abbr:'MAN', name:'Nigel Mansell', fullName:'Nigel Mansell', team:'Lotus Renault', color:'#000000', isDNF: true },
      { abbr:'PIQ', name:'Nelson Piquet', fullName:'Nelson Piquet', team:'Brabham BMW', color:'#888888', isDNF: true },
      { abbr:'HES', name:'François Hesnault', fullName:'François Hesnault', team:'Ligier Renault', color:'#888888', isDNF: true },
      { abbr:'FAB', name:'Teo Fabi', fullName:'Teo Fabi', team:'Brabham BMW', color:'#888888', isDNF: true },
      { abbr:'CEC', name:'Johnny Cecotto', fullName:'Johnny Cecotto', team:'Toleman Hart', color:'#888888', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     BELGIUM 1998
  ───────────────────────────────────────── */
  {
    id:     'belgium_1998',
    difficulty: 'medium',
    name:   'Belgian Grand Prix',
    year:   1998,
    flag:   '🇧🇪',
    hidden: [1, 3, 5, 7],
    drivers: [
      { abbr:'HIL', name:'Damon Hill', fullName:'Damon Hill', team:'Jordan Mugen Honda', color:'#888888' },
      { abbr:'RSC', name:'Ralf Schumacher', fullName:'Ralf Schumacher', team:'Jordan Mugen Honda', color:'#888888' },
      { abbr:'ALE', name:'Jean Alesi', fullName:'Jean Alesi', team:'Sauber Petronas', color:'#888888' },
      { abbr:'FRE', name:'Heinz-Harald Frentzen', fullName:'Heinz-Harald Frentzen', team:'Williams Mecachrome', color:'#64C4FF' },
      { abbr:'DIN', name:'Pedro Diniz', fullName:'Pedro Diniz', team:'Arrows', color:'#888888' },
      { abbr:'TRU', name:'Jarno Trulli', fullName:'Jarno Trulli', team:'Prost Peugeot', color:'#888888' },
      { abbr:'COU', name:'David Coulthard', fullName:'David Coulthard', team:'McLaren Mercedes', color:'#27F4D2' },
      { abbr:'NAK', name:'Shinji Nakano', fullName:'Shinji Nakano', team:'Minardi Ford', color:'#888888' },
      { abbr:'FIS', name:'Giancarlo Fisichella', fullName:'Giancarlo Fisichella', team:'Benetton Playlife', color:'#27F4D2', isDNF: true },
      { abbr:'MSC', name:'Michael Schumacher', fullName:'Michael Schumacher', team:'Ferrari', color:'#E8002D', isDNF: true },
      { abbr:'IRV', name:'Eddie Irvine', fullName:'Eddie Irvine', team:'Ferrari', color:'#E8002D', isDNF: true },
      { abbr:'TUE', name:'Esteban Tuero', fullName:'Esteban Tuero', team:'Minardi Ford', color:'#888888', isDNF: true },
      { abbr:'VIL', name:'Jacques Villeneuve', fullName:'Jacques Villeneuve', team:'Williams Mecachrome', color:'#64C4FF', isDNF: true },
      { abbr:'TAK', name:'Toranosuke Takagi', fullName:'Toranosuke Takagi', team:'Tyrrell Ford', color:'#5E8FAA', isDNF: true },
      { abbr:'VER', name:'Jos Verstappen', fullName:'Jos Verstappen', team:'Stewart Ford', color:'#888888', isDNF: true },
      { abbr:'HAK', name:'Mika Häkkinen', fullName:'Mika Häkkinen', team:'McLaren Mercedes', color:'#27F4D2', isDNF: true },
      { abbr:'WUR', name:'Alexander Wurz', fullName:'Alexander Wurz', team:'Benetton Playlife', color:'#27F4D2', isDNF: true },
      { abbr:'HER', name:'Johnny Herbert', fullName:'Johnny Herbert', team:'Sauber Petronas', color:'#888888', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     BELGIUM 2000
  ───────────────────────────────────────── */
  {
    id:     'belgium_2000',
    difficulty: 'medium',
    name:   'Belgian Grand Prix',
    year:   2000,
    flag:   '🇧🇪',
    hidden: [1, 3, 5, 8, 11],
    drivers: [
      { abbr:'HAK', name:'Mika Häkkinen', fullName:'Mika Häkkinen', team:'McLaren Mercedes', color:'#27F4D2' },
      { abbr:'MSC', name:'Michael Schumacher', fullName:'Michael Schumacher', team:'Ferrari', color:'#E8002D' },
      { abbr:'RSC', name:'Ralf Schumacher', fullName:'Ralf Schumacher', team:'Williams BMW', color:'#64C4FF' },
      { abbr:'COU', name:'David Coulthard', fullName:'David Coulthard', team:'McLaren Mercedes', color:'#27F4D2' },
      { abbr:'BUT', name:'Jenson Button', fullName:'Jenson Button', team:'Williams BMW', color:'#64C4FF' },
      { abbr:'FRE', name:'Heinz-Harald Frentzen', fullName:'Heinz-Harald Frentzen', team:'Jordan Mugen Honda', color:'#888888' },
      { abbr:'VIL', name:'Jacques Villeneuve', fullName:'Jacques Villeneuve', team:'BAR Honda', color:'#888888' },
      { abbr:'HER', name:'Johnny Herbert', fullName:'Johnny Herbert', team:'Jaguar Cosworth', color:'#229971' },
      { abbr:'SAL', name:'Mika Salo', fullName:'Mika Salo', team:'Sauber Petronas', color:'#888888' },
      { abbr:'IRV', name:'Eddie Irvine', fullName:'Eddie Irvine', team:'Jaguar Cosworth', color:'#229971' },
      { abbr:'DIN', name:'Pedro Diniz', fullName:'Pedro Diniz', team:'Sauber Petronas', color:'#888888' },
      { abbr:'ZON', name:'Ricardo Zonta', fullName:'Ricardo Zonta', team:'BAR Honda', color:'#888888' },
      { abbr:'WUR', name:'Alexander Wurz', fullName:'Alexander Wurz', team:'Benetton Playlife', color:'#27F4D2' },
      { abbr:'GEN', name:'Marc Gené', fullName:'Marc Gené', team:'Minardi Fondmetal', color:'#888888' },
      { abbr:'VER', name:'Jos Verstappen', fullName:'Jos Verstappen', team:'Arrows Supertec', color:'#888888' },
      { abbr:'ROZ', name:'Pedro de la Rosa', fullName:'Pedro de la Rosa', team:'Arrows Supertec', color:'#888888' },
      { abbr:'MAZ', name:'Gaston Mazzacane', fullName:'Gaston Mazzacane', team:'Minardi Fondmetal', color:'#888888' },
      { abbr:'BAR', name:'Rubens Barrichello', fullName:'Rubens Barrichello', team:'Ferrari', color:'#E8002D', isDNF: true },
      { abbr:'ALE', name:'Jean Alesi', fullName:'Jean Alesi', team:'Prost Peugeot', color:'#888888', isDNF: true },
      { abbr:'HEI', name:'Nick Heidfeld', fullName:'Nick Heidfeld', team:'Prost Peugeot', color:'#888888', isDNF: true },
      { abbr:'FIS', name:'Giancarlo Fisichella', fullName:'Giancarlo Fisichella', team:'Benetton Playlife', color:'#27F4D2', isDNF: true },
      { abbr:'TRU', name:'Jarno Trulli', fullName:'Jarno Trulli', team:'Jordan Mugen Honda', color:'#888888', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     ITALY (MONZA) 1967
  ───────────────────────────────────────── */
  {
    id:     'monza_1967',
    difficulty: 'hard',
    name:   'Italian Grand Prix',
    year:   1967,
    flag:   '🇮🇹',
    hidden: [1, 3, 5, 7],
    drivers: [
      { abbr:'SUR', name:'John Surtees', fullName:'John Surtees', team:'Honda', color:'#888888' },
      { abbr:'BRA', name:'Jack Brabham', fullName:'Jack Brabham', team:'Brabham Repco', color:'#888888' },
      { abbr:'CLA', name:'Jim Clark', fullName:'Jim Clark', team:'Lotus Ford', color:'#000000' },
      { abbr:'RIN', name:'Jochen Rindt', fullName:'Jochen Rindt', team:'Cooper Maserati', color:'#888888' },
      { abbr:'SPE', name:'Mike Spence', fullName:'Mike Spence', team:'BRM', color:'#888888' },
      { abbr:'ICK', name:'Jacky Ickx', fullName:'Jacky Ickx', team:'Cooper Maserati', color:'#888888' },
      { abbr:'AMO', name:'Chris Amon', fullName:'Chris Amon', team:'Ferrari', color:'#E8002D' },
      { abbr:'HIL', name:'Graham Hill', fullName:'Graham Hill', team:'Lotus Ford', color:'#000000', isDNF: true },
      { abbr:'BAG', name:'Giancarlo Baghetti', fullName:'Giancarlo Baghetti', team:'Lotus Ford', color:'#000000', isDNF: true },
      { abbr:'SIF', name:'Jo Siffert', fullName:'Jo Siffert', team:'Cooper Maserati', color:'#888888', isDNF: true },
      { abbr:'MCL', name:'Bruce McLaren', fullName:'Bruce McLaren', team:'McLaren BRM', color:'#FF8000', isDNF: true },
      { abbr:'BON', name:'Jo Bonnier', fullName:'Jo Bonnier', team:'Cooper Maserati', color:'#888888', isDNF: true },
      { abbr:'STE', name:'Jackie Stewart', fullName:'Jackie Stewart', team:'BRM', color:'#888888', isDNF: true },
      { abbr:'HUL', name:'Denny Hulme', fullName:'Denny Hulme', team:'Brabham Repco', color:'#888888', isDNF: true },
      { abbr:'LIG', name:'Guy Ligier', fullName:'Guy Ligier', team:'Brabham Repco', color:'#888888', isDNF: true },
      { abbr:'IRW', name:'Chris Irwin', fullName:'Chris Irwin', team:'BRM', color:'#888888', isDNF: true },
      { abbr:'SCA', name:'Ludovico Scarfiotti', fullName:'Ludovico Scarfiotti', team:'Eagle Weslake', color:'#888888', isDNF: true },
      { abbr:'GUR', name:'Dan Gurney', fullName:'Dan Gurney', team:'Eagle Weslake', color:'#888888', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     EUROPE 1993 (Donington)
  ───────────────────────────────────────── */
  {
    id:     'europe_1993',
    difficulty: 'medium',
    name:   'European Grand Prix',
    year:   1993,
    flag:   '🇬🇧',
    hidden: [1, 3, 5, 8, 11],
    drivers: [
      { abbr:'SEN', name:'Ayrton Senna', fullName:'Ayrton Senna', team:'McLaren Ford', color:'#FF8000' },
      { abbr:'HIL', name:'Damon Hill', fullName:'Damon Hill', team:'Williams Renault', color:'#64C4FF' },
      { abbr:'PRO', name:'Alain Prost', fullName:'Alain Prost', team:'Williams Renault', color:'#64C4FF' },
      { abbr:'HER', name:'Johnny Herbert', fullName:'Johnny Herbert', team:'Lotus Ford', color:'#000000' },
      { abbr:'PAT', name:'Riccardo Patrese', fullName:'Riccardo Patrese', team:'Benetton Ford', color:'#27F4D2' },
      { abbr:'BAR', name:'Fabrizio Barbazza', fullName:'Fabrizio Barbazza', team:'Minardi Ford', color:'#888888' },
      { abbr:'CFI', name:'Christian Fittipaldi', fullName:'Christian Fittipaldi', team:'Minardi Ford', color:'#888888' },
      { abbr:'ZAN', name:'Alessandro Zanardi', fullName:'Alessandro Zanardi', team:'Lotus Ford', color:'#000000' },
      { abbr:'COM', name:'Erik Comas', fullName:'Erik Comas', team:'Larrousse Lamborghini', color:'#888888' },
      { abbr:'BRC', name:'Rubens Barrichello', fullName:'Rubens Barrichello', team:'Jordan Hart', color:'#888888', isDNF: true },
      { abbr:'ALB', name:'Michele Alboreto', fullName:'Michele Alboreto', team:'Lola Ferrari', color:'#E8002D' },
      { abbr:'WAR', name:'Derek Warwick', fullName:'Derek Warwick', team:'Footwork Mugen Honda', color:'#888888', isDNF: true },
      { abbr:'BOU', name:'Thierry Boutsen', fullName:'Thierry Boutsen', team:'Jordan Hart', color:'#888888', isDNF: true },
      { abbr:'CES', name:'Andrea de Cesaris', fullName:'Andrea de Cesaris', team:'Tyrrell Yamaha', color:'#888888', isDNF: true },
      { abbr:'ALE', name:'Jean Alesi', fullName:'Jean Alesi', team:'Ferrari', color:'#E8002D', isDNF: true },
      { abbr:'SUZ', name:'Aguri Suzuki', fullName:'Aguri Suzuki', team:'Footwork Mugen Honda', color:'#888888', isDNF: true },
      { abbr:'ALL', name:'Philippe Alliot', fullName:'Philippe Alliot', team:'Larrousse Lamborghini', color:'#888888', isDNF: true },
      { abbr:'MSC', name:'Michael Schumacher', fullName:'Michael Schumacher', team:'Benetton Ford', color:'#27F4D2', isDNF: true },
      { abbr:'BLU', name:'Mark Blundell', fullName:'Mark Blundell', team:'Ligier Renault', color:'#888888', isDNF: true },
      { abbr:'BER', name:'Gerhard Berger', fullName:'Gerhard Berger', team:'Ferrari', color:'#E8002D', isDNF: true },
      { abbr:'JAR', name:'Jyrki Jarvilehto', fullName:'Jyrki Jarvilehto', team:'Sauber', color:'#888888', isDNF: true },
      { abbr:'KAT', name:'Ukyo Katayama', fullName:'Ukyo Katayama', team:'Tyrrell Yamaha', color:'#888888', isDNF: true },
      { abbr:'BRU', name:'Martin Brundle', fullName:'Martin Brundle', team:'Ligier Renault', color:'#888888', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     ITALY (MONZA) 1970
  ───────────────────────────────────────── */
  {
    id:     'monza_1970',
    difficulty: 'hard',
    name:   'Italian Grand Prix',
    year:   1970,
    flag:   '🇮🇹',
    hidden: [1, 3, 5, 7],
    drivers: [
      { abbr:'REG', name:'Clay Regazzoni', fullName:'Clay Regazzoni', team:'Ferrari', color:'#E8002D' },
      { abbr:'STE', name:'Jackie Stewart', fullName:'Jackie Stewart', team:'March Ford', color:'#888888' },
      { abbr:'BEL', name:'Jean-Pierre Beltoise', fullName:'Jean-Pierre Beltoise', team:'Matra', color:'#888888' },
      { abbr:'HUL', name:'Denny Hulme', fullName:'Denny Hulme', team:'McLaren Ford', color:'#FF8000' },
      { abbr:'STO', name:'Rolf Stommelen', fullName:'Rolf Stommelen', team:'Brabham Ford', color:'#888888' },
      { abbr:'CEV', name:'François Cevert', fullName:'François Cevert', team:'March Ford', color:'#888888' },
      { abbr:'AMO', name:'Chris Amon', fullName:'Chris Amon', team:'March Ford', color:'#888888' },
      { abbr:'ADA', name:'Andrea de Adamich', fullName:'Andrea de Adamich', team:'McLaren Alfa Romeo', color:'#888888' },
      { abbr:'GET', name:'Peter Gethin', fullName:'Peter Gethin', team:'McLaren Ford', color:'#FF8000', isDNF: true },
      { abbr:'OLI', name:'Jackie Oliver', fullName:'Jackie Oliver', team:'BRM', color:'#888888', isDNF: true },
      { abbr:'PET', name:'Ronnie Peterson', fullName:'Ronnie Peterson', team:'March Ford', color:'#888888', isDNF: true },
      { abbr:'BRA', name:'Jack Brabham', fullName:'Jack Brabham', team:'Brabham Ford', color:'#888888', isDNF: true },
      { abbr:'ICK', name:'Jacky Ickx', fullName:'Jacky Ickx', team:'Ferrari', color:'#E8002D', isDNF: true },
      { abbr:'EAT', name:'George Eaton', fullName:'George Eaton', team:'BRM', color:'#888888', isDNF: true },
      { abbr:'SCH', name:'Tim Schenken', fullName:'Tim Schenken', team:'De Tomaso Ford', color:'#888888', isDNF: true },
      { abbr:'PES', name:'Henri Pescarolo', fullName:'Henri Pescarolo', team:'Matra', color:'#888888', isDNF: true },
      { abbr:'GIU', name:'Ignazio Giunti', fullName:'Ignazio Giunti', team:'Ferrari', color:'#E8002D', isDNF: true },
      { abbr:'ROD', name:'Pedro Rodriguez', fullName:'Pedro Rodriguez', team:'BRM', color:'#888888', isDNF: true },
      { abbr:'SIF', name:'Jo Siffert', fullName:'Jo Siffert', team:'March Ford', color:'#888888', isDNF: true },
      { abbr:'SUR', name:'John Surtees', fullName:'John Surtees', team:'Surtees Ford', color:'#888888', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     BAHRAIN 2005
  ───────────────────────────────────────── */
  {
    id:     'bahrain_2005',
    difficulty: 'medium',
    name:   'Bahrain Grand Prix',
    year:   2005,
    flag:   '🇧🇭',
    hidden: [1, 3, 5, 8, 11],
    drivers: [
      { abbr:'ALO', name:'Fernando Alonso', fullName:'Fernando Alonso', team:'Renault', color:'#FFD800' },
      { abbr:'TRU', name:'Jarno Trulli', fullName:'Jarno Trulli', team:'Toyota', color:'#888888' },
      { abbr:'RAI', name:'Kimi Räikkönen', fullName:'Kimi Räikkönen', team:'McLaren Mercedes', color:'#27F4D2' },
      { abbr:'RSC', name:'Ralf Schumacher', fullName:'Ralf Schumacher', team:'Toyota', color:'#888888' },
      { abbr:'ROZ', name:'Pedro de la Rosa', fullName:'Pedro de la Rosa', team:'McLaren Mercedes', color:'#27F4D2' },
      { abbr:'WEB', name:'Mark Webber', fullName:'Mark Webber', team:'Williams BMW', color:'#64C4FF' },
      { abbr:'MAS', name:'Felipe Massa', fullName:'Felipe Massa', team:'Sauber Petronas', color:'#888888' },
      { abbr:'COU', name:'David Coulthard', fullName:'David Coulthard', team:'RBR Cosworth', color:'#3671C6' },
      { abbr:'BAR', name:'Rubens Barrichello', fullName:'Rubens Barrichello', team:'Ferrari', color:'#E8002D' },
      { abbr:'MON', name:'Tiago Monteiro', fullName:'Tiago Monteiro', team:'Jordan Toyota', color:'#888888' },
      { abbr:'VIL', name:'Jacques Villeneuve', fullName:'Jacques Villeneuve', team:'Sauber Petronas', color:'#888888', isDNF: true },
      { abbr:'FRI', name:'Patrick Friesacher', fullName:'Patrick Friesacher', team:'Minardi Cosworth', color:'#888888' },
      { abbr:'ALB', name:'Christijan Albers', fullName:'Christijan Albers', team:'Minardi Cosworth', color:'#888888' },
      { abbr:'BUT', name:'Jenson Button', fullName:'Jenson Button', team:'BAR Honda', color:'#888888', isDNF: true },
      { abbr:'SAT', name:'Takuma Sato', fullName:'Takuma Sato', team:'BAR Honda', color:'#888888', isDNF: true },
      { abbr:'HEI', name:'Nick Heidfeld', fullName:'Nick Heidfeld', team:'Williams BMW', color:'#64C4FF', isDNF: true },
      { abbr:'MSC', name:'Michael Schumacher', fullName:'Michael Schumacher', team:'Ferrari', color:'#E8002D', isDNF: true },
      { abbr:'FIS', name:'Giancarlo Fisichella', fullName:'Giancarlo Fisichella', team:'Renault', color:'#FFD800', isDNF: true },
      { abbr:'KAR', name:'Narain Karthikeyan', fullName:'Narain Karthikeyan', team:'Jordan Toyota', color:'#888888', isDNF: true },
      { abbr:'KLI', name:'Christian Klien', fullName:'Christian Klien', team:'RBR Cosworth', color:'#3671C6', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     AUSTRALIA 1986
  ───────────────────────────────────────── */
  {
    id:     'australia_1986',
    difficulty: 'hard',
    name:   'Australian Grand Prix',
    year:   1986,
    flag:   '🇦🇺',
    hidden: [1, 3, 5, 7, 10],
    drivers: [
      { abbr:'PRO', name:'Alain Prost', fullName:'Alain Prost', team:'McLaren TAG', color:'#FF8000' },
      { abbr:'PIQ', name:'Nelson Piquet', fullName:'Nelson Piquet', team:'Williams Honda', color:'#64C4FF' },
      { abbr:'JOH', name:'Stefan Johansson', fullName:'Stefan Johansson', team:'Ferrari', color:'#E8002D' },
      { abbr:'BRU', name:'Martin Brundle', fullName:'Martin Brundle', team:'Tyrrell Renault', color:'#5E8FAA' },
      { abbr:'STR', name:'Philippe Streiff', fullName:'Philippe Streiff', team:'Tyrrell Renault', color:'#5E8FAA' },
      { abbr:'DUM', name:'Johnny Dumfries', fullName:'Johnny Dumfries', team:'Lotus Renault', color:'#000000' },
      { abbr:'ARN', name:'René Arnoux', fullName:'René Arnoux', team:'Ligier Renault', color:'#888888' },
      { abbr:'ALL', name:'Philippe Alliot', fullName:'Philippe Alliot', team:'Ligier Renault', color:'#888888' },
      { abbr:'PAL', name:'Jonathan Palmer', fullName:'Jonathan Palmer', team:'Zakspeed', color:'#888888' },
      { abbr:'FAB', name:'Teo Fabi', fullName:'Teo Fabi', team:'Benetton BMW', color:'#27F4D2' },
      { abbr:'TAM', name:'Patrick Tambay', fullName:'Patrick Tambay', team:'Lola Ford', color:'#888888', isDNF: true },
      { abbr:'MAN', name:'Nigel Mansell', fullName:'Nigel Mansell', team:'Williams Honda', color:'#64C4FF', isDNF: true },
      { abbr:'PAT', name:'Riccardo Patrese', fullName:'Riccardo Patrese', team:'Brabham BMW', color:'#888888', isDNF: true },
      { abbr:'ROS', name:'Keke Rosberg', fullName:'Keke Rosberg', team:'McLaren TAG', color:'#FF8000', isDNF: true },
      { abbr:'BER', name:'Allen Berg', fullName:'Allen Berg', team:'Osella Alfa Romeo', color:'#888888', isDNF: true },
      { abbr:'WAR', name:'Derek Warwick', fullName:'Derek Warwick', team:'Brabham BMW', color:'#888888', isDNF: true },
      { abbr:'DAN', name:'Christian Danner', fullName:'Christian Danner', team:'Arrows BMW', color:'#888888', isDNF: true },
      { abbr:'BOU', name:'Thierry Boutsen', fullName:'Thierry Boutsen', team:'Arrows BMW', color:'#888888', isDNF: true },
      { abbr:'SEN', name:'Ayrton Senna', fullName:'Ayrton Senna', team:'Lotus Renault', color:'#000000', isDNF: true },
      { abbr:'BER2', name:'Gerhard Berger', fullName:'Gerhard Berger', team:'Benetton BMW', color:'#27F4D2', isDNF: true },
      { abbr:'CES', name:'Andrea de Cesaris', fullName:'Andrea de Cesaris', team:'Minardi Motori', color:'#888888', isDNF: true },
      { abbr:'ROT', name:'Huub Rothengatter', fullName:'Huub Rothengatter', team:'Zakspeed', color:'#888888', isDNF: true },
      { abbr:'JON', name:'Alan Jones', fullName:'Alan Jones', team:'Lola Ford', color:'#888888', isDNF: true },
      { abbr:'NAN', name:'Alessandro Nannini', fullName:'Alessandro Nannini', team:'Minardi Motori', color:'#888888', isDNF: true },
      { abbr:'GHI', name:'Piercarlo Ghinzani', fullName:'Piercarlo Ghinzani', team:'Osella Alfa Romeo', color:'#888888', isDNF: true },
      { abbr:'ALB', name:'Michele Alboreto', fullName:'Michele Alboreto', team:'Ferrari', color:'#E8002D', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     BRAZIL 2012
  ───────────────────────────────────────── */
  {
    id:     'brazil_2012',
    difficulty: 'medium',
    name:   'Brazilian Grand Prix',
    year:   2012,
    flag:   '🇧🇷',
    hidden: [1, 3, 5, 7, 10, 13],
    drivers: [
      { abbr:'BUT', name:'Jenson Button', fullName:'Jenson Button', team:'McLaren Mercedes', color:'#FF8000' },
      { abbr:'ALO', name:'Fernando Alonso', fullName:'Fernando Alonso', team:'Ferrari', color:'#E8002D' },
      { abbr:'MAS', name:'Felipe Massa', fullName:'Felipe Massa', team:'Ferrari', color:'#E8002D' },
      { abbr:'WEB', name:'Mark Webber', fullName:'Mark Webber', team:'Red Bull Renault', color:'#3671C6' },
      { abbr:'HUL', name:'Nico Hülkenberg', fullName:'Nico Hülkenberg', team:'Force India Mercedes', color:'#FF87BC' },
      { abbr:'VET', name:'Sebastian Vettel', fullName:'Sebastian Vettel', team:'Red Bull Renault', color:'#3671C6' },
      { abbr:'MSC', name:'Michael Schumacher', fullName:'Michael Schumacher', team:'Mercedes', color:'#27F4D2' },
      { abbr:'VER', name:'Jean-Eric Vergne', fullName:'Jean-Eric Vergne', team:'STR Ferrari', color:'#5E8FAA' },
      { abbr:'KOB', name:'Kamui Kobayashi', fullName:'Kamui Kobayashi', team:'Sauber Ferrari', color:'#888888' },
      { abbr:'RAI', name:'Kimi Räikkönen', fullName:'Kimi Räikkönen', team:'Lotus Renault', color:'#000000' },
      { abbr:'PET', name:'Vitaly Petrov', fullName:'Vitaly Petrov', team:'Caterham Renault', color:'#888888' },
      { abbr:'PIC', name:'Charles Pic', fullName:'Charles Pic', team:'Marussia Cosworth', color:'#888888' },
      { abbr:'RIC', name:'Daniel Ricciardo', fullName:'Daniel Ricciardo', team:'STR Ferrari', color:'#5E8FAA' },
      { abbr:'KOV', name:'Heikki Kovalainen', fullName:'Heikki Kovalainen', team:'Caterham Renault', color:'#888888' },
      { abbr:'ROS', name:'Nico Rosberg', fullName:'Nico Rosberg', team:'Mercedes', color:'#27F4D2' },
      { abbr:'GLO', name:'Timo Glock', fullName:'Timo Glock', team:'Marussia Cosworth', color:'#888888' },
      { abbr:'DLR', name:'Pedro de la Rosa', fullName:'Pedro de la Rosa', team:'HRT Cosworth', color:'#888888' },
      { abbr:'KAR', name:'Narain Karthikeyan', fullName:'Narain Karthikeyan', team:'HRT Cosworth', color:'#888888' },
      { abbr:'DIR', name:'Paul di Resta', fullName:'Paul di Resta', team:'Force India Mercedes', color:'#FF87BC', isDNF: true },
      { abbr:'HAM', name:'Lewis Hamilton', fullName:'Lewis Hamilton', team:'McLaren Mercedes', color:'#FF8000', isDNF: true },
      { abbr:'GRO', name:'Romain Grosjean', fullName:'Romain Grosjean', team:'Lotus Renault', color:'#000000', isDNF: true },
      { abbr:'MAL', name:'Pastor Maldonado', fullName:'Pastor Maldonado', team:'Williams Renault', color:'#64C4FF', isDNF: true },
      { abbr:'SEN', name:'Bruno Senna', fullName:'Bruno Senna', team:'Williams Renault', color:'#64C4FF', isDNF: true },
      { abbr:'PER', name:'Sergio Perez', fullName:'Sergio Perez', team:'Sauber Ferrari', color:'#888888', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     MONACO 1996
  ───────────────────────────────────────── */
  {
    id:     'monaco_1996',
    difficulty: 'medium',
    name:   'Monaco Grand Prix',
    year:   1996,
    flag:   '🇲🇨',
    hidden: [1, 3, 5, 7],
    drivers: [
      { abbr:'PAN', name:'Olivier Panis', fullName:'Olivier Panis', team:'Ligier Mugen Honda', color:'#888888' },
      { abbr:'COU', name:'David Coulthard', fullName:'David Coulthard', team:'McLaren Mercedes', color:'#27F4D2' },
      { abbr:'HER', name:'Johnny Herbert', fullName:'Johnny Herbert', team:'Sauber Ford', color:'#888888' },
      { abbr:'FRE', name:'Heinz-Harald Frentzen', fullName:'Heinz-Harald Frentzen', team:'Sauber Ford', color:'#888888' },
      { abbr:'SAL', name:'Mika Salo', fullName:'Mika Salo', team:'Tyrrell Yamaha', color:'#888888', isDNF: true },
      { abbr:'HAK', name:'Mika Häkkinen', fullName:'Mika Häkkinen', team:'McLaren Mercedes', color:'#27F4D2', isDNF: true },
      { abbr:'IRV', name:'Eddie Irvine', fullName:'Eddie Irvine', team:'Ferrari', color:'#E8002D', isDNF: true },
      { abbr:'VIL', name:'Jacques Villeneuve', fullName:'Jacques Villeneuve', team:'Williams Renault', color:'#64C4FF', isDNF: true },
      { abbr:'ALE', name:'Jean Alesi', fullName:'Jean Alesi', team:'Benetton Renault', color:'#27F4D2', isDNF: true },
      { abbr:'BAD', name:'Luca Badoer', fullName:'Luca Badoer', team:'Forti Ford', color:'#888888', isDNF: true },
      { abbr:'HIL', name:'Damon Hill', fullName:'Damon Hill', team:'Williams Renault', color:'#64C4FF', isDNF: true },
      { abbr:'BRU', name:'Martin Brundle', fullName:'Martin Brundle', team:'Jordan Peugeot', color:'#888888', isDNF: true },
      { abbr:'BER', name:'Gerhard Berger', fullName:'Gerhard Berger', team:'Benetton Renault', color:'#27F4D2', isDNF: true },
      { abbr:'DIN', name:'Pedro Diniz', fullName:'Pedro Diniz', team:'Ligier Mugen Honda', color:'#888888', isDNF: true },
      { abbr:'ROS', name:'Ricardo Rosset', fullName:'Ricardo Rosset', team:'Footwork Hart', color:'#888888', isDNF: true },
      { abbr:'KAT', name:'Ukyo Katayama', fullName:'Ukyo Katayama', team:'Tyrrell Yamaha', color:'#888888', isDNF: true },
      { abbr:'MSC', name:'Michael Schumacher', fullName:'Michael Schumacher', team:'Ferrari', color:'#E8002D', isDNF: true },
      { abbr:'VER', name:'Jos Verstappen', fullName:'Jos Verstappen', team:'Footwork Hart', color:'#888888', isDNF: true },
      { abbr:'BAR', name:'Rubens Barrichello', fullName:'Rubens Barrichello', team:'Jordan Peugeot', color:'#888888', isDNF: true },
      { abbr:'LAM', name:'Pedro Lamy', fullName:'Pedro Lamy', team:'Minardi Ford', color:'#888888', isDNF: true },
      { abbr:'FIS', name:'Giancarlo Fisichella', fullName:'Giancarlo Fisichella', team:'Minardi Ford', color:'#888888', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     BRAZIL 2003
  ───────────────────────────────────────── */
  {
    id:     'brazil_2003',
    difficulty: 'medium',
    name:   'Brazilian Grand Prix',
    year:   2003,
    flag:   '🇧🇷',
    hidden: [1, 3, 5, 8],
    drivers: [
      { abbr:'FIS', name:'Giancarlo Fisichella', fullName:'Giancarlo Fisichella', team:'Jordan Ford', color:'#888888' },
      { abbr:'RAI', name:'Kimi Räikkönen', fullName:'Kimi Räikkönen', team:'McLaren Mercedes', color:'#27F4D2' },
      { abbr:'ALO', name:'Fernando Alonso', fullName:'Fernando Alonso', team:'Renault', color:'#FFD800' },
      { abbr:'COU', name:'David Coulthard', fullName:'David Coulthard', team:'McLaren Mercedes', color:'#27F4D2' },
      { abbr:'FRE', name:'Heinz-Harald Frentzen', fullName:'Heinz-Harald Frentzen', team:'Sauber Petronas', color:'#888888' },
      { abbr:'VIL', name:'Jacques Villeneuve', fullName:'Jacques Villeneuve', team:'BAR Honda', color:'#888888' },
      { abbr:'RSC', name:'Ralf Schumacher', fullName:'Ralf Schumacher', team:'Williams BMW', color:'#64C4FF' },
      { abbr:'TRU', name:'Jarno Trulli', fullName:'Jarno Trulli', team:'Renault', color:'#FFD800' },
      { abbr:'WEB', name:'Mark Webber', fullName:'Mark Webber', team:'Jaguar Cosworth', color:'#229971', isDNF: true },
      { abbr:'MAT', name:'Cristiano da Matta', fullName:'Cristiano da Matta', team:'Toyota', color:'#888888' },
      { abbr:'BAR', name:'Rubens Barrichello', fullName:'Rubens Barrichello', team:'Ferrari', color:'#E8002D', isDNF: true },
      { abbr:'BUT', name:'Jenson Button', fullName:'Jenson Button', team:'BAR Honda', color:'#888888', isDNF: true },
      { abbr:'VER', name:'Jos Verstappen', fullName:'Jos Verstappen', team:'Minardi Cosworth', color:'#888888', isDNF: true },
      { abbr:'MSC', name:'Michael Schumacher', fullName:'Michael Schumacher', team:'Ferrari', color:'#E8002D', isDNF: true },
      { abbr:'MON', name:'Juan Pablo Montoya', fullName:'Juan Pablo Montoya', team:'Williams BMW', color:'#64C4FF', isDNF: true },
      { abbr:'PIZ', name:'Antonio Pizzonia', fullName:'Antonio Pizzonia', team:'Jaguar Cosworth', color:'#229971', isDNF: true },
      { abbr:'PAN', name:'Olivier Panis', fullName:'Olivier Panis', team:'Toyota', color:'#888888', isDNF: true },
      { abbr:'FIR', name:'Ralph Firman', fullName:'Ralph Firman', team:'Jordan Ford', color:'#888888', isDNF: true },
      { abbr:'WIL', name:'Justin Wilson', fullName:'Justin Wilson', team:'Minardi Cosworth', color:'#888888', isDNF: true },
      { abbr:'HEI', name:'Nick Heidfeld', fullName:'Nick Heidfeld', team:'Sauber Petronas', color:'#888888', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     MONACO 1982
  ───────────────────────────────────────── */
  {
    id:     'monaco_1982',
    difficulty: 'hard',
    name:   'Monaco Grand Prix',
    year:   1982,
    flag:   '🇲🇨',
    hidden: [1, 3, 5, 7],
    drivers: [
      { abbr:'PAT', name:'Riccardo Patrese', fullName:'Riccardo Patrese', team:'Brabham Ford', color:'#888888' },
      { abbr:'PIR', name:'Didier Pironi', fullName:'Didier Pironi', team:'Ferrari', color:'#E8002D', isDNF: true },
      { abbr:'CES', name:'Andrea de Cesaris', fullName:'Andrea de Cesaris', team:'Alfa Romeo', color:'#C92D4B', isDNF: true },
      { abbr:'MAN', name:'Nigel Mansell', fullName:'Nigel Mansell', team:'Lotus Ford', color:'#000000' },
      { abbr:'DEA', name:'Elio de Angelis', fullName:'Elio de Angelis', team:'Lotus Ford', color:'#000000' },
      { abbr:'DAL', name:'Derek Daly', fullName:'Derek Daly', team:'Williams Ford', color:'#64C4FF', isDNF: true },
      { abbr:'PRO', name:'Alain Prost', fullName:'Alain Prost', team:'Renault', color:'#FFD800', isDNF: true },
      { abbr:'HEN', name:'Brian Henton', fullName:'Brian Henton', team:'Tyrrell Ford', color:'#5E8FAA' },
      { abbr:'SUR', name:'Marc Surer', fullName:'Marc Surer', team:'Arrows Ford', color:'#888888' },
      { abbr:'ALB', name:'Michele Alboreto', fullName:'Michele Alboreto', team:'Tyrrell Ford', color:'#5E8FAA', isDNF: true },
      { abbr:'ROS', name:'Keke Rosberg', fullName:'Keke Rosberg', team:'Williams Ford', color:'#64C4FF', isDNF: true },
      { abbr:'LAU', name:'Niki Lauda', fullName:'Niki Lauda', team:'McLaren Ford', color:'#FF8000', isDNF: true },
      { abbr:'PIQ', name:'Nelson Piquet', fullName:'Nelson Piquet', team:'Brabham BMW', color:'#888888', isDNF: true },
      { abbr:'WAT', name:'John Watson', fullName:'John Watson', team:'McLaren Ford', color:'#FF8000', isDNF: true },
      { abbr:'WIN', name:'Manfred Winkelhock', fullName:'Manfred Winkelhock', team:'ATS Ford', color:'#888888', isDNF: true },
      { abbr:'LAF', name:'Jacques Laffite', fullName:'Jacques Laffite', team:'Ligier Matra', color:'#888888', isDNF: true },
      { abbr:'CHE', name:'Eddie Cheever', fullName:'Eddie Cheever', team:'Ligier Matra', color:'#888888', isDNF: true },
      { abbr:'SAL', name:'Eliseo Salazar', fullName:'Eliseo Salazar', team:'ATS Ford', color:'#888888', isDNF: true },
      { abbr:'ARN', name:'René Arnoux', fullName:'René Arnoux', team:'Renault', color:'#FFD800', isDNF: true },
      { abbr:'GIA', name:'Bruno Giacomelli', fullName:'Bruno Giacomelli', team:'Alfa Romeo', color:'#C92D4B', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     CANADA 2011
  ───────────────────────────────────────── */
  {
    id:     'canada_2011',
    difficulty: 'medium',
    name:   'Canadian Grand Prix',
    year:   2011,
    flag:   '🇨🇦',
    hidden: [1, 3, 5, 7, 10],
    drivers: [
      { abbr:'BUT', name:'Jenson Button', fullName:'Jenson Button', team:'McLaren Mercedes', color:'#FF8000' },
      { abbr:'VET', name:'Sebastian Vettel', fullName:'Sebastian Vettel', team:'Red Bull Renault', color:'#3671C6' },
      { abbr:'WEB', name:'Mark Webber', fullName:'Mark Webber', team:'Red Bull Renault', color:'#3671C6' },
      { abbr:'MSC', name:'Michael Schumacher', fullName:'Michael Schumacher', team:'Mercedes', color:'#27F4D2' },
      { abbr:'PET', name:'Vitaly Petrov', fullName:'Vitaly Petrov', team:'Renault', color:'#FFD800' },
      { abbr:'MAS', name:'Felipe Massa', fullName:'Felipe Massa', team:'Ferrari', color:'#E8002D' },
      { abbr:'KOB', name:'Kamui Kobayashi', fullName:'Kamui Kobayashi', team:'Sauber Ferrari', color:'#888888' },
      { abbr:'ALG', name:'Jaime Alguersuari', fullName:'Jaime Alguersuari', team:'STR Ferrari', color:'#5E8FAA' },
      { abbr:'BAR', name:'Rubens Barrichello', fullName:'Rubens Barrichello', team:'Williams Cosworth', color:'#64C4FF' },
      { abbr:'BUE', name:'Sebastien Buemi', fullName:'Sebastien Buemi', team:'STR Ferrari', color:'#5E8FAA' },
      { abbr:'ROS', name:'Nico Rosberg', fullName:'Nico Rosberg', team:'Mercedes', color:'#27F4D2' },
      { abbr:'DLR', name:'Pedro de la Rosa', fullName:'Pedro de la Rosa', team:'Sauber Ferrari', color:'#888888' },
      { abbr:'LIU', name:'Vitantonio Liuzzi', fullName:'Vitantonio Liuzzi', team:'HRT Cosworth', color:'#888888' },
      { abbr:'DAM', name:"Jérôme d'Ambrosio", fullName:"Jérôme d'Ambrosio", team:'Virgin Cosworth', color:'#888888' },
      { abbr:'GLO', name:'Timo Glock', fullName:'Timo Glock', team:'Virgin Cosworth', color:'#888888' },
      { abbr:'TRU', name:'Jarno Trulli', fullName:'Jarno Trulli', team:'Lotus Renault', color:'#000000' },
      { abbr:'KAR', name:'Narain Karthikeyan', fullName:'Narain Karthikeyan', team:'HRT Cosworth', color:'#888888' },
      { abbr:'DIR', name:'Paul di Resta', fullName:'Paul di Resta', team:'Force India Mercedes', color:'#FF87BC', isDNF: true },
      { abbr:'MAL', name:'Pastor Maldonado', fullName:'Pastor Maldonado', team:'Williams Cosworth', color:'#64C4FF', isDNF: true },
      { abbr:'HEI', name:'Nick Heidfeld', fullName:'Nick Heidfeld', team:'Renault', color:'#FFD800', isDNF: true },
      { abbr:'SUT', name:'Adrian Sutil', fullName:'Adrian Sutil', team:'Force India Mercedes', color:'#FF87BC', isDNF: true },
      { abbr:'ALO', name:'Fernando Alonso', fullName:'Fernando Alonso', team:'Ferrari', color:'#E8002D', isDNF: true },
      { abbr:'KOV', name:'Heikki Kovalainen', fullName:'Heikki Kovalainen', team:'Lotus Renault', color:'#000000', isDNF: true },
      { abbr:'HAM', name:'Lewis Hamilton', fullName:'Lewis Hamilton', team:'McLaren Mercedes', color:'#FF8000', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     GERMANY (HOCKENHEIM) 2019
  ───────────────────────────────────────── */
  {
    id:     'germany_2019',
    difficulty: 'easy',
    name:   'German Grand Prix',
    year:   2019,
    flag:   '🇩🇪',
    hidden: [1, 3, 5, 7, 10],
    drivers: [
      { abbr:'VER', name:'Max Verstappen', fullName:'Max Verstappen', team:'Red Bull Racing Honda', color:'#3671C6' },
      { abbr:'VET', name:'Sebastian Vettel', fullName:'Sebastian Vettel', team:'Ferrari', color:'#E8002D' },
      { abbr:'KVY', name:'Daniil Kvyat', fullName:'Daniil Kvyat', team:'Toro Rosso Honda', color:'#5E8FAA' },
      { abbr:'STR', name:'Lance Stroll', fullName:'Lance Stroll', team:'Racing Point Mercedes', color:'#F596C8' },
      { abbr:'SAI', name:'Carlos Sainz', fullName:'Carlos Sainz', team:'McLaren Renault', color:'#FF8000' },
      { abbr:'ALB', name:'Alex Albon', fullName:'Alex Albon', team:'Toro Rosso Honda', color:'#5E8FAA' },
      { abbr:'GRO', name:'Romain Grosjean', fullName:'Romain Grosjean', team:'Haas Ferrari', color:'#B6BABD' },
      { abbr:'MAG', name:'Kevin Magnussen', fullName:'Kevin Magnussen', team:'Haas Ferrari', color:'#B6BABD' },
      { abbr:'HAM', name:'Lewis Hamilton', fullName:'Lewis Hamilton', team:'Mercedes', color:'#27F4D2' },
      { abbr:'KUB', name:'Robert Kubica', fullName:'Robert Kubica', team:'Williams Mercedes', color:'#64C4FF' },
      { abbr:'RUS', name:'George Russell', fullName:'George Russell', team:'Williams Mercedes', color:'#64C4FF' },
      { abbr:'RAI', name:'Kimi Räikkönen', fullName:'Kimi Räikkönen', team:'Alfa Romeo Racing Ferrari', color:'#C92D4B' },
      { abbr:'GIO', name:'Antonio Giovinazzi', fullName:'Antonio Giovinazzi', team:'Alfa Romeo Racing Ferrari', color:'#C92D4B' },
      { abbr:'GAS', name:'Pierre Gasly', fullName:'Pierre Gasly', team:'Red Bull Racing Honda', color:'#3671C6', isDNF: true },
      { abbr:'BOT', name:'Valtteri Bottas', fullName:'Valtteri Bottas', team:'Mercedes', color:'#27F4D2', isDNF: true },
      { abbr:'HUL', name:'Nico Hülkenberg', fullName:'Nico Hülkenberg', team:'Renault', color:'#FFD800', isDNF: true },
      { abbr:'LEC', name:'Charles Leclerc', fullName:'Charles Leclerc', team:'Ferrari', color:'#E8002D', isDNF: true },
      { abbr:'NOR', name:'Lando Norris', fullName:'Lando Norris', team:'McLaren Renault', color:'#FF8000', isDNF: true },
      { abbr:'RIC', name:'Daniel Ricciardo', fullName:'Daniel Ricciardo', team:'Renault', color:'#FFD800', isDNF: true },
      { abbr:'PER', name:'Sergio Perez', fullName:'Sergio Perez', team:'Racing Point Mercedes', color:'#F596C8', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     SAN MARINO 1989
  ───────────────────────────────────────── */
  {
    id:     'san_marino_1989',
    difficulty: 'hard',
    name:   'San Marino Grand Prix',
    year:   1989,
    flag:   '🇮🇹',
    hidden: [1, 3, 5, 7],
    drivers: [
      { abbr:'SEN', name:'Ayrton Senna', fullName:'Ayrton Senna', team:'McLaren Honda', color:'#FF8000' },
      { abbr:'PRO', name:'Alain Prost', fullName:'Alain Prost', team:'McLaren Honda', color:'#FF8000' },
      { abbr:'NAN', name:'Alessandro Nannini', fullName:'Alessandro Nannini', team:'Benetton Ford', color:'#27F4D2' },
      { abbr:'BOU', name:'Thierry Boutsen', fullName:'Thierry Boutsen', team:'Williams Renault', color:'#64C4FF' },
      { abbr:'WAR', name:'Derek Warwick', fullName:'Derek Warwick', team:'Arrows Ford', color:'#888888' },
      { abbr:'PAL', name:'Jonathan Palmer', fullName:'Jonathan Palmer', team:'Tyrrell Ford', color:'#5E8FAA' },
      { abbr:'CAF', name:'Alex Caffi', fullName:'Alex Caffi', team:'Dallara Ford', color:'#888888' },
      { abbr:'TAR', name:'Gabriele Tarquini', fullName:'Gabriele Tarquini', team:'AGS Ford', color:'#888888' },
      { abbr:'CHE', name:'Eddie Cheever', fullName:'Eddie Cheever', team:'Arrows Ford', color:'#888888' },
      { abbr:'CES', name:'Andrea de Cesaris', fullName:'Andrea de Cesaris', team:'Dallara Ford', color:'#888888' },
      { abbr:'HER', name:'Johnny Herbert', fullName:'Johnny Herbert', team:'Benetton Ford', color:'#27F4D2' },
      { abbr:'LAR', name:'Nicola Larini', fullName:'Nicola Larini', team:'Osella Ford', color:'#888888', isDNF: true },
      { abbr:'BRU', name:'Martin Brundle', fullName:'Martin Brundle', team:'Brabham Judd', color:'#888888', isDNF: true },
      { abbr:'NAK', name:'Satoru Nakajima', fullName:'Satoru Nakajima', team:'Lotus Judd', color:'#000000', isDNF: true },
      { abbr:'PER', name:'Luis Pérez-Sala', fullName:'Luis Pérez-Sala', team:'Minardi Ford', color:'#888888', isDNF: true },
      { abbr:'GUG', name:'Maurício Gugelmin', fullName:'Maurício Gugelmin', team:'March Judd', color:'#888888', isDNF: true },
      { abbr:'PIQ', name:'Nelson Piquet', fullName:'Nelson Piquet', team:'Lotus Judd', color:'#000000', isDNF: true },
      { abbr:'MAN', name:'Nigel Mansell', fullName:'Nigel Mansell', team:'Ferrari', color:'#E8002D', isDNF: true },
      { abbr:'PAT', name:'Riccardo Patrese', fullName:'Riccardo Patrese', team:'Williams Renault', color:'#64C4FF', isDNF: true },
      { abbr:'MOD', name:'Stefano Modena', fullName:'Stefano Modena', team:'Brabham Judd', color:'#888888', isDNF: true },
      { abbr:'MAR', name:'Pierluigi Martini', fullName:'Pierluigi Martini', team:'Minardi Ford', color:'#888888', isDNF: true },
      { abbr:'GRO', name:'Olivier Grouillard', fullName:'Olivier Grouillard', team:'Ligier Ford', color:'#888888', isDNF: true },
      { abbr:'BER', name:'Gerhard Berger', fullName:'Gerhard Berger', team:'Ferrari', color:'#E8002D', isDNF: true },
      { abbr:'CAP', name:'Ivan Capelli', fullName:'Ivan Capelli', team:'March Judd', color:'#888888', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     GERMANY (NÜRBURGRING) 2007
  ───────────────────────────────────────── */
  {
    id:     'germany_2007',
    difficulty: 'medium',
    name:   'German Grand Prix',
    year:   2007,
    flag:   '🇩🇪',
    hidden: [1, 3, 5, 8],
    drivers: [
      { abbr:'ALO', name:'Fernando Alonso', fullName:'Fernando Alonso', team:'McLaren Mercedes', color:'#27F4D2' },
      { abbr:'MAS', name:'Felipe Massa', fullName:'Felipe Massa', team:'Ferrari', color:'#E8002D' },
      { abbr:'WEB', name:'Mark Webber', fullName:'Mark Webber', team:'Red Bull Renault', color:'#3671C6' },
      { abbr:'WUR', name:'Alexander Wurz', fullName:'Alexander Wurz', team:'Williams Toyota', color:'#64C4FF' },
      { abbr:'COU', name:'David Coulthard', fullName:'David Coulthard', team:'Red Bull Renault', color:'#3671C6' },
      { abbr:'HEI', name:'Nick Heidfeld', fullName:'Nick Heidfeld', team:'Sauber BMW', color:'#888888' },
      { abbr:'KUB', name:'Robert Kubica', fullName:'Robert Kubica', team:'Sauber BMW', color:'#888888' },
      { abbr:'KOV', name:'Heikki Kovalainen', fullName:'Heikki Kovalainen', team:'Renault', color:'#FFD800' },
      { abbr:'HAM', name:'Lewis Hamilton', fullName:'Lewis Hamilton', team:'McLaren Mercedes', color:'#27F4D2' },
      { abbr:'FIS', name:'Giancarlo Fisichella', fullName:'Giancarlo Fisichella', team:'Renault', color:'#FFD800' },
      { abbr:'BAR', name:'Rubens Barrichello', fullName:'Rubens Barrichello', team:'Honda', color:'#888888' },
      { abbr:'DAV', name:'Anthony Davidson', fullName:'Anthony Davidson', team:'Super Aguri Honda', color:'#888888' },
      { abbr:'TRU', name:'Jarno Trulli', fullName:'Jarno Trulli', team:'Toyota', color:'#888888' },
      { abbr:'RAI', name:'Kimi Räikkönen', fullName:'Kimi Räikkönen', team:'Ferrari', color:'#E8002D', isDNF: true },
      { abbr:'SAT', name:'Takuma Sato', fullName:'Takuma Sato', team:'Super Aguri Honda', color:'#888888', isDNF: true },
      { abbr:'RSC', name:'Ralf Schumacher', fullName:'Ralf Schumacher', team:'Toyota', color:'#888888', isDNF: true },
      { abbr:'WIN', name:'Markus Winkelhock', fullName:'Markus Winkelhock', team:'Spyker Ferrari', color:'#888888', isDNF: true },
      { abbr:'BUT', name:'Jenson Button', fullName:'Jenson Button', team:'Honda', color:'#888888', isDNF: true },
      { abbr:'SUT', name:'Adrian Sutil', fullName:'Adrian Sutil', team:'Spyker Ferrari', color:'#888888', isDNF: true },
      { abbr:'ROS', name:'Nico Rosberg', fullName:'Nico Rosberg', team:'Williams Toyota', color:'#64C4FF', isDNF: true },
      { abbr:'SPE', name:'Scott Speed', fullName:'Scott Speed', team:'STR Ferrari', color:'#5E8FAA', isDNF: true },
      { abbr:'LIU', name:'Vitantonio Liuzzi', fullName:'Vitantonio Liuzzi', team:'STR Ferrari', color:'#5E8FAA', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     GREAT BRITAIN 1950 (Prima cursă F1!)
  ───────────────────────────────────────── */
  {
    id:     'britain_1950',
    difficulty: 'hard',
    name:   'British Grand Prix',
    year:   1950,
    flag:   '🇬🇧',
    hidden: [1, 3, 5, 7],
    drivers: [
      { abbr:'FAR', name:'Giuseppe Farina', fullName:'Giuseppe Farina', team:'Alfa Romeo', color:'#C92D4B' },
      { abbr:'FAG', name:'Luigi Fagioli', fullName:'Luigi Fagioli', team:'Alfa Romeo', color:'#C92D4B' },
      { abbr:'PAR', name:'Reg Parnell', fullName:'Reg Parnell', team:'Alfa Romeo', color:'#C92D4B' },
      { abbr:'GIR', name:'Yves Giraud-Cabantous', fullName:'Yves Giraud-Cabantous', team:'Talbot-Lago', color:'#888888' },
      { abbr:'ROS', name:'Louis Rosier', fullName:'Louis Rosier', team:'Talbot-Lago', color:'#888888' },
      { abbr:'GER', name:'Bob Gerard', fullName:'Bob Gerard', team:'ERA', color:'#888888' },
      { abbr:'HAR', name:'Peter Harrison', fullName:'Peter Harrison', team:'ERA', color:'#888888' },
      { abbr:'ETA', name:'Philippe Étancelin', fullName:'Philippe Étancelin', team:'Talbot-Lago', color:'#888888' },
      { abbr:'HAM', name:'Leslie Hampshire', fullName:'Leslie Hampshire', team:'Maserati', color:'#888888' },
      { abbr:'SHA', name:'Brian Shawe-Taylor', fullName:'Brian Shawe-Taylor', team:'Maserati', color:'#888888' },
      { abbr:'CLA', name:'Johnny Claes', fullName:'Johnny Claes', team:'Talbot-Lago', color:'#888888' },
      { abbr:'FAN', name:'Juan Manuel Fangio', fullName:'Juan Manuel Fangio', team:'Alfa Romeo', color:'#C92D4B', isDNF: true },
      { abbr:'KEL', name:'Joe Kelly', fullName:'Joe Kelly', team:'Alta', color:'#888888', isDNF: true },
      { abbr:'BIR', name:'Prince Bira', fullName:'Prince Bira', team:'Maserati', color:'#888888', isDNF: true },
      { abbr:'MUR', name:'David Murray', fullName:'David Murray', team:'Maserati', color:'#888888', isDNF: true },
      { abbr:'CRO', name:'Geoffrey Crossley', fullName:'Geoffrey Crossley', team:'Alta', color:'#888888', isDNF: true },
      { abbr:'GRA', name:'Emmanuel de Graffenried', fullName:'Emmanuel de Graffenried', team:'Maserati', color:'#888888', isDNF: true },
      { abbr:'CHI', name:'Louis Chiron', fullName:'Louis Chiron', team:'Maserati', color:'#888888', isDNF: true },
      { abbr:'MAR', name:'Eugene Martin', fullName:'Eugene Martin', team:'Talbot-Lago', color:'#888888', isDNF: true },
      { abbr:'ROL', name:'Tony Rolt', fullName:'Tony Rolt', team:'ERA', color:'#888888', isDNF: true },
      { abbr:'JOH', name:'Leslie Johnson', fullName:'Leslie Johnson', team:'ERA', color:'#888888', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     MONACO 2016
  ───────────────────────────────────────── */
  {
    id:     'monaco_2016',
    difficulty: 'easy',
    name:   'Monaco Grand Prix',
    year:   2016,
    flag:   '🇲🇨',
    hidden: [1, 3, 5, 7, 10],
    drivers: [
      { abbr:'HAM', name:'Lewis Hamilton', fullName:'Lewis Hamilton', team:'Mercedes', color:'#27F4D2' },
      { abbr:'RIC', name:'Daniel Ricciardo', fullName:'Daniel Ricciardo', team:'Red Bull TAG Heuer', color:'#3671C6' },
      { abbr:'PER', name:'Sergio Perez', fullName:'Sergio Perez', team:'Force India Mercedes', color:'#FF87BC' },
      { abbr:'VET', name:'Sebastian Vettel', fullName:'Sebastian Vettel', team:'Ferrari', color:'#E8002D' },
      { abbr:'ALO', name:'Fernando Alonso', fullName:'Fernando Alonso', team:'McLaren Honda', color:'#FF8000' },
      { abbr:'HUL', name:'Nico Hülkenberg', fullName:'Nico Hülkenberg', team:'Force India Mercedes', color:'#FF87BC' },
      { abbr:'ROS', name:'Nico Rosberg', fullName:'Nico Rosberg', team:'Mercedes', color:'#27F4D2' },
      { abbr:'SAI', name:'Carlos Sainz', fullName:'Carlos Sainz', team:'Toro Rosso Ferrari', color:'#5E8FAA' },
      { abbr:'BUT', name:'Jenson Button', fullName:'Jenson Button', team:'McLaren Honda', color:'#FF8000' },
      { abbr:'MAS', name:'Felipe Massa', fullName:'Felipe Massa', team:'Williams Mercedes', color:'#64C4FF' },
      { abbr:'GUT', name:'Esteban Gutiérrez', fullName:'Esteban Gutiérrez', team:'Haas Ferrari', color:'#B6BABD' },
      { abbr:'BOT', name:'Valtteri Bottas', fullName:'Valtteri Bottas', team:'Williams Mercedes', color:'#64C4FF' },
      { abbr:'GRO', name:'Romain Grosjean', fullName:'Romain Grosjean', team:'Haas Ferrari', color:'#B6BABD' },
      { abbr:'WEH', name:'Pascal Wehrlein', fullName:'Pascal Wehrlein', team:'MRT Mercedes', color:'#888888' },
      { abbr:'HAR', name:'Rio Haryanto', fullName:'Rio Haryanto', team:'MRT Mercedes', color:'#888888' },
      { abbr:'ERI', name:'Marcus Ericsson', fullName:'Marcus Ericsson', team:'Sauber Ferrari', color:'#888888', isDNF: true },
      { abbr:'NAS', name:'Felipe Nasr', fullName:'Felipe Nasr', team:'Sauber Ferrari', color:'#888888', isDNF: true },
      { abbr:'VER', name:'Max Verstappen', fullName:'Max Verstappen', team:'Red Bull TAG Heuer', color:'#3671C6', isDNF: true },
      { abbr:'MAG', name:'Kevin Magnussen', fullName:'Kevin Magnussen', team:'Renault', color:'#FFD800', isDNF: true },
      { abbr:'KVY', name:'Daniil Kvyat', fullName:'Daniil Kvyat', team:'Toro Rosso Ferrari', color:'#5E8FAA', isDNF: true },
      { abbr:'RAI', name:'Kimi Räikkönen', fullName:'Kimi Räikkönen', team:'Ferrari', color:'#E8002D', isDNF: true },
      { abbr:'PAL', name:'Jolyon Palmer', fullName:'Jolyon Palmer', team:'Renault', color:'#FFD800', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     JAPAN 1977
  ───────────────────────────────────────── */
  {
    id:     'japan_1977',
    difficulty: 'hard',
    name:   'Japanese Grand Prix',
    year:   1977,
    flag:   '🇯🇵',
    hidden: [1, 3, 5, 8],
    drivers: [
      { abbr:'HUN', name:'James Hunt', fullName:'James Hunt', team:'McLaren Ford', color:'#FF8000' },
      { abbr:'REU', name:'Carlos Reutemann', fullName:'Carlos Reutemann', team:'Ferrari', color:'#E8002D' },
      { abbr:'DEP', name:'Patrick Depailler', fullName:'Patrick Depailler', team:'Tyrrell Ford', color:'#5E8FAA' },
      { abbr:'JON', name:'Alan Jones', fullName:'Alan Jones', team:'Shadow Ford', color:'#888888' },
      { abbr:'LAF', name:'Jacques Laffite', fullName:'Jacques Laffite', team:'Ligier Matra', color:'#888888', isDNF: true },
      { abbr:'PAT', name:'Riccardo Patrese', fullName:'Riccardo Patrese', team:'Shadow Ford', color:'#888888' },
      { abbr:'STU', name:'Hans Stuck', fullName:'Hans Stuck', team:'Brabham Alfa Romeo', color:'#888888' },
      { abbr:'BRA', name:'Vittorio Brambilla', fullName:'Vittorio Brambilla', team:'Surtees Ford', color:'#888888' },
      { abbr:'TAK', name:'Noritake Takahara', fullName:'Noritake Takahara', team:'Tyrrell Ford', color:'#5E8FAA' },
      { abbr:'SCH', name:'Jody Scheckter', fullName:'Jody Scheckter', team:'Wolf Ford', color:'#888888' },
      { abbr:'HOS', name:'Kazuyoshi Hoshino', fullName:'Kazuyoshi Hoshino', team:'Kojima Ford', color:'#888888' },
      { abbr:'RIB', name:'Alex Ribeiro', fullName:'Alex Ribeiro', team:'March Ford', color:'#888888' },
      { abbr:'NIL', name:'Gunnar Nilsson', fullName:'Gunnar Nilsson', team:'Lotus Ford', color:'#000000', isDNF: true },
      { abbr:'REG', name:'Clay Regazzoni', fullName:'Clay Regazzoni', team:'Ensign Ford', color:'#888888', isDNF: true },
      { abbr:'WAT', name:'John Watson', fullName:'John Watson', team:'Brabham Alfa Romeo', color:'#888888', isDNF: true },
      { abbr:'MAS', name:'Jochen Mass', fullName:'Jochen Mass', team:'McLaren Ford', color:'#FF8000', isDNF: true },
      { abbr:'TAM', name:'Patrick Tambay', fullName:'Patrick Tambay', team:'Ensign Ford', color:'#888888', isDNF: true },
      { abbr:'PET', name:'Ronnie Peterson', fullName:'Ronnie Peterson', team:'Tyrrell Ford', color:'#5E8FAA', isDNF: true },
      { abbr:'VIL', name:'Gilles Villeneuve', fullName:'Gilles Villeneuve', team:'Ferrari', color:'#E8002D', isDNF: true },
      { abbr:'JAR', name:'Jean-Pierre Jarier', fullName:'Jean-Pierre Jarier', team:'Ligier Matra', color:'#888888', isDNF: true },
      { abbr:'BIN', name:'Hans-Joachim Stuck', fullName:'Hans-Joachim Stuck', team:'Surtees Ford', color:'#888888', isDNF: true },
      { abbr:'TAK2', name:'Kunimitsu Takahashi', fullName:'Kunimitsu Takahashi', team:'Kojima Ford', color:'#888888', isDNF: true },
      { abbr:'AND', name:'Mario Andretti', fullName:'Mario Andretti', team:'Lotus Ford', color:'#000000', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     GERMANY (HOCKENHEIM) 2018
  ───────────────────────────────────────── */
  {
    id:     'germany_2018',
    difficulty: 'easy',
    name:   'German Grand Prix',
    year:   2018,
    flag:   '🇩🇪',
    hidden: [1, 3, 5, 7, 10],
    drivers: [
      { abbr:'HAM', name:'Lewis Hamilton', fullName:'Lewis Hamilton', team:'Mercedes', color:'#27F4D2' },
      { abbr:'BOT', name:'Valtteri Bottas', fullName:'Valtteri Bottas', team:'Mercedes', color:'#27F4D2' },
      { abbr:'RAI', name:'Kimi Räikkönen', fullName:'Kimi Räikkönen', team:'Ferrari', color:'#E8002D' },
      { abbr:'VER', name:'Max Verstappen', fullName:'Max Verstappen', team:'Red Bull TAG Heuer', color:'#3671C6' },
      { abbr:'HUL', name:'Nico Hülkenberg', fullName:'Nico Hülkenberg', team:'Renault', color:'#FFD800' },
      { abbr:'GRO', name:'Romain Grosjean', fullName:'Romain Grosjean', team:'Haas Ferrari', color:'#B6BABD' },
      { abbr:'PER', name:'Sergio Perez', fullName:'Sergio Perez', team:'Force India Mercedes', color:'#FF87BC' },
      { abbr:'OCO', name:'Esteban Ocon', fullName:'Esteban Ocon', team:'Force India Mercedes', color:'#FF87BC' },
      { abbr:'ERI', name:'Marcus Ericsson', fullName:'Marcus Ericsson', team:'Sauber Ferrari', color:'#888888' },
      { abbr:'HAR', name:'Brendon Hartley', fullName:'Brendon Hartley', team:'Toro Rosso Honda', color:'#5E8FAA' },
      { abbr:'MAG', name:'Kevin Magnussen', fullName:'Kevin Magnussen', team:'Haas Ferrari', color:'#B6BABD' },
      { abbr:'SAI', name:'Carlos Sainz', fullName:'Carlos Sainz', team:'Renault', color:'#FFD800' },
      { abbr:'VAN', name:'Stoffel Vandoorne', fullName:'Stoffel Vandoorne', team:'McLaren Renault', color:'#FF8000' },
      { abbr:'GAS', name:'Pierre Gasly', fullName:'Pierre Gasly', team:'Toro Rosso Honda', color:'#5E8FAA' },
      { abbr:'LEC', name:'Charles Leclerc', fullName:'Charles Leclerc', team:'Sauber Ferrari', color:'#888888' },
      { abbr:'ALO', name:'Fernando Alonso', fullName:'Fernando Alonso', team:'McLaren Renault', color:'#FF8000', isDNF: true },
      { abbr:'STR', name:'Lance Stroll', fullName:'Lance Stroll', team:'Williams Mercedes', color:'#64C4FF', isDNF: true },
      { abbr:'VET', name:'Sebastian Vettel', fullName:'Sebastian Vettel', team:'Ferrari', color:'#E8002D', isDNF: true },
      { abbr:'SIR', name:'Sergey Sirotkin', fullName:'Sergey Sirotkin', team:'Williams Mercedes', color:'#64C4FF', isDNF: true },
      { abbr:'RIC', name:'Daniel Ricciardo', fullName:'Daniel Ricciardo', team:'Red Bull TAG Heuer', color:'#3671C6', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     GERMANY (NÜRBURGRING) 1999
  ───────────────────────────────────────── */
  {
    id:     'germany_1999',
    difficulty: 'medium',
    name:   'European Grand Prix',
    year:   1999,
    flag:   '🇩🇪',
    hidden: [1, 3, 5, 7],
    drivers: [
      { abbr:'HER', name:'Johnny Herbert', fullName:'Johnny Herbert', team:'Stewart Ford', color:'#888888' },
      { abbr:'TRU', name:'Jarno Trulli', fullName:'Jarno Trulli', team:'Prost Peugeot', color:'#888888' },
      { abbr:'BAR', name:'Rubens Barrichello', fullName:'Rubens Barrichello', team:'Stewart Ford', color:'#888888' },
      { abbr:'RSC', name:'Ralf Schumacher', fullName:'Ralf Schumacher', team:'Williams Supertec', color:'#64C4FF' },
      { abbr:'HAK', name:'Mika Häkkinen', fullName:'Mika Häkkinen', team:'McLaren Mercedes', color:'#27F4D2' },
      { abbr:'GEN', name:'Marc Gené', fullName:'Marc Gené', team:'Minardi Ford', color:'#888888' },
      { abbr:'IRV', name:'Eddie Irvine', fullName:'Eddie Irvine', team:'Ferrari', color:'#E8002D' },
      { abbr:'ZON', name:'Ricardo Zonta', fullName:'Ricardo Zonta', team:'BAR Supertec', color:'#888888' },
      { abbr:'PAN', name:'Olivier Panis', fullName:'Olivier Panis', team:'Prost Peugeot', color:'#888888' },
      { abbr:'VIL', name:'Jacques Villeneuve', fullName:'Jacques Villeneuve', team:'BAR Supertec', color:'#888888', isDNF: true },
      { abbr:'BAD', name:'Luca Badoer', fullName:'Luca Badoer', team:'Minardi Ford', color:'#888888', isDNF: true },
      { abbr:'ROZ', name:'Pedro de la Rosa', fullName:'Pedro de la Rosa', team:'Arrows', color:'#888888', isDNF: true },
      { abbr:'FIS', name:'Giancarlo Fisichella', fullName:'Giancarlo Fisichella', team:'Benetton Playlife', color:'#27F4D2', isDNF: true },
      { abbr:'SAL', name:'Mika Salo', fullName:'Mika Salo', team:'Ferrari', color:'#E8002D', isDNF: true },
      { abbr:'TAK', name:'Toranosuke Takagi', fullName:'Toranosuke Takagi', team:'Arrows', color:'#888888', isDNF: true },
      { abbr:'COU', name:'David Coulthard', fullName:'David Coulthard', team:'McLaren Mercedes', color:'#27F4D2', isDNF: true },
      { abbr:'ALE', name:'Jean Alesi', fullName:'Jean Alesi', team:'Sauber Petronas', color:'#888888', isDNF: true },
      { abbr:'FRE', name:'Heinz-Harald Frentzen', fullName:'Heinz-Harald Frentzen', team:'Jordan Mugen Honda', color:'#888888', isDNF: true },
      { abbr:'ZAN', name:'Alessandro Zanardi', fullName:'Alessandro Zanardi', team:'Williams Supertec', color:'#64C4FF', isDNF: true },
      { abbr:'HIL', name:'Damon Hill', fullName:'Damon Hill', team:'Jordan Mugen Honda', color:'#888888', isDNF: true },
      { abbr:'WUR', name:'Alexander Wurz', fullName:'Alexander Wurz', team:'Benetton Playlife', color:'#27F4D2', isDNF: true },
      { abbr:'DIN', name:'Pedro Diniz', fullName:'Pedro Diniz', team:'Sauber Petronas', color:'#888888', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     MONACO 2004
  ───────────────────────────────────────── */
  {
    id:     'monaco_2004',
    difficulty: 'medium',
    name:   'Monaco Grand Prix',
    year:   2004,
    flag:   '🇲🇨',
    hidden: [1, 3, 5, 7],
    drivers: [
      { abbr:'TRU', name:'Jarno Trulli', fullName:'Jarno Trulli', team:'Renault', color:'#FFD800' },
      { abbr:'BUT', name:'Jenson Button', fullName:'Jenson Button', team:'BAR Honda', color:'#888888' },
      { abbr:'BAR', name:'Rubens Barrichello', fullName:'Rubens Barrichello', team:'Ferrari', color:'#E8002D' },
      { abbr:'MON', name:'Juan Pablo Montoya', fullName:'Juan Pablo Montoya', team:'Williams BMW', color:'#64C4FF' },
      { abbr:'MAS', name:'Felipe Massa', fullName:'Felipe Massa', team:'Sauber Petronas', color:'#888888' },
      { abbr:'MAT', name:'Cristiano da Matta', fullName:'Cristiano da Matta', team:'Toyota', color:'#888888' },
      { abbr:'HEI', name:'Nick Heidfeld', fullName:'Nick Heidfeld', team:'Jordan Ford', color:'#888888' },
      { abbr:'PAN', name:'Olivier Panis', fullName:'Olivier Panis', team:'Toyota', color:'#888888' },
      { abbr:'BAU', name:'Zsolt Baumgartner', fullName:'Zsolt Baumgartner', team:'Minardi Cosworth', color:'#888888' },
      { abbr:'RSC', name:'Ralf Schumacher', fullName:'Ralf Schumacher', team:'Williams BMW', color:'#64C4FF', isDNF: true },
      { abbr:'MSC', name:'Michael Schumacher', fullName:'Michael Schumacher', team:'Ferrari', color:'#E8002D', isDNF: true },
      { abbr:'ALO', name:'Fernando Alonso', fullName:'Fernando Alonso', team:'Renault', color:'#FFD800', isDNF: true },
      { abbr:'RAI', name:'Kimi Räikkönen', fullName:'Kimi Räikkönen', team:'McLaren Mercedes', color:'#27F4D2', isDNF: true },
      { abbr:'BRU', name:'Gianmaria Bruni', fullName:'Gianmaria Bruni', team:'Minardi Cosworth', color:'#888888', isDNF: true },
      { abbr:'PAN2', name:'Giorgio Pantano', fullName:'Giorgio Pantano', team:'Jordan Ford', color:'#888888', isDNF: true },
      { abbr:'WEB', name:'Mark Webber', fullName:'Mark Webber', team:'Jaguar Cosworth', color:'#229971', isDNF: true },
      { abbr:'SAT', name:'Takuma Sato', fullName:'Takuma Sato', team:'BAR Honda', color:'#888888', isDNF: true },
      { abbr:'COU', name:'David Coulthard', fullName:'David Coulthard', team:'McLaren Mercedes', color:'#27F4D2', isDNF: true },
      { abbr:'FIS', name:'Giancarlo Fisichella', fullName:'Giancarlo Fisichella', team:'Sauber Petronas', color:'#888888', isDNF: true },
      { abbr:'KLI', name:'Christian Klien', fullName:'Christian Klien', team:'Jaguar Cosworth', color:'#229971', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     ITALY (MONZA) 1953
  ───────────────────────────────────────── */
  {
    id:     'monza_1953',
    difficulty: 'hard',
    name:   'Italian Grand Prix',
    year:   1953,
    flag:   '🇮🇹',
    hidden: [1, 3, 5, 8],
    drivers: [
      { abbr:'FAN', name:'Juan Manuel Fangio', fullName:'Juan Manuel Fangio', team:'Maserati', color:'#888888' },
      { abbr:'FAR', name:'Giuseppe Farina', fullName:'Giuseppe Farina', team:'Ferrari', color:'#E8002D' },
      { abbr:'VIL', name:'Luigi Villoresi', fullName:'Luigi Villoresi', team:'Ferrari', color:'#E8002D' },
      { abbr:'HAW', name:'Mike Hawthorn', fullName:'Mike Hawthorn', team:'Ferrari', color:'#E8002D' },
      { abbr:'TRI', name:'Maurice Trintignant', fullName:'Maurice Trintignant', team:'Gordini', color:'#888888' },
      { abbr:'MIE', name:'Roberto Mieres', fullName:'Roberto Mieres', team:'Gordini', color:'#888888' },
      { abbr:'MUS', name:'Luigi Musso', fullName:'Luigi Musso', team:'Maserati', color:'#888888' },
      { abbr:'MAG', name:'Umberto Maglioli', fullName:'Umberto Maglioli', team:'Ferrari', color:'#E8002D' },
      { abbr:'SCH', name:'Harry Schell', fullName:'Harry Schell', team:'Gordini', color:'#888888' },
      { abbr:'CHI', name:'Louis Chiron', fullName:'Louis Chiron', team:'OSCA', color:'#888888' },
      { abbr:'BIR', name:'Prince Bira', fullName:'Prince Bira', team:'Maserati', color:'#888888' },
      { abbr:'BRO', name:'Alan Brown', fullName:'Alan Brown', team:'Cooper Bristol', color:'#888888' },
      { abbr:'MOS', name:'Stirling Moss', fullName:'Stirling Moss', team:'Cooper Alta', color:'#888888' },
      { abbr:'VOS', name:'Hans von Stuck', fullName:'Hans von Stuck', team:'AFM Bristol', color:'#888888' },
      { abbr:'GIR', name:'Yves Giraud-Cabantous', fullName:'Yves Giraud-Cabantous', team:'HWM Alta', color:'#888888' },
      { abbr:'ROS', name:'Louis Rosier', fullName:'Louis Rosier', team:'Ferrari', color:'#E8002D' },
      { abbr:'ASC', name:'Alberto Ascari', fullName:'Alberto Ascari', team:'Ferrari', color:'#E8002D', isDNF: true },
      { abbr:'BON', name:'Felice Bonetto', fullName:'Felice Bonetto', team:'Maserati', color:'#888888', isDNF: true },
      { abbr:'MAR', name:'Onofre Marimón', fullName:'Onofre Marimón', team:'Maserati', color:'#888888', isDNF: true },
      { abbr:'CAR', name:'Piero Carini', fullName:'Piero Carini', team:'Ferrari', color:'#E8002D', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     ABU DHABI 2010
  ───────────────────────────────────────── */
  {
    id:     'abu_dhabi_2010',
    difficulty: 'medium',
    name:   'Abu Dhabi Grand Prix',
    year:   2010,
    flag:   '🇦🇪',
    hidden: [1, 3, 5, 7, 10, 13],
    drivers: [
      { abbr:'VET', name:'Sebastian Vettel', fullName:'Sebastian Vettel', team:'RBR Renault', color:'#3671C6' },
      { abbr:'HAM', name:'Lewis Hamilton', fullName:'Lewis Hamilton', team:'McLaren Mercedes', color:'#27F4D2' },
      { abbr:'BUT', name:'Jenson Button', fullName:'Jenson Button', team:'McLaren Mercedes', color:'#27F4D2' },
      { abbr:'ROS', name:'Nico Rosberg', fullName:'Nico Rosberg', team:'Mercedes', color:'#27F4D2' },
      { abbr:'KUB', name:'Robert Kubica', fullName:'Robert Kubica', team:'Renault', color:'#FFD800' },
      { abbr:'PET', name:'Vitaly Petrov', fullName:'Vitaly Petrov', team:'Renault', color:'#FFD800' },
      { abbr:'ALO', name:'Fernando Alonso', fullName:'Fernando Alonso', team:'Ferrari', color:'#E8002D' },
      { abbr:'WEB', name:'Mark Webber', fullName:'Mark Webber', team:'RBR Renault', color:'#3671C6' },
      { abbr:'ALG', name:'Jaime Alguersuari', fullName:'Jaime Alguersuari', team:'STR Ferrari', color:'#5E8FAA' },
      { abbr:'MAS', name:'Felipe Massa', fullName:'Felipe Massa', team:'Ferrari', color:'#E8002D' },
      { abbr:'HEI', name:'Nick Heidfeld', fullName:'Nick Heidfeld', team:'Sauber Ferrari', color:'#888888' },
      { abbr:'BAR', name:'Rubens Barrichello', fullName:'Rubens Barrichello', team:'Williams Cosworth', color:'#64C4FF' },
      { abbr:'SUT', name:'Adrian Sutil', fullName:'Adrian Sutil', team:'Force India Mercedes', color:'#FF87BC' },
      { abbr:'KOB', name:'Kamui Kobayashi', fullName:'Kamui Kobayashi', team:'Sauber Ferrari', color:'#888888' },
      { abbr:'BUE', name:'Sebastien Buemi', fullName:'Sebastien Buemi', team:'STR Ferrari', color:'#5E8FAA' },
      { abbr:'HUL', name:'Nico Hülkenberg', fullName:'Nico Hülkenberg', team:'Williams Cosworth', color:'#64C4FF' },
      { abbr:'KOV', name:'Heikki Kovalainen', fullName:'Heikki Kovalainen', team:'Lotus Cosworth', color:'#000000' },
      { abbr:'DIG', name:'Lucas di Grassi', fullName:'Lucas di Grassi', team:'Virgin Cosworth', color:'#888888' },
      { abbr:'SEN', name:'Bruno Senna', fullName:'Bruno Senna', team:'HRT Cosworth', color:'#888888' },
      { abbr:'KLI', name:'Christian Klien', fullName:'Christian Klien', team:'HRT Cosworth', color:'#888888' },
      { abbr:'TRU', name:'Jarno Trulli', fullName:'Jarno Trulli', team:'Lotus Cosworth', color:'#000000' },
      { abbr:'GLO', name:'Timo Glock', fullName:'Timo Glock', team:'Virgin Cosworth', color:'#888888', isDNF: true },
      { abbr:'MSC', name:'Michael Schumacher', fullName:'Michael Schumacher', team:'Mercedes', color:'#27F4D2', isDNF: true },
      { abbr:'LIU', name:'Vitantonio Liuzzi', fullName:'Vitantonio Liuzzi', team:'Force India Mercedes', color:'#FF87BC', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     MONACO 1992
  ───────────────────────────────────────── */
  {
    id:     'monaco_1992',
    difficulty: 'hard',
    name:   'Monaco Grand Prix',
    year:   1992,
    flag:   '🇲🇨',
    hidden: [1, 3, 5, 7],
    drivers: [
      { abbr:'SEN', name:'Ayrton Senna', fullName:'Ayrton Senna', team:'McLaren Honda', color:'#FF8000' },
      { abbr:'MAN', name:'Nigel Mansell', fullName:'Nigel Mansell', team:'Williams Renault', color:'#64C4FF' },
      { abbr:'PAT', name:'Riccardo Patrese', fullName:'Riccardo Patrese', team:'Williams Renault', color:'#64C4FF' },
      { abbr:'MSC', name:'Michael Schumacher', fullName:'Michael Schumacher', team:'Benetton Ford', color:'#27F4D2' },
      { abbr:'BRU', name:'Martin Brundle', fullName:'Martin Brundle', team:'Benetton Ford', color:'#27F4D2' },
      { abbr:'GAC', name:'Bertrand Gachot', fullName:'Bertrand Gachot', team:'Venturi Lamborghini', color:'#888888' },
      { abbr:'ALB', name:'Michele Alboreto', fullName:'Michele Alboreto', team:'Footwork Mugen Honda', color:'#888888' },
      { abbr:'CFI', name:'Christian Fittipaldi', fullName:'Christian Fittipaldi', team:'Minardi Lamborghini', color:'#888888' },
      { abbr:'JAR', name:'Jyrki Jarvilehto', fullName:'Jyrki Jarvilehto', team:'Dallara Ferrari', color:'#888888' },
      { abbr:'COM', name:'Erik Comas', fullName:'Erik Comas', team:'Ligier Renault', color:'#888888' },
      { abbr:'SUZ', name:'Aguri Suzuki', fullName:'Aguri Suzuki', team:'Footwork Mugen Honda', color:'#888888' },
      { abbr:'BOU', name:'Thierry Boutsen', fullName:'Thierry Boutsen', team:'Ligier Renault', color:'#888888' },
      { abbr:'CAP', name:'Ivan Capelli', fullName:'Ivan Capelli', team:'Ferrari', color:'#E8002D', isDNF: true },
      { abbr:'BER', name:'Gerhard Berger', fullName:'Gerhard Berger', team:'McLaren Honda', color:'#FF8000', isDNF: true },
      { abbr:'HAK', name:'Mika Häkkinen', fullName:'Mika Häkkinen', team:'Lotus Ford', color:'#000000', isDNF: true },
      { abbr:'ALE', name:'Jean Alesi', fullName:'Jean Alesi', team:'Ferrari', color:'#E8002D', isDNF: true },
      { abbr:'GUG', name:'Maurício Gugelmin', fullName:'Maurício Gugelmin', team:'Jordan Yamaha', color:'#888888', isDNF: true },
      { abbr:'HER', name:'Johnny Herbert', fullName:'Johnny Herbert', team:'Lotus Ford', color:'#000000', isDNF: true },
      { abbr:'MOR', name:'Roberto Moreno', fullName:'Roberto Moreno', team:'Moda Judd', color:'#888888', isDNF: true },
      { abbr:'CES', name:'Andrea de Cesaris', fullName:'Andrea de Cesaris', team:'Tyrrell Ilmor', color:'#888888', isDNF: true },
      { abbr:'TAR', name:'Gabriele Tarquini', fullName:'Gabriele Tarquini', team:'Fondmetal Ford', color:'#888888', isDNF: true },
      { abbr:'MOD', name:'Stefano Modena', fullName:'Stefano Modena', team:'Jordan Yamaha', color:'#888888', isDNF: true },
      { abbr:'GRO', name:'Olivier Grouillard', fullName:'Olivier Grouillard', team:'Tyrrell Ilmor', color:'#888888', isDNF: true },
      { abbr:'WEN', name:'Karl Wendlinger', fullName:'Karl Wendlinger', team:'March Ilmor', color:'#888888', isDNF: true },
      { abbr:'MOR2', name:'Gianni Morbidelli', fullName:'Gianni Morbidelli', team:'Minardi Lamborghini', color:'#888888', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     BAHRAIN 2020
  ───────────────────────────────────────── */
  {
    id:     'bahrain_2020',
    difficulty: 'easy',
    name:   'Bahrain Grand Prix',
    year:   2020,
    flag:   '🇧🇭',
    hidden: [1, 3, 5, 7, 10, 13],
    drivers: [
      { abbr:'HAM', name:'Lewis Hamilton', fullName:'Lewis Hamilton', team:'Mercedes', color:'#27F4D2' },
      { abbr:'VER', name:'Max Verstappen', fullName:'Max Verstappen', team:'Red Bull Racing Honda', color:'#3671C6' },
      { abbr:'ALB', name:'Alex Albon', fullName:'Alex Albon', team:'Red Bull Racing Honda', color:'#3671C6' },
      { abbr:'NOR', name:'Lando Norris', fullName:'Lando Norris', team:'McLaren Renault', color:'#FF8000' },
      { abbr:'SAI', name:'Carlos Sainz', fullName:'Carlos Sainz', team:'McLaren Renault', color:'#FF8000' },
      { abbr:'GAS', name:'Pierre Gasly', fullName:'Pierre Gasly', team:'AlphaTauri Honda', color:'#5E8FAA' },
      { abbr:'RIC', name:'Daniel Ricciardo', fullName:'Daniel Ricciardo', team:'Renault', color:'#FFD800' },
      { abbr:'BOT', name:'Valtteri Bottas', fullName:'Valtteri Bottas', team:'Mercedes', color:'#27F4D2' },
      { abbr:'OCO', name:'Esteban Ocon', fullName:'Esteban Ocon', team:'Renault', color:'#FFD800' },
      { abbr:'LEC', name:'Charles Leclerc', fullName:'Charles Leclerc', team:'Ferrari', color:'#E8002D' },
      { abbr:'KVY', name:'Daniil Kvyat', fullName:'Daniil Kvyat', team:'AlphaTauri Honda', color:'#5E8FAA' },
      { abbr:'RUS', name:'George Russell', fullName:'George Russell', team:'Williams Mercedes', color:'#64C4FF' },
      { abbr:'VET', name:'Sebastian Vettel', fullName:'Sebastian Vettel', team:'Ferrari', color:'#E8002D' },
      { abbr:'LAT', name:'Nicholas Latifi', fullName:'Nicholas Latifi', team:'Williams Mercedes', color:'#64C4FF' },
      { abbr:'RAI', name:'Kimi Räikkönen', fullName:'Kimi Räikkönen', team:'Alfa Romeo Racing Ferrari', color:'#C92D4B' },
      { abbr:'GIO', name:'Antonio Giovinazzi', fullName:'Antonio Giovinazzi', team:'Alfa Romeo Racing Ferrari', color:'#C92D4B' },
      { abbr:'MAG', name:'Kevin Magnussen', fullName:'Kevin Magnussen', team:'Haas Ferrari', color:'#B6BABD' },
      { abbr:'PER', name:'Sergio Perez', fullName:'Sergio Perez', team:'Racing Point BWT Mercedes', color:'#F596C8', isDNF: true },
      { abbr:'STR', name:'Lance Stroll', fullName:'Lance Stroll', team:'Racing Point BWT Mercedes', color:'#F596C8', isDNF: true },
      { abbr:'GRO', name:'Romain Grosjean', fullName:'Romain Grosjean', team:'Haas Ferrari', color:'#B6BABD', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     EUROPE (JEREZ) 1997
  ───────────────────────────────────────── */
  {
    id:     'europe_1997',
    difficulty: 'medium',
    name:   'European Grand Prix',
    year:   1997,
    flag:   '🇪🇸',
    hidden: [1, 3, 5, 8, 11],
    drivers: [
      { abbr:'HAK', name:'Mika Häkkinen', fullName:'Mika Häkkinen', team:'McLaren Mercedes', color:'#27F4D2' },
      { abbr:'COU', name:'David Coulthard', fullName:'David Coulthard', team:'McLaren Mercedes', color:'#27F4D2' },
      { abbr:'VIL', name:'Jacques Villeneuve', fullName:'Jacques Villeneuve', team:'Williams Renault', color:'#64C4FF' },
      { abbr:'BER', name:'Gerhard Berger', fullName:'Gerhard Berger', team:'Benetton Renault', color:'#27F4D2' },
      { abbr:'IRV', name:'Eddie Irvine', fullName:'Eddie Irvine', team:'Ferrari', color:'#E8002D' },
      { abbr:'FRE', name:'Heinz-Harald Frentzen', fullName:'Heinz-Harald Frentzen', team:'Williams Renault', color:'#64C4FF' },
      { abbr:'PAN', name:'Olivier Panis', fullName:'Olivier Panis', team:'Prost Mugen Honda', color:'#888888' },
      { abbr:'HER', name:'Johnny Herbert', fullName:'Johnny Herbert', team:'Sauber Petronas', color:'#888888' },
      { abbr:'MAG', name:'Kevin Magnussen', fullName:'Kevin Magnussen', team:'Stewart Ford', color:'#888888' },
      { abbr:'NAK', name:'Shinji Nakano', fullName:'Shinji Nakano', team:'Prost Mugen Honda', color:'#888888' },
      { abbr:'FIS', name:'Giancarlo Fisichella', fullName:'Giancarlo Fisichella', team:'Jordan Peugeot', color:'#888888' },
      { abbr:'SAL', name:'Mika Salo', fullName:'Mika Salo', team:'Tyrrell Ford', color:'#5E8FAA' },
      { abbr:'ALE', name:'Jean Alesi', fullName:'Jean Alesi', team:'Benetton Renault', color:'#27F4D2' },
      { abbr:'FON', name:'Norberto Fontana', fullName:'Norberto Fontana', team:'Sauber Petronas', color:'#888888' },
      { abbr:'MAR', name:'Tarso Marques', fullName:'Tarso Marques', team:'Minardi Hart', color:'#888888' },
      { abbr:'VER', name:'Jos Verstappen', fullName:'Jos Verstappen', team:'Tyrrell Ford', color:'#5E8FAA' },
      { abbr:'KAT', name:'Ukyo Katayama', fullName:'Ukyo Katayama', team:'Minardi Hart', color:'#888888' },
      { abbr:'MSC', name:'Michael Schumacher', fullName:'Michael Schumacher', team:'Ferrari', color:'#E8002D', isDNF: true },
      { abbr:'HIL', name:'Damon Hill', fullName:'Damon Hill', team:'Arrows Yamaha', color:'#888888', isDNF: true },
      { abbr:'RSC', name:'Ralf Schumacher', fullName:'Ralf Schumacher', team:'Jordan Peugeot', color:'#888888', isDNF: true },
      { abbr:'BAR', name:'Rubens Barrichello', fullName:'Rubens Barrichello', team:'Stewart Ford', color:'#888888', isDNF: true },
      { abbr:'DIN', name:'Pedro Diniz', fullName:'Pedro Diniz', team:'Arrows Yamaha', color:'#888888', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     GREAT BRITAIN (BRANDS HATCH) 1985
  ───────────────────────────────────────── */
  {
    id:     'britain_1985',
    difficulty: 'medium',
    name:   'European Grand Prix',
    year:   1985,
    flag:   '🇬🇧',
    hidden: [1, 3, 5, 7, 10],
    drivers: [
      { abbr:'MAN', name:'Nigel Mansell', fullName:'Nigel Mansell', team:'Williams Honda', color:'#64C4FF' },
      { abbr:'SEN', name:'Ayrton Senna', fullName:'Ayrton Senna', team:'Lotus Renault', color:'#000000' },
      { abbr:'ROS', name:'Keke Rosberg', fullName:'Keke Rosberg', team:'Williams Honda', color:'#64C4FF' },
      { abbr:'PRO', name:'Alain Prost', fullName:'Alain Prost', team:'McLaren TAG', color:'#FF8000' },
      { abbr:'DEA', name:'Elio de Angelis', fullName:'Elio de Angelis', team:'Lotus Renault', color:'#000000' },
      { abbr:'BOU', name:'Thierry Boutsen', fullName:'Thierry Boutsen', team:'Arrows BMW', color:'#888888' },
      { abbr:'WAT', name:'John Watson', fullName:'John Watson', team:'McLaren TAG', color:'#FF8000' },
      { abbr:'STR', name:'Philippe Streiff', fullName:'Philippe Streiff', team:'Ligier Renault', color:'#888888' },
      { abbr:'PAT', name:'Riccardo Patrese', fullName:'Riccardo Patrese', team:'Alfa Romeo', color:'#C92D4B' },
      { abbr:'BER', name:'Gerhard Berger', fullName:'Gerhard Berger', team:'Arrows BMW', color:'#888888' },
      { abbr:'CHE', name:'Eddie Cheever', fullName:'Eddie Cheever', team:'Alfa Romeo', color:'#C92D4B' },
      { abbr:'TAM', name:'Patrick Tambay', fullName:'Patrick Tambay', team:'Renault', color:'#FFD800' },
      { abbr:'SUR', name:'Marc Surer', fullName:'Marc Surer', team:'Brabham BMW', color:'#888888', isDNF: true },
      { abbr:'JOH', name:'Stefan Johansson', fullName:'Stefan Johansson', team:'Ferrari', color:'#E8002D', isDNF: true },
      { abbr:'LAF', name:'Jacques Laffite', fullName:'Jacques Laffite', team:'Ligier Renault', color:'#888888', isDNF: true },
      { abbr:'DAN', name:'Christian Danner', fullName:'Christian Danner', team:'Zakspeed', color:'#888888', isDNF: true },
      { abbr:'CAP', name:'Ivan Capelli', fullName:'Ivan Capelli', team:'Tyrrell Renault', color:'#5E8FAA', isDNF: true },
      { abbr:'BRU', name:'Martin Brundle', fullName:'Martin Brundle', team:'Tyrrell Renault', color:'#5E8FAA', isDNF: true },
      { abbr:'FAB', name:'Teo Fabi', fullName:'Teo Fabi', team:'Toleman Hart', color:'#888888', isDNF: true },
      { abbr:'ALL', name:'Philippe Alliot', fullName:'Philippe Alliot', team:'RAM Hart', color:'#888888', isDNF: true },
      { abbr:'GHI', name:'Piercarlo Ghinzani', fullName:'Piercarlo Ghinzani', team:'Toleman Hart', color:'#888888', isDNF: true },
      { abbr:'JON', name:'Alan Jones', fullName:'Alan Jones', team:'Lola Hart', color:'#888888', isDNF: true },
      { abbr:'ALB', name:'Michele Alboreto', fullName:'Michele Alboreto', team:'Ferrari', color:'#E8002D', isDNF: true },
      { abbr:'PIQ', name:'Nelson Piquet', fullName:'Nelson Piquet', team:'Brabham BMW', color:'#888888', isDNF: true },
      { abbr:'WAR', name:'Derek Warwick', fullName:'Derek Warwick', team:'Renault', color:'#FFD800', isDNF: true },
      { abbr:'MAR', name:'Pierluigi Martini', fullName:'Pierluigi Martini', team:'Minardi Motori', color:'#888888', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     ITALY (MONZA) 1971
  ───────────────────────────────────────── */
  {
    id:     'monza_1971',
    difficulty: 'hard',
    name:   'Italian Grand Prix',
    year:   1971,
    flag:   '🇮🇹',
    hidden: [1, 3, 5, 7],
    drivers: [
      { abbr:'GET', name:'Peter Gethin', fullName:'Peter Gethin', team:'BRM', color:'#888888' },
      { abbr:'PET', name:'Ronnie Peterson', fullName:'Ronnie Peterson', team:'March Ford', color:'#888888' },
      { abbr:'CEV', name:'François Cevert', fullName:'François Cevert', team:'Tyrrell Ford', color:'#5E8FAA' },
      { abbr:'HAI', name:'Mike Hailwood', fullName:'Mike Hailwood', team:'Surtees Ford', color:'#888888' },
      { abbr:'GAN', name:'Howden Ganley', fullName:'Howden Ganley', team:'BRM', color:'#888888' },
      { abbr:'AMO', name:'Chris Amon', fullName:'Chris Amon', team:'Matra', color:'#888888' },
      { abbr:'OLI', name:'Jackie Oliver', fullName:'Jackie Oliver', team:'McLaren Ford', color:'#FF8000' },
      { abbr:'FIT', name:'Emerson Fittipaldi', fullName:'Emerson Fittipaldi', team:'Lotus Ford', color:'#000000' },
      { abbr:'SIF', name:'Jo Siffert', fullName:'Jo Siffert', team:'BRM', color:'#888888' },
      { abbr:'BON', name:'Jo Bonnier', fullName:'Jo Bonnier', team:'McLaren Ford', color:'#FF8000' },
      { abbr:'HIL', name:'Graham Hill', fullName:'Graham Hill', team:'Brabham Ford', color:'#888888', isDNF: true },
      { abbr:'JAR', name:'Jean-Pierre Jarier', fullName:'Jean-Pierre Jarier', team:'March Ford', color:'#888888', isDNF: true },
      { abbr:'BEU', name:'Mike Beuttler', fullName:'Mike Beuttler', team:'March Ford', color:'#888888', isDNF: true },
      { abbr:'PES', name:'Henri Pescarolo', fullName:'Henri Pescarolo', team:'March Ford', color:'#888888', isDNF: true },
      { abbr:'ADA', name:'Andrea de Adamich', fullName:'Andrea de Adamich', team:'March Alfa Romeo', color:'#888888', isDNF: true },
      { abbr:'REG', name:'Clay Regazzoni', fullName:'Clay Regazzoni', team:'Ferrari', color:'#E8002D', isDNF: true },
      { abbr:'ICK', name:'Jacky Ickx', fullName:'Jacky Ickx', team:'Ferrari', color:'#E8002D', isDNF: true },
      { abbr:'STE', name:'Jackie Stewart', fullName:'Jackie Stewart', team:'Tyrrell Ford', color:'#5E8FAA', isDNF: true },
      { abbr:'GAL', name:'Nanni Galli', fullName:'Nanni Galli', team:'March Ford', color:'#888888', isDNF: true },
      { abbr:'MOS', name:'Silvio Moser', fullName:'Silvio Moser', team:'Bellasi Ford', color:'#888888', isDNF: true },
      { abbr:'SCH', name:'Tim Schenken', fullName:'Tim Schenken', team:'Brabham Ford', color:'#888888', isDNF: true },
      { abbr:'MAR', name:'Helmut Marko', fullName:'Helmut Marko', team:'BRM', color:'#888888', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     BRAZIL 2016
  ───────────────────────────────────────── */
  {
    id:     'brazil_2016',
    difficulty: 'easy',
    name:   'Brazilian Grand Prix',
    year:   2016,
    flag:   '🇧🇷',
    hidden: [1, 3, 5, 7, 10],
    drivers: [
      { abbr:'HAM', name:'Lewis Hamilton', fullName:'Lewis Hamilton', team:'Mercedes', color:'#27F4D2' },
      { abbr:'ROS', name:'Nico Rosberg', fullName:'Nico Rosberg', team:'Mercedes', color:'#27F4D2' },
      { abbr:'VER', name:'Max Verstappen', fullName:'Max Verstappen', team:'Red Bull TAG Heuer', color:'#3671C6' },
      { abbr:'PER', name:'Sergio Perez', fullName:'Sergio Perez', team:'Force India Mercedes', color:'#FF87BC' },
      { abbr:'VET', name:'Sebastian Vettel', fullName:'Sebastian Vettel', team:'Ferrari', color:'#E8002D' },
      { abbr:'SAI', name:'Carlos Sainz', fullName:'Carlos Sainz', team:'Toro Rosso Ferrari', color:'#5E8FAA' },
      { abbr:'HUL', name:'Nico Hülkenberg', fullName:'Nico Hülkenberg', team:'Force India Mercedes', color:'#FF87BC' },
      { abbr:'RIC', name:'Daniel Ricciardo', fullName:'Daniel Ricciardo', team:'Red Bull TAG Heuer', color:'#3671C6' },
      { abbr:'NAS', name:'Felipe Nasr', fullName:'Felipe Nasr', team:'Sauber Ferrari', color:'#888888' },
      { abbr:'ALO', name:'Fernando Alonso', fullName:'Fernando Alonso', team:'McLaren Honda', color:'#FF8000' },
      { abbr:'BOT', name:'Valtteri Bottas', fullName:'Valtteri Bottas', team:'Williams Mercedes', color:'#64C4FF' },
      { abbr:'OCO', name:'Esteban Ocon', fullName:'Esteban Ocon', team:'MRT Mercedes', color:'#888888' },
      { abbr:'KVY', name:'Daniil Kvyat', fullName:'Daniil Kvyat', team:'Toro Rosso Ferrari', color:'#5E8FAA' },
      { abbr:'MAG', name:'Kevin Magnussen', fullName:'Kevin Magnussen', team:'Renault', color:'#FFD800' },
      { abbr:'WEH', name:'Pascal Wehrlein', fullName:'Pascal Wehrlein', team:'MRT Mercedes', color:'#888888' },
      { abbr:'BUT', name:'Jenson Button', fullName:'Jenson Button', team:'McLaren Honda', color:'#FF8000' },
      { abbr:'GUT', name:'Esteban Gutiérrez', fullName:'Esteban Gutiérrez', team:'Haas Ferrari', color:'#B6BABD', isDNF: true },
      { abbr:'MAS', name:'Felipe Massa', fullName:'Felipe Massa', team:'Williams Mercedes', color:'#64C4FF', isDNF: true },
      { abbr:'PAL', name:'Jolyon Palmer', fullName:'Jolyon Palmer', team:'Renault', color:'#FFD800', isDNF: true },
      { abbr:'RAI', name:'Kimi Räikkönen', fullName:'Kimi Räikkönen', team:'Ferrari', color:'#E8002D', isDNF: true },
      { abbr:'ERI', name:'Marcus Ericsson', fullName:'Marcus Ericsson', team:'Sauber Ferrari', color:'#888888', isDNF: true },
      { abbr:'GRO', name:'Romain Grosjean', fullName:'Romain Grosjean', team:'Haas Ferrari', color:'#B6BABD', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     HUNGARY 2009
  ───────────────────────────────────────── */
  {
    id:     'hungary_2009',
    difficulty: 'medium',
    name:   'Hungarian Grand Prix',
    year:   2009,
    flag:   '🇭🇺',
    hidden: [1, 3, 5, 8],
    drivers: [
      { abbr:'HAM', name:'Lewis Hamilton', fullName:'Lewis Hamilton', team:'McLaren Mercedes', color:'#27F4D2' },
      { abbr:'RAI', name:'Kimi Räikkönen', fullName:'Kimi Räikkönen', team:'Ferrari', color:'#E8002D' },
      { abbr:'WEB', name:'Mark Webber', fullName:'Mark Webber', team:'RBR Renault', color:'#3671C6' },
      { abbr:'ROS', name:'Nico Rosberg', fullName:'Nico Rosberg', team:'Williams Toyota', color:'#64C4FF' },
      { abbr:'KOV', name:'Heikki Kovalainen', fullName:'Heikki Kovalainen', team:'McLaren Mercedes', color:'#27F4D2' },
      { abbr:'GLO', name:'Timo Glock', fullName:'Timo Glock', team:'Toyota', color:'#888888' },
      { abbr:'BUT', name:'Jenson Button', fullName:'Jenson Button', team:'Brawn Mercedes', color:'#27F4D2' },
      { abbr:'TRU', name:'Jarno Trulli', fullName:'Jarno Trulli', team:'Toyota', color:'#888888' },
      { abbr:'NAK', name:'Kazuki Nakajima', fullName:'Kazuki Nakajima', team:'Williams Toyota', color:'#64C4FF' },
      { abbr:'BAR', name:'Rubens Barrichello', fullName:'Rubens Barrichello', team:'Brawn Mercedes', color:'#27F4D2' },
      { abbr:'HEI', name:'Nick Heidfeld', fullName:'Nick Heidfeld', team:'Sauber BMW', color:'#888888' },
      { abbr:'PIQ', name:'Nelson Piquet Jr.', fullName:'Nelson Piquet Jr.', team:'Renault', color:'#FFD800' },
      { abbr:'KUB', name:'Robert Kubica', fullName:'Robert Kubica', team:'Sauber BMW', color:'#888888' },
      { abbr:'FIS', name:'Giancarlo Fisichella', fullName:'Giancarlo Fisichella', team:'Force India Mercedes', color:'#FF87BC' },
      { abbr:'ALG', name:'Jaime Alguersuari', fullName:'Jaime Alguersuari', team:'STR Ferrari', color:'#5E8FAA' },
      { abbr:'BUE', name:'Sebastien Buemi', fullName:'Sebastien Buemi', team:'STR Ferrari', color:'#5E8FAA' },
      { abbr:'VET', name:'Sebastian Vettel', fullName:'Sebastian Vettel', team:'RBR Renault', color:'#3671C6', isDNF: true },
      { abbr:'ALO', name:'Fernando Alonso', fullName:'Fernando Alonso', team:'Renault', color:'#FFD800', isDNF: true },
      { abbr:'SUT', name:'Adrian Sutil', fullName:'Adrian Sutil', team:'Force India Mercedes', color:'#FF87BC', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     GERMANY (NÜRBURGRING) 1961
  ───────────────────────────────────────── */
  {
    id:     'germany_1961',
    difficulty: 'hard',
    name:   'German Grand Prix',
    year:   1961,
    flag:   '🇩🇪',
    hidden: [1, 3, 5, 7],
    drivers: [
      { abbr:'MOS', name:'Stirling Moss', fullName:'Stirling Moss', team:'Lotus Climax', color:'#000000' },
      { abbr:'TRI', name:'Wolfgang von Trips', fullName:'Wolfgang von Trips', team:'Ferrari', color:'#E8002D' },
      { abbr:'HIL', name:'Phil Hill', fullName:'Phil Hill', team:'Ferrari', color:'#E8002D' },
      { abbr:'CLA', name:'Jim Clark', fullName:'Jim Clark', team:'Lotus Climax', color:'#000000' },
      { abbr:'SUR', name:'John Surtees', fullName:'John Surtees', team:'Cooper Climax', color:'#888888' },
      { abbr:'MCL', name:'Bruce McLaren', fullName:'Bruce McLaren', team:'Cooper Climax', color:'#888888' },
      { abbr:'GUR', name:'Dan Gurney', fullName:'Dan Gurney', team:'Porsche', color:'#888888' },
      { abbr:'GIN', name:'Richie Ginther', fullName:'Richie Ginther', team:'Ferrari', color:'#E8002D' },
      { abbr:'LEW', name:'Jack Lewis', fullName:'Jack Lewis', team:'Cooper Climax', color:'#888888' },
      { abbr:'SAL', name:'Roy Salvadori', fullName:'Roy Salvadori', team:'Cooper Climax', color:'#888888' },
      { abbr:'MAG', name:'Tony Maggs', fullName:'Tony Maggs', team:'Lotus Climax', color:'#000000' },
      { abbr:'BUR', name:'Ian Burgess', fullName:'Ian Burgess', team:'Cooper Climax', color:'#888888' },
      { abbr:'HER', name:'Hans Herrmann', fullName:'Hans Herrmann', team:'Porsche', color:'#888888' },
      { abbr:'DEG', name:'Carel Godin de Beaufort', fullName:'Carel Godin de Beaufort', team:'Porsche', color:'#888888' },
      { abbr:'MAI', name:'Willy Mairesse', fullName:'Willy Mairesse', team:'Ferrari', color:'#E8002D', isDNF: true },
      { abbr:'MAR', name:'Tony Marsh', fullName:'Tony Marsh', team:'Lotus Climax', color:'#000000' },
      { abbr:'ASH', name:'Gerry Ashmore', fullName:'Gerry Ashmore', team:'Lotus Climax', color:'#000000' },
      { abbr:'TRI2', name:'Maurice Trintignant', fullName:'Maurice Trintignant', team:'Cooper Maserati', color:'#888888', isDNF: true },
      { abbr:'COL', name:'Bernard Collomb', fullName:'Bernard Collomb', team:'Cooper Climax', color:'#888888', isDNF: true },
      { abbr:'BAN', name:'Lorenzo Bandini', fullName:'Lorenzo Bandini', team:'Cooper Maserati', color:'#888888', isDNF: true },
      { abbr:'BRO', name:'Tony Brooks', fullName:'Tony Brooks', team:'BRM Climax', color:'#888888', isDNF: true },
      { abbr:'BON', name:'Jo Bonnier', fullName:'Jo Bonnier', team:'Porsche', color:'#888888', isDNF: true },
      { abbr:'SEI', name:'Wolfgang Seidel', fullName:'Wolfgang Seidel', team:'Lotus Climax', color:'#000000', isDNF: true },
      { abbr:'IRE', name:'Innes Ireland', fullName:'Innes Ireland', team:'Lotus Climax', color:'#000000', isDNF: true },
      { abbr:'HIL2', name:'Graham Hill', fullName:'Graham Hill', team:'BRM Climax', color:'#888888', isDNF: true },
      { abbr:'BRA', name:'Jack Brabham', fullName:'Jack Brabham', team:'Cooper Climax', color:'#888888', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     MONACO 1981
  ───────────────────────────────────────── */
  {
    id:     'monaco_1981',
    difficulty: 'hard',
    name:   'Monaco Grand Prix',
    year:   1981,
    flag:   '🇲🇨',
    hidden: [1, 3, 5, 7],
    drivers: [
      { abbr:'VIL', name:'Gilles Villeneuve', fullName:'Gilles Villeneuve', team:'Ferrari', color:'#E8002D' },
      { abbr:'JON', name:'Alan Jones', fullName:'Alan Jones', team:'Williams Ford', color:'#64C4FF' },
      { abbr:'LAF', name:'Jacques Laffite', fullName:'Jacques Laffite', team:'Ligier Matra', color:'#888888' },
      { abbr:'PIR', name:'Didier Pironi', fullName:'Didier Pironi', team:'Ferrari', color:'#E8002D' },
      { abbr:'CHE', name:'Eddie Cheever', fullName:'Eddie Cheever', team:'Tyrrell Ford', color:'#5E8FAA' },
      { abbr:'SUR', name:'Marc Surer', fullName:'Marc Surer', team:'Ensign Ford', color:'#888888' },
      { abbr:'TAM', name:'Patrick Tambay', fullName:'Patrick Tambay', team:'Theodore Ford', color:'#888888' },
      { abbr:'PIQ', name:'Nelson Piquet', fullName:'Nelson Piquet', team:'Brabham Ford', color:'#888888', isDNF: true },
      { abbr:'WAT', name:'John Watson', fullName:'John Watson', team:'McLaren Ford', color:'#FF8000', isDNF: true },
      { abbr:'ALB', name:'Michele Alboreto', fullName:'Michele Alboreto', team:'Tyrrell Ford', color:'#5E8FAA', isDNF: true },
      { abbr:'GIA', name:'Bruno Giacomelli', fullName:'Bruno Giacomelli', team:'Alfa Romeo', color:'#C92D4B', isDNF: true },
      { abbr:'PRO', name:'Alain Prost', fullName:'Alain Prost', team:'Renault', color:'#FFD800', isDNF: true },
      { abbr:'REU', name:'Carlos Reutemann', fullName:'Carlos Reutemann', team:'Williams Ford', color:'#64C4FF', isDNF: true },
      { abbr:'DEA', name:'Elio de Angelis', fullName:'Elio de Angelis', team:'Lotus Ford', color:'#000000', isDNF: true },
      { abbr:'ARN', name:'René Arnoux', fullName:'René Arnoux', team:'Renault', color:'#FFD800', isDNF: true },
      { abbr:'PAT', name:'Riccardo Patrese', fullName:'Riccardo Patrese', team:'Arrows Ford', color:'#888888', isDNF: true },
      { abbr:'MAN', name:'Nigel Mansell', fullName:'Nigel Mansell', team:'Lotus Ford', color:'#000000', isDNF: true },
      { abbr:'STO', name:'Slim Borgudd', fullName:'Slim Borgudd', team:'Arrows Ford', color:'#888888', isDNF: true },
      { abbr:'CES', name:'Andrea de Cesaris', fullName:'Andrea de Cesaris', team:'McLaren Ford', color:'#FF8000', isDNF: true },
      { abbr:'AND', name:'Mario Andretti', fullName:'Mario Andretti', team:'Alfa Romeo', color:'#C92D4B', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     CANADA 2014
  ───────────────────────────────────────── */
  {
    id:     'canada_2014',
    difficulty: 'easy',
    name:   'Canadian Grand Prix',
    year:   2014,
    flag:   '🇨🇦',
    hidden: [1, 3, 5, 7, 10],
    drivers: [
      { abbr:'RIC', name:'Daniel Ricciardo', fullName:'Daniel Ricciardo', team:'Red Bull Renault', color:'#3671C6' },
      { abbr:'ROS', name:'Nico Rosberg', fullName:'Nico Rosberg', team:'Mercedes', color:'#27F4D2' },
      { abbr:'VET', name:'Sebastian Vettel', fullName:'Sebastian Vettel', team:'Red Bull Renault', color:'#3671C6' },
      { abbr:'BUT', name:'Jenson Button', fullName:'Jenson Button', team:'McLaren Mercedes', color:'#FF8000' },
      { abbr:'HUL', name:'Nico Hülkenberg', fullName:'Nico Hülkenberg', team:'Force India Mercedes', color:'#FF87BC' },
      { abbr:'ALO', name:'Fernando Alonso', fullName:'Fernando Alonso', team:'Ferrari', color:'#E8002D' },
      { abbr:'BOT', name:'Valtteri Bottas', fullName:'Valtteri Bottas', team:'Williams Mercedes', color:'#64C4FF' },
      { abbr:'VER', name:'Jean-Eric Vergne', fullName:'Jean-Eric Vergne', team:'STR Renault', color:'#5E8FAA' },
      { abbr:'MAG', name:'Kevin Magnussen', fullName:'Kevin Magnussen', team:'McLaren Mercedes', color:'#FF8000' },
      { abbr:'RAI', name:'Kimi Räikkönen', fullName:'Kimi Räikkönen', team:'Ferrari', color:'#E8002D' },
      { abbr:'PER', name:'Sergio Perez', fullName:'Sergio Perez', team:'Force India Mercedes', color:'#FF87BC', isDNF: true },
      { abbr:'MAS', name:'Felipe Massa', fullName:'Felipe Massa', team:'Williams Mercedes', color:'#64C4FF', isDNF: true },
      { abbr:'SUT', name:'Adrian Sutil', fullName:'Adrian Sutil', team:'Sauber Ferrari', color:'#888888' },
      { abbr:'GUT', name:'Esteban Gutiérrez', fullName:'Esteban Gutiérrez', team:'Sauber Ferrari', color:'#888888', isDNF: true },
      { abbr:'GRO', name:'Romain Grosjean', fullName:'Romain Grosjean', team:'Lotus Renault', color:'#000000', isDNF: true },
      { abbr:'KVY', name:'Daniil Kvyat', fullName:'Daniil Kvyat', team:'STR Renault', color:'#5E8FAA', isDNF: true },
      { abbr:'HAM', name:'Lewis Hamilton', fullName:'Lewis Hamilton', team:'Mercedes', color:'#27F4D2', isDNF: true },
      { abbr:'KOB', name:'Kamui Kobayashi', fullName:'Kamui Kobayashi', team:'Caterham Renault', color:'#888888', isDNF: true },
      { abbr:'MAL', name:'Pastor Maldonado', fullName:'Pastor Maldonado', team:'Lotus Renault', color:'#000000', isDNF: true },
      { abbr:'ERI', name:'Marcus Ericsson', fullName:'Marcus Ericsson', team:'Caterham Renault', color:'#888888', isDNF: true },
      { abbr:'CHI', name:'Max Chilton', fullName:'Max Chilton', team:'Marussia Ferrari', color:'#888888', isDNF: true },
      { abbr:'BIA', name:'Jules Bianchi', fullName:'Jules Bianchi', team:'Marussia Ferrari', color:'#888888', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     ITALY (MONZA) 1956
  ───────────────────────────────────────── */
  {
    id:     'monza_1956',
    difficulty: 'hard',
    name:   'Italian Grand Prix',
    year:   1956,
    flag:   '🇮🇹',
    hidden: [1, 3, 5, 7],
    drivers: [
      { abbr:'MOS', name:'Stirling Moss', fullName:'Stirling Moss', team:'Maserati', color:'#888888' },
      { abbr:'FAN', name:'Juan Manuel Fangio', fullName:'Juan Manuel Fangio', team:'Ferrari', color:'#E8002D' },
      { abbr:'FLO', name:'Ron Flockhart', fullName:'Ron Flockhart', team:'Connaught Alta', color:'#888888' },
      { abbr:'GOD', name:'Francisco Godia', fullName:'Francisco Godia', team:'Maserati', color:'#888888' },
      { abbr:'FAI', name:'Jack Fairman', fullName:'Jack Fairman', team:'Connaught Alta', color:'#888888' },
      { abbr:'PIO', name:'Luigi Piotti', fullName:'Luigi Piotti', team:'Maserati', color:'#888888' },
      { abbr:'DEG', name:'Emmanuel de Graffenried', fullName:'Emmanuel de Graffenried', team:'Maserati', color:'#888888' },
      { abbr:'CAS', name:'Eugenio Castellotti', fullName:'Eugenio Castellotti', team:'Ferrari', color:'#E8002D' },
      { abbr:'SIM', name:'André Simon', fullName:'André Simon', team:'Gordini', color:'#888888' },
      { abbr:'GER', name:'Gerino Gerini', fullName:'Gerino Gerini', team:'Maserati', color:'#888888' },
      { abbr:'SAL', name:'Roy Salvadori', fullName:'Roy Salvadori', team:'Maserati', color:'#888888' },
      { abbr:'MUS', name:'Luigi Musso', fullName:'Luigi Musso', team:'Ferrari', color:'#E8002D', isDNF: true },
      { abbr:'COL', name:'Peter Collins', fullName:'Peter Collins', team:'Ferrari', color:'#E8002D', isDNF: true },
      { abbr:'BEH', name:'Jean Behra', fullName:'Jean Behra', team:'Maserati', color:'#888888', isDNF: true },
      { abbr:'SCH', name:'Harry Schell', fullName:'Harry Schell', team:'Vanwall', color:'#888888', isDNF: true },
      { abbr:'TRI', name:'Maurice Trintignant', fullName:'Maurice Trintignant', team:'Vanwall', color:'#888888', isDNF: true },
      { abbr:'TAR', name:'Piero Taruffi', fullName:'Piero Taruffi', team:'Vanwall', color:'#888888', isDNF: true },
      { abbr:'BON', name:'Jo Bonnier', fullName:'Jo Bonnier', team:'Maserati', color:'#888888', isDNF: true },
      { abbr:'HAL', name:'Bruce Halford', fullName:'Bruce Halford', team:'Maserati', color:'#888888', isDNF: true },
      { abbr:'VIL', name:'Luigi Villoresi', fullName:'Luigi Villoresi', team:'Maserati', color:'#888888', isDNF: true },
      { abbr:'POR', name:'Alfonso de Portago', fullName:'Alfonso de Portago', team:'Ferrari', color:'#E8002D', isDNF: true },
      { abbr:'LES', name:'Les Leston', fullName:'Les Leston', team:'Connaught Alta', color:'#888888', isDNF: true },
      { abbr:'SIL', name:'Hernando da Silva Ramos', fullName:'Hernando da Silva Ramos', team:'Gordini', color:'#888888', isDNF: true },
    ]
  },



];

/* ═══════════════════════════════════════════
   Race Stories — matched to race IDs
═══════════════════════════════════════════ */
