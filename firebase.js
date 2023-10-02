// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrdJvIyZaf8tovThw-maX2BSEZa62WDR8",
  authDomain: "portfolio-matteo-600b4.firebaseapp.com",
  projectId: "portfolio-matteo-600b4",
  storageBucket: "portfolio-matteo-600b4.appspot.com",
  messagingSenderId: "370284526231",
  appId: "1:370284526231:web:7567332eb9ad3476abc7d2",
  measurementId: "G-L5LBED8117"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);