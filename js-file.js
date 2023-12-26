const searchButton = document.getElementById('search-button');
searchButton.addEventListener('mouseover', (events) => {
    events.target.textContent = "";
    events.target.searchButton.value = "";
})

searchButton.addEventListener('mouseout', (events) => {
    events.target.style.color = "black";
    events.target.searchButton.value = "search";
})

