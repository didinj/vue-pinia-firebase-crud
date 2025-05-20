import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVw8aQLrQqnguJIPFD2PHm9kFRJfZlon8",
  authDomain: "vue-pinia-firebase-bcebe.firebaseapp.com",
  projectId: "vue-pinia-firebase-bcebe",
  storageBucket: "vue-pinia-firebase-bcebe.firebasestorage.app",
  messagingSenderId: "89214164405",
  appId: "1:89214164405:web:369c0c61cdf383672f8dfc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
