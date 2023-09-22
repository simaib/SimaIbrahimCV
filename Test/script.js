let subject = "Javascript"
console.log("Hello " + subject)

let chooseColor = document.getElementById("chooseColor");
let colorBtn = document.getElementById("colorBtn");

let age = document.getElementById("age");
let testAge = document.getElementById("testAge");
let content = document.getElementById("content");

colorBtn.addEventListener("click", (e) => {
    console.log("Klick på knapp")

    let chosenColor = chooseColor.value;
    console.log(chosenColor);
    document.body.style.backgroundColor = chosenColor;
})

testAge.addEventListener("click", (e) => {
    let getAge = age.value;

    console.log("age" + getAge);

    let yearsLeft = 18 - getAge

    if (getAge < 18) {
        console.log("mindre än 18");
        content.innerText = "Sorry, kom tillbaka om några år!" + yearsLeft + "år!";
    } else {
        console.log("större än 18");
        content.innerText = "Varsågod, ta en öl!"

    }
})