const DOMSelectors = {
  button: document.getElementById(".btn"),
  box: document.getElementById("box"),
  top: document.getElementById("top"),
  url: document.getElementById("url"),
  btm: document.getElementById("btm"),
  form: document.getElementById("form"),
};

DOMSelectors.button.addEventListener("submit", function (e) {
  e.preventDefault();
  backgroundAndText(DOMSelectors.box, DOMSelectors.top);
});

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
