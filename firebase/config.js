// import * as firebase from "firebase";
// import "firebase/auth";

//  const firebaseConfig = {
//    apiKey: "AIzaSyBlfamZPgRgph2qOhh3QA2vNT1C7TSqJIQ",
//    authDomain: "react-native-app-1f044.firebaseapp.com",
//    projectId: "react-native-app-1f044",
//    storageBucket: "react-native-app-1f044.appspot.com",
//    messagingSenderId: "476500172749",
//    appId: "1:476500172749:web:e30283026d42b7c7e3ee84",
//    measurementId: "G-86L8GL623K"
//  };

// export default firebase.initializeApp(firebaseConfig);
























// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBlfamZPgRgph2qOhh3QA2vNT1C7TSqJIQ",
//   authDomain: "react-native-app-1f044.firebaseapp.com",
//   projectId: "react-native-app-1f044",
//   storageBucket: "react-native-app-1f044.appspot.com",
//   messagingSenderId: "476500172749",
//   appId: "1:476500172749:web:e30283026d42b7c7e3ee84",
//   measurementId: "G-86L8GL623K"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export const db = getFirestore();


import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged  } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
 const firebaseConfig = {
   apiKey: "AIzaSyBlfamZPgRgph2qOhh3QA2vNT1C7TSqJIQ",
   authDomain: "react-native-app-1f044.firebaseapp.com",
   projectId: "react-native-app-1f044",
   storageBucket: "react-native-app-1f044.appspot.com",
   messagingSenderId: "476500172749",
   appId: "1:476500172749:web:e30283026d42b7c7e3ee84",
   measurementId: "G-86L8GL623K"
 };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });