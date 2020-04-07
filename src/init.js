import firebase from "firebase/app";
import "firebase/database";
import "firebase/firestore";
import "firebase/auth";

// Firebase configuration

export const auth = firebase
  .initializeApp({ authDomain: "firelight-d51cb.firebaseapp.com" })
  .auth();

export const base = firebase
  .initializeApp({ databaseURL: "https://firelight-d51cb.firebaseio.com" })
  .database();

export const store = firebase
  .initializeApp({ projectId: "firelight-d51cb" })
  .firestore();
