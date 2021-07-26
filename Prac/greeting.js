const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.getElementById("greeting");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function paintGreeting(username) {
  greeting.classList.remove(HIDDEN_CLASS);
  greeting.innerText = `Hello! ${username}`;
}

function handleLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASS);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

const savedUser = localStorage.getItem(USERNAME_KEY);

if (savedUser !== null) {
  // is username
  paintGreeting(savedUser);
} else {
  // is not username
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", handleLoginSubmit);
}
