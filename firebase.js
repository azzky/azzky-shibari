import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBaJeACRlWhcneilYiqqbVc2jVN-7aHRf0",
  authDomain: "azzky-notifications.firebaseapp.com",
  projectId: "azzky-notifications",
  storageBucket: "azzky-notifications.appspot.com",
  messagingSenderId: "976120493038",
  appId: "1:976120493038:web:4f4c79aaa5cbe1530e94ff"
}

firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging()

export const getToken = (setTokenFound) => {
    return messaging.getToken({vapidKey: 'BOZBykUOUfTvcGO4SptVw4Eka3iFcSaRVsSPvx5fN5_5ae_s69LxbyiI9IUSq5UkrXZ0ibLOc-QV0GmD3o23XJk'}).then((currentToken) => {
        if (currentToken) {
        setTokenFound(true)
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
        } else {
        setTokenFound(false)
        // shows on the UI that permission is required 
        }
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err)
        // catch error while creating client token
    });
}

export const onMessageListener = () =>
    new Promise((resolve) => {
    messaging.onMessage((payload) => {
        resolve(payload)
    })
})