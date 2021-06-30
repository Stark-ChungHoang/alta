import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyBy4ri9Qpu5h8tz3AjLzIjBUPC2l9vgVgA",
    authDomain: "slack-app-77ffc.firebaseapp.com",
    projectId: "slack-app-77ffc",
    storageBucket: "slack-app-77ffc.appspot.com",
    messagingSenderId: "667597718708",
    appId: "1:667597718708:web:950f35ce85e7454a1d83e1"
  };
const FirebaseApp = firebase.initializeApp(firebaseConfig)
const db = FirebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()


  export default db;
  export {auth,provider}