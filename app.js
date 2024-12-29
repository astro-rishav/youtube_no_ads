const API_BASE_URL = 'http://localhost:5000/api/videos';

document.getElementById('search-button').addEventListener('click', async () => {
  const query = document.getElementById('search-box').value;
  if (!query) return alert('Please enter a search term.');

  const response = await fetch(`${API_BASE_URL}/search?query=${query}`);
  const data = await response.json();

  const videoContainer = document.getElementById('video-container');
  videoContainer.innerHTML = ''; // Clear previous results

  data.items.forEach((item) => {
    const videoCard = document.createElement('div');
    videoCard.className = 'video-card';

    videoCard.innerHTML = `
      <img src="${item.snippet.thumbnails.high.url}" alt="${item.snippet.title}">
      <h3>${item.snippet.title}</h3>
    `;

    videoCard.addEventListener('click', () => {
      window.open(`https://www.youtube.com/watch?v=${item.id.videoId}`, '_blank');
    });

    videoContainer.appendChild(videoCard);
  });
});
