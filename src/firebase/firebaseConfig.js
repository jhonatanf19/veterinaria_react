

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAUwZTtp8tzI425rbw-fy3qJouutmcrhA0",
  authDomain: "veterinaria-7a7c8.firebaseapp.com",
  projectId: "veterinaria-7a7c8",
  storageBucket: "veterinaria-7a7c8.firebasestorage.app",
  messagingSenderId: "169739297426",
  appId: "1:169739297426:web:08fc7c43c307b5a06c3c4b",
  measurementId: "G-9463GP1VE6"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Auth
export const auth = getAuth(app);

// Google Provider
export const googleProvider = new GoogleAuthProvider();

