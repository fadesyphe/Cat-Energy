// Yandex map
ymaps = window.ymaps
ymaps.ready(function () {
	var myMap = new ymaps.Map('map', {
		center: [59.938631, 30.323037],
		zoom: 16,
		controls: [],
	}, {
		searchControlProvider: 'yandex#search',
		suppressMapOpenBlock: true
	}),

		// Создаём макет содержимого.
		MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
			'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
		),

		myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
			hintContent: 'Собственный значок метки',
			balloonContent: 'Это красивая метка'
		}, {
			// Опции.
			// Необходимо указать данный тип макета.
			iconLayout: 'default#image',
			// Своё изображение иконки метки.
			iconImageHref: 'images/maps-icon.png',
			// Размеры метки.
			iconImageSize: [113, 106],
			// Смещение левого верхнего угла иконки относительно
			// её "ножки" (точки привязки).
			iconImageOffset: [-5, -38]
		});

		// myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
		// 	hintContent: 'Собственный значок метки с контентом',
		// 	balloonContent: 'А эта — новогодняя',
		// 	iconContent: '12'
		// }, {
		// 	// Опции.
		// 	// Необходимо указать данный тип макета.
		// 	iconLayout: 'default#imageWithContent',
		// 	// Своё изображение иконки метки.
		// 	iconImageHref: 'images/ball.png',
		// 	// Размеры метки.
		// 	iconImageSize: [48, 48],
		// 	// Смещение левого верхнего угла иконки относительно
		// 	// её "ножки" (точки привязки).
		// 	iconImageOffset: [-24, -24],
		// 	// Смещение слоя с содержимым относительно слоя с картинкой.
		// 	iconContentOffset: [15, 15],
		// 	// Макет содержимого.
		// 	iconContentLayout: MyIconContentLayout
		// });
	myMap.behaviors.disable('scrollZoom');
	myMap.geoObjects
		.add(myPlacemark)
		// .add(myPlacemarkWithContent);
});

// CAT SLIDER
const progressInput = document.querySelector('#progress');
const catBefore = document.querySelector('.example-img--before');
const catAfter = document.querySelector('.example-img--after');
const beforeBtn = document.querySelector('#before');
const afterBtn = document.querySelector('#after');
progressInput.addEventListener('input', (e) => {
	catBefore.style.width = `${100 - e.target.value}%`;
	catAfter.style.width = `${e.target.value}%`;
})

beforeBtn.addEventListener('click', () => {
	catBefore.style.width = '100%';
	catAfter.style.width = '0'
	progressInput.value = 0
})

afterBtn.addEventListener('click', () => {
	catBefore.style.width = '0';
	catAfter.style.width = '100%'
	progressInput.value = 100
})