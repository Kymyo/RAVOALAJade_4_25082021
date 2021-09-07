
// DOM Elements
const modalElm = document.querySelector(".bground");
const modalBtnElm = document.querySelectorAll(".modal-btn");
const formDataElm = document.querySelectorAll(".formData");
const closeModalx = document.querySelectorAll("#close");
const successMessageElm = document.querySelectorAll("#success-message");
const formElm = document.querySelector("#form");


// Forms Elements
const firstElm = document.getElementById("first");
const lastElm = document.getElementById("last");
const emailElm = document.getElementById("email");
const quantityElm = document.getElementById("quantity");
const birthdateElm = document.getElementById("birthdate");
const cityElm = document.querySelector("input[type=radio]");
const conditionsElm = document.getElementById("checkbox1");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

const birthdateFormat = /^(19|20)\d{2}[-](0?[1-9]|1[012])[-](0[1-9]|[12]\d|3[01])$/;
const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// close modal event

modalBtnElm.forEach((btn) => btn.addEventListener("click", launchModal));

closeModalx.forEach(Element=>Element.addEventListener("click", closeModal));
successMessageElm.forEach(Element=>Element.addEventListener("click", closeModal));

// Validate form
formElm.forEach(Element=>Element.addEventListener("submit", validate));


/* FUNCTIONS */

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topnav"
  }
}

// launch modal form
function launchModal() {
  modalElm.style.display = "block";
  formElm[0].style.display = "block";
}

// close modal form
function closeModal() {
  modalElm.style.display = "none";
  successMessageElm[0].style.display = "none";
}

// Validate form
function displaySuccessMessage() {
  let currentHeight = formElm[0].offsetHeight;

  formElm[0].style.display = "none";
  successMessageElm[0].style.display = "flex";
  successMessageElm[0].style.height = currentHeight + "px";
}

/* is valid first name
@returns {Boolean}
*/

function isFirstValid() {
  let inputFirst = new InputElement(firstElm, "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
  let isValid = isLongEnough(firstElm.value.length, 2);
  removeOrDisplayError(inputFirst, isValid);

  return isValid;
}

/*is valid last name
@returns {Boolean}
*/

function isLastValid() {
  let inputLast = new InputElement(lastElm, "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
  let isValid = isLongEnough(lastElm.value.length, 2);
  removeOrDisplayError(inputLast, isValid);

  return isValid;
}

/* is valid email 
@returns {Boolean}
*/

function isEmailValid() {
  let inputEmail = new InputElement(emailElm, "Veuillez entrer un format d'email valide");
  let isValid = isStringMatchEmailFormat(emailElm.value, mailFormat);
  removeOrDisplayError(inputEmail, isValid);
  
  return isValid;
}

/* is birthdate valid
@returns {Boolean}
*/
function inputBirtdateValid() {
  let inputBirthdate = new InputElement(birthdateElm, "Veuillez saisir une date de naissance valide.");
  let isValid = isStringMatchRegexFormat(birthdateElm.value, birthdateFormat);
  removeOrDisplayError(inputBirthdate, isValid);

  return isValid;
}

/* is quantity valid 
@returns {Boolean}
*/
function isQuantityValid() {
  let inputQuantity = new InputElement(quantityElm, "Veuillez entrer un nombre");
  let isValid = isFilledWithNumber(quantityElm.value);
  removeOrDisplayError(inputQuantity, isValid);

  return isValid;
}


/* if city radio buttons valid
@returns {Boolean}
*/
function isCityValid() {
  let inputCity = new InputElement(cityElm, "Vous devez choisir une option");
  let isValid = isRadioChecked();
  removeOrDisplayError(inputCity, isValid);

  return isValid;
}

/* if conditions valid 
@returns {Boolean}
*/

function isConditionsValid() {
  let inputConditions = new InputElement(conditionsElm, "Vous devez vérifier que vous acceptez les termes et conditions.");
  let isValid = isCheckboxChecked("checkbox1");
  removeOrDisplayError(inputConditions, isValid);

  return isValid;
}

/* remove or diplay error
@param {Object} 
@param {Boolean}
*/

function removeOrDisplayError (element, isValid) {
  isValid ? Element.removeDisplayError() : Element.displayError();
}

/* if form valid
@param
*/ 

function validate(e) {
  e.preventDefault();

  let first = isFirstValid();
  let last = isLastValid();
  let email = isEmailValid();
  let birthdate = isBirthdateValid();
  let quantity = isQuantityValid();
  let city = isCityValid();
  let conditions = isConditionsValid();

  let isFormValid = first && last && email && birthdate && quantity && city && conditions;

  if (isFormValid) displaySuccessMessage();
}

/* if s string matches an email regex
@param {String} 
@param {String} 
@returns {Boolean}
*/
function isStringMatchRegexFormat(str, strFormat) {
  return strFormat.addEventListener(str);
}

/* is the data a nuber 
@param
@returns {Boolean}
*/
function isFilledWithNumber(data) {
  return data !="" && !isNaN(data);
}

/* if one city radio button is checked 
@returns {boolean}
*/
function isRadioChecked() {
  return document.querySelectorAll("input[type=radio]:checked").length > 0;
}

/* if checkbox is checked
@param {string}
@returns {boolean}
*/
function isCheckboxChecked(id) {
  return document.getElementById(id).checked;
}


function isLongEnough(currentLength, minimumLength) {
  return currentLength >= minimumLength;
}
