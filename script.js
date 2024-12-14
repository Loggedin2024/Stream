const animeList = [
    {
        title: "So I'm a Spider, So What?",
        image: "assets/spider.jpg",
        duration: "23 min/ep"
    },
    {
        title: "The Unwanted Undead Adventurer",
        image: "assets/undead.jpg",
        duration: "Nonemin/ep"
    }
];

const container = document.getElementById('anime-list');
container.innerHTML = ''; // Clear existing content

animeList.forEach(anime => {
    const card = document.createElement('div');
    card.classList.add('anime-card');
    card.innerHTML = `
        <img src="${anime.image}" alt="${anime.title}">
        <h2>${anime.title}</h2>
        <p>${anime.duration}</p>
    `;
    container.appendChild(card);
});
