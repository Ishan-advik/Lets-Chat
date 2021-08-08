
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDyDRlyujYMlekeeh7D2dwLaQ-Y3DnXZts",
      authDomain: "my-second-project-f7145.firebaseapp.com",
      projectId: "my-second-project-f7145",
      storageBucket: "my-second-project-f7145.appspot.com",
      messagingSenderId: "635910379195",
      appId: "1:635910379195:web:bed5ab53b98f09e9267b9e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
