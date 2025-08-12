const hamburguerButton = document.getElementById('navButton');
const navElement = document.querySelector('.menuLinks');

hamburguerButton.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburguerButton.classList.toggle('open');
});
