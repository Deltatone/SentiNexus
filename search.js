let data = [];

fetch('opportunities.json')
  .then(response => response.json())
  .then(json => {
    data = json;
    applyFilters(); // Optional: run initial filter/display
  })
  .catch(error => {
    console.error("Failed to load opportunities:", error);
  });


function applyFilters() {
  const name = document.getElementById("searchName").value.toLowerCase();
  const type = document.getElementById("searchType").value;
  const location = document.getElementById("searchLocation").value.toLowerCase();
  const difficulty = parseInt(document.getElementById("searchDifficulty").value);
  const time = document.getElementById("searchTime").value;

  const filtered = data.filter(item => {
    return (
      (!name || item.name.toLowerCase().includes(name)) &&
      (!type || item.type === type) &&
      (!location || item.location.toLowerCase().includes(location)) &&
      (!difficulty || item.difficulty <= difficulty) &&
      (!time || item.time_commitment === time)
    );
  });

  displayResults(filtered);
}

function displayResults(results) {
  const container = document.getElementById("results");
  container.innerHTML = "";

  if (results.length === 0) {
    container.innerHTML = "<p>No results found.</p>";
    return;
  }

  results.forEach(item => {
    const card = document.createElement("div");
    card.className = "result-card";
    card.innerHTML = `
      <h3>${item.name}</h3>
      <p><strong>Type:</strong> ${item.type}</p>
      <p><strong>Location:</strong> ${item.location}</p>
      <p><strong>Difficulty:</strong> ${item.difficulty}</p>
      <p><strong>Time:</strong> ${item.time_commitment}</p>
      <p>${item.description}</p>
    `;
    container.appendChild(card);
  });
}
