import { Notification as Toast } from 'rsuite';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
import { getMessaging, isSupported, onMessage } from 'firebase/messaging';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';
import { isLocalhost } from './helpers';



const config = {
    apiKey: "AIzaSyB6_Z_Nq1UO6laMt4-VyWHwYTU1szeA0P8",
    authDomain: "chat-web-app-d4c52.firebaseapp.com",
    databaseURL: "https://chat-web-app-d4c52-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "chat-web-app-d4c52",
    storageBucket: "chat-web-app-d4c52.appspot.com",
    messagingSenderId: "414075034452",
    appId: "1:414075034452:web:9565ea2105abbf682086c1"
  };

  export const fcmVapidKey =
  'BGwDopFGTrAxoHxxAmN7viy0Z003CkmN5Huvnx08RJAxnXbreg2LBT4pAg4OVE73W5s_l02di5gZwePdNoKqaaU';


const app = initializeApp(config);
export const auth = getAuth(app);
export const database = getDatabase(app);
export const storage = getStorage(app);
export const functions = getFunctions(app, 'asia-south1');

export const messaging = isSupported() ? getMessaging(app) : null;

if (messaging) {
  onMessage(messaging, ({ notification }) => {
    const { title, body } = notification;
    Toast.info({ title, description: body, duration: 0 });
  });
}

if (isLocalhost) {
  connectFunctionsEmulator(functions, 'localhost', 5001);
}




