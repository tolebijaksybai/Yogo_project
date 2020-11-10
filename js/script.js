window.addEventListener('DOMContentLoaded', function () {

	"use strict";

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
});