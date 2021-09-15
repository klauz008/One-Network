import firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyBjCNFmfGs3Xe5-SbHAvx2TosNaPP-Hs7A",
    authDomain: "one-network-2047a.firebaseapp.com",
    projectId: "one-network-2047a",
    storageBucket: "one-network-2047a.appspot.com",
    messagingSenderId: "399967536148",
    appId: "1:399967536148:web:606f91af613afce8a79301",
    measurementId: "G-9B9SWEFPY1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const db = firebaseApp.firestore();

export {auth, provider}
export default db