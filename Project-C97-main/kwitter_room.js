var firebaseConfig = {
      apiKey: "AIzaSyBQ2a4DuQi1S4EtvXZFPaTUzQNDPoLr0JQ",
      authDomain: "kwitter-web-app-defa7.firebaseapp.com",
      projectId: "kwitter-web-app-defa7",
      storageBucket: "kwitter-web-app-defa7.appspot.com",
      messagingSenderId: "1077926830118",
      appId: "1:1077926830118:web:954a12866c077fe24d86e7"
    };
   
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    

    function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;

      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
      window.location = "index.html";6
}

