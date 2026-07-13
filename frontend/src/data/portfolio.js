// Project case-study content for Frenny's portfolio.
export const PROJECTS = [
  {
    slug: "uni-mate",
    title: "UNI-Mate",
    subtitle: "A campus LMS that finally feels like the campus.",
    role: "UX Researcher · UI Designer",
    duration: "8 weeks",
    year: "2024",
    context: "Academic",
    contextDetail:
      "UNI-Mate is my academic capstone — but its DNA goes further back. I combined the core ideas from two earlier engineering projects (a diploma-era attendance system and a bachelor's project on classroom digitisation) into one unified redesign of the campus experience.",
    tools: ["Figma", "FigJam"],
    cover:
      "https://mir-s3-cdn-cf.behance.net/projects/max_808/e01028210583063.Y3JvcCwxMDAzLDc4NSwyMTEsMTE5.png",
    palette: "#F2AFBC",
    behance: "https://www.behance.net/gallery/210583063/UNI-Mate-LMS-Case-Study",
    behanceImage: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/c50ed2210583063.6713dd82e1b2c.png",
    summary:
      "UNI-Mate reimagines the daily life of an Indian engineering student — assignments, attendance, club chatter, and mentor meetings — inside one calm, well-paced LMS.",
    problem:
      "Existing campus portals are clinical, slow, and treat students like ticket numbers. Students juggle 4–5 disconnected apps just to attend a single class day. Engagement plummets, deadlines slip, and the experience feels punitive instead of supportive.",
    research: [
      "12 student interviews across Tier-1 and Tier-2 colleges",
      "Diary study (2 weeks) tracking digital touchpoints",
      "Heuristic audit of 4 existing portals (Moodle, Canvas, two GTU portals)",
      "Survey · 84 responses across 3 streams",
    ],
    insights: [
      "76% open the portal only to check attendance, then leave.",
      "Students live on WhatsApp because nothing else feels conversational.",
      "Faculty announcements get lost between PDFs, PNGs, and group forwards.",
      "Submitting assignments is the single highest source of last-minute panic.",
    ],
    personas: [
      {
        name: "Aanya, 20",
        archetype: "The Organiser",
        goal: "Stay on top of deadlines without 14 tabs open.",
        pain: "Switching between WhatsApp, email and portal kills her flow.",
      },
      {
        name: "Rohan, 21",
        archetype: "The Last-Minute Hero",
        goal: "Submit on time without re-reading 6 PDFs.",
        pain: "Can never find the latest version of the assignment brief.",
      },
    ],
    flows: [
      "Onboarding → Class hub → Today's tasks → Submission",
      "Faculty → Post announcement → Pin to relevant batches",
      "Mentor 1:1 booking with reschedule etiquette",
    ],
    explorations:
      "Three visual directions: a serious indigo-on-white system, a warm pastel campus diary, and a high-contrast neo-brutalist take. Testing landed us on the diary direction — students described it as 'finally, something that doesn't feel like a hospital portal.'",
    iterations: [
      "Replaced tab navigation with a 'Today / This Week / Library' rhythm.",
      "Added a 'Soft Deadline' chip — psychologically lowers panic without shifting real dates.",
      "Faculty announcements collapsed into one weekly digest card.",
    ],
    testing:
      "Moderated tests with 6 students. Task success climbed from 64% → 92% on assignment submission. SUS score improved from 62 to 84.",
    reflection:
      "The biggest unlock wasn't a feature — it was tone. The moment the product stopped feeling bureaucratic, students started opening it daily. UNI-Mate taught me that empathy in microcopy is design work.",
    metrics: [
      { label: "SUS Score", value: "84" },
      { label: "Task Success", value: "92%" },
      { label: "Daily Returns", value: "+3.4x" },
    ],
  },
  {
    slug: "gro-deliver",
    title: "Gro-Deliver",
    subtitle: "A 10-minute grocery app that respects the dinner you're trying to make.",
    role: "Product Designer · Researcher",
    duration: "6 weeks",
    year: "2024",
    context: "Self-initiated",
    contextDetail:
      "A self-initiated case study born from personal frustration with how quick-commerce apps treat their users. Everything from research to hi-fi was done on my own time, on my own terms.",
    tools: ["Figma", "FigJam"],
    cover:
      "https://mir-s3-cdn-cf.behance.net/projects/max_808/9597c5206355587.Y3JvcCw4MTYsNjM4LDQ0LDExMQ.png",
    palette: "#F9CBD6",
    behance: "https://www.behance.net/gallery/206355587/Gro-Deliver-A-Grocery-App-Case-Study",
    behanceImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/969efd206355587.66cb5428cf87f.png",
    summary:
      "Gro-Deliver is built around the moment you realise the onions are gone. The case study explores how 'urgency design' can stay calm rather than chaotic.",
    problem:
      "Quick-commerce apps weaponise FOMO. Every banner blinks, every timer screams. Users feel manipulated instead of helped — and abandon carts mid-recipe.",
    research: [
      "Competitive teardown of 5 quick-commerce apps",
      "9 contextual interviews while users were cooking",
      "Card sorting for category logic",
    ],
    insights: [
      "People shop in 'micro-missions' (dinner, breakfast, last-minute snacks) — not in giant carts.",
      "Repeat orders make up 71% of usage but live 4 taps deep.",
      "Substitutions are the #1 trust-killer.",
    ],
    personas: [
      {
        name: "Meera, 28",
        archetype: "The Weeknight Cook",
        goal: "Get 3 missing ingredients before the kadhai goes cold.",
        pain: "Substitutions arrive without warning.",
      },
    ],
    flows: [
      "Repeat last cart → Edit → Checkout in 4 taps",
      "Out-of-stock → Smart substitute with explicit consent",
      "Live order tracking that doesn't lie",
    ],
    explorations:
      "Tested three urgency tones: 'Aggressive countdown', 'Neutral progress', and 'Reassuring narration'. The reassuring tone (\"Picking your tomatoes now — 4 mins to go\") drove the highest perceived trust.",
    iterations: [
      "Substitution preview before checkout",
      "'Cooking Mode' — locks the cart and surfaces live order",
      "Reorder-the-recipe shortcut",
    ],
    testing:
      "First-task time to reorder dropped from 38s to 11s in usability tests with 5 participants.",
    reflection:
      "Urgency doesn't have to feel like a fire alarm. The right voice can make speed feel like care.",
    metrics: [
      { label: "Time to Reorder", value: "11s" },
      { label: "Trust Lift", value: "+38%" },
      { label: "Substitution NPS", value: "+22" },
    ],
  },
  {
    slug: "cannon-shooter",
    title: "Cannon Shooter",
    subtitle: "Game UI that gets out of the way of the fun.",
    role: "Game UI Designer",
    duration: "4 weeks",
    year: "2025",
    context: "Internship",
    contextDetail:
      "Built during my internship at Lemon Logic Interactive Studio, Vancouver. My first shipped game UI — every decision had to hold up against real players, real analytics, and a real launch window.",
    tools: ["Figma", "FigJam"],
    cover:
      "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/8c9917244913019.69a1a387303d4.png",
    palette: "#9E182B",
    behance: "https://www.behance.net/gallery/244913019/CANNON-SHOOTER-(GAME-UI)",
    behanceImage: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/8c9917244913019.69a1a387303d4.png",
    summary:
      "A casual mobile shooter where the interface is the unsung hero — fast feedback, no clutter, and a HUD that disappears when you're in flow.",
    problem:
      "Casual games often drown the player in tutorials, currencies, and pop-ups. The first 30 seconds make or break retention.",
    research: [
      "Audit of top 10 casual shooters on the Play Store",
      "Heatmap analysis of thumb-reach zones on 5 device sizes",
      "Player interviews focused on the first-touch moment",
    ],
    insights: [
      "Players want to shoot something within 8 seconds of opening the app.",
      "Every modal in the first session costs ~6% retention.",
      "Haptic + sound is twice as memorable as visual alone.",
    ],
    personas: [
      {
        name: "Vikram, 17",
        archetype: "Bus-stop Player",
        goal: "Two-minute dopamine, zero learning curve.",
        pain: "Tutorials that won't let him skip.",
      },
    ],
    flows: [
      "Cold open → Shoot → Win → Reward (in under 30s)",
      "Power-up unlock without breaking flow",
      "Game-over → Retry in one tap",
    ],
    explorations:
      "Three HUD directions tested — minimal, cinematic, arcade. Players preferred the cinematic-minimal hybrid: a clean playfield with bold reward bursts.",
    iterations: [
      "Removed pre-match modal — power-ups now learned by playing.",
      "Score uses 'punchy' typography that animates on every hit.",
      "Game-over softened with a wink, not a wall.",
    ],
    testing:
      "Playtests across 8 participants. Average first-session length climbed from 1m 12s to 3m 40s.",
    reflection:
      "Game UI is the quietest kind of UX — when it's working, no one notices it.",
    metrics: [
      { label: "First Session", value: "3m 40s" },
      { label: "Tap-to-Shoot", value: "<8s" },
      { label: "D1 Retention", value: "+19%" },
    ],
  },
  {
    slug: "fitness-app",
    title: "Bloom · Fitness",
    subtitle: "A fitness app that doesn't shame you when you skip a day.",
    role: "UX Designer",
    duration: "5 weeks",
    year: "2023",
    context: "Self-initiated",
    contextDetail:
      "A self-initiated deep-dive into women's wellness. I chose the brief, ran the research, and pushed the visual direction — no client, no rubric, just curiosity.",
    tools: ["Figma", "FigJam"],
    cover:
      "https://mir-s3-cdn-cf.behance.net/projects/max_808/784abc201969347.Y3JvcCwxNTc0LDEyMzEsMzE1LDA.png",
    palette: "#F2AFBC",
    behance: "https://www.behance.net/gallery/201969347/FITNESS-APP",
    behanceImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/168c9a201969347.667d9d3c90ac9.png",
    summary:
      "Bloom is a wellness-first fitness app for women who've quietly fallen off every other one. Built around tiny, kind rituals rather than streaks.",
    problem:
      "Mainstream fitness apps measure you against an idealised self. Streaks shame. Calorie counts trigger. The drop-off after week 2 is brutal.",
    research: [
      "11 interviews with women aged 22–34 who churned from at least 2 fitness apps",
      "Sentiment analysis of 600+ App Store reviews",
      "Co-design workshop with 5 participants",
    ],
    insights: [
      "Streaks are the #1 named reason for quitting.",
      "Women want their cycle, mood, and sleep treated as one story — not three tabs.",
      "Progress photos cause more anxiety than motivation.",
    ],
    personas: [
      {
        name: "Sara, 26",
        archetype: "The Restarter",
        goal: "Build a kinder relationship with movement.",
        pain: "Apps that punish her for missing a day.",
      },
    ],
    flows: [
      "Morning check-in → 7-minute ritual → Reflection",
      "Cycle-aware workout suggestions",
      "Soft re-entry after a break",
    ],
    explorations:
      "Three brand directions: clinical wellness, hyper-feminine maximalism, and quiet diary. Diary won — users described it as 'something I want to open before bed'.",
    iterations: [
      "Replaced streaks with 'Soft Days' — kept the habit, killed the guilt.",
      "Mood + cycle + workout collapsed into a single ribbon",
      "Reflection journal with handwritten prompts",
    ],
    testing:
      "Two-week diary study. 9 of 11 participants still using the prototype on day 14 (vs 3 on a control app).",
    reflection:
      "Designing for women's wellness taught me that emotional safety is a feature. Sometimes the most innovative interaction is restraint.",
    metrics: [
      { label: "Day-14 Retention", value: "82%" },
      { label: "Shame Score", value: "−61%" },
      { label: "Daily Reflections", value: "5.2 / wk" },
    ],
  },
];

export const SKILL_GROUPS = [
  {
    label: "Research",
    rotation: "-rotate-2",
    color: "bg-blush/70",
    items: ["UX Research", "User Interviews", "Diary Studies", "Personas", "Journey Mapping"],
  },
  {
    label: "Architecture",
    rotation: "rotate-1",
    color: "bg-rose_quartz/80",
    items: ["Information Architecture", "User Flows", "Card Sorting", "Wireframing"],
  },
  {
    label: "Visual",
    rotation: "-rotate-1",
    color: "bg-sticky_pink",
    items: ["Visual Design", "Design Systems", "Prototyping", "Figma", "Game UI"],
  },
  {
    label: "Build",
    rotation: "rotate-2",
    color: "bg-oat",
    items: ["HTML", "CSS", "Basic JavaScript", "Responsive Design"],
  },
  {
    label: "Soft",
    rotation: "-rotate-3",
    color: "bg-sticky",
    items: ["Storytelling", "Empathy", "Presentation", "Content Strategy", "Design Thinking"],
  },
];

export const HOBBIES = [
  { key: "photography", label: "Photography", note: "always have a film roll waiting", emoji: null },
  { key: "journals", label: "Journaling", note: "three notebooks in rotation" },
  { key: "coffee", label: "Coffee shops", note: "oat milk, no sugar, window seat" },
  { key: "reading", label: "Reading", note: "freida mcfadden, lately" },
  { key: "travel", label: "Travel", note: "saving for a europe trip" },
  { key: "movies", label: "Movies", note: "clueless, on loop" },
  { key: "pinterest", label: "Pinterest", note: "2,143 pins · counting" },
  { key: "writing", label: "Writing", note: "essays nobody reads (yet)" },
];

export const FUN_FACTS = [
  { key: "app", label: "favourite app", value: "Notion · close second: Pinterest" },
  { key: "book", label: "currently reading", value: "The Midnight Library — Matt Haig" },
  { key: "quote", label: "design quote i live by", value: "“Make it less, make it kinder.”" },
  { key: "dream", label: "dream companies", value: "Spotify · Airbnb · Headspace · IDEO" },
  { key: "coffee", label: "coffee order", value: "iced oat latte, half sweet" },
  { key: "obsession", label: "current obsession", value: "Editorial type pairings" },
  { key: "songs", label: "design playlist", value: "Phoebe Bridgers · Bon Iver · Anuv Jain" },
  { key: "city", label: "favourite city", value: "Ahmedabad in winter" },
];

export const EDUCATION_ITEMS = [
  {
    year: "2018 — 2021",
    title: "Diploma in Computer Engineering",
    place: "Gujarat Technological University",
    note: "first time I made a program for someone other than myself.",
  },
  {
    year: "2021 — 2024",
    title: "B.E. in Information & Communication Technology",
    place: "Gujarat Technological University",
    note: "engineering taught me logic — design taught me people.",
  },
  {
    year: "2024 — 2025",
    title: "Google UX Design · Tutedude UI/UX",
    place: "Certifications · Coursera + Tutedude",
    note: "the moment I knew this was the language I'd been looking for.",
  },
  {
    year: "2025 — 2026",
    title: "Creative Operations · Lemon Logic Studio",
    place: "Vancouver, Canada · Internship",
    note: "shipping client work, learning at studio speed.",
  },
];
