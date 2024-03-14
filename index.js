document.addEventListener("DOMContentLoaded", function () {
	console.log("Hello World");
});

window.addEventListener('scroll', function () {
	console.log(window.scrollY);
	var header = document.querySelector('nav');
	header.style.opacity = window.scrollY > 0  ? 0 : 1;
});