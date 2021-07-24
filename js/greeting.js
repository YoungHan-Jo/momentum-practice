const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector(".login-input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleLoginSubmit(event) {
  event.preventDefault();

  loginForm.classList.add(HIDDEN_CLASSNAME);

  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);

  paintGreeting(username);
}

const currentUsername = localStorage.getItem(USERNAME_KEY);

if (currentUsername === null) {
  // show login form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLoginSubmit);
} else {
  // show greeting
  paintGreeting(currentUsername);
}
