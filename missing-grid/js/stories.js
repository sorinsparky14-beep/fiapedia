const RACE_STORIES = {
  'france_1979': {
    text: `Nobody came to Dijon expecting to witness the most breathtaking wheel-to-wheel battle in Formula 1 history, yet that is exactly what they got. With just one lap remaining, Gilles Villeneuve and René Arnoux were fighting not for the win, but for second place. What followed was pure madness: the two cars banged wheels repeatedly at over 200 km/h, trading paint, swapping positions, and defying every law of physics and common sense. Villeneuve eventually prevailed, but the result hardly mattered. Both drivers climbed out of their cars laughing. The crowd was left speechless. Decades later, it remains the benchmark against which every racing battle is measured.`,
    tags: ["Pure spectacle", "Greatest duel"]
  },
  'japan_1976': {
    text: `Rain hammered Mount Fuji as the grid assembled for what would become one of the most emotionally charged season finales in motorsport. Niki Lauda, who had miraculously survived a near-fatal fireball at the Nürburgring just weeks earlier, climbed into his Ferrari and completed two laps before pulling into the pits. The conditions were undriveable, he said, and more importantly, he valued his life more than a championship. James Hunt, meanwhile, fought through the chaos, finishing third and snatching the title by a single point. The contrast between the two men could not have been greater. One chose survival. The other chose glory. Both were right.`,
    tags: ["Title decider", "Drama", "Lauda vs Hunt"]
  },
  'australia_1994': {
    text: `The 1994 season had already been scarred by tragedy. By the time the circus arrived in Adelaide for the final race, Damon Hill trailed Michael Schumacher by a single point. The tension was unbearable. Then, late in the race, Schumacher nudged the wall and Hill moved to pass. The two collided. Schumacher's car was beached on the gravel and Hill's was too damaged to continue. Schumacher became world champion. Whether it was a racing incident or something more deliberate has never been settled, but the debate has never really stopped either. Adelaide 1994 remains Formula 1's great unsolved mystery.`,
    tags: ["Title decider", "Controversy", "Schumacher vs Hill"]
  },
  'brazil_2008': {
    text: `Felipe Massa crossed the line first, leapt from his car, and embraced his team in tears. He was the world champion, for about thirty seconds. On the other side of the circuit, Lewis Hamilton was locked in a battle with Timo Glock for the fifth place he needed. With less than a kilometre to go, Glock, on dry tyres in the rain, slowed dramatically. Hamilton swept past. The championship had changed hands in the final corner of the final lap of the final race. Massa's father had to break the news to his son over the radio. It was the cruellest possible ending and the most extraordinary beginning for Hamilton.`,
    tags: ["Title decider", "Greatest finale ever"]
  },
  'abu_dhabi_2021': {
    text: `For 57 laps, Lewis Hamilton drove like a man possessed, seemingly heading toward an eighth world championship. Then a safety car changed everything. Race director Michael Masi allowed only the lapped cars between Hamilton and Verstappen to unlap themselves, handing Red Bull the opportunity they needed. Verstappen, on fresh soft tyres against Hamilton's worn hards, passed him on the final lap. The championship had been decided in the most contentious manner imaginable. Appeals were lodged and rejected. Masi was replaced. The arguments continue to this day. Whatever your verdict, no one who watched it will ever forget it.`,
    tags: ["Title decider", "Controversy", "Verstappen vs Hamilton"]
  },
  'monaco_1984': {
    text: `A young Ayrton Senna, driving a Toleman that had no business leading a Monaco Grand Prix, was catching Alain Prost in the pouring rain with every single lap. His advantage was growing by two seconds per lap, an almost supernatural performance. Then the red flags came out and the race was stopped. Prost was declared the winner. The decision to stop the race at that precise moment, when Senna was closing so rapidly, remains one of the most debated calls in Formula 1 history. Senna himself never forgot it. Monaco had given him a preview of his destiny and then taken it away.`,
    tags: ["Drama", "Senna robbed?"]
  },
  'belgium_1998': {
    text: `Spa-Francorchamps in the wet is always a recipe for drama, but nobody could have predicted the scale of what unfolded in 1998. A massive first-lap pile-up eliminated half the field before they even reached Eau Rouge. Then Michael Schumacher, furious after being hit by David Coulthard in near-zero visibility, stormed into the McLaren garage to confront him. Meanwhile, Damon Hill, in only his second race for the backmarker Jordan team, inherited the lead and held on to win. It was Jordan's first-ever Grand Prix victory, and Hill's redemption story continued. An utterly unforgettable afternoon at the cathedral of motorsport.`,
    tags: ["Surprise", "Chaos in the rain"]
  },
  'belgium_2000': {
    text: `Ask any Formula 1 fan to name the greatest overtaking move they have ever seen, and a significant number will point to this one. Mika Häkkinen had been stuck behind Michael Schumacher for laps, unable to find a way through. Then, on the Kemmel Straight, he spotted his chance: Ricardo Zonta's slower BAR was ahead, and Häkkinen split the two cars by going around the outside of Schumacher and the inside of Zonta simultaneously at around 300 km/h. It was a moment of such precision and bravery that Schumacher could only shake his head in admiration. Häkkinen won the race, but it is that single moment everyone remembers.`,
    tags: ["Pure spectacle", "Greatest overtake"]
  },
  'monza_1967': {
    text: `Jim Clark was a man apart in 1967, faster, smoother and more complete than anyone else on the grid. At Monza, he led the race and looked set for another dominant victory. Then, on the final lap, the Lotus engine began to cough. Clark was out of fuel. One by one, the cars he had lapped swept past him. John Surtees, driving the Honda that many had dismissed as too heavy and unreliable, crossed the line first. It was Honda's first Grand Prix victory and a reminder that in racing, the car that reaches the finish line wins, not necessarily the fastest one.`,
    tags: ["Surprise", "Clark runs out of fuel"]
  },
  'europe_1993': {
    text: `Ayrton Senna lined up fourth on the grid at a wet Donington Park. By the time he completed the first lap, he was in the lead. In the space of those few extraordinary minutes, he had passed Michael Schumacher, Karl Wendlinger, Damon Hill and Alain Prost, four of the best drivers in the world, in conditions that reduced most of his rivals to cautious shadows of themselves. It was not just a remarkable lap. It was a masterclass in car control, spatial awareness and the kind of rainy-day brilliance that made Senna feel like a force of nature rather than a racing driver. He went on to win easily. The opening lap was the whole story.`,
    tags: ["Pure spectacle", "Greatest opening lap ever"]
  },
  'monza_1970': {
    text: `The old Monza circuit, flat-out, slipstreaming, engines screaming at maximum revs, produced its greatest chapter in 1970. Five cars arrived at the final chicane almost side by side, separated by fractions of a second. Clay Regazzoni, in just his fifth Formula 1 race, found himself in the best position and held his nerve to win. Behind him, the gaps were almost invisible. The tifosi went wild: Ferrari had won at Monza, and they had found a new hero. Regazzoni's debut season had begun something special, both for the driver and for the sport.`,
    tags: ["Pure spectacle", "Group finish"]
  },
  'bahrain_2005': {
    text: `The 2005 Bahrain Grand Prix was not, by any objective measure, a classic race. But it announced something important: that Ferrari's era of total domination was over, and that a young Spaniard named Fernando Alonso was about to rewrite the record books. At just 23 years old, Alonso drove with the authority of a seasoned veteran, managing his pace, his tyres and his rivals with a maturity that left everyone, including Michael Schumacher, looking ordinary. By the end of the season he was the youngest world champion in history. Bahrain was where the changing of the guard became undeniable.`,
    tags: ["Title era begins"]
  },
  'australia_1986': {
    text: `Nigel Mansell needed only to finish the race to become world champion. For most of the afternoon, he was doing exactly that. Then, with 19 laps remaining, his rear tyre exploded at over 300 km/h. Miraculously, Mansell kept the car from hitting the wall and brought it safely to a stop. Alain Prost inherited the lead and, with it, the championship. The Williams pit wall had seen the signs of tyre wear but made the calculated gamble not to stop. That decision, and that exploding tyre, denied Mansell a title many believed was already his. He would have to wait until 1992 for his moment.`,
    tags: ["Title decider", "Mansell's tyre", "Drama"]
  },
  'brazil_2012': {
    text: `Sebastian Vettel was hit from behind on the opening lap and fell to last place. What followed was one of the greatest recovery drives in Formula 1 history. Lap after lap, Vettel carved through the field with ruthless precision while Jenson Button won the race in fine style. As the chequered flag fell, the entire paddock was calculating points. Vettel had fought back to sixth place, and that was enough. He was world champion for the third consecutive time. Button celebrated his win, but Vettel celebrated something far larger. Interlagos had delivered yet another unforgettable chapter.`,
    tags: ["Title decider", "Vettel's comeback"]
  },
  'monaco_1996': {
    text: `Monaco in the rain is the great equaliser. In 1996, the weather and attrition dismantled the natural order of things until only a handful of cars were still running. Olivier Panis, driving a Ligier that should never have been anywhere near the podium, found himself in the lead. He held on, crossed the line first and burst into tears on the podium. It was Ligier's final Grand Prix victory, and it remained the only win of Panis's entire career. Sometimes Monaco does not reward the fastest driver. It rewards the last man standing, and in 1996, that was Panis.`,
    tags: ["Surprise", "Backmarker wins"]
  },
  'brazil_2003': {
    text: `The 2003 Brazilian Grand Prix was stopped prematurely after a crash, and the resulting classification caused so much confusion that the winner was not officially confirmed until several days after the race. When the dust settled, it was Giancarlo Fisichella and Jordan who had triumphed. It was the last Grand Prix victory for the Jordan team, the plucky and colourful operation that had given Michael Schumacher his debut. The podium ceremony was improvised and chaotic, and the trophy presentation happened in the garage. In its own dishevelled way, it was a perfect send-off for one of Formula 1's most beloved teams.`,
    tags: ["Surprise", "Chaos", "Jordan's last win"]
  },
  'monaco_1982': {
    text: `The 1982 season was already overshadowed by the death of Gilles Villeneuve at Zolder and the bitter controversy surrounding his Ferrari teammate Didier Pironi. By the time Monaco arrived, the paddock was still in mourning. The race itself unravelled in the final laps: Prost crashed, Daly spun, and De Cesaris ran out of fuel. Riccardo Patrese, who had himself spun out earlier, managed to restart his car and crossed the line in first place, almost by accident. Nobody in the garage could quite believe it. It was a race that felt less like a sporting contest and more like a reminder that in 1982, Formula 1 was barely holding itself together.`,
    tags: ["Surprise", "Drama", "Gilles's shadow"]
  },
  'canada_2011': {
    text: `The 2011 Canadian Grand Prix lasted over four hours. It featured torrential rain, a safety car that seemed to appear every few laps, and enough drama to fill an entire season. Jenson Button crashed on lap one, received a drive-through penalty and fell to last place. What followed was the most extraordinary recovery drive: lap after lap in appalling conditions, Button carved through the field with patience and precision. With two laps to go, he caught and passed Sebastian Vettel for the lead. The winning margin was less than a second. Button had won from last place. It was not just a race; it was an endurance test, a thriller, and a love story all at once.`,
    tags: ["Pure spectacle", "Longest race ever"]
  },
  'germany_2019': {
    text: `The 2019 German Grand Prix had everything. Rain arrived midway through the race and exposed the fragility of those who had been dominant all weekend. Sebastian Vettel crashed out of a podium position. Lewis Hamilton suffered a bizarre pit lane error and fell back. Charles Leclerc retired from the lead. The safety car appeared multiple times. From eleventh place on the grid, Max Verstappen threaded through the carnage and took the lead. He crossed the line first, composed, precise and utterly unbothered by the chaos around him. It was the race that showed Verstappen was becoming something truly special.`,
    tags: ["Surprise", "Chaos", "Ferrari and Mercedes implode"]
  },
  'san_marino_1989': {
    text: `Before the 1989 San Marino Grand Prix, Ayrton Senna and Alain Prost had agreed not to attack each other into the first corner. At the first start, which was red-flagged, Senna broke that agreement. When the race restarted properly, the tension was already unbearable. Prost eventually retired and Senna won. But the real story was what had been ignited between those two men: a rivalry so intense, so personal and so brilliantly matched that it would define an entire era of Formula 1 and leave scars that never fully healed. Imola 1989 was where the war truly began.`,
    tags: ["Drama", "Senna vs Prost rivalry begins"]
  },
  'germany_2007': {
    text: `Markus Winkelhock was making his Formula 1 debut for the tiny Spyker team. He had no business being anywhere near the front. But when rain began to fall on the grid before the start, Spyker made the brave and slightly desperate decision to put him on wet tyres immediately. As the rest of the field pitted from dry tyres in the opening laps, Winkelhock found himself leading a Formula 1 Grand Prix. For a few magical minutes, an unknown driver in an uncompetitive car was at the front of the world's greatest racing series. The rain intensified, Winkelhock eventually retired, and Alonso won. But nobody talked about that. They talked about the man from Spyker.`,
    tags: ["Surprise", "Winkelhock moment"]
  },
  'britain_1950': {
    text: `On the 13th of May 1950, at a repurposed wartime airfield in Northamptonshire, a new chapter in sporting history began. King George VI was in attendance as Giuseppe Farina led an Alfa Romeo one-two-three to victory in the very first official Formula 1 World Championship race. The cars were pre-war machines barely updated for peacetime, and the drivers were survivors of a different era entirely. The crowd had never seen anything quite like it. Farina went on to win the first-ever world championship title that year. But this race, raw, imperfect and historic, was where everything started. Every Formula 1 story begins here.`,
    tags: ["Historic", "First ever F1 race"]
  },
  'monaco_2016': {
    text: `Daniel Ricciardo led the Monaco Grand Prix comfortably. His Red Bull pit wall called him in for a tyre change. When he arrived, the mechanics were not ready, as the tyres had not been brought out in time. He sat stationary for over five seconds and rejoined behind Lewis Hamilton. Red Bull tried to recover the situation but the damage was done. Ricciardo, furious, finished third. Hamilton, who had done nothing particularly remarkable, won. The Australian's reaction after the race, trying to hide his devastation behind his trademark smile, was one of the most affecting images of the season. Monaco had taken a victory that was entirely his.`,
    tags: ["Drama", "Ricciardo robbed by his own team"]
  },
  'japan_1977': {
    text: `The 1977 Japanese Grand Prix should never have been run. Fog and rain reduced visibility to almost nothing. On the second lap, Gilles Villeneuve's Ferrari launched into the air after contact and came down on a marshal and a photographer, killing both instantly. The race continued regardless, a decision that remains deeply troubling to this day. James Hunt won and Carlos Reutemann finished second. But the podium celebration felt hollow in light of what had happened. The race accelerated the conversation about safety standards in Formula 1, and Fuji was not used as a Grand Prix venue again for nearly three decades.`,
    tags: ["Drama", "Tragic race"]
  },
  'germany_2018': {
    text: `Sebastian Vettel led the 2018 German Grand Prix from pole position and appeared to be cruising toward an easy home victory. Then, with 13 laps remaining, he ran wide at the hairpin and slid into the tyre barrier. His race was over. Lewis Hamilton, who had started fourteenth after a gearbox penalty, had spent the afternoon fighting methodically through the field. He inherited the lead and won in front of a stunned crowd. Vettel's error did not just cost him the race; it fundamentally shifted the momentum of the entire championship battle. Hamilton never looked back.`,
    tags: ["Surprise", "Vettel's costly error"]
  },
  'germany_1999': {
    text: `Johnny Herbert had been one of British motorsport's great nearly-men for most of his career, talented enough to win but rarely given the machinery to do so. At the Nürburgring in 1999, with Michael Schumacher recovering from a broken leg and the race descending into chaos, Herbert found himself in the right place at the right time. He drove a flawless race for the Stewart team, a small and ambitious operation in only its third season in Formula 1. When he crossed the line first, he wept openly on the podium. It was not just a victory for Herbert; it felt like a victory for everyone who had ever been overlooked.`,
    tags: ["Surprise", "Herbert's emotional win"]
  },
  'monaco_2004': {
    text: `In 2004, Michael Schumacher and Ferrari were virtually unbeatable. They won fifteen of the eighteen races that season. Monaco was the exception. Jarno Trulli qualified on the front row and led from the start, defending patiently and brilliantly through the streets where overtaking is almost impossible. Schumacher could not find a way past. When the chequered flag fell, Trulli had won the only Grand Prix of his entire career. He stood on the top step of the podium in the principality, the most glamorous venue in the sport, with an expression of pure disbelief. Some drivers wait a lifetime for one moment. This was his.`,
    tags: ["Surprise", "Only win of Trulli's career"]
  },
  'monza_1953': {
    text: `In an age before aerodynamics, before carbon fibre, before chicanes, the old Monza circuit was a place of extraordinary speed and genuine danger. In 1953, Fangio, Farina and Ascari arrived at the final lap separated by almost nothing. Their cars were sliding, screaming machines with barely any of the safety features that would come to define later decades. Fangio found the gap and crossed the line first, with his front bodywork nearly torn free. It was a reminder that motor racing was built on courage first and everything else second, and that Fangio was the most courageous of them all.`,
    tags: ["Pure spectacle", "Classic era battle"]
  },
  'abu_dhabi_2010': {
    text: `Four drivers arrived in Abu Dhabi with a mathematical chance of winning the 2010 world championship. By the end of the afternoon, only one was celebrating. Fernando Alonso, who needed only to finish ahead of Vettel, found himself trapped behind the Renault of Vitaly Petrov, unable to pass and watching the championship slip away lap by lap. Vettel won the race and the title, becoming the youngest Formula 1 world champion in history at just 23 years old. The records would keep falling. But this was the night they started, in the desert, in the dark, under floodlights, with a German prodigy who had only just begun.`,
    tags: ["Title decider", "Youngest champion ever"]
  },
  'monaco_1992': {
    text: `Nigel Mansell led the 1992 Monaco Grand Prix by nearly a minute when a puncture sent him to the pits. Senna, who had been running second all afternoon, inherited the lead with just a few laps remaining. Mansell rejoined on fresh tyres and charged. In the final laps he was catching Senna by three seconds a lap. The gap at the flag was just 0.2 seconds. Senna had won his fifth Monaco Grand Prix, equalling Graham Hill's record. The race confirmed what everyone already sensed: at Monaco, Senna was not merely competing. He was at home. He was part of the circuit itself.`,
    tags: ["Pure spectacle", "Senna's mystical Monaco"]
  },
  'bahrain_2020': {
    text: `On the opening lap of the 2020 Bahrain Grand Prix, Romain Grosjean's Haas pierced the barrier at 220 km/h and split in two. The fuel ignited immediately, engulfing the cockpit in a fireball. For twenty-eight seconds, the world watched in horror. Then Grosjean climbed out, with burned hands and singed eyebrows, but alive. The halo device, widely criticised as ugly and unnecessary when it was introduced in 2018, had saved his life by deflecting the barrier away from his head. Grosjean later said he felt a presence guiding him through the flames. Whatever the explanation, Formula 1 had witnessed a miracle. He raced again three months later.`,
    tags: ["Drama", "Survival miracle"]
  },
  'europe_1997': {
    text: `Michael Schumacher arrived at the final race of 1997 needing only to finish ahead of Jacques Villeneuve to be world champion. When Villeneuve attempted an overtake, Schumacher turned into him deliberately, but the Williams survived the contact and limped to the finish. Schumacher retired. Villeneuve became world champion. The FIA subsequently excluded Schumacher from the entire season's championship results, one of the most severe punishments in the sport's history. It was the day Formula 1 drew a clear line and declared without ambiguity: this kind of behaviour is not acceptable.`,
    tags: ["Title decider", "Schumacher's deliberate collision"]
  },
  'britain_1985': {
    text: `Nigel Mansell had been trying to win a Formula 1 Grand Prix for six years. He had driven for Lotus, suffered mechanical failures, been overlooked and underestimated at every turn. At Brands Hatch in 1985, in front of a partisan British crowd who had adopted him as their own, he finally crossed the line first. He was thirty-two years old. The scenes of celebration, Mansell in tears and the crowd surging forward, were unlike anything the sport had seen in years. It was not just a victory. It was the beginning of something. The lion had finally roared, and British motorsport would never be quite the same again.`,
    tags: ["Surprise", "Mansell's first ever win"]
  },
  'monza_1971': {
    text: `The 1971 Italian Grand Prix holds a record that will almost certainly never be broken: the closest finish in Formula 1 history. Peter Gethin crossed the line just 0.01 seconds ahead of Ronnie Peterson, with three more cars separated by less than half a second. The average race speed was 242 km/h, a record that stood for decades. Five cars, nose to tail, flat out through the banking of old Monza, all reaching for the finish line at once. Gethin, who had never won a Grand Prix before and never would again, found himself standing on the top step of the podium looking slightly bewildered. Nobody blamed him.`,
    tags: ["Pure spectacle", "Closest finish ever"]
  },
  'brazil_2016': {
    text: `The 2016 Brazilian Grand Prix will be remembered primarily for one thing: a nineteen-year-old Max Verstappen driving through a flooded and treacherous Interlagos in a manner that bordered on the supernatural. While multiple experienced drivers spun off the circuit, Verstappen executed overtake after impossible overtake, sideways, on the limit, in conditions of near-zero visibility. He recovered from a spin and still fought his way back through the field. Hamilton won the race and Rosberg claimed the title later that day. But the true story of the afternoon was a teenager announcing, with absolute certainty, that the future of Formula 1 belonged to him.`,
    tags: ["Pure spectacle", "Verstappen in the rain"]
  },
  'hungary_2009': {
    text: `Lewis Hamilton started the 2009 Hungarian Grand Prix from tenth place on the grid after receiving a penalty in qualifying. The Hungaroring is notoriously difficult for overtaking, and nobody gave him much chance. What followed was a masterclass in controlled aggression: Hamilton found gaps where none appeared to exist, managed his tyres with precision, and worked his way methodically to the front. He won comfortably. In a season where McLaren were far from the fastest car, it was a performance that reminded everyone why Hamilton had been considered a generational talent from the very moment he arrived in Formula 1.`,
    tags: ["Surprise", "Hamilton's comeback drive"]
  },
  'germany_1961': {
    text: `In 1961, the Ferrari Dino was significantly faster than anything else on the grid. At the Nürburgring, a 22-kilometre circuit of terrifying corners, jumps and blind crests, Stirling Moss drove a Lotus that had no business competing with it. Using strategy, local knowledge and an almost incomprehensible level of car control, Moss kept the Ferraris behind him for the entire race. He won by more than three seconds. Those who were there called it the greatest drive they had ever witnessed. Moss never won a world championship title. But performances like this one are precisely why many believe he was the greatest driver who ever lived.`,
    tags: ["Surprise", "Greatest drive of all time?"]
  },
  'monaco_1981': {
    text: `Gilles Villeneuve was already known for his refusal to accept defeat before Monaco 1981, but this race elevated that reputation to something close to legend. After contact with another car, Villeneuve was driving a Ferrari with severe damage, missing bodywork and barely any aerodynamic downforce remaining. He continued regardless, wrestling the broken machine through Monaco's unforgiving barriers lap after lap. He finished third. He had no right to finish at all. Villeneuve once said that second place was merely the first of the losers. On that afternoon, he finished third and won everything that mattered.`,
    tags: ["Pure spectacle", "Villeneuve refuses to quit"]
  },
  'canada_2014': {
    text: `Daniel Ricciardo had been told that a drive-through penalty would end any hope of victory. He served it, rejoined at the back and simply began his race again. When Nico Rosberg and Lewis Hamilton collided while fighting for the lead, the Australian suddenly found himself in contention. He hunted down Sergio Perez in the closing laps and crossed the line first, despite the penalty, despite the setback, despite everything. It was the first of many victories for one of the most naturally gifted and relentlessly cheerful drivers of his generation. Montreal had found its perfect setting for a debut win: chaotic, unexpected and impossible not to smile at.`,
    tags: ["Surprise", "Ricciardo's first win"]
  },
  'monza_1956': {
    text: `Juan Manuel Fangio needed points at Monza to secure the 1956 world championship. When his Ferrari broke down mid-race, his young teammate Peter Collins, who was himself in championship contention that year, pulled into the pits and handed Fangio his car. By doing so, Collins surrendered his own chance of ever becoming world champion. Fangio finished second, scored enough points and took the title. Afterwards, he said it was the most moving gesture he had ever experienced in racing. Collins never did win a championship. He was killed in a racing accident two years later. The 1956 Italian Grand Prix is remembered not for who won, but for what a young man chose to give away.`,
    tags: ["Drama", "Fangio's noble championship"]
  },
  'qatar_2023': {
    text: `The 2023 Qatar Grand Prix was run under sweltering heat that pushed drivers and teams to their absolute physical limits. Several drivers required medical attention after the race as temperatures inside the cockpit soared beyond 50 degrees Celsius. Max Verstappen claimed victory to extend his dominant championship lead, but the story of the weekend was the conditions themselves: brutal, unforgiving and unlike anything the modern paddock had experienced. The race prompted serious questions about scheduling and driver safety in extreme climates. Formula 1 had come to Qatar, and Qatar had certainly made its presence felt.`,
    tags: ["Drama", "Extreme heat"]
  },
  'bahrain_2024': {
    text: `The 2024 season opener in Bahrain confirmed what many had feared and many had hoped: Red Bull and Max Verstappen were still the force to beat. Carlos Sainz, driving with a recently diagnosed appendicitis that would require surgery just days later, delivered a performance of extraordinary physical courage to finish on the podium. Ferrari showed genuine promise throughout the weekend. But Verstappen crossed the line first with something to spare, setting the tone for what would follow. The desert had spoken: the new season had begun exactly where the last one left off.`,
    tags: ["Season opener", "Sainz's courage"]
  },
  'sao_paulo_2021': {
    text: `Lewis Hamilton produced one of the greatest drives of his career at Interlagos in 2021. Starting from the back of the grid after a disqualification in qualifying, he fought through the field with breathtaking aggression and precision. His wheel-to-wheel battle with Max Verstappen, who appeared to force Hamilton off the track at one point, had the entire paddock divided. Hamilton won the race. The title fight, already the most intense in years, was pushed to its absolute limit. Brazil 2021 was the race that showed the championship would ultimately be decided on the final lap of the final race of the season.`,
    tags: ["Pure spectacle", "Hamilton from the back"]
  },
  'monza_2021': {
    text: `The 2021 Italian Grand Prix produced one of the most extraordinary incidents in recent memory. Max Verstappen and Lewis Hamilton collided at the chicane, with Verstappen's Red Bull launching up and onto Hamilton's Mercedes. The halo device, once widely controversial, proved increasingly essential as it saved Hamilton from serious injury when Verstappen's wheel came to rest directly above his head. Both drivers retired on the spot. The championship battle had become something altogether more physical. Monza has always had a flair for the dramatic, and on this day it did not disappoint.`,
    tags: ["Drama", "Verstappen vs Hamilton"]
  },
  'hungary_2021': {
    text: `A chaotic opening corner at the Hungaroring saw Valtteri Bottas collected by Lando Norris, triggering a multi-car incident that eliminated several championship contenders in an instant. Esteban Ocon, who had started third, inherited the lead and held on brilliantly for a stunning maiden victory for Alpine. Sebastian Vettel crossed the line second but was subsequently disqualified for a fuel infringement. Fernando Alonso drove a masterclass in defensive racing, holding Hamilton behind him for lap after lap. It was one of those days when everything happened at once, and the final result felt almost impossible to believe.`,
    tags: ["Surprise", "Ocon's first win"]
  },
  'monza_2020': {
    text: `The 2020 Italian Grand Prix delivered one of the most unexpected results in years. Pierre Gasly, driving for the junior AlphaTauri team after being demoted from Red Bull the previous season, crossed the line first at Monza in a race turned upside down by safety cars and a bizarre pit lane incident that penalised Lewis Hamilton. It was Gasly's first Grand Prix victory and a deeply personal redemption story. After the lowest point of his career, he had climbed all the way back to the very top. Monza gave him back everything that had been taken away.`,
    tags: ["Surprise", "Gasly's redemption"]
  },
  'sakhir_2020': {
    text: `With Lewis Hamilton sidelined by COVID-19, George Russell stepped into the Mercedes for the Sakhir Grand Prix and drove as though he had been in the car all season. He led the race and looked set for a fairytale debut win, until a pit stop error by the Mercedes crew handed the position away. Russell, who had never scored a podium in his own Williams, was denied by his own team in the cruellest possible fashion. Sergio Perez inherited the victory, his first in Formula 1. Two storylines, one race: a nearly-man and a thoroughly deserving champion, separated by one catastrophic moment in the pit lane.`,
    tags: ["Drama", "Perez's first win", "Russell denied"]
  },
};
