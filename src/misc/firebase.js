import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';


const config = {
    apiKey: "AIzaSyB6_Z_Nq1UO6laMt4-VyWHwYTU1szeA0P8",
    authDomain: "chat-web-app-d4c52.firebaseapp.com",
    databaseURL: "https://chat-web-app-d4c52-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "chat-web-app-d4c52",
    storageBucket: "chat-web-app-d4c52.appspot.com",
    messagingSenderId: "414075034452",
    appId: "1:414075034452:web:9565ea2105abbf682086c1"
  };


const app = initializeApp(config);
export const auth = getAuth(app);
export const database = getDatabase(app);




