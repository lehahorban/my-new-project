
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



 const firebaseConfig = {
   apiKey: "AIzaSyBlfamZPgRgph2qOhh3QA2vNT1C7TSqJIQ",
   authDomain: "react-native-app-1f044.firebaseapp.com",
   projectId: "react-native-app-1f044",
   storageBucket: "react-native-app-1f044.appspot.com",
   messagingSenderId: "476500172749",
   appId: "1:476500172749:web:e30283026d42b7c7e3ee84",
   measurementId: "G-86L8GL623K"
 };


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app)
