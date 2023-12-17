document.addEventListener("DOMContentLoaded", function () {
    window.onscroll = function () {
        scrollFunction();
    };
    /* Pour navbar en scrollant */
    function scrollFunction() {
        let navbar = document.querySelector(".header");
        let scrollTop = window.scrollY;

        if (scrollTop < 50) {
            navbar.style.display = "none";

        } else {
            navbar.style.display = "flex";
        }
    }


    function startTransition() {
        let test = document.getElementById("header-test");
        let scroll = window.scrollY;
        console.log(scroll);

        if (scroll > 50) {
            test.classList.add("slide-left");
        } else {
            test.classList.remove("slide-left");
        }
    }

    startTransition();

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
    
        let cat1 = document.querySelector(".card#card1 .btn2");
        let cat2 = document.querySelector(".card#card2 .btn2");
        let cat3 = document.querySelector(".card#card3 .btn2");
    
        let infoCard1 = document.querySelector(".card#card1 .infos");
        let infoCard2 = document.querySelector(".card#card2 .infos");
        let infoCard3 = document.querySelector(".card#card3 .infos");
    
        //déclaration des variables 

        btncat1.addEventListener("click", () => {
            resetButtons();
            cat2.disabled = !cat2.disabled;
            updateMessages();
        });
    
        btncat2.addEventListener("click", () => {
            resetButtons();
            cat1.disabled = !cat1.disabled;
            cat3.disabled = !cat3.disabled;
            updateMessages();
        });
    
        //Remets tous les bouttons à zéro
        function resetButtons() {
            if (cat1) cat1.disabled = false;
            if (cat2) cat2.disabled = false;
            if (cat3) cat3.disabled = false;
        }
    
        //utilisation de ternaire pour le remplacement des messages (en gros if else)
        function updateMessages() {
            infoCard1.textContent = cat1.disabled 
                ? "Non disponible. Modifiez votre sélection pour sélectionner cette recette"
                : "Boisson énergisante gazeuse, à la taurine et chargée en caféine !";
    
            infoCard2.textContent = cat2.disabled
                ? "Non disponible. Modifiez votre sélection pour sélectionner cette recette"
                : "Boisson raffraîchissante gazeuse, saveur mojito à la caféine et avec alcool !";
    
            infoCard3.textContent = cat3.disabled
                ? "Non disponible. Modifiez votre sélection pour sélectionner cette recette"
                : "Boisson énergisante gazeuse, saveur MERDE et Coca-Cola !";
        }
    }
    
    displayCategory();
    



});
