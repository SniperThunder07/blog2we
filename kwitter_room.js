
//ADD YOUR FIREBASE LINKS HERE
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

user_name= localStorage.getItem ("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom()
{ 
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ purpose : "adding room name"
           

      });
      
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";


}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

      //Start code
 console.log("Room Name- " + Room_names);
 row = "<div class ='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names +"</div> <hr>";
 document.getElementById("output").innerHTML +=row; 


      //End code
      });});}
getData();

function redirecttoroomname(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location= "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location ="index.html";
}