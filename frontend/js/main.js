"use strict";

const themeLabel = document.querySelector('.theme__label');
const eleArr = Array.from(document.querySelectorAll('*'));
let storedTheme = localStorage.getItem('theme');

applyTheme();

themeLabel.addEventListener('click', toggleTheme);

function applyTheme() {

	if (storedTheme) {
		eleArr.forEach(ele => ele.classList.toggle('dark'));
	}
};

function toggleTheme() {
	(storedTheme) ? localStorage.removeItem('theme') : localStorage.setItem('theme', 'dark');

	eleArr.forEach(ele => ele.classList.toggle('dark'));
} 






