#!/usr/bin/node

const fetch = require('node-fetch');

async function getMovieTitle(movieId) {
    try {
        const response = await fetch(`https://swapi-api.alx-tools.com/api/films/${movieId}`);
        const movieData = await response.json();

        if (response.ok) {
            console.log(`Title of Episode ${movieData.episode_id}: ${movieData.title}`);
        } else {
            console.error(`Error fetching movie data: ${response.status} ${response.statusText}`);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Usage: node get_movie_title.js <movie_id>
if (process.argv.length !== 3) {
    console.error('Usage: node get_movie_title.js <movie_id>');
    process.exit(1);
}

const movieId = process.argv[2];
getMovieTitle(movieId);

