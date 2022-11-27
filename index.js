const DOMSelectors = {
  button: document.querySelector(".button"),
  box: document.getElementById("box"),
  top: document.getElementById("top"),
  url: document.getElementById("url"),
  btm: document.getElementById("btm"),
  form: document.getElementById("form"),
};

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(event);
  function card (){
    let top = DOMSelectors.top.value;
    let url = DOMSelectors.url.value;
    let btm = DOMSelectors.btm.value;

  function insert (){
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
    <h2 id="top-text">${top}</h2>
    <img id="img" src = "${url}">
    <h3 id="bottom-text">${btm}</h3>
    <button type= "button" class="button">Remove</button>
    </div>`
)};
 
insert()
}
card();

const remove = document.querySelectorAll(`.button`);
  remove.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.target.parentNode.remove();
    });
  });
  
function clear() {
  DOMSelectors.top.value = "";
  DOMSelectors.url.value = "";
  DOMSelectors.btm.value = "";
}
clear (); 
})
