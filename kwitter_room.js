var firebaseConfig = {
      apiKey: "AIzaSyAUwtDPrF4OA9PxbHwE-zmhE1jIQav9I5I",
      authDomain: "social-website-95111.firebaseapp.com",
      databaseURL: "https://social-website-95111-default-rtdb.firebaseio.com",
      projectId: "social-website-95111",
      storageBucket: "social-website-95111.appspot.com",
      messagingSenderId: "818677184592",
      appId: "1:818677184592:web:17235f059ae6ceab5e3955",
      measurementId: "G-8JPDK8Q7J6"
    };
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !" ;
    function addroom(){
        roomname = document.getElementById("roomname").value ;

          firebase.database().ref("/").child(roomname).update({
           function: "Add value" 
          }
          );
          localStorage.setItem("Roomname" , roomname);
          window.location = "";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row = "<div class='room_name' id='"+Room_names+"' onclick='redirectoRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectoRoomName(name)
{
  localStorage.setItem("Roomname", name);
  window.location = "kwitter_page.html";
}

function logout(){
localStorage.removeItem("Username");
localStorage.removeItem("Roomname");
window.location = "index.html";
}
