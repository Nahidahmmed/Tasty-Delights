// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6b4fUDn_4zp70TBpw_jqOVOSGolpLXeA",
  authDomain: "chef-recipe-hunter-c6382.firebaseapp.com",
  projectId: "chef-recipe-hunter-c6382",
  storageBucket: "chef-recipe-hunter-c6382.appspot.com",
  messagingSenderId: "986908672347",
  appId: "1:986908672347:web:79b7563a19619c4b2d9a7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app