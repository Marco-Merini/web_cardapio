import ReactDOM from 'react-dom/client';
import './styles/global.css';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes';
import DataProvider from './pages/cart/DataProvider';

import firebase from 'firebase/app';
import 'firebase/firestore';
import * as firebaseAuth from 'firebase/auth'
import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyA2MtzPb8Iol7WYcv0wjlo0YJPUsut4E2g",
  authDomain: "cardapio-e18af.firebaseapp.com",
  projectId: "cardapio-e18af",
  storageBucket: "cardapio-e18af.appspot.com",
  messagingSenderId: "819590616702",
  appId: "1:819590616702:web:29244936ad69915e58aa2f"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const auth = firebaseAuth.initializeAuth(app);
firebaseAuth.signInWithEmailAndPassword(
  auth, 'marco@gmail.com', 'marco123'
)
.then(user => console.log(user))
.catch(error => console.log('error', error));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <DataProvider>
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  </DataProvider>
);

export default app;
