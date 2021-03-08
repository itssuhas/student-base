
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore' // <- needed if using firestore
// import 'firebase/functions' // <- needed if using httpsCallable
import { createStore, combineReducers } from 'redux';
import {
  firebaseReducer,
} from 'react-redux-firebase';

import {composeWithDevTools} from 'redux-devtools-extension';

 import { createFirestoreInstance, firestoreReducer } from 'redux-firestore' // <- needed if using firestore

const fbConfig = {

  apiKey: "AIzaSyAXmmJt5yRUsKUF-UCKn0e96puX3LVbl-c",
  authDomain: "studentbase-41f8b.firebaseapp.com",
  projectId: "studentbase-41f8b",
  storageBucket: "studentbase-41f8b.appspot.com",
  messagingSenderId: "975516718830",
  appId: "1:975516718830:web:13e52fb69f608c503845ff",
  measurementId: "G-ZS40Y70S8F"

};

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

// Initialize firebase instance
firebase.initializeApp(fbConfig);

// Initialize other services on firebase instance
 firebase.firestore() // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer // <- needed if using firestore
});

// Create store with reducers and initial state
const initialState = {};
const store = createStore(rootReducer, initialState, composeWithDevTools());

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
};



export default store;
