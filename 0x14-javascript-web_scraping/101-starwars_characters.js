#!/usr/bin/node
const fetch = require('node-fetch');

async function getCharactersForMovie(movieId) {
    try {
        const response = await fetch(`https://swapi.dev/api/films/${movieId}/`);
        const movieData = await response.json();

        if (response.ok) {
            console.log(`Characters in "${movieData.title}":`);
            for (const characterUrl of movieData.characters) {
                const characterResponse = await fetch(characterUrl);
                const characterData = await characterResponse.json();
                console.log(characterData.name);
            }
        } else {
            console.error(`Error fetching movie data: ${response.status} ${response.statusText}`);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Usage: node movie_characters.js <movie_id>
if (process.argv.length !== 3) {
    console.error('Usage: node movie_characters.js <movie_id>');
    process.exit(1);
}

const movieId = process.argv[2];
getCharactersForMovie(movieId);

