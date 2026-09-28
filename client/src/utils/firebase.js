
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-7db22.firebaseapp.com",
  projectId: "interviewiq-7db22",
  storageBucket: "interviewiq-7db22.firebasestorage.app",
  messagingSenderId: "355660271080",
  appId: "1:355660271080:web:fee0e19229f2ed4b32285d"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}