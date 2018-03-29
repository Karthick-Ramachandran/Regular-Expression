/**
 * @author : Karthick
 * @licence : MIT
 **/ 

// Form Blur Event Listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);
document.getElementById('password').addEventListener('blur', validatepassword);
const passwords = document.getElementById('password');

const confirm = document.getElementById('confirm-password');


function validateName() {
  const name = document.getElementById('name');
  const re = /^[a-zA-Z]{2,10}$/;

  if(!re.test(name.value)){
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}



function validateEmail() {
  const email = document.getElementById('email');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(!re.test(email.value)){
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}

function validatePhone() {
  const phone = document.getElementById('phone');
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if(!re.test(phone.value)){
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
}

function validatepassword(){
  const password = document.getElementById('password')
  const re =  /^[a-zA-Z]{8,100}$/;
  if(!re.test(password.value)){
    password.classList.add('is-invalid');

  } else{
    password.classList.remove('is-invalid');
  }

}
// checking the password fields

document.getElementById('sub').addEventListener('click', function(){
  if(passwords.value !== confirm.value){
  document.getElementById('error').style.display = 'block'
  setTimeout(() => {
    document.getElementById('error').style.display = 'none'
  }, 3000);
  } else if(!passwords || !confirm.value){
    document.getElementById('errors').style.display = 'block'
    setTimeout(() => {
      document.getElementById('errors').style.display = 'none'
    }, 3000);
  } else{
  alert('Good to go!!!');
  }
})
