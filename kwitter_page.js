
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
    room_name = localStorage.getItem("Roomname")
    user_name = localStorage.getItem("Username")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         name = message_data['name'];
         message = message_data['message'];
         like = message_data['like'];

         name_with_tag = "<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";

         like_button = "<button class ='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updateLikes(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";

         row = name_with_tag + message_with_tag + like_button + span_with_tag;
         
         document.getElementById("output").innerHTML += row;

      } });  }); }

getData();

function logout(){
      localStorage.removeItem("Username");
      localStorage.removeItem("Roomname");
      window.location = "index.html";
      }

      
      function send()
      {
            msg = document.getElementById("msg").value ;
            firebase.database().ref(room_name).push({
                  name:user_name,
                  message:msg,
                  like:0
            });

            document.getElementById("msg").value = "";
      }

function updateLikes(messageid)
{
      button_id = messageid;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) +1;
      firebase.database().ref(room_name).child(messageid).update({
            like : updated_likes
      });
} 

