let charlength = "";

const hH = document.querySelector('.hH');

hH.style.color = "#EDDA74";
hH.style.opacity = "0.5"



function heroButtonOps () {
    
    const heroButtonText = document.querySelector('.hero-button-text');
    const heroButton = document.querySelector('.hero-button');
    const searchIcon = document.getElementById('search-icon');

    
    searchIcon.style.display = "none";
    heroButtonText.style.textAlign = "center";

    heroButtonText.addEventListener('keyup', () => {

        if (heroButtonText.value != "") {
            console.log("y7es")

            searchIcon.style.display = "block";
            searchIcon.style.color = "red";

            heroButtonText.style.textAlign = "left";


        } else {

            searchIcon.style.display = "none";
            searchIcon.style.color = "red";

            heroButtonText.style.textAlign = "center";

        }
        

    })
    
}


heroButtonOps ();

