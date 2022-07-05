//YOUR FIREBASE LINKS



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
      

//Start code

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0

      });
      document.getElementById("msg").value = "";

      }



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
//End code
      } });  }); }
getData();
