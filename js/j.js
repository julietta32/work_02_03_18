let index = 0;

$(document).ready(function () {
	$('.control-first-tab').css({
		'color': '#fb5367'
	})
	//top-arrows
	$('.control-prev-top').on('click', function () {
		$('.slider').slick("slickPrev")

	})
	$('.control-next-top').on('click', function () {
		$('.slider').slick("slickNext")
	})
	//bottom-arrows
	$('.control-prev-bottom').on('click', function () {
		scrollIndex(-1);
		changeColor(index);
		$('.slider-bottom').slick("slickPrev")
	})
	$('.control-next-bottom').on('click', function () {
		scrollIndex(1);
		changeColor(index);
		$('.slider-bottom').slick("slickNext")
	})
	//tab-control
	$('.control-first-tab').on('click', function () {
		index = 0;
		changeColor(index);
		$('.slider-bottom').slick("changeSlide", {
			data: {
				message: "index",
				index: 0
			}
		})
	})
	$('.control-second-tab').on('click', function () {
		index = 1;
		changeColor(index);
		$('.slider-bottom').slick("changeSlide", {
			data: {
				message: "index",
				index: 1
			}
		})
	})
	$('.control-third-tab').on('click', function () {
		index = 2;
		changeColor(index);
		$('.slider-bottom').slick("changeSlide", {
			data: {
				message: "index",
				index: 2
			}
		})
	})


	$('.slider').slick({
		autoplay: true,
		autoplaySpeed: 2000,
	});
	$('.slider-bottom').slick({
		draggable:false
	});
});

function scrollIndex(number) {
	if (index == 0 && number < 0) {
		index = 2;
		return;
	}
	if (index == 2 && number > 0) {
		index = 0;
		return;
	}
	index = index + number;
}

function changeColor(index) {
	switch (index) {
		case 0:
			$('.control-second-tab').css({
				'color': 'black'
			})
			$('.control-first-tab').css({
				'color': '#fb5367'
			})
			$('.control-third-tab').css({
				'color': 'black'
			})
			break;
		case 1:
			$('.control-second-tab').css({
				'color': '#fb5367'
			})
			$('.control-first-tab').css({
				'color': 'black'
			})
			$('.control-third-tab').css({
				'color': 'black'
			})
			break;
		case 2:
			$('.control-second-tab').css({
				'color': 'black'
			})
			$('.control-first-tab').css({
				'color': 'black'
			})
			$('.control-third-tab').css({
				'color': '#fb5367'
			})
			break;
	}
}
