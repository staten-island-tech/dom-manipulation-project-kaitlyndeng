const DOMSelectors = {
  button: document.querySelector(".btn"),
  card: document.getElementById("box"),
  top: document.getElementById("top"),
  url: document.getElementById("url"),
  btm: document.getElementById("btm"),
  form: document.getElementById("form"),
};
// console.log(DOMSelectors.box);

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  let top = DOMSelectors.top.value;
  console.log(top);
  let url = DOMSelectors.url.value;
  console.log(top);
  let btm = DOMSelectors.btm.value;
  console.log(top);
  DOMSelectors.card.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
<h2 id="top-text">${top}</h2>
<img id="img" src= "${url}"/>
<h3 id="bottom-text">${btm}</h3>
<button id="remove-card">Remove</button>
</div>`
  );
});

//   DOMSelectors.box.insertAdjacentHTML("beforeend", `<p> ${url} </p>`);
//   DOMSelectors.url.value = "";
//   DOMSelectors.box.insertAdjacentHTML("beforeend", `<p> ${btm} </p>`);
//   DOMSelectors.btm.value = "";
// });

// const DOMSelectors = {
//   top: document.getElementById("top"),
//   url: document.getElementById("url"),
//   bottom: document.getElementById("bottom"),
//   button: document.querySelector(".btn"),
//   memeify: document.getElementById("form"),
//   section: document.getElementById("display"),
// };

// DOMSelectors.memeify.addEventListener("form", function (e) {
//   e.preventDefault();
//   console.log(e);
// });

// values;
