import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-state-e72cf.firebaseapp.com",
  projectId: "mern-state-e72cf",
  storageBucket: "mern-state-e72cf.appspot.com",
  messagingSenderId: "407110522820",
  appId: "1:407110522820:web:f2d33d463e49a8ace33691"
};

export const app = initializeApp(firebaseConfig);