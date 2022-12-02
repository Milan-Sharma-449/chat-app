import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseApp = initializeApp({
    apiKey: "AIzaSyB6_Z_Nq1UO6laMt4-VyWHwYTU1szeA0P8",
    authDomain: "chat-web-app-d4c52.firebaseapp.com",
    databaseURL: "https://chat-web-app-d4c52-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "chat-web-app-d4c52",
    storageBucket: "chat-web-app-d4c52.appspot.com",
    messagingSenderId: "414075034452",
    appId: "1:414075034452:web:9565ea2105abbf682086c1"
  });

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
getMessaging(firebaseApp);