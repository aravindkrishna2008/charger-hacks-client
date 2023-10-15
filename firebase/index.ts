// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChXEvqxKN96_Eeolumn_E4mKtR44Fd8P0",
  authDomain: "ecocard-43296.firebaseapp.com",
  projectId: "ecocard-43296",
  storageBucket: "ecocard-43296.appspot.com",
  messagingSenderId: "934703807332",
  appId: "1:934703807332:web:b85cfb7a763f22f667d871",
  measurementId: "G-4ECL0D5H22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app }