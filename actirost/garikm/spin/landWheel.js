function spin() {
	var resultWrapper = document.querySelector('.spin-result-wrapper');
	var wheel = document.querySelector('.wheel-img');
	if (wheel.classList.contains('rotated')) {
		resultWrapper.style.display = "block";
	} else {
		wheel.classList.add('super-rotation');
		setTimeout(function () {
			resultWrapper.style.display = "block";
		}, 5000);
		setTimeout(function () {
			$('.spin-wrapper').slideUp();
			$('.order_block, .section_form').slideDown();
			start_timer();
		}, 5000);
		wheel.classList.add('rotated');
	}
}
$(document).ready(function () {
	$('.close-popup, .pop-up-button').click(function (e) {
		$('.spin-result-wrapper').fadeOut();
	});
});


var time = 600;
var intr;

function start_timer() {
	intr = setInterval(tick, 1000);
}

function tick() {
	time = time - 1;
	var mins = Math.floor(time / 60);
	var secs = time - mins * 60;
	if (mins == 0 && secs == 0) {
		clearInterval(intr);
	}
	secs = secs >= 10 ? secs : "0" + secs;
	$("#min").html("0" + mins);
	$("#sec").html(secs);
}



// Animated scroll button
let eventObj = {
	appended: ""
};

function checkOffsetTopForButton() {
	if (window.pageYOffset > Number(`${document.getElementById('trigger').offsetTop}`)) {
		if (eventObj.appended == "") {
			eventObj.appended = false;
		}
		if (!eventObj.appended) {
			$(".btn-scrollUp").removeClass("invisible");
			setTimeout(function () {
				$(".btn-scrollUp").removeClass("opacityNone");
				eventObj.appended = true;
			}, 50);
		}
	} else if (eventObj.appended) {
		$(".btn-scrollUp").addClass("opacityNone");
		setTimeout(function () {
			$(".btn-scrollUp").addClass("invisible");
			eventObj.appended = false;
		}, 250);
	}
}

// small baraban animation
$(document).ready(function () {
	checkOffsetTopForButton();
	$(document).on("scroll DOMContentLoaded", window, function () {
		checkOffsetTopForButton();
	});
	$(document).on("mouseup touchend", ".btn-scrollUp", function () {
		$("html, body").animate({
				scrollTop: Number(`${document.getElementById('history').offsetTop + 40}`),
			},
			400
		);
	});

	$(document).on("mousedown touchstart", ".btn-scrollUp", function () {
		selectionScrollButton('.btn-scrollUp', 'btn-scrollUp--on');
	});
	$(document).on("mouseup mouseout touchend", ".btn-scrollUp", function () {
		noselectionScrollButton('.btn-scrollUp', 'btn-scrollUp--on');
	});
});

function selectionScrollButton(item, hoverClass) {
	$(item).addClass(hoverClass);
}

function noselectionScrollButton(item, hoverClass) {
	$(item).removeClass(hoverClass);
}

// Scroll
$(document).ready(function () {
	$("a[href^='#']").click(function () {
		var _href = $(this).attr("href");
		$("html, body").animate({
			scrollTop: $(_href).offset().top + "px"
		});
		return false;
	});
});





$(document).ready(function () {
	let form_order = document.getElementById("order_form");
	form_order.addEventListener("submit", function (e) {
		setButtonSubmitProperties();
		// e.preventDefault();
	});
});

function setButtonSubmitProperties() {
	let btnn = document.getElementById("btn");
	btnn.style.opacity = "0.7";
	btnn.textContent = "Отправка заявки";
	btnn.disabled = true;
}

// $.get("https://ipinfo.io/json?token=95502d94d9e90e", function (response) {

// 	const country = response.country;
// 	console.log(country);
// 	if (country == 'BY') {
// 		$("input[name*='phone']").mask('+375 (99) 999-99-99');
// 	} else if (country == 'EE') {
// 		$("input[name*='phone']").mask("+372 9999999?9");
// 	} else if (country == 'PL') {
// 		$("input[name*='phone']").mask("+48 999999999");
// 	} else if (country == 'LT') {
// 		$("input[name*='phone']").mask("+370 99999999");
// 	} else if (country == 'LV') {
// 		$("input[name*='phone']").mask("+371 99999999");
// 	} else if (country == 'FI') {
// 		$("input[name*='phone']").mask("+358 999999999?9");
// 	} else if (country == 'UA') {
// 		$("input[name*='phone']").mask("+380(99) 999-999?9");
// 	}
// }, "jsonp");


// Дата
function pushDate(d) {
	let now = new Date();
	now.setDate(now.getDate() + d);
	let mm = now.getMonth() + 1;
	let day = now.getDate();
	if (now.getDate() < 10) day = '0' + now.getDate();
	if (mm < 10) mm = '0' + mm;
	document.write(day + "." + mm + "." + now.getFullYear());
}