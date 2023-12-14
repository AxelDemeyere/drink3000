const drinks = {
    "1": "Original",
    "2": "Mojito",
    "3": "Tropical"
};


/* Pour navbar en scrollant */
function scrollFunction() {
    navbar = document.querySelector(".header-container nav");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-50px";
    }
}

window.onscroll = function() {
    scrollFunction();
};

/* Animation de scroll down pour flèche sur vidéo*/
document.getElementById('scroll-anchor').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('recettes').scrollIntoView({ behavior: 'smooth' });
});


 /*Fonction sélection de boisson, doit fonctionner aussi sur les catégories*/

 function displayChoice() {
    let btn2 = document.querySelector("#btnm");
    let choice = document.querySelector(".choice");

    btn2.addEventListener("click", () => {
        choice.innerHTML = `${drinks[2]}`;
    });
}

displayChoice();

/* 
exemple de désactivation de bouton/list etc...

function myFunction() {
  document.getElementById("mySelect").disabled = true;
*/




