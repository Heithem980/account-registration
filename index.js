const passwordInputs = document.querySelectorAll(".password");
const submit = document.querySelector(".btn-submit")

let passwordCorrectlyTyped = false;




passwordInputs.forEach((passwordInput) => {
  passwordInput.addEventListener("input", () => {
      validatePasswordLength(passwordInput);
      validateForm();
  });
});

function validatePasswordLength(input) {

  if (input.value.length < 8) {
      input.classList.add('input-error');
  } else {
      input.classList.remove('input-error');
  }
}


function validatePasswordMatch(){

  const [password,confirmPassword] = passwordInputs;


  //console.log(password.value, confirmPassword.value)

  if (password.value && confirmPassword.value) {

    if (password.value !== confirmPassword.value) {
      

      password.classList.add("input-error")
      confirmPassword.classList.add("input-error")
      return false;
      //passwordCorrectlyTyped = false;

    } else {
      password.classList.remove("input-error")
      confirmPassword.classList.remove("input-error")
      return true;
      //passwordCorrectlyTyped = true;
    }

} else {
    return false;
}


}

function validateForm() {

  const [password, confirmPassword] = passwordInputs;

  const isPasswordValid = password.value.length >= 8;
  const isConfirmPasswordValid = confirmPassword.value.length >= 8;
  const doPasswordsMatch = validatePasswordMatch();

  if (isPasswordValid && isConfirmPasswordValid && doPasswordsMatch) {
      submit.disabled = false;
  } else {
      submit.disabled = true;
  }
}




submit.addEventListener("click", (event) => {
  event.preventDefault();
  alert('Form submitted successfully!');
});