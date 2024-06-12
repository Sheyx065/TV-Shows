document.addEventListener('DOMContentLoaded', function() {
    const showContainer = document.getElementById('show-container');
    const urlParams = new URLSearchParams(window.location.search);
    const showId = urlParams.get('id');

    fetch(`https://api.tvmaze.com/shows/${showId}`)
        .then(response => response.json())
        .then(show => {
            showContainer.innerHTML = `
                <div class="show-card">
                    <img src="${show.image ? show.image.medium : ''}" alt="${show.name}">
                    <h1>${show.name}</h1>
                    <p>${show.summary}</p>
                    <p><strong>Genres:</strong> ${show.genres.join(', ')}</p>
                    <p><strong>Language:</strong> ${show.language}</p>
                    <p><strong>Premiered:</strong> ${show.premiered}</p>
                    <p><strong>Rating:</strong> ${show.rating.average}</p>
                    <a href="index.html">Back to list</a>
                </div>
            `;
        })
        .catch(error => console.error('Error fetching show details:', error));
});
