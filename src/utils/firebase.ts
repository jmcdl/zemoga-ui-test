import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  DocumentReference,
  getFirestore,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgEZdgN9Shktz7_R_kWsxLlhnsBNrCjqQ",
  authDomain: "zemoga-ui-test-25d9e.firebaseapp.com",
  projectId: "zemoga-ui-test-25d9e",
  storageBucket: "zemoga-ui-test-25d9e.appspot.com",
  messagingSenderId: "595054624451",
  appId: "1:595054624451:web:d6b29bb70b3433dc6f6c76",
  measurementId: "G-GW0Q2YJ2R8",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();

export const getCelebrityDocRef = (docId?: string): DocumentReference =>
  doc(collection(db, "celebrities"), docId);
