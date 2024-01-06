let charlength = "";

const hH = document.querySelector('.hH');

hH.style.color = "#EDDA74";
hH.style.opacity = "0.5"

// heroSearchIcon.style.color = 'grey'



function heroButtonOps () {
    
    const heroButtonText = document.querySelector('.hero-button-text');
    const heroSearchIcon = document.getElementById('hero-search-icon');
    const heroClearButton = document.getElementById('hero-clear-icon');
    const searchButton = document.querySelector('.search-button');
    
    searchButton.disabled = true;

    heroClearButton.style.display = "none"



    heroButtonText.addEventListener('click', () => {
        heroButtonText.placeholder = "Search homes"

    })

    heroClearButton.addEventListener('click', () => {
        heroButtonText.value = "";
        heroButtonText.placeholder = "Find a home";
        heroSearchIcon.style.color = 'grey'

        heroClearButton.style.display = "none"
        searchButton.disabled = true;


    })


    heroButtonText.addEventListener('keyup', () => {
        if (heroButtonText.value != "") {
            heroSearchIcon.style.color = 'red';
            heroClearButton.style.display = "block"

            searchButton.disabled = false;
        
        } else {
            heroSearchIcon.style.color = 'grey'
            heroClearButton.style.display = "none"

            searchButton.disabled = true;


        }
    })

    
    
}


heroButtonOps ();

