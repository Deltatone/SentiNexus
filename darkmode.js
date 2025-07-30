<script>
  const toggle = document.getElementById('theme-toggle');
  const icon = document.getElementById('theme-icon');
  const lightTheme = document.getElementById('light-theme');
  const darkTheme = document.getElementById('dark-theme');

  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);

  toggle.addEventListener('click', () => {
    const currentTheme = lightTheme.disabled ? 'dark' : 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });

  function applyTheme(theme) {
    if (theme === 'dark') {
      lightTheme.disabled = true;
      darkTheme.disabled = false;
      icon.src = 'favicon1.png'; // Optional: switch icon
    } else {
      lightTheme.disabled = false;
      darkTheme.disabled = true;
      icon.src = 'favicon1.png'; // Optional: switch icon
    }
  }
</script>
