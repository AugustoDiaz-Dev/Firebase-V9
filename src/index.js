import { initializeApp } from 'firebase/app';
import {
    getFirestore,
    collection,
    getDocs
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBAcc0fI_y300ONb6BiANl1efUqx-PQRp4",
    authDomain: "fir-9-3b821.firebaseapp.com",
    projectId: "fir-9-3b821",
    storageBucket: "fir-9-3b821.appspot.com",
    messagingSenderId: "425425443497",
    appId: "1:425425443497:web:7a2ef041f8ba05b3bd67b8"
};

// Initialize Firebase app
initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore();

// Collection ref
const colRef = collection(db, 'books');

// Get collection data
getDocs(colRef).then((snapshot) => {
    let books = [];
    snapshot.docs.forEach((doc) => {
        books.push({ ...doc.data(), id: doc.id });
    })
    console.log(books);
})
    .catch((error) => {
        console.log(error.message);
    }) 
