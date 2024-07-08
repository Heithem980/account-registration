const passwordInputs = document.querySelectorAll(".password");

passwordInputs.forEach((passwordInput) => {

  passwordInput.addEventListener("input", (event) => {
    event.preventDefault();


    console.log(passwordInput.value);

    if (passwordInput.value.length < 8) {
      passwordInput.classList.add("input-error");
    } else {
      passwordInput.classList.add("input-success");
    }
  });
});


