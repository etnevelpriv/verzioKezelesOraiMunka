import './style.css'

const sendForm = function (e) {
  document.getElementById("formContainer").reset();
  console.log('reset kesz');
  e.preventDefault();
};

document.getElementById('sendFormButton').addEventListener('click', sendForm);