

document.addEventListener('DOMContentLoaded', () => {
    const bodyElement = document.body;

    // 1. Select all color buttons using a common class
    const themeButtons = document.querySelectorAll('.color, .dark');

    themeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // 2. Determine which theme to apply based on the button's text or class
            let themeClass = '';
            
            if (btn.classList.contains('color1')) themeClass = 'yellow-theme';
            else if (btn.classList.contains('color2')) themeClass = 'green-theme';
            else if (btn.classList.contains('color3')) themeClass = 'purple-theme';
            else if (btn.classList.contains('dark')) themeClass = 'dark-theme';

            // 3. Optional: Remove other themes before adding the new one
            // This prevents "Yellow" and "Green" from being active at the same time
            bodyElement.classList.remove('yellow-theme', 'green-theme', 'purple-theme', 'dark-theme');

            // 4. Toggle the chosen theme
            bodyElement.classList.add(themeClass);
            
            console.log(`${themeClass} Activated!`);
        });
    });
});