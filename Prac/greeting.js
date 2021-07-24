const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector(".greeting");

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

function paintGreeting(username) {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = `Welcome ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;

  localStorage.setItem(USERNAME_KEY, username);

  paintGreeting(username);
}

const currentUsername = localStorage.getItem(USERNAME_KEY);

if (currentUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLoginSubmit);
} else {
  paintGreeting(currentUsername);
}
