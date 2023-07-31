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
  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
  }