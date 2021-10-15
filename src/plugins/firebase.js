import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCGjAK9GlOlLGnjBwtWDqLTugz23FZnXMA",
  authDomain: "todo-list-vue-ea312.firebaseapp.com",
  projectId: "todo-list-vue-ea312",
  storageBucket: "todo-list-vue-ea312.appspot.com",
  messagingSenderId: "711730000198",
  appId: "1:711730000198:web:d08f72a10527d5235c7547"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()

const profileCollection = db.collection('profile')
const tasksCollection = db.collection('tasks')

export {
    db, auth, profileCollection, tasksCollection
};