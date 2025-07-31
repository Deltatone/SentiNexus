// Wrap in DOMContentLoaded to ensure HTML is fully loaded before script runs
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body; // Reference to the body element
    const faviconLink = document.querySelector('link[rel="icon"]');
    // --- Element Existence Checks ---
    if (!toggleButton || !themeIcon || !body) {
        console.error('Theme script: One or more required elements (theme-toggle, theme-icon, or body) not found. Script will not function.');
        return; // Stop execution if elements are missing
    }

    // --- Define theme classes and icon sources ---
    const themes = {
        light: {
            className: 'light-theme',
            iconSrc: 'favicon1.png', // Your light theme icon
            iconAlt: 'Sun icon for light theme',
            faviconScr: 'favicon1.png'
        },
        dark: {
            className: 'dark-theme',
            iconSrc: 'favicond.png', // Your dark theme icon
            iconAlt: 'Moon icon for dark theme',
            faviconScr: 'favicond.png
        }
    };

    // --- Function to apply the theme ---
    function applyTheme(themeName) {
        // Remove existing theme classes
        body.classList.remove(themes.light.className, themes.dark.className);

        // Add the new theme class
        body.classList.add(themes[themeName].className);

        // Update the theme icon
        themeIcon.src = themes[themeName].iconSrc;
        themeIcon.alt = themes[themeName].iconAlt;

        // Update ARIA attribute for accessibility (optional but good practice)
        toggleButton.setAttribute('aria-pressed', themeName === 'dark' ? 'true' : 'false');
        toggleButton.setAttribute('aria-label', `Switch to ${themeName === 'dark' ? 'light' : 'dark'} theme`);

        // Store preference in localStorage
        localStorage.setItem('theme', themeName);
    }
    const favicon = document.getElementById('favicon');

// Function to update the favicon based on the current color scheme
const updateFavicon = () => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    favicon.href = 'favicond.png'; // Path to your dark mode favicon
  } else {
    favicon.href = 'favicon1.png'; // Path to your light mode favicon
  }
};

// Initial update when the page loads
updateFavicon();

// Listen for changes in the user's color scheme preference
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon);
    // --- Initial Theme Load ---
    const savedTheme = localStorage.getItem('theme') || 'light'; // Default to 'light' if no preference saved
    applyTheme(savedTheme);

    // --- Event Listener for Toggle Button ---
    toggleButton.addEventListener('click', () => {
        // Determine current theme based on body class
        const currentThemeIsDark = body.classList.contains(themes.dark.className);
        const newTheme = currentThemeIsDark ? 'light' : 'dark';
        applyTheme(newTheme);
    });
});
