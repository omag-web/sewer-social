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
  prompt: "What's one idea you're taking home to your town?",

  // Public URL of the posting page (index.html). Leave "" to auto-detect
  // from wherever wall.html is hosted. Set it if you use a short redirect
  // like https://omag.org/wall so the QR and on-screen text match.
  postUrl: "",

  maxLength: 200,   // characters per post (must match firestore.rules)
  wallCount: 9,     // posts on screen at once (3 x 3 grid)
  cooldownSeconds: 30, // per-phone wait between posts

  // Photos are resized and compressed on the phone before upload, then
  // stored with the post. Keep these modest: each post must stay under 1 MB.
  photoMaxSide: 1200,  // longest edge in pixels
  photoMaxBytes: 650000, // target size of the encoded photo

  // Moderator page highlights posts containing these words. Nothing is
  // auto-rejected; this just speeds up review. Add to it freely.
  flagWords: [
    "damn", "hell", "crap", "shit", "fuck", "fucking", "bitch", "ass",
    "asshole", "bastard", "dick", "piss", "sucks", "stupid", "idiot"
  ]
};
