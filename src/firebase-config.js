// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAWbISukyj-pq17z9uzRiidB59iVq1to8",
  authDomain: "disney-clone-02.firebaseapp.com",
  databaseURL: "https://disney-clone-02-default-rtdb.firebaseio.com",
  projectId: "disney-clone-02",
  storageBucket: "disney-clone-02.appspot.com",
  messagingSenderId: "136469936355",
  appId: "1:136469936355:web:9d2c37b0ac7959b21cadd6",
  measurementId: "G-QSC1G8XB9X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const movieCollection = collection(db, "movies");

export default movieCollection;

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
