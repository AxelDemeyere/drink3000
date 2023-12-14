const drinks = {
    "1": "Original",
    "2": "Mojito",
    "3": "Tropical"
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



