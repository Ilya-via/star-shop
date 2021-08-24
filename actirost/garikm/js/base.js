window.addEventListener('scroll', function (e) {
	if (window.pageYOffset > 2800) {
		function pushComment() {
			$('#first-comment').each(function () {
				$(this).html(
					`${`<div class="comment"><a href="#history"><img class="ava" alt="" title="" src="img/ava1.jpg"></a><div class="com_txt"><a href="#history">Артём Исаев</a> <p>Ого, Мартирос отжигает!</p><p class="last-com-p"><span> только что |</span><span><a href="#history">Комментировать</a></span><span><a href="#history">Мне нравится <img alt="" title="" src="img/heart2.png">3</a></span></p></div></div>`}`
				);
			});
		}
		setTimeout(pushComment, 200);
	}
});
// document.getElementById('first-comment').offsetTop