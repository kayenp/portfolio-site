"use strict";

const catImgElem = document.querySelector('.cat');
const inspireImgElem = document.querySelector('.inspire');
const funnyImgElem = document.querySelector('.funny');
let screenWidth;

// addEventListener('resize', (() => {
// 	let timeoutId;

// 	return () => {
// 		clearTimeout(timeoutId);
// 		timeoutId = setTimeout(() => {
// 			console.log(screen.width);
// 			screenWidth = screen.width;
// 			changeBlogImgs();
// 		}, 250)
// 	}
// })());

// function changeBlogImgs() {
// 	let imgWidth;

// 	if (screenWidth <= 384) {
// 		imgWidth = '352'
// 	} else if (screenWidth > 384 && screenWidth < 768) {
// 		imgWidth = '576';
// 		// catImgElem.setAttribute('src', `./assets/images/${imgWidth}/oksana-maselko-midHvZAjJHg-unsplash (Landscape Phone).jpg`);
// 		// inspireImgElem.setAttribute('src', `./assets/images/${imgWidth}/dayne-topkin-y5_mFlLMwJk-unsplash (Landscape Phone).jpg`);
// 		// funnyImgElem.setAttribute('src', `./assets/images/${imgWidth}/gennifer-miller-sBlhqEozk6Q-unsplash (Landscape Phone).jpg`);
// 	} else if (screenWidth >= 768) {
// 		imgWidth = '768';
// 	} else if (screenWidth >= 1200) {
// 		imgWidth = '960';
// 	};

// 	catImgElem.setAttribute('width', imgWidth + 'px');
// 	inspireImgElem.setAttribute('width', imgWidth + 'px');
// 	funnyImgElem.setAttribute('width', imgWidth + 'px');
// }

