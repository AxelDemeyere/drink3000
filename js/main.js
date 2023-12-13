
/* Pour navbar en scrollant */
function scrollFunction() {
    navbar = document.querySelector(".header-container");
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


/*Fonction sélection de boisson*/

function selectDrink(type) {
    const cards = document.querySelectorAll('.cards');

    cards.forEach(card => {
        const cardtype = card.querySelector('header p').textContent;

        if (cardtype == type) {
            card.classList.add('selected');
        } else {
            card.classList.remove('selected');
            card.classList.add('unavailable');
            card.querySelector('infos p').textContent = "Non disponible, modifiez votre sélection pour sélectionner cette recette";
        }
    })
}

