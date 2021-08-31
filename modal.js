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
const successMessageElm = document.querySelectorAll("#success-message");
const formElm = document.querySelector("#form");
const cityElm = document.querySelector("input[type=radio]");

// Forms Elements
const firstElm = document.getElementById("first");
const lastElm = document.getElementById("last");
const emailElm = document.getElementById("email");
const quantityElm = document.getElementById("quantity");
const birthdateElm = document.getElementById("birthdate");
const checkbox1 = document.getElementById("checkbox1");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event

closeModalx.forEach(Element=>Element.addEventListener("click", closeModal));
successMessageElm.forEach(Element=>Element.addEventListener("click", closeModal));

// Validate form
formElm.forEach(Element=>Element.addEventListener("submit", validate));


/* FUNCTIONS */

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  formElm[0].style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
  successMessageElm[0].style.display = "none";
}

// Validate form
function validate(e) {
  e.preventDefault();
  let formValid = true;

  let inputFirst = new InputElement(firstElm, "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
  isLongEnough(firstElm.nodeValue.length, 2) ? inputFirst.removeDisplayError() : inputFirst.displayError();


  let inputLast = new InputElement(lastElm, "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
  isLongEnough(lastElm.nodeValue.length, 2) ? inputLast.removeDisplayError() : inputFirst.displayError();

  let inputEmail = new InputElement(emailElm, "Veuillez entrer un format d'email valide");
  isStringMatchEmailFormat(emailElm.value) ? inputEmail.removeDisplayError() : inputEmail.displayError();

  let inputQuantity = new InputElement(quantityElm, "Veuillez entrer un nombre.");
  isFilledWithNumber(quantityElm.value) ? inputQuantity.removeDisplayError() : inputQuantity.inputQuantity.displayError();

  let inputCity = new InputElement(cityElm, " Vous devez choisir une option.");
  isRadioChecked() ? inputCity.removeDisplayError(): inputCity.displayError();

  let inputConditions = new InputElement(checkbox1, "Vous devez vérifier que vous acceptez les termes et conditions.");
  isCheckboxChecked("checkbox1") ? inputConditions.removeDisplayError() : inputConditions.displayError();

  if(formValid) displaySuccess();
}

function displaySuccess() {
  formElm[0].style.display = "none";
  successMessageElm[0].style.display = "block"; 
}

function isStringMatchEmailFormat(str) {
  const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return mailFormat.test(str);
}

function isFilledWithNumber(data) {
  return data !="" && !isNaN(data) ? true : false;
}

function isRadioChecked() {
  return document.querySelectorAll("input[type=radio]:checked").length > 0;
}

function isCheckboxChecked(id) {
  return document.getElementById(id).checked;
}

function isLongEnough(currentLength, minimumLength) {
  return currentLength >= minimumLength ? true : false;
}
