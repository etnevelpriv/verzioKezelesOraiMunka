import './style.css'

const sendForm = function (e) {
  document.getElementById("formContainer").reset();
  document.getElementById("successText").textContent = 'Sikeres regisztráció';
  console.log('reset kesz');
  e.preventDefault();
};

document.getElementById('sendFormButton').addEventListener('click', sendForm);