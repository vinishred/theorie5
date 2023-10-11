// alert("Debout la dedans");

const clic = () => {
  console.log("clic");
};

// Récupérer un élément HTML

// sinon on peut passer par les classes ou un autre attribut(href, src ou on peut en créer un avec data-nomDeMonAttribut)
// document est un objet qui corespond à ma page html
// window est un objet qui corspond à la couche supérieure c'est à dire l'interface de mon terminal

// on peut passer par l'ID mais attention car un Id est unique
const myButton = document.querySelector("#myButton");
// myButton.addEventListener("evenement ecouté", "fonction à exécuter")
myButton.addEventListener("click", clic);

// on peut passer par un nom propre qu'on met ensuite entre crochet pour l'appeler
const myDataButton = document.querySelector("[dataButton]");
myDataButton.addEventListener("mouseenter", clic);

// on peut passer par la classe mais attention car un Id est unique
const myClassButton = document.querySelector(".js-button");
// On peut créer des fonctions anonymes avec la formulation suivante () => {}
myClassButton.addEventListener("mouseenter", () => {
  console.log("mouseenter");
});

const dots = document.querySelectorAll("[data-dot]");
console.log(dots);
const mySpan = document.querySelector("[data-number]");

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", (event) => {
    const clickDot = event.target;
    const number = clickDot.getAttribute("data-dot");
    // console.log(number);
    // on modifie dynamiquement notre html
    mySpan.textContent = number;
    mySpan.innerHTML = `<i>${number}</i>`;
  });
}

const reset = document.querySelector("[data-reset]");
reset.addEventListener("click", () => {
  mySpan.innerHTML = "";
});
