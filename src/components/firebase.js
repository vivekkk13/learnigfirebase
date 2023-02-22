import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAPlqukUMUDGy7c5f3jLNgnDZAw7Cu35TE",
  authDomain: "leaning-firebase-project.firebaseapp.com",
  databaseURL: "https://leaning-firebase-project-default-rtdb.firebaseio.com",
  projectId: "leaning-firebase-project",
  storageBucket: "leaning-firebase-project.appspot.com",
  messagingSenderId: "192093176760",
  // databaseURL: "https://leaning-firebase-project-default-rtdb.firebaseio.com",
  appId: "1:192093176760:web:d2186f0d7003ce3fde854d",
};

export const app = initializeApp(firebaseConfig);
