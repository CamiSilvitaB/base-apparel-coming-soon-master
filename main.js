const submit = document.querySelector("#submit")
const error = document.querySelector(".errorText")
const form = document.querySelector("form")
const email = document.querySelector("#email")
const iconError = document.querySelector(".input_error")

form.addEventListener("submit", validate)
submit.addEventListener("click", validate)

function validate(e) {
  e.preventDefault()

  const emailValue = email.value.trim()

  if (!isEmail(emailValue)) {
    error.style.display = "block"
    iconError.style.display = "block"
  } else {
    error.style.display = "none"
    iconError.style.display = "none"
  }
}

function isEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}