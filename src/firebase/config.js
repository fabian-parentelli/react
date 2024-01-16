import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBgY_kCC8AoWJgwsGbey39A_syEoaeDhKs",
  authDomain: "rj-project-75033.firebaseapp.com",
  projectId: "rj-project-75033",
  storageBucket: "rj-project-75033.appspot.com",
  messagingSenderId: "991820932376",
  appId: "1:991820932376:web:ba9a54d8382a1ae5d6aa6d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);