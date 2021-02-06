import firebase from "gatsby-plugin-firebase"

export const getToken = (setTokenFound) => {
    return firebase.messaging().getToken({vapidKey: process.env.GATSBY_FIREBASE_VAPID_KEY}).then((currentToken) => {
        if (currentToken) {
        setTokenFound(true)
        } else {
        setTokenFound(false)
        }
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err)
    });
}

// export const onMessageListener = () =>
//     new Promise((resolve) => {
//     messaging.onMessage((payload) => {
//         resolve(payload)
//     })
// })