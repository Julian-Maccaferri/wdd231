
document.addEventListener('DOMContentLoaded', () => {
    let lastModified = new Date(document.lastModified);
    document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;
});