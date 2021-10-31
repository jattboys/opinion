// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHqpfqKRMzd3py0uyI63U7YnEK5UGjIPg",
  authDomain: "rt-opinion.firebaseapp.com",
  projectId: "rt-opinion",
  storageBucket: "rt-opinion.appspot.com",
  messagingSenderId: "60116034738",
  appId: "1:60116034738:web:6235a0bafbc1118c0e95ab",
  measurementId: "G-4VFSWRWLN5",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebase);
export const db = getFirestore();
export default firebase;
