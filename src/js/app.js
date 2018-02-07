
(() => {
	console.log("Hello World from app.js, transpiled and concatenated!");
})();


var handPrint = document.querySelector('.hand-print');

handPrint.addEventListener('click', function(){
	handPrint.classList.toggle('active');
})