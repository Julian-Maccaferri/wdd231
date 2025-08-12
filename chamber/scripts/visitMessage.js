document.addEventListener("DOMContentLoaded", function () {
    const visitMessageElement = document.getElementById("visitMessage");
    const lastVisit = localStorage.getItem("lastVisit");
    const currentVisit = new Date().getTime();

    if (!lastVisit) {
        // First visit
        visitMessageElement.textContent = "¡If you have any questions or need help, please let us know!";
    }   else {
        const lastVisitTime = parseInt(lastVisit, 10);
        const timeDifference = currentVisit - lastVisitTime;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference < 1) {
            visitMessageElement.textContent = "";
        } else if (daysDifference === 1) {
            visitMessageElement.textContent = "Your last visit was 1 day ago.";
        } else {
            visitMessageElement.textContent = `Your last visit was ${daysDifference} days ago.`;
        }
    }

    // Update the last visit time in localStorage
    localStorage.setItem("lastVisit", currentVisit.toString());
});