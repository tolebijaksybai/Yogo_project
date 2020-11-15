window.addEventListener('DOMContentLoaded', function () {

	"use strict";

	const hours = document.querySelector('.hours'),
		minutes = document.querySelector('.minutes'),
		seconds = document.querySelector('.seconds');

	let content = document.querySelectorAll('.info-tabcontent'),
		tab = document.querySelectorAll('.info-header-tab'),
		infoWrapper = document.querySelector('.info-header');

	function hideContent(a) {
		for (let i = a; i < content.length; i++) {
			content[i].classList.remove('show');
			content[i].classList.add('hide');
		}
	}
	hideContent(1);

	function showContent(b) {
		if (content[b].classList.contains('hide')) {
			content[b].classList.remove('hide');
			content[b].classList.add('show');
		}
	}

	infoWrapper.addEventListener('click', (event) => {
		let target = event.target;
		for (let i = 0; i < tab.length; i++) {
			if (target == tab[i]) {
				hideContent(0);
				showContent(i);
			}
		}
	});

	function updateTime() {
		let deadline = new Date(2021, 12, 1, 0, 0, 0, 0) - new Date();

		let newHours = Math.floor((deadline / (1000 * 60)) % 24);
		let newMinutes = Math.floor((deadline / 1000 / 60) % 60);
		let newSeconds = Math.floor((deadline / 1000) % 60);

		hours.innerHTML = newHours < 10 ? "0" + newHours : newHours;
		minutes.innerHTML = newMinutes < 10 ? "0" + newMinutes : newMinutes;
		seconds.innerHTML = newSeconds < 10 ? "0" + newSeconds : newSeconds;
	}
	updateTime();
	setInterval(updateTime, 1000);


	const more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		popupClose = document.querySelector('.popup-close');

	more.addEventListener('click', function () {
		this.style.display = "none";
		overlay.style.display = "block";
		document.body.style.overflow = "hidden";
	});

	popupClose.addEventListener('click', () => {
		more.style.display = "block";
		overlay.style.display = "none";
		document.body.style.overflow = "";
	});

	const header = document.querySelector('header');
/* 
	class Options {
		constructor(height, width, bg, fontSize, textAlign) {
			this.height = height;
			this.width = width;
			this.bg = bg;
			this.fontSize = fontSize;
			this.textAlign = textAlign;
		}
		method() {
			let div = '<div class="new">Tolebi</div>';
			header.insertAdjacentHTML('afterbegin', div);
			const newClass = document.querySelector('.new');
			let menuItem = `height: ${this.height}px;  width: ${this.width}px; background-color: ${this.bg}; font-size: ${this.fontSize}px; text-align: ${this.textAlign};`;
			newClass.style.cssText = menuItem;
		}
	}

	let option = new Options(50, 500, 'red', 36, 'center');
	option.method();

 */

});