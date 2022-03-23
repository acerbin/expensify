// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getDatabase, ref, set , child, get, remove, update, onValue, query, push, onChildChanged} from "firebase/database";

import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

// https://firebase.google.com/docs/auth/web/google-signin

export {get,auth, provider, database as default};

// const rootRef = ref(database);
// const expensesRef = ref(database, 'expenses');
// const now = new Date().toLocaleDateString();

//  const unsubscribe = onValue(query(expensesRef), (snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//     console.log("Expenses : " + JSON.stringify(expenses))
//   })

//   const unsubOnChildChanged = onChildChanged(query(expensesRef), (snapshot, prevState) => {
//     console.log(snapshot.val())
//     console.log(prevState)
//   })


// push(expensesRef, {
//   description: "Rent",
//   note: "test",
//   createdAt: now,
//   amount: 1000
// })

// push(expensesRef, {
//   description: "Gas Bill",
//   note: "test",
//   createdAt: now,
//   amount: 500
// })

// push(expensesRef, {
//   description: "Water Bill",
//   note: "test",
//   createdAt: now,
//   amount: 100
// })



// set(userRef, {
//     name: 'Katrina Savo',
//     age: 36,
//     location: {
//       city: 'Coulsdon',
//       country: 'UK'
//     },
//     job: {
//       title: 'Head of Quality',
//       location: 'Gaming Realms PLC'
//     },
//     stressLevel: 8
//   }).then(() => {
//     console.log('Created entry')
//   }).catch((err) => {
//     console.log(err)
//   })

// update(userRef, {
//   stressLevel: 9,
//   'job/location': 'Paysafe Plc'
// })
//   // set(child(userRef, 'location/city'), 'London');
//   set(child(userRef, 'attributes'), {
//     weight: 60,
//     height: 168
//   }).then(() => {
//     console.log("attributes")
//   }).catch(err => console.log(err))

  // get(child(userRef, 'location/city')).then((snapshot) => {
  //   if (snapshot.exists()) {
  //     console.log(snapshot.val());
  //   } else {
  //     console.log("No data available");
  //   }
  // }).catch((error) => {
  //   console.error(error);
  // });

  // get(rootRef).then((snapshot) => {
  //   if (snapshot.exists()) {
  //     console.log(snapshot.val());
  //   } else {
  //     console.log("No data available");
  //   }
  // }).catch((error) => {
  //   console.error(error);
  // });


  // const unsubscribe = onValue(query(rootRef), (snapshot) => {
  //   console.log(snapshot.val())
  // })

  // setTimeout(() => {
  //   update(userRef, {
  //     stressLevel: 9,
  //     'job/location': 'Paysafe Plc'
  //   }) 
  //   unsubscribe()
  // }, 3000)


  // setTimeout(() => {
  //   update(userRef, {
  //     stressLevel: 9,
  //     'job/location': 'Gmr'
  //   }) 
  // }, 6000)


// remove(ref(database, 'user/age')).then(() => {
//   console.log("removed")
// })

// const analytics = getAnalytics(app);
//https://firebase.google.com/docs/database/web/read-and-write

