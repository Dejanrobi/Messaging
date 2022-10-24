// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
// import {
//   getMessaging,
//   getToken,
// } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-messaging.js";

// const firebaseApp = initializeApp({
//   apiKey: "AIzaSyAiPlb9f27r0ieaDVhhXPkKSFhHDcZwals",
//   authDomain: "cloud-firestore-ed3ff.firebaseapp.com",
//   projectId: "cloud-firestore-ed3ff",
//   storageBucket: "cloud-firestore-ed3ff.appspot.com",
//   messagingSenderId: "631143859098",
//   appId: "1:631143859098:web:a5c12668faf3e1c62e3023",
// });

// //Retrieving firebase messaging
// const messaging = getMessaging(firebaseApp);

// messaging.onBackgroundMessage(function (payload) {
//   console.log("Received background message ", payload);

//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("../firebase-messaging-sw.js")
    .then(function (registration) {
      console.log("Registration successful, scope is:", registration.scope);
    })
    .catch(function (err) {
      console.log("Service worker registration failed, error:", err);
    });
}
