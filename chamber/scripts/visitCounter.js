// Get the current visit count from localStorage
let visitCount = localStorage.getItem('pageVisitCount');

// If no count exists, initialize it to 0
if (!visitCount) {
    visitCount = 0;
}

// Increment the visit count
visitCount++;

// Update the visit count in localStorage
localStorage.setItem('pageVisitCount', visitCount);

// Display the visit count in the "visitCount" span
document.getElementById('visitCount').textContent = `Page views: ${visitCount}`;