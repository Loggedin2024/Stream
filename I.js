const searchInput = document.getElementById('search');
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const results = animeList.filter(anime => anime.title.toLowerCase().includes(query));
    displayAnime(results);
});
