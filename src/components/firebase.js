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

// const firebaseConfig = {
//   apiKey: "AIzaSyDQDDnB27onp65dL2eLr7MBMiHIq62QFc8",
//   authDomain: "learningfirebase-6b101.firebaseapp.com",
//   projectId: "learningfirebase-6b101",
//   storageBucket: "learningfirebase-6b101.appspot.com",
//   messagingSenderId: "138449539640",
//   appId: "1:138449539640:web:df923430d044fb2cc28ccd",
// };

// export const app = initializeApp(firebaseConfig);
