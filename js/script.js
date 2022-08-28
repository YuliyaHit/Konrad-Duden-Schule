

$(document).ready(function() {
	$('#autoWidth').lightSlider({
		autoWidth:true,
		loop:true,
		onSliderLoad: function() {
			$('#autoWidth').removeClass('cS-hidden');
		}
	});
});

document.addEventListener("DOMContentLoaded", () => {
	let animItems = document.querySelectorAll('.anim-items');
	console.log(animItems);
	if (animItems.length > 0) {
		window.addEventListener("scroll", animOnScroll);

		function animOnScroll() {
			for (let i = 0; i < animItems.length; i++) {
				const animItem = animItems[i];
				const animItemHeight = animItem.offsetHeight;
				const animItemOffset = offset(animItem).top;
				const animStart = 4;

				let animItemPoint = window.innerHeight - animItemHeight / animStart;

				if (animItemHeight > window.innerHeight ) {
					animItemPoint =  window.innerHeight - window.innerHeight / animStart;
				}

				if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
					animItem.classList.add('active');
				} else {
					animItem.classList.remove('active');
				}


			}
		}

		function offset(el) {
			const rect = el.getBoundingClientRect(),
				scrollLeft =window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop =window.pageYOffset || document.documentElement.scrollTop;
			return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
		}
	}

	animOnScroll();

	let btnMore = document.querySelectorAll('.btn__more');


	btnMore.forEach(item => item.addEventListener('click', (e) => {
		let target = e.target;
		let parentTarget = target.closest('.slider__footer');
		let boxPrice = parentTarget.nextElementSibling;
		boxPrice.style.display = 'block';
	}));

	let closeBtn = document.querySelectorAll('.close__btn');


	//для закрытия слайдера


	closeBtn.forEach(item => item.addEventListener('click', (e) => {
		let target = e.target;
		let boxPrice = target.closest('.box__price');

		boxPrice.style.display = 'none';
	}));

	//для выбора языка
	let languages = document.querySelectorAll('.language__item');
	languages.forEach(item => item.addEventListener('click', (e)=> {
		let target = e.target;
		languages.forEach(item=>item.classList.remove('language_active'));
		target.classList.add('language_active');
	}));

	//для развертывания описания
	let arrow = document.querySelectorAll('.fa-chevron-down');
		arrow.forEach((item) => item.addEventListener('click', (e) => {
			let target = e.target;
			target.nextElementSibling.classList.toggle('description_hide');
			target.style.display = "none";

			let arrowUp = document.querySelectorAll('.fa-chevron-up');
			arrowUp.forEach(item=>item.onclick = (e) => {
				let target = e.target;
				let targetParent = target.parentElement;
				targetParent.previousElementSibling.style.display = "block";
				targetParent.classList.toggle('description_hide');
			});
		}));


});








/*
let btns = document.querySelectorAll('.slider__btn'),
    news = document.querySelector('.news'),
    sliderItem = document.querySelectorAll('.news__item');

btns.forEach(item => item.addEventListener('mousedown', function () {
    item.style.background = '#C8D9FB';
}));

btns.forEach(item => item.addEventListener('click', function (event) {
    let target = event.target,
        newsItem = document.querySelector('.active');

    if (target==btns[1]) {
        newsItem.classList.toggle('active');
        (newsItem.nextElementSibling) ? newsItem.nextElementSibling.classList.toggle('active'): sliderItem[0].classList.toggle('active');
        moveProgressbar(getIndex());
        moveSlider();

    } else {
        newsItem.classList.toggle('active');
        (newsItem.previousElementSibling) ? newsItem.previousElementSibling.classList.toggle('active'): sliderItem[sliderItem.length-1].classList.toggle('active');
        moveProgressbar(getIndex());
        moveSlider();
    }
}));

btns.forEach(item => item.addEventListener('mouseup', function () {
    item.style.background = 'transparent';
}));

sliderItem.forEach(item => item.addEventListener('click', function (event) {
    sliderItem.forEach(item => item.classList.remove('active'));
    this.classList.toggle('active');
    moveProgressbar(getIndex());
}))

let isDown = false,
    startX,
    scrollLeft;

const end = () => {
    isDown = false;
}

const start = (e) => {
    isDown = true;
    startX = e.pageX || e.touches[0].pageX;
    scrollLeft = news.scrollLeft;
}

const move = (e) => {
    if(!isDown) return;

    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX;
    const dist = (x - startX);
    news.scrollLeft = scrollLeft - dist;
}

(() => {
    news.addEventListener('mousedown', start);
    news.addEventListener('touchstart', start);

    news.addEventListener('mousemove', move);
    news.addEventListener('touchmove', move);

    news.addEventListener('mouseleave', end);
    news.addEventListener('mouseup', end);
    news.addEventListener('touchend', end);
})();

let progressbar = document.querySelector('.slider__progressbar'),
    progressLine = progressbar.querySelector('.slider-line');

function moveProgressbar(index) {
    let dist  = (progressbar.clientWidth - progressLine.clientWidth)/(sliderItem.length-1);
    progressLine.style.left =  dist*index + 'px';
}

const getIndex = () => {
    for (let i = 0; i < sliderItem.length; i++) {
        if (sliderItem[i].classList.contains('active')) {
            return  i;
        }
    }
}

const moveSlider = () => {
    let activeItem = document.querySelector('.active');
    news.scrollLeft +=  (activeItem.getBoundingClientRect().right-news.getBoundingClientRect().right)+1;
}*/
