const clockForm = document.querySelector(".js-clock"),
  clock_HMin = clockForm.querySelector("span:first-child"),
  clock_Sec = clockForm.querySelector("span:last-child");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  clock_HMin.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
  clock_Sec.innerHTML = `.${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
