import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBpuBWmUnBB91BrfkZ0QLwtc-u7dTwesDs",
  authDomain: "seis-7c7c6.firebaseapp.com",
  databaseURL: "https://seis-7c7c6-default-rtdb.firebaseio.com",
  projectId: "seis-7c7c6",
  storageBucket: "seis-7c7c6.appspot.com",
  messagingSenderId: "992093701260",
  appId: "1:992093701260:web:747a82bb80454ec104a7a9",
  measurementId: "G-8KV4H18TP1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
