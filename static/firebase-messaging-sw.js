importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyBaJeACRlWhcneilYiqqbVc2jVN-7aHRf0",
  authDomain: "azzky-notifications.firebaseapp.com",
  projectId: "azzky-notifications",
  storageBucket: "azzky-notifications.appspot.com",
  messagingSenderId: "976120493038",
  appId: "1:976120493038:web:4f4c79aaa5cbe1530e94ff"
}

firebase.initializeApp(firebaseConfig)

// Retrieve firebase messaging
const messaging = firebase.messaging()

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload)

  const notificationTitle = payload.notification.title
  const notificationOptions = {
    body: payload.notification.body,
  }

  self.registration.showNotification(notificationTitle,
    notificationOptions)
})