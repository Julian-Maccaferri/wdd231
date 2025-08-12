// Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
const today = new Date().getDay();

// Get the banner and close button elements
const banner = document.querySelector('#banner');
const closeBannerButton = document.querySelector('#close-banner');

// Show the banner only on Monday (1), Tuesday (2), and Wednesday (3)
if (today === 1 || today === 2 || today === 3) {
    banner.classList.remove('hidden');
}

// Add an event listener to the close button to hide the banner
closeBannerButton.addEventListener('click', () => {
    banner.classList.add('hidden');
});