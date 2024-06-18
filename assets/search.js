// search.js
export function performSearch(query, data) {
  const resultsContainer = document.getElementById('results');
  if (query) {
    const results = data.filter(link => link.title.toLowerCase().includes(query.toLowerCase()));
    if (results.length > 0) {
      resultsContainer.innerHTML = '';
      results.forEach(link => {
        const resultItem = document.createElement('div');
        resultItem.innerHTML = `<a href="${link.url}">${link.title}</a>`;
        resultsContainer.appendChild(resultItem);
      });
    } else {
      resultsContainer.innerHTML = '<p>No results found.</p>';
    }
  }
}

export function handleSearch() {
  fetch('/assets/links.json')
    .then(response => response.json())
    .then(data => {
      const urlParams = new URLSearchParams(window.location.search);
      const query = urlParams.get('query') || '';
      performSearch(query, data);
    })
    .catch(error => console.error('Error fetching the links data:', error));
}