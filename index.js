const DOMSelectors = {
  button: document.querySelector(".btn"),
  box: document.getElementById("box"),
  top: document.getElementById("top"),
  url: document.getElementById("url"),
  btm: document.getElementById("btm"),
  form: document.getElementById("form"),
};
// console.log(DOMSelectors.box);

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  const info = {
  top: DOMSelectors.top.value,
  url: DOMSelectors.url.value,
  btm: DOMSelectors.btm.value,
  });
  //create object from values
  //only use 1 insertadjcent html
  DOMSelectors.box.insertAdjacentHTML("beforeend", `<p> ${info} </p>`);
  DOMSelectors.info.value = "";
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
