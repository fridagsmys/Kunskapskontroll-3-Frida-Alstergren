const results = document.getElementById('results');


const button = document.getElementById('button');
button.addEventListener('click', () => {fetchData()})


// function fetchData() {
//     fetch('https://www.omdbapi.com/?apikey=72378da&s=cheese&y=' + year)
//     .then(response => response.json())
//     .then(data => {
//         results.innerHTML = `
//         <h2>${data[Title]}</h2>
//         `
//     })
//     console.log(data)
// }

async function fetchData() {
    const year = document.getElementById('year-input').value;

    try {
        let response = await fetch('https://www.omdbapi.com/?apikey=72378da&s=cheese&y=' + year)
        let data = await response.json();
        results.innerHTML = `
            <h1>YOU'VE BEEN CHEESED</h1>
            <h2>${data.Search[0].Title}</h2>
            <i>Release year: ${year}</i>
            <img src="${data.Search[0].Poster}">
        `
        console.log(data)
    } catch(error) {
        results.innerHTML = `
            <p> Select a year between 1850 and 2024, cheese please!</p>
        `
    }
}