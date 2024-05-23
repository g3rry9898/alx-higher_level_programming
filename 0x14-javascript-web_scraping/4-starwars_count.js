#!/usr/bin/node

const fetch = require('node-fetch');

async function getMovieCountForCharacter(characterId) {
    try {
        const response = await fetch(`https://swapi-api.alx-tools.com/api/films/`);
        const filmsData = await response.json();

        if (response.ok) {
            const wedgeMovies = filmsData.results.filter((film) =>
                film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
            );

            console.log(`Number of movies with Wedge Antilles: ${wedgeMovies.length}`);
        } else {
            console.error(`Error fetching movie data: ${response.status} ${response.statusText}`);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Usage: node wedge_movies.js
getMovieCountForCharacter(18);

