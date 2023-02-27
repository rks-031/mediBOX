
const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
=======
const wrapper=document.querySelector('.wrapper');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');

});


const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyCKofvl24aFAZz7rksM6I4h_taBJYWOMvs",
    authDomain: "login-using-firebase-a5fce.firebaseapp.com",
    databaseURL: "https://login-using-firebase-a5fce-default-rtdb.firebaseio.com",
    projectId: "login-using-firebase-a5fce",
    storageBucket: "login-using-firebase-a5fce.appspot.com",
    messagingSenderId: "699553494169",
    appId: "1:699553494169:web:fa5a251d975d208ea5b408",
    measurementId: "G-EWLFCJEWP5"
});
   const db = firebaseApp.firestore();
   const auth = firebaseApp.auth();

function register(){
    email=document.getElementById('email').value;
    password=document.getElementById('password').value;
    username=document.getElementById('username').value;

    console.log(email,password);
    if(validate_email===false || validate_password===false)
    {
        alert('Email or password is invalid!!')
        return
    }
    if(validate_fields(username)===false)
    {
        alert('One or more extra fields are missing!!')
        return
    }


    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed up 
    alert('You are signed up.')
    console.log(result)
    // ...
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message);
    // ..
  });
 
}

function login(){
    email=document.getElementById('email1').value;
    password=document.getElementById('password1').value;

    console.log(email,password);
    if(validate_email===false || validate_password===false)
    {
        alert('Email or password is invalid!!')
        return
    }


    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in
    alert('You are logged in.')
    console.log(result)
    window.location.href = "index0.html"
    // ...
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message);
  });
}


function validate_email(email){
    expression=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(expression.test(email)){
        return true ;
    }
    else{
        return false;
    }
}


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCKofvl24aFAZz7rksM6I4h_taBJYWOMvs",
  authDomain: "login-using-firebase-a5fce.firebaseapp.com",
  databaseURL: "https://login-using-firebase-a5fce-default-rtdb.firebaseio.com",
  projectId: "login-using-firebase-a5fce",
  storageBucket: "login-using-firebase-a5fce.appspot.com",
  messagingSenderId: "699553494169",
  appId: "1:699553494169:web:fa5a251d975d208ea5b408",
  measurementId: "G-EWLFCJEWP5",
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

function register() {
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  username = document.getElementById("username").value;

  console.log(email, password);
  if (validate_email === false || validate_password === false) {
    alert("Email or password is invalid!!");
    return;
  }
  if (validate_fields(username) === false) {
    alert("One or more extra fields are missing!!");
    return;
  }

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed up
      alert("You are signed up.");
      console.log(result);
      // ...
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
      // ..
    });
}

function login() {
  email = document.getElementById("email1").value;
  password = document.getElementById("password1").value;

  console.log(email, password);
  if (validate_email === false || validate_password === false) {
    alert("Email or password is invalid!!");
    return;
  }

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in
      alert("You are logged in.");
      console.log(result);
      window.location.href = "index0.html";
      // ...
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
}

function validate_email(email) {
  expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (expression.test(email)) {
    return true;
  } else {
    return false;
  }
}

function validate_password(password) {
  if (password < 8) {
    return false;
  } else {
    return true;
  }
}

function validate_fields(field) {
  if (field === null) {
    return false;
  }
  if (field.length <= 0) {
    return false;
  } else {
    return true;
  }
=======
function validate_password(password){
    if(password<8)
    {
        return false;
    }
    else{return true;} 
}

function validate_fields(field)
{
    if(field===null)
    {
        return false
    }
    if(field.length<=0)
    {
        return false
    }
    else{
        return true
    }

}
