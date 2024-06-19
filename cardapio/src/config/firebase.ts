import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyA2MtzPb8Iol7WYcv0wjlo0YJPUsut4E2g",
    authDomain: "cardapio-e18af.firebaseapp.com",
    databaseURL: "https://cardapio-e18af-default-rtdb.firebaseio.com",
    projectId: "cardapio-e18af",
    storageBucket: "cardapio-e18af.appspot.com",
    messagingSenderId: "819590616702",
    appId: "1:819590616702:web:29244936ad69915e58aa2f"
  };

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app)
export const auth = getAuth()

export default app;