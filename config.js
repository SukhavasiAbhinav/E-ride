import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
apiKey: "AIzaSyAgwb7jW2QTVa57Ans5P-zjn0OZDIcVi0o",
  authDomain: "e-ride-1ed51.firebaseapp.com",
  projectId: "e-ride-1ed51",
  storageBucket: "e-ride-1ed51.appspot.com",
  messagingSenderId: "825328219765",
  appId: "1:825328219765:web:835dbc458cbde00fe26a3c"

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
