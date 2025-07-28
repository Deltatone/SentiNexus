<!-- Link this in your HTML file -->
<script>
  // Sample data
  const user = {
    name: "Ryan",
    volunteerHours: 48,
    treesPlanted: 120,
    livesTouched: 36,
    sentiScore: 765,
    missions: [
      { title: "River Cleanup", impact: "Local Environment", status: "Active" },
      { title: "Animal Shelter Outreach", impact: "Animal Welfare", status: "Completed" }
    ]
  };

  // Function to display personalized greeting
  function renderGreeting() {
    const greeting = document.getElementById("greeting");
    greeting.textContent = `Welcome back, ${user.name}!`;
  }

  // Update impact gauges
  function updateImpactStats() {
    document.getElementById("hours").textContent = `${user.volunteerHours} hrs`;
    document.getElementById("trees").textContent = `${user.treesPlanted} planted`;
    document.getElementById("lives").textContent = `${user.livesTouched} helped`;
  }

  // Render mission feed cards
  function renderMissionFeed() {
    const feed = document.getElementById("mission-feed");
    user.missions.forEach(mission => {
      const card = document.createElement("div");
      card.className = "mission-card";
      card.innerHTML = `<h3>${mission.title}</h3><p>${mission.impact}</p><span>${mission.status}</span>`;
      feed.appendChild(card);
    });
  }

  // Update SentiScore
  function updateSentiScore() {
    const scoreBar = document.getElementById("senti-score");
    const score = user.sentiScore;
    scoreBar.textContent = `SentiScore: ${score}`;
    scoreBar.style.width = `${Math.min(score / 10, 100)}%`; // Normalize to max 100%
  }

  // Initialize dashboard
  function initDashboard() {
    renderGreeting();
    updateImpactStats();
    renderMissionFeed();
    updateSentiScore();
  }

  // Run on page load
  document.addEventListener("DOMContentLoaded", initDashboard);
</script>
