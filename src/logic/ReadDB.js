import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from "firebase/firestore"

export const ReadDB = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyBn1yFVo31cHWh99tOvwqUNRvNfWaINVQ8",
    authDomain: "summary-site-adfbc.firebaseapp.com",
    projectId: "summary-site-adfbc",
    storageBucket: "summary-site-adfbc.appspot.com",
    messagingSenderId: "581046803740",
    appId: "1:581046803740:web:42ff07dd7a421076932ed9",
    measurementId: "G-34ZB9H5NLB"
  };
  
  const app = initializeApp(firebaseConfig);
  
  const db = getFirestore(app);
  return db
}
;


// const querySnapshot =  getDocs(collection(db, "ballroom-dance-classes"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });

// console.log(db);
// function ReadDB() {
//     const docRef = db.useCollection;
//     console.log(docRef);

// }

// export default hoge;