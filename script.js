"use strict";
document.addEventListener("DOMContentLoaded", function () {
  // Get the form element
  const form = document.getElementById("registration-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    // Get the input fields
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Get the feedback div
    const formFeedback = document.getElementById("form-feedback");
    let isValid = true;
    let messages = [];

    //Username Validation
    if (!username || username.length < 3) {
      messages.push("please insert a user name with more than 3 characters!");
      isValid = false;
    }
    //email Validation
    const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailReg.test(email)) {
      messages.push("please insert a valid email address!");
      isValid = false;
    }
    //Password  Validation
    if (!password || password.length < 8) {
      messages.push("please insert a password with more than 8 characters!");
      isValid = false;
    }

    formFeedback.style.display = "block";

    if (isValid) {
      formFeedback.textContent = "Registration successful!";
    } else {
      formFeedback.innerHTML = messages.join("<br>");
      formFeedback.style.color = "#dc3545";
    }
  });
});
