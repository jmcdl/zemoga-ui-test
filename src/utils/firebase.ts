import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { connectStorageEmulator, getStorage } from "firebase/storage";
import {
  collection,
  doc,
  DocumentReference,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { CelebrityDocument } from "../shared/interfaces";

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
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
getAnalytics(app);

export const getCelebrityDocRef = (docId?: string): DocumentReference =>
  doc(collection(db, "celebrities"), docId);

export const getCelebritiesCollection = () =>
  query(collection(db, "celebrities"));

export const getCelebrityDoc = (name: string) =>
  getDocs(query(collection(db, "celebrities"), where("name", "==", name)));

const createCelebrityDoc = ({
  name,
  description,
  category,
  picture,
  lastUpdated,
  votes,
}: CelebrityDocument) =>
  setDoc(getCelebrityDocRef(), {
    name,
    description,
    category,
    picture,
    lastUpdated,
    votes,
  });
