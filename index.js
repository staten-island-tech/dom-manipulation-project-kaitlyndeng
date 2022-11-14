const DOMSelectors = {
  top: document.getElementById("top"),
  url: document.getElementById("url"),
  bottom: document.getElementById("bottom"),
  button: document.querySelector(".btn"),
  memeify: document.getElementById("form"),
  section: document.getElementById("display"),
};

DOMSelectors.memeify.addEventListener("form", function (e) {
  e.preventDefault();
  console.log(e);
});

// values;
