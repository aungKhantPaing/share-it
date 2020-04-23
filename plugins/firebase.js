import * as firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyAm6SOdLTO0OwPTdvErIbQzfOtR4FpeGYg',
  authDomain: 'share-it-dc7ce.firebaseapp.com',
  databaseURL: 'https://share-it-dc7ce.firebaseio.com',
  projectId: 'share-it-dc7ce',
  storageBucket: 'share-it-dc7ce.appspot.com',
  messagingSenderId: '536047277099',
  appId: '1:536047277099:web:0646163f62ea95b900466e',
  measurementId: 'G-KM8MFTJ12S'
}

// const provider = new firebase.auth.GithubAuthProvider()

const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.firestore()

export { db, firebase }
