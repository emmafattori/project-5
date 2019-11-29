import firebase from 'firebase/app'
import 'firebase/database'

 const firebaseConfig = {
    apiKey: "AIzaSyApUdhpyr3u1Zu_5yLiqhncbaw6CXuXYI8",
    authDomain: "daily-planner-app-71520.firebaseapp.com",
    databaseURL: "https://daily-planner-app-71520.firebaseio.com",
    projectId: "daily-planner-app-71520",
    storageBucket: "daily-planner-app-71520.appspot.com",
    messagingSenderId: "595096002439",
    appId: "1:595096002439:web:a753e1b29f17565c967d22"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;