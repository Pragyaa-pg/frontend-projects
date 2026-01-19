const apiKey = "YOUR_API_KEY";

function searchMovie() {
    const movieName = document.getElementById("movieInput").value;

    if (movieName === "") {
        alert("Please enter a movie name");
        return;
    }

    fetchMovie(movieName);
}
function fetchMovie(movieName) {
    fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            displayMovie(data);
        })
        .catch(error => {
            console.log("Error:", error);
        });
}
function displayMovie(movie) {
    const container = document.getElementById("movieContainer");

    if (movie.Response === "False") {
        container.innerHTML = "<h3>Movie not found 😢</h3>";
        return;
    }

    container.innerHTML = `
        <div class="movie-card">
            <img src="${movie.Poster}" alt="Poster">
            <h2>${movie.Title}</h2>
            <p><strong>Year:</strong> ${movie.Year}</p>
            <p><strong>Rating:</strong> ⭐ ${movie.imdbRating}</p>
            <p>${movie.Plot}</p>
        </div>
    `;
}
