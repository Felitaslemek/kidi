// src/firebase/firebaseAuth.js
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "./firebaseConfig"; // Pastikan ini adalah default import yang valid

// Initialize Firebase Auth
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword };
