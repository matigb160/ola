var firebaseConfig = {
    apiKey: "AIzaSyAlr6qbM1gxjt_kmAyV5PKA_1J3MhY7vhw",
    authDomain: "kwitter-d4f47.firebaseapp.com",
    projectId: "kwitter-d4f47",
    storageBucket: "kwitter-d4f47.appspot.com",
    messagingSenderId: "375343561989",
    appId: "1:375343561989:web:28098707e8d54e492c0b6c"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

  document.getElementById("user_name").innerHTML="hola "+user_name+"<3 (:";


  function addroom(){
    room_name=document.getElementById("room_name").value ;
    firebase.datebase().ref("/").child(room_name).update({
        purpose:"agregando sala"
    });
    localStorage.setItem("room_name". room_name);
    window.location.replace("kwitter_page.html");
  }
  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
  }
  function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        childData = childSnapshot.val();
        if (childKey != "purpose") {
          firebase_message_id = childKey;
          message_data = childData;
          //Inicia código
          console.log(firebase_message_id);
          console.log(message_data);
          name = message_data['name'];
          message = message_data['message'];
          like = message_data['like'];
          name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
          message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
          like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
          span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
  
          row = name_with_tag + message_with_tag + like_button + span_with_tag;
          document.getElementById("output").innerHTML += row;
          //Termina código
        }
      });
    });
  }
  getData();
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location="kwitter_page.html"
}
