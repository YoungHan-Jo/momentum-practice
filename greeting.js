const greetingForm = document.querySelector(".js-greetingForm"),
  input = greetingForm.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function paintGreeting(text) {
  greetingForm.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerHTML = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    // name is not
  } else {
    paintGreeting(currentUser);
  }
}

function unit() {
  loadName();
}

unit();
