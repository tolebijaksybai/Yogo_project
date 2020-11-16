(function () { function r(e, n, t) { function o(i, f) { if (!n[i]) { if (!e[i]) { var c = "function" == typeof require && require; if (!f && c) return c(i, !0); if (u) return u(i, !0); var a = new Error("Cannot find module '" + i + "'"); throw a.code = "MODULE_NOT_FOUND", a } var p = n[i] = { exports: {} }; e[i][0].call(p.exports, function (r) { var n = e[i][1][r]; return o(n || r) }, p, p.exports, r, e, n, t) } return n[i].exports } for (var u = "function" == typeof require && require, i = 0; i < t.length; i++)o(t[i]); return o } return r })()({
	1: [function (require, module, exports) {
		function calc() {
			let persons = document.querySelectorAll('.counter-block-input')[0],
				restDays = document.querySelectorAll('.counter-block-input')[1],
				place = document.getElementById('select'),
				totalValue = document.getElementById('total'),
				personsSum = 0,
				daysSum = 0,
				total = 0;

			totalValue.innerHTML = 0;

			persons.addEventListener('change', function () {
				personsSum = +this.value;
				total = (daysSum + personsSum) * 4000;

				if (restDays.value == '') {
					totalValue.innerHTML = 0;
				} else {
					totalValue.innerHTML = total;
					if (persons.value == '' || restDays.value == '') {
						totalValue.innerHTML = 0;
					}
				}
			});
			restDays.addEventListener('change', function () {
				daysSum = +this.value;
				total = (daysSum + personsSum) * 4000;

				if (persons.value == '') {
					totalValue.innerHTML = 0;
				} else {
					totalValue.innerHTML = total;
					if (persons.value == '' || restDays.value == '') {
						totalValue.innerHTML = 0;
					}
				}
			});

			place.addEventListener('change', function () {
				if (restDays.value == '' || persons.value == '') {
					totalValue.innerHTML = 0;
				} else {
					let a = total;
					totalValue.innerHTML = a * this.options[this.selectedIndex].value
				}
			});
		}

		module.exports = calc;
	}, {}], 2: [function (require, module, exports) {
		function form() {

			let message = {
				loading: 'Загрузка...',
				success: 'Спасибо! Скоро мы с вами свяжемся!',
				failure: 'Что-то пошло не так...'
			};

			let form = document.querySelector('.main-form'),
				input = form.getElementsByTagName('input'),
				statusMessage = document.createElement('div');

			statusMessage.classList.add('status');

			form.addEventListener('submit', function (event) {
				event.preventDefault();
				form.appendChild(statusMessage);

				let request = new XMLHttpRequest();
				request.open('POST', 'server.php');
				request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

				let formData = new FormData(form);

				let obj = {};
				formData.forEach(function (value, key) {
					obj[key] = value;
				});
				let json = JSON.stringify(obj);

				request.send(json);

				request.addEventListener('readystatechange', function () {
					if (request.readyState < 4) {
						statusMessage.innerHTML = message.loading;
					} else if (request.readyState === 4 && request.status == 200) {
						statusMessage.innerHTML = message.success;
					} else {
						statusMessage.innerHTML = message.failure;
					}
				});

				for (let i = 0; i < input.length; i++) {
					input[i].value = '';
				}
			});
		}

		module.exports = form;
	}, {}], 3: [function (require, module, exports) {
		function modal() {

			let more = document.querySelector('.more'),
				overlay = document.querySelector('.overlay'),
				close = document.querySelector('.popup-close');

			more.addEventListener('click', function () {
				overlay.style.display = 'block';
				this.classList.add('more-splash');
				document.body.style.overflow = 'hidden';
			});

			close.addEventListener('click', function () {
				overlay.style.display = 'none';
				more.classList.remove('more-splash');
				document.body.style.overflow = '';
			});

		}

		module.exports = modal;
	}, {}], 4: [function (require, module, exports) {
		function slides() {
			let sliderIndex = 1;

			const slides = document.querySelectorAll('.slider-item'),
				prev = document.querySelector('.prev'),
				next = document.querySelector('.next'),
				dotsWrap = document.querySelector('.slider-dots'),
				dots = document.querySelectorAll('.dot');


			showSlides(sliderIndex);

			function showSlides(n) {

				if (n > slides.length) {
					sliderIndex = 1
				}
				if (n < 1) {
					sliderIndex = slides.length;
				}

				slides.forEach((item) => item.style.display = 'none');
				dots.forEach((item) => item.classList.remove('dot-active'));

				slides[sliderIndex - 1].style.display = 'block';
				dots[sliderIndex - 1].classList.add('dot-active');
			}

			function plusSlides(n) {
				showSlides(sliderIndex += n);
			}
			function currentSlides(n) {
				showSlides(sliderIndex = n);
			}

			prev.addEventListener('click', function () {
				plusSlides(-1);
			});
			next.addEventListener('click', function () {
				plusSlides(1);
			});

			dotsWrap.addEventListener('click', function (event) {
				for (let i = 0; i < dots.length + 1; i++) {
					if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
						currentSlides(i);
					}
				}
			});

		}
		module.exports = slides;
	}, {}], 5: [function (require, module, exports) {
		function tabs() {
			let tab = document.querySelectorAll('.info-header-tab'),
				info = document.querySelector('.info-header'),
				tabContent = document.querySelectorAll('.info-tabcontent');

			function hideTabContent(a) {
				for (let i = a; i < tabContent.length; i++) {
					tabContent[i].classList.remove('show');
					tabContent[i].classList.add('hide');
				}
			}

			hideTabContent(1);

			function showTabContent(b) {
				if (tabContent[b].classList.contains('hide')) {
					tabContent[b].classList.remove('hide');
					tabContent[b].classList.add('show');
				}
			}

			info.addEventListener('click', function (event) {
				let target = event.target;
				if (target && target.classList.contains('info-header-tab')) {
					for (let i = 0; i < tab.length; i++) {
						if (target == tab[i]) {
							hideTabContent(0);
							showTabContent(i);
							break;
						}
					}
				}

			});
		}

		module.exports = tabs;
	}, {}], 6: [function (require, module, exports) {
		function timer() {
			let deadline = '2020-11-21';

			function getTimeRemaining(endtime) {
				let t = Date.parse(endtime) - Date.parse(new Date()),
					seconds = Math.floor((t / 1000) % 60),
					minutes = Math.floor((t / 1000 / 60) % 60),
					hours = Math.floor((t / (1000 * 60 * 60)));

				return {
					'total': t,
					'hours': hours,
					'minutes': minutes,
					'seconds': seconds
				};
			}

			function setClock(id, endtime) {
				let timer = document.getElementById(id),
					hours = timer.querySelector('.hours'),
					minutes = timer.querySelector('.minutes'),
					seconds = timer.querySelector('.seconds'),
					timeInterval = setInterval(updateClock, 1000);

				function updateClock() {
					let t = getTimeRemaining(endtime);

					function addZero(num) {
						if (num <= 9) {
							return '0' + num;
						} else return num;
					};

					hours.textContent = addZero(t.hours);
					minutes.textContent = addZero(t.minutes);
					seconds.textContent = addZero(t.seconds);

					if (t.total <= 0) {
						clearInterval(timeInterval);
						hours.textContent = '00';
						minutes.textContent = '00';
						seconds.textContent = '00';
					}
				}

			}
			setClock('timer', deadline);
		}

		module.exports = timer;
	}, {}], 7: [function (require, module, exports) {
		window.addEventListener('DOMContentLoaded', function () {

			'use strict';
			let tabs = require('./parts/tabs.js'),
				timer = require('./parts/timer.js'),
				modal = require('./parts/modal.js'),
				form = require('./parts/form.js'),
				slides = require('./parts/slides.js'),
				calc = require('./parts/calc.js');

			tabs();
			timer();
			modal();
			form();
			slides();
			calc();

		});
	}, { "./parts/calc.js": 1, "./parts/form.js": 2, "./parts/modal.js": 3, "./parts/slides.js": 4, "./parts/tabs.js": 5, "./parts/timer.js": 6 }]
}, {}, [7]);
