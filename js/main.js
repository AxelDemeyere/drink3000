/* Pour navbar en scrollant */
function scrollFunction() {
    let navbar = document.querySelector(".header");
    let scrollTop = window.scrollY;

     if (scrollTop < 50) {
        navbar.style.display = "none";
     }
     else {
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
  
    window.onscroll = function () {
        startTransition();
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