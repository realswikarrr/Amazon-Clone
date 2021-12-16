import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCFFoe3f2uU7I7eKwVeZKtlgnkB7blsUwI",
    authDomain: "clone-16e00.firebaseapp.com",
    databaseURL: "https://clone-16e00.firebaseio.com",
    projectId: "clone-16e00",
    storageBucket: "clone-16e00.appspot.com",
    messagingSenderId: "195580463947",
    appId: "1:195580463947:web:28fbd7088ab88ce41176ce",
    measurementId: "G-G4NT1YWLXB"
})

const auth = firebase.auth()

export { auth }