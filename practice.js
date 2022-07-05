
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDr0FeXrNGDTaGqMtw8VIA0y1U59ZbInrg",
    authDomain: "kwitter-app-68f19.firebaseapp.com",
    databaseURL: "https://kwitter-app-68f19-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-68f19",
    storageBucket: "kwitter-app-68f19.appspot.com",
    messagingSenderId: "1020706158455",
    appId: "1:1020706158455:web:c1f3aa8ceeea6b59b11372",
    measurementId: "G-V7PLXW8RQE"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name= document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        key: "MY NAME IS shloka"
    }); 
}