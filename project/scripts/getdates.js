// select the DOM elements for output
const year = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

// use the date object
const today = new Date();
const oLastModif = new Date(document.lastModified);

year.innerHTML = `<span id="currentYear"> ${today.getFullYear()}</span>`;
lastModified.innerHTML = `<p id="lastModified">Last Modification: ${oLastModif.toDateString()} ${oLastModif.toLocaleTimeString()}</p>`;