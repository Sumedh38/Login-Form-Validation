let Username = document.getElementById("username");
let Email = document.getElementById("email");
let Password = document.getElementById("Password");

let errorMsg = document.getElementsByClassName("error");
let successIcon = document.getElementsByClassName("successicon");
let failureIcon = document.getElementsByClassName("failureicon");

let Form = document.getElementById("form");

Form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (Username.value.trim() === "") {
    errorMsg[0].innerHTML = "username cannot be blank";
    failureIcon[0].style.opacity = "1";
    successIcon[0].style.opacity = "0";
  } else {
    errorMsg[0].innerHTML = " ";
    failureIcon[0].style.opacity = "0";
    successIcon[0].style.opacity = "1";
  }

  if (Email.value.trim() === "") {
    errorMsg[1].innerHTML = "Email cannot be blank";
    failureIcon[1].style.opacity = "1";
    successIcon[1].style.opacity = "0";
  } else {
    errorMsg[1].innerHTML = " ";
    failureIcon[1].style.opacity = "0";
    successIcon[1].style.opacity = "1";
  }

  if (Password.value.trim() === "") {
    errorMsg[2].innerHTML = "Password cannot be blank";
    failureIcon[2].style.opacity = "1";
    successIcon[2].style.opacity = "0";
  } else {
    errorMsg[2].innerHTML = " ";
    failureIcon[2].style.opacity = "0";
    successIcon[2].style.opacity = "1";
  }
});
