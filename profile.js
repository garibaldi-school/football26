/*
  Garibaldi Staff Football Match • Sports Relief 2026
  Data file: all staff + comedy profile content.
  Edit here to tweak jokes, roles, and links.
*/

// Change this when you have the real donation URL.
const DONATE_URL = "https://www.comicrelief.com/";

/** @type {Array<{id:string,name:string,role:string,club:string,video:string,tagline:string,stats:{position:string,overall:number,pacerating:number,shooting:number,passing:number,defending:number,stamina:number},facts:Array<{label:string,value:string}>,challenge:string}>} */
const STAFF = [
  {
    id: "mr_brennan",
    name: "Mr Brennan",
    role: "Geography Teacher",
    club: "Nottingham Forest (die hard)",
    video: "video/mr_brennan.mp4",
    tagline: "Knows every river in Europe — still can’t find the touchline.",
    stats: { position: "Left Wing (by vibes)", overall: 82, pacerating: 71, shooting: 64, passing: 77, defending: 58, stamina: 88 },
    facts: [
      { label: "Special Move", value: "The ‘Contour Line’ — runs in circles, claims it’s ‘topography’." },
      { label: "Weakness", value: "Sees a tree and starts a 20‑minute lecture about biomes." },
      { label: "Goal Celebration", value: "Maps the route to the corner flag before sliding." },
      { label: "Matchday Snack", value: "Forest-themed crisps. Absolutely not negotiable." },
    ],
    challenge: "Donate £1+ and Mr Brennan will stop shouting ‘COME ON YOU REDS!’ at completely unrelated sports.",
  },
  {
    id: "mr_brimelow",
    name: "Mr Brimelow",
    role: "Science Teacher",
    club: "Thinks football needs more dramatic monologues",
    video: "video/mr_brimelow.mp4",
    tagline: "Acting range: 10/10. Passing range: depends if the crowd’s clapping.",
    stats: { position: "False 9 (true theatre kid)", overall: 79, pacerating: 70, shooting: 68, passing: 72, defending: 55, stamina: 80 },
    facts: [
      { label: "Special Move", value: "The ‘Slow‑Mo Fall’ — goes down like a Shakespearean tragedy." },
      { label: "Weakness", value: "Refuses to tackle unless the lighting is ‘right’." },
      { label: "Science Fact", value: "Claims his shot has ‘kinetic energy’. Still misses." },
      { label: "Catchphrase", value: "‘Is this… my villain arc?’" },
    ],
    challenge: "Donate and we’ll fund his dream: a VAR booth with spotlighting and dramatic music.",
  },
  {
    id: "mr_chapman",
    name: "Mr Chapman",
    role: "Business Teacher",
    club: "Cricket superfan",
    video: "video/mr_chapman.mp4",
    tagline: "Keeps asking the ref where the wickets are.",
    stats: { position: "Deep-Lying Playmaker (scorecard manager)", overall: 81, pacerating: 62, shooting: 60, passing: 84, defending: 69, stamina: 74 },
    facts: [
      { label: "Special Move", value: "The ‘Cover Drive’ — clears the ball… beautifully… to absolutely no one." },
      { label: "Weakness", value: "Calls every header a ‘bouncer’." },
      { label: "Business Strategy", value: "Always trying to ‘pivot’ mid‑match. Mostly into trouble." },
      { label: "Match Notes", value: "Keeps a spreadsheet of ‘runs’ (it’s football, mate)." },
    ],
    challenge: "Donate £1+ and Mr Chapman will stop requesting tea breaks every 20 minutes.",
  },
  {
    id: "mr_chatten",
    name: "Mr Chatten",
    role: "Computing Teacher",
    club: "Accidentally enrolled for MasterChef",
    video: "video/mr_chatten.mp4",
    tagline: "Keeps looking for the ‘Bake Off’ tent at the side of the pitch.",
    stats: { position: "Striker (plating up goals)", overall: 80, pacerating: 73, shooting: 74, passing: 76, defending: 52, stamina: 78 },
    facts: [
      { label: "Special Move", value: "The ‘Garnish’ — tap-in, then gently sprinkles imaginary parsley." },
      { label: "Weakness", value: "Stops to judge everyone’s ‘presentation’ on throw‑ins." },
      { label: "Kitchen Nightmare", value: "Calls the dugout ‘the pass’ (it isn’t)." },
      { label: "Tech Tip", value: "Tries to debug the offside rule with Python." },
    ],
    challenge: "Donate and we’ll buy him a whistle labelled ‘Chef Ref’ so he stops shouting ‘YES, CHEF!’ at corners.",
  },
  {
    id: "mr_dawson",
    name: "Mr Dawson",
    role: "History Teacher",
    club: "Spreadsheet enthusiast",
    video: "video/mr_dawson.mp4",
    tagline: "Tracks xG… on parchment.",
    stats: { position: "Centre Mid (archivist)", overall: 83, pacerating: 61, shooting: 66, passing: 86, defending: 72, stamina: 75 },
    facts: [
      { label: "Special Move", value: "The ‘Primary Source’ — produces a laminated chart to prove it was a foul." },
      { label: "Weakness", value: "Pauses play to ‘cross‑reference’." },
      { label: "Fun Fact", value: "Has a pivot table for throw‑in success rate." },
      { label: "Historic Moment", value: "Calls every goal ‘a turning point’." },
    ],
    challenge: "Donate £1+ and he’ll stop asking the crowd to complete a post-match survey.",
  },
  {
    id: "mr_glynne-jones",
    name: "Mr Glynne‑Jones",
    role: "PE Teacher • HoY 7 & 8",
    club: "Owns more whistles than sense",
    video: "video/mr_glynne-jones.mp4",
    tagline: "Runs the warm-up like it’s the Olympics. Then marks your effort.",
    stats: { position: "Box-to-Box (with a clipboard)", overall: 86, pacerating: 78, shooting: 70, passing: 80, defending: 76, stamina: 92 },
    facts: [
      { label: "Special Move", value: "The ‘Year 7 Sprint’ — makes everyone run… again." },
      { label: "Weakness", value: "Can’t resist blowing the whistle at his own teammates." },
      { label: "Motivation", value: "‘If you’ve got energy to talk, you’ve got energy to press!’" },
      { label: "Secret Weapon", value: "A stopwatch that terrifies grown adults." },
    ],
    challenge: "Donate and we’ll convince him the match is NOT assessed against GCSE PE criteria.",
  },
  {
    id: "mr_gray",
    name: "Mr Gray",
    role: "Head of PE",
    club: "Believes hydration is a personality",
    video: "video/mr_gray.mp4",
    tagline: "Carries cones everywhere. Even to the canteen.",
    stats: { position: "Defensive Mid (cone controller)", overall: 87, pacerating: 74, shooting: 68, passing: 82, defending: 84, stamina: 90 },
    facts: [
      { label: "Special Move", value: "The ‘Cone Wall’ — sets up a defensive shape mid‑game. Nobody asked." },
      { label: "Weakness", value: "Sees a straight line and has to make it a circuit." },
      { label: "Pre‑match Talk", value: "‘No excuses. Unless your laces are untied — then we do laces drills.’" },
      { label: "Kit", value: "Owns 47 variations of the same tracksuit." },
    ],
    challenge: "Donate £1+ and he’ll allow ONE (1) water break without a lecture.",
  },
  {
    id: "mr_groom",
    name: "Mr Groom",
    role: "School Caretaker",
    club: "The only person here who can actually fix things",
    video: "video/mr_groom.mp4",
    tagline: "Repairs the goalposts… then hits the crossbar for fun.",
    stats: { position: "Goalkeeper (maintenance mode)", overall: 85, pacerating: 65, shooting: 40, passing: 70, defending: 90, stamina: 86 },
    facts: [
      { label: "Special Move", value: "The ‘Spanner Save’ — catches the ball one‑handed while holding tools." },
      { label: "Weakness", value: "Stops play to tighten a bolt. Fair enough." },
      { label: "Superpower", value: "Can silence a squeaky door from 50 metres." },
      { label: "Commentary", value: "‘That net’s not level.’" },
    ],
    challenge: "Donate and we’ll buy him a golden spanner trophy for ‘Most Reliable Person on the Pitch’.",
  },
  {
    id: "mr_hales",
    name: "Mr Hales",
    role: "Geography Teacher • HoY 10 & 11",
    club: "Knows the route to every exam hall",
    video: "video/mr_hales.mp4",
    tagline: "Sprints like it’s the last day before GCSEs.",
    stats: { position: "Right Back (deadline merchant)", overall: 84, pacerating: 76, shooting: 58, passing: 74, defending: 82, stamina: 88 },
    facts: [
      { label: "Special Move", value: "The ‘Mock Exam’ — suddenly becomes elite under pressure." },
      { label: "Weakness", value: "Hears ‘March’ and starts revising." },
      { label: "Motivation", value: "‘We’ve got five minutes left — that’s basically a whole lesson!’" },
      { label: "Celebration", value: "A calm nod. Then tells you your next steps." },
    ],
    challenge: "Donate £1+ and he’ll stop giving tactical feedback that sounds like a GCSE mark scheme.",
  },
  {
    id: "mr_mycroft",
    name: "Mr Mycroft",
    role: "Teacher of English",
    club: "Books > boots",
    video: "video/mr_mycroft.mp4",
    tagline: "Writes a sonnet about the offside trap.",
    stats: { position: "Attacking Mid (narrator)", overall: 80, pacerating: 63, shooting: 62, passing: 78, defending: 60, stamina: 77 },
    facts: [
      { label: "Special Move", value: "The ‘Metaphor’ — calls a simple pass ‘a journey of self‑discovery’." },
      { label: "Weakness", value: "Stops to analyse symbolism in the corner flag." },
      { label: "Fun Fact", value: "Keeps a bookmark in the rulebook." },
      { label: "Match Quote", value: "‘To tackle, or not to tackle…’" },
    ],
    challenge: "Donate and we’ll get him a water bottle that says ‘Plot Twist’.",
  },
  {
    id: "mr_treen",
    name: "Mr Treen",
    role: "Teacher of Maths",
    club: "Believes angles are everything",
    video: "video/mr_treen.mp4",
    tagline: "Calculates the perfect shot… then forgets to kick it.",
    stats: { position: "Centre Mid (geometry)", overall: 82, pacerating: 66, shooting: 70, passing: 80, defending: 70, stamina: 79 },
    facts: [
      { label: "Special Move", value: "The ‘Pythagoras Pass’ — brilliant diagonal ball, accompanied by working out." },
      { label: "Weakness", value: "Argues with the ref about ‘margins of error’." },
      { label: "Signature", value: "Shouts ‘ACUTE!’ when he turns." },
      { label: "Greatest Fear", value: "An uneven scoreboard." },
    ],
    challenge: "Donate £1+ and he’ll stop insisting the match needs a ‘clearer marking scheme’.",
  },
];

function getStaffById(id) {
  return STAFF.find((s) => s.id === id) || STAFF[0];
}
