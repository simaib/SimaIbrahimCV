let subject = "Javascript"
console.log("Hello " + subject)

let chooseColor = document.getElementById("chooseColor");
let colorBtn = document.getElementById("colorBtn");

let age = document.getElementById("contact");
let testAge = document.getElementById("testAge");
let content = document.getElementById("content");

colorBtn.addEventListener("click", (e) => {
    console.log("Klick på knapp")

    let chosenColor = chooseColor.value;
    console.log(chosenColor);
    document.body.style.backgroundColor = chosenColor;
})

testAge.addEventListener("click", (e) => {


    if (mejl) {
        content.innerText = "Du kommer att bli kontaktad via mejl!";
    } else  {
        content.innerText = "Du kommer att bli kontaktad via telefon!";

    }
})