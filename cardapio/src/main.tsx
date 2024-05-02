import ReactDOM from 'react-dom/client';
import './styles/global.css';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes';

import firebase from 'firebase/app';
import 'firebase/firestore';
import * as firebaseAuth from 'firebase/auth'

// Import the functions you need from the SDKs you need

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyA2MtzPb8Iol7WYcv0wjlo0YJPUsut4E2g",
  authDomain: "cardapio-e18af.firebaseapp.com",
  projectId: "cardapio-e18af",
  storageBucket: "cardapio-e18af.appspot.com",
  messagingSenderId: "819590616702",
  appId: "1:819590616702:web:29244936ad69915e58aa2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = firebaseAuth.initializeAuth(app);
firebaseAuth.signInWithEmailAndPassword(
  auth, 'marco@gmail.com', 'marco123'
)
.then(user => console.log(user))
.catch(error => console.log('error', error));

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <MainRoutes />
    </BrowserRouter>
);

export default app;
