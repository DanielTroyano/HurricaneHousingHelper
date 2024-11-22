import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbTCTU810b6NLv0xTD88wamPY2nLZC16A",
  authDomain: "hurricane-housing-helper.firebaseapp.com",
  projectId: "hurricane-housing-helper",
  storageBucket: "hurricane-housing-helper.firebasestorage.app",
  messagingSenderId: "565849684465",
  appId: "1:565849684465:web:2cdd3f5b310761ed91ec50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

// Export Firestore
export { firestore };