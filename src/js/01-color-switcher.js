
const startRef = document.querySelector('button[data-start]');

const stopRef = document.querySelector('button[data-stop]');


let intervalId = null;
let randomColor = "";
const RANDOM_COLOR = 'randomColor';

const startWorkRandomColor = () => {
	startRef.setAttribute("disabled", "disabled");
	stopRef.removeAttribute("disabled", "disabled");

	intervalId = setInterval(() => {
		randomColor = document.body.style.backgroundColor  = getRandomHexColor();
		console.log(randomColor);
		localStorage.setItem(RANDOM_COLOR, JSON.stringify(randomColor));
	}, 1000); 
};
const stopWorkRandomColor = () => {
	clearTimeout(intervalId);

	startRef.removeAttribute("disabled", "disabled");
	stopRef.setAttribute("disabled", "disabled");

	const savedColor = localStorage.getItem(RANDOM_COLOR);
	const color = JSON.parse(savedColor);

	document.body.style.backgroundColor  = color;
	
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startRef.addEventListener("click", startWorkRandomColor);
stopRef.addEventListener("click", stopWorkRandomColor);