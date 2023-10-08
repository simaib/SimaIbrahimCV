let subject = "Javascript"
console.log("Hello " + subject)


document.getElementById("toggleInfo").addEventListener("click", function() {
    var searchInput = document.getElementById("searchInput").value.toLowerCase();
    var infoType1 = document.getElementById("infoType1");
    var infoType2 = document.getElementById("infoType2");
    
    if (searchInput.includes("mejl")) {
        infoType1.style.display = "block";
        infoType2.style.display = "none";
    } else if (searchInput.includes("telefon")) {
        infoType1.style.display = "none";
        infoType2.style.display = "block";
    } else {
        infoType1.style.display = "none";
        infoType2.style.display = "none";
    }
});
