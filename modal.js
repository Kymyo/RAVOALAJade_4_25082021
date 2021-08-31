function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalx = document.querySelectorAll("#close");
const formElm = document.querySelector("#form");

// Forms Elements
const firstElm = document.getElementById("first");
const lastElm = document.getElementById("last");
const quantityElm = document.getElementById("quantity");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event

closeModalx.forEach(Element=>Element.addEventListener("click", closeModal));

// Validate form
formElm.forEach(Element=>Element.addEventListener("submit", validate));

/* FUNCTIONS */

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Validate form
function validate(e) {
  e.preventDefault();
  const isFirstValid = isLongEnough(firstElm.value.length, 2) ? true : false;
  console.log(isFirstValid);
  const isLastValid = isLongEnough(lastElm.value.length, 2) ? true : false;
  console.log(isLastValid)
}

function isLongEnough(currentLength, minimumLength) {
  return currentLength >= minimumLength ? true : false;
}
