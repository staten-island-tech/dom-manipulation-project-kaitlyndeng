const DOMSelectors = {
  button: document.querySelector(".button"),
  box: document.getElementById("box"),
  top: document.getElementById("top"),
  url: document.getElementById("url"),
  btm: document.getElementById("btm"),
  form: document.getElementById("form"),
};
// console.log(DOMSelectors.box);
function remove(event) {
  console.log(event.target);
  event.target.remove();
}

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  let top = DOMSelectors.top.value;
  let url = DOMSelectors.url.value;
  let btm = DOMSelectors.btm.value;
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
<h2 id="top-text">${top}</h2>
<img id="img" src = "${url}">
<h3 id="bottom-text">${btm}</h3>
<button type= "button" class="button">Remove</button>
</div>`
  );
});

function clear() {
  DOMSelectors.top.value = "";
  DOMSelectors.url.value = "";
  DOMSelectors.btm.value = "";
}

function remove() {
  const remove = document.querySelectorAll(`.button`);
  remove.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.target.parentNode.remove();
    });
  });
}
