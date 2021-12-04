// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_giQZnL1a2D7O5xpKVGljtg5rBraqnVU",
  authDomain: "instaclone-cdcad.firebaseapp.com",
  projectId: "instaclone-cdcad",
  storageBucket: "instaclone-cdcad.appspot.com",
  messagingSenderId: "294225086771",
  appId: "1:294225086771:web:4756c9109498ae93601646",
};

// Initialize Firebase, ensure there is only one instance
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
