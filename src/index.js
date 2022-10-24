import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
import {
  getMessaging,
  getToken,
} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-messaging.js";

//setting up the configuration
const firebaseApp = initializeApp({
  apiKey: "AIzaSyAiPlb9f27r0ieaDVhhXPkKSFhHDcZwals",
  authDomain: "cloud-firestore-ed3ff.firebaseapp.com",
  projectId: "cloud-firestore-ed3ff",
  storageBucket: "cloud-firestore-ed3ff.appspot.com",
  messagingSenderId: "631143859098",
  appId: "1:631143859098:web:a5c12668faf3e1c62e3023",
});

const auth = getAuth(firebaseApp);

//Initialing getMessage
const messaging = getMessaging(firebaseApp);

//Askin permission from the user to send notifications.

function requestPermission() {
  console.log("Requesting permission.......");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted");

      //Retrieving the current token after the permission has been granted.
      getToken(messaging, {
        vapidKey:
          "BM5l_sqSSTymRFx6r3GAkNPrQnUGym-8yDRf5VdLduSJrQPDbOsjXBmHoAew9lB5y_R30L3t0T624iQxSAgmVgs",
      }).then((currentToken) => {
        if (currentToken) {
          console.log("CurrentToken: ", currentToken);
        } else {
          console.log("Error in retrieving the current token");
        }
      });
    }
  });
}

//calling the function
requestPermission();
