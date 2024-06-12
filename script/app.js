document.addEventListener('DOMContentLoaded', function() {
    const showsContainer = document.getElementById('shows-container');

    fetch('https://api.tvmaze.com/shows')
        .then(response => response.json())
        .then(shows => {
            shows.forEach(show => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <img src="${show.image ? show.image.medium : ''}" alt="${show.name}">
                    <div class="card-title">${show.name}</div>
                `;
                card.addEventListener('click', () => {
                    window.location.href = `show.html?id=${show.id}`;
                });
                showsContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching shows:', error));
});
