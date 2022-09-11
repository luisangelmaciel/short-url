// getting elements 
const input = document.querySelector("input");
const button = document.querySelector("button");
const username = document.getElementById("name");
const form = document.getElementById("form");
const img = document.getElementById("profile-photo");

let lName = localStorage.getItem("name");
let lsImg = localStorage.getItem("photo");

// init iife
(function () {
  lsImg ? img.innerHTML = `<img src="${lsImg}">` : img.innerHTML = `<img src="avatar2.png"  style="vertical-align: middle;        width: 15px;        height: 15px;        border-radius: 50%;" class="responsive">`;
  lName == null ? username.innerHTML = "Guest" : username.innerHTML = lName;
  lName ? form.style.display = "none" : null;
})();

button.addEventListener("click", e => {
  input.value == "" ? alert("No puede ir en blanco") : localStorage.setItem("name", input.value);
  input.value = "";
  username.innerHTML = localStorage.getItem("name");
  form.style.display = "none";
  username.style.display = "block";
});

username.addEventListener("click", () => {
  username.style.display = "none";
  form.style.display == "none" ? form.style.display = "block" : form.style.display = "none";
});

img.addEventListener("click", () => {
  let image = prompt("Enter Image URL");
  if (image) {
    img.innerHTML = `<img src="${image} ">`;
    localStorage.setItem("photo", image);
  } else {
    alert("URL incorrecto");
  }
});