import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBfNvfSLaEimcTbppm2SafN5GZeeCib2GA",
  authDomain: "grpc-go-node.firebaseapp.com",
  projectId: "grpc-go-node",
  storageBucket: "grpc-go-node.appspot.com",
  messagingSenderId: "679455316177",
  appId: "1:679455316177:web:b1168501d41a7565e40df0"
}

// initializeを複数回走らせない
if (firebase.apps.length === 0) {
  firebase.initializeApp(config)
}

export { firebase }
