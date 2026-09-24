// ─────────────────────────────────────────────────────────────
// Sewer Expo Wall — shared config
// 1) Paste your Firebase web app config below (Project settings → Your apps).
// 2) Adjust EVENT copy/settings as needed. Every page reads from here.
// ─────────────────────────────────────────────────────────────

export const firebaseConfig = {
  apiKey: "AIzaSyBO0Sk_lzPrnK5cZABusQBDas_wjde3gZk",
  authDomain: "sewer-expo-social-wall.firebaseapp.com",
  projectId: "sewer-expo-social-wall",
  storageBucket: "sewer-expo-social-wall.firebasestorage.app",
  messagingSenderId: "403538112744",
  appId: "1:403538112744:web:3eb13e389c35a0cece195d"
};

export const EVENT = {
  eventLine1: "2026 OMAG Sanitary Sewer Expo",
  eventLine2: "Stride Bank Center, Enid",
  wallTitle: "The Expo Wall",

  // White logo, shown on the dark headers. Path is relative to the site root.
  logo: "images/Sewer Expo Logo - white.png",
  prompt: "Share a highlight, a photo, or an idea you're taking home.",

  // Public URL of the posting page (index.html). Leave "" to auto-detect
  // from wherever wall.html is hosted. Set it if you use a short redirect
  // like https://omag.org/wall so the QR and on-screen text match.
  postUrl: "https://link.omag.org/expo-wall",

  maxLength: 200,   // characters per post (must match firestore.rules)

  // Wall display: one post at a time in the spotlight, everything else
  // drifting in two columns. New approved posts jump into the spotlight.
  spotlightSeconds: 10, // how long each post stays in the spotlight
  driftSpeed: 22,       // column drift speed (pixels per second)
  minPostsForColumns: 4, // columns start drifting once there are this many posts
  wallPool: 60,         // how many recent approved posts the wall cycles through
  cooldownSeconds: 30, // per-phone wait between posts

  // Photos are resized and compressed on the phone before upload, then
  // stored with the post. Keep these modest: each post must stay under 1 MB.
  photoMaxSide: 1200,  // longest edge in pixels
  photoMaxBytes: 650000, // target size of the encoded photo

  // Moderator page highlights posts containing these. Nothing is auto-rejected:
  // a flagged post is just marked and skipped by "Approve all unflagged."
  // Matching is whole-word, so "ass" won't flag "class" or "pass". Phrases
  // ("screw you") and censored spellings ("f*ck") work too.
  // Deliberately left out because they're plumbing terms: "cock" (stopcock),
  // "balls" (test balls). A human still reviews every post.
  flagWords: [
    // Profanity
    "damn", "dammit", "damnit", "goddamn", "hell", "crap",
    "shit", "shitty", "bullshit", "horseshit",
    "fuck", "fucks", "fucking", "fuckin", "fucked", "fucker", "fuckers",
    "motherfucker", "motherfucking", "wtf", "stfu", "af",
    // Crude
    "ass", "asses", "asshole", "assholes", "badass", "bastard", "bastards",
    "piss", "pissed", "pissing", "dick", "dicks", "dickhead",
    "prick", "pricks", "nutsack", "douche", "douchebag",
    // Insults
    "bitch", "bitches", "stupid", "idiot", "idiots", "moron", "morons",
    "dumbass", "jackass", "loser", "losers", "retard", "retarded",
    "dipshit", "shithead", "scumbag", "piece of shit",
    // Sexual / explicit
    "horny", "porn", "porno", "sex", "sexy", "sexting", "nude", "nudes",
    "boobs", "tits", "titties", "penis", "vagina", "pussy", "cum", "semen",
    "blowjob", "handjob", "masturbate", "masturbation", "orgasm",
    // Censored spellings
    "fck", "fuk", "fuq", "f*ck", "f**k", "sh*t", "s**t", "b*tch", "b**ch",
    "a**hole", "a-hole", "d*ck",
    // Hostile phrases
    "sucks", "screw you", "fuck you", "shut up", "go to hell"
  ]
};
