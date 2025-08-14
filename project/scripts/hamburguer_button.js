document.addEventListener('DOMContentLoaded', function () {
    const navButton = document.getElementById('navButton');
    const menuLinks = document.querySelector('.menuLinks');
    if (navButton && menuLinks) {
        navButton.innerHTML = "&#9776;"; // Hamburger icon
        navButton.addEventListener('click', function () {
            menuLinks.classList.toggle('open');
            if (menuLinks.classList.contains('open')) {
                navButton.innerHTML = "&#10005;"; // X icon
            } else {
                navButton.innerHTML = "&#9776;"; // Hamburger icon
            }
        });
    }
});