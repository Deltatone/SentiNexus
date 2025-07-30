<script>
  const toggle = document.getElementById('theme-toggle');
  const icon = document.getElementById('theme-icon');

  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.classList.add(savedTheme);
  icon.src = savedTheme === 'dark' ? 'sun-icon.svg' : 'moon-icon.svg';

  toggle.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-mode');
    document.body.classList.toggle('dark-mode', !isDark);
    document.body.classList.toggle('light-mode', isDark);

    // Update icon
    icon.src = isDark ? 'moon-icon.svg' : 'sun-icon.svg';

    // Save preference
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  });
</script>
