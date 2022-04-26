import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAnD8Wge05CE3DxYwDd3nkeRwaW6WGVQTg",
  authDomain: "daangnplay.firebaseapp.com",
  projectId: "daangnplay",
  storageBucket: "daangnplay.appspot.com",
  messagingSenderId: "391863573225",
  appId: "1:391863573225:web:02efe513ace9bd12eeae78",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { auth };
export default db;
