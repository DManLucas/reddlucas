import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Initialize Firebase for SSR --- ternary operator is used... 
//basically since NEXTJS is being used to load the website on
//the server its checking if it's there or not already
//if it's not there it'll create it but if it's there 
//it won't recreate it and just get it 
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const firestore = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export {app, firestore, auth, storage}
