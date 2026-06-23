import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getFirestore, collection, doc, getDocs, getDoc, setDoc, addDoc, onSnapshot, deleteDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBEIbzOz94vjQj5eIggEnLRKN0Eu5LNnIw",
  authDomain: "cybercom-placement.firebaseapp.com",
  projectId: "cybercom-placement",
  storageBucket: "cybercom-placement.firebasestorage.app",
  messagingSenderId: "751882262484",
  appId: "1:751882262484:web:f86463a2c7cbfc1a596841"
};

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

window.__db = db;
window.__fb = { collection, doc, getDocs, getDoc, setDoc, addDoc, onSnapshot, deleteDoc };
window.__fbReady = true;
window.dispatchEvent(new Event("fbready"));
