


const form = document.getElementById("contact-form");




const firebaseConfig = {

    apiKey: "AIzaSyDFY7DBLb3XSMLmmGoMttLhxqBI7x2lzkY",

    authDomain: "ardilla-lectora.firebaseapp.com",

    databaseURL: "https://ardilla-lectora-default-rtdb.firebaseio.com",

    projectId: "ardilla-lectora",

    storageBucket: "ardilla-lectora.appspot.com",

    messagingSenderId: "935684148560",

    appId: "1:935684148560:web:4e0bd5954c147eeb58f055"

  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const database = firebase.database();

  const ref = database.ref("messages");


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    ref.push({
        name:name,
        email:email,
        message:message
    })

    form.reset();
    console.log(name,email,message);

})