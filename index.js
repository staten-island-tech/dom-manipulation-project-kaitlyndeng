const DOMSelectors = {
  button: document.getElementById("button"),
  text: document.getElementById("text"),
  box: document.getElementById("box"),
  option: document.getElementByIdAll(".option"),
};
function backgroundAndText(box, text) {
  box.style.backgroundColor = "green";
  text.innerHTML = "blue";
}

backgroundAndText(DOMSelectors.box, DOMSelectors.text);
