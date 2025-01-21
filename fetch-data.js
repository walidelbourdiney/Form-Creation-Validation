"use strict";
async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const dataContainer = document.getElementById("api-data");
  try {
    const response = await fetch(apiUrl);
    const users = await response.json();
    dataContainer.innerHTML = "";
    const userList = document.createElement("ul");
    users.forEach((user) => {
      let person = document.createElement("li");
      person.innerText = user.username;
      userList.appendChild(person);
    });
    dataContainer.appendChild(userList);
  } catch {
    dataContainer.innerHTML = "";
    dataContainer.innerText = "Failed to load user data.";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  fetchUserData();
});
