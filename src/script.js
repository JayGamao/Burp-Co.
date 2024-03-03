

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
 
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC4_8JEoKyrtE1AogQWPrZRHzVU0YuV8Xg",
  authDomain: "burp-f0078.firebaseapp.com",
  projectId: "burp-f0078",
  storageBucket: "burp-f0078.appspot.com",
  messagingSenderId: "248194890847",
  appId: "1:248194890847:web:dd1036a9d33604b2c16fea"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

const signInButton = document.getElementById("signInButton");
const signOutButton = document.getElementById("signOutButton");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const avatarButton = document.getElementById("avatarButton"); 
const authButtons = document.getElementById('authButtons')


signOutButton.style.display = "none";

const toggleAuth = () => {
  authButtons.style.display = authButtons.style.display === "none" ? "block" : "none";
};

avatarButton.addEventListener('click', toggleAuth);

document.addEventListener('click', (event) => {
  if (!avatarButton.contains(event.target) && !authButtons.contains(event.target)) {
      authButtons.style.display = 'none';
  }
});   
 
const userSignIn = async () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
        });
};

const userSignOut = async () => {
    signOut(auth)
        .then(() => {
            alert("You have signed out successfully!");
        })
        .catch((error) => {});
};
const updateAvatar = (user) => {
  console.log("Updating avatar");

  const avatarButton = document.getElementById("avatarButton");

  if (user && user.photoURL) {
      console.log("User photoURL:", user.photoURL);
      avatarButton.src = user.photoURL;
  } else {
      console.log("No user photoURL");
      avatarButton.src = "img/avatar.png";
  }
};
const welcomeUser = (user) => {
    if (user) {
        if (userName) {
            userName.innerHTML = user.displayName;
        }
        if (userEmail) {
            userEmail.innerHTML = user.email;
        }
        updateAvatar(user);
        signInButton.style.display = "none";
    } else {
        if (userName) {
            userName.innerHTML = "";
        }
        if (userEmail) {
            userEmail.innerHTML = "";
        }
        updateAvatar(null);
        signInButton.style.display = "block";
    }
};
onAuthStateChanged(auth, (user) => {
  if (user) {
      // Auto-fill name and email fields if the user is signed in
      document.getElementById("userNameInput").value = user.displayName || "";
      document.getElementById("userEmailInput").value = user.email || "";
      
      // Update other parts of the welcome logic as needed
      signOutButton.style.display = "block";
      welcomeUser(user);
      signInButton.style.display ="none";
  } else {
      // Clear name and email fields if the user signs out
      document.getElementById("userNameInput").value = "";
      document.getElementById("userEmailInput").value = "";

      signOutButton.style.display = "none";
      welcomeUser(null);
  }
});


onAuthStateChanged(auth, (user) => {
  if (user) {
    signOutButton.style.display = "block";
    welcomeUser(user);
    signInButton.style.display ="none";
  } else {
    signOutButton.style.display = "none";
    welcomeUser(null);
  }
});

signInButton.addEventListener('click', userSignIn);
signOutButton.addEventListener('click', userSignOut);

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000); 
}
document.addEventListener('DOMContentLoaded', function () {
  document.body.style.transition = 'opacity 0.5s ease-in-out'; 
});

// Handle pag
document.addEventListener('click', function (e) {
  if (e.target.tagName === 'A' && e.target.getAttribute('href')) {
      e.preventDefault();

      document.body.style.animation = 'fadeOut 0.5s ease-in-out'; // Set fade-out animation

      setTimeout(function () {
          window.location.href = e.target.getAttribute('href');
      }, 500); // Adjust the time based on your transition duration
  }
});


