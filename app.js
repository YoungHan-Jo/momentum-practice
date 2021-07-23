const title = document.querySelectorAll(".hello h1");

for (let i = 0; title.length; ++i) {
  title[i].innerText = "hello";
}

console.log(title);
