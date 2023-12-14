/* Pour navbar en scrollant */
function scrollFunction() {
    navbar = document.querySelector(".header-container");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-50px";
    }
}

window.onscroll = function () {
    scrollFunction();
};

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
    let
}