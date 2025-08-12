const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#cards");

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

function showGrid() {
    display.classList.add("grid");
    display.classList.remove("list");
}

listbutton.addEventListener("click", showList); 
gridbutton.addEventListener("click", showGrid);