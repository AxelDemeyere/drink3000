document.addEventListener("DOMContentLoaded", function () {
    window.onscroll = function () {
        scrollFunction();
    };
/* Pour navbar en scrollant */
function scrollFunction() {
    navbar = document.querySelector(".header");
    header = document.querySelector(".header-logo");
    if (document.documentElement.scrollTop < 200) {
        navbar.style.display = "none";

    } else {
        navbar.style.display = "flex";
        header.style.display = "none";
    }
}

/* Animation de scroll down pour flèche sur vidéo*/
document.getElementById('scroll-anchor').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('recettes').scrollIntoView({ behavior: 'smooth' });
});


/*Fonction sélection de boisson et affichage dans div choice*/

function displayChoice() {
    let btn2 = document.querySelectorAll(".btn2");
    let titleChoice = document.querySelector(".titleChoice");
    let choice = document.querySelector(".choice");

    btn2.forEach(button => {
        button.addEventListener("click", () => {
            let selection1 = button.closest(".card").querySelector(".name").textContent;
            let selection2 = button.closest(".card").querySelector(".infos").textContent;
            titleChoice.innerHTML = selection1;
            choice.innerHTML = selection2;
        });
    });
}

displayChoice();

function displayCategory() {
    let btncat1 = document.querySelector("#energyCat");
    let btncat2 = document.querySelector("#freshCat");
    let btncat3 = document.querySelector("#allCat");

    btncat1.addEventListener("click", () => {
        let cat1 = document.querySelector("#card1");
        let cat2 = document.querySelector("#card2");
        let cat3 = document.querySelector("#card3");

        cat1.classList.remove("hidden");
        cat2.classList.add("hidden");
        cat3.classList.remove("hidden");
    });

    btncat2.addEventListener("click", () => {
        let cat1 = document.querySelector("#card1");
        let cat2 = document.querySelector("#card2");
        let cat3 = document.querySelector("#card3");

        cat1.classList.add("hidden");
        cat2.classList.remove("hidden");
        cat3.classList.add("hidden");
    });

    btncat3.addEventListener("click", () => {
        let cat1 = document.querySelector("#card1");
        let cat2 = document.querySelector("#card2");
        let cat3 = document.querySelector("#card3");

        cat1.classList.remove("hidden");
        cat2.classList.remove("hidden");
        cat3.classList.remove("hidden");
    });
}

displayCategory();


function disableDrinks() {

}

});
