function pushTime(time) {
	d = new Date();
	p = new Date(d.getTime() - `${time}` * 86400000);
	monthA =
		'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'
		.split(',');

	if (p.getMonth() == 0) {
		document.write('С ' + 9 + ' ' + monthA[11] + ' по ' + 31 + ' ' + monthA[0]);
	} else {
		document.write('С ' + 9 + ' ' + monthA[`${p.getMonth() - 1}`] + ' по ' + 31 + ' ' + monthA[p.getMonth()]);
	}
}

// Дата
// function pushDate(d) {
// 	let now = new Date();
// 	now.setDate(now.getDate() + d);
// 	let mm = now.getMonth() + 1;
// 	let day = now.getDate();
// 	if (now.getDate() < 10) day = '0' + now.getDate();
// 	if (mm < 10) mm = '0' + mm;
// 	document.write(day + "." + mm + "." + now.getFullYear());
// }

// var d = new Date();
// var month = new Array(
// 	"январе", "феврале", "марте", "апреле", "мае", "июне", "июле", "августе", "сентябре", "октябре", "ноябре", "декабре", "январе");
// if (d.getDate() > 20) {
// 	document.write(month[`${d.getMonth()+1}`]);
// }
// if (d.getDate() < 20) {
// 	document.write(month[d.getMonth()]);
// }



// function pushTime(time) {
// 	d = new Date();
// 	p = new Date(d.getTime() - `${time}` * 86400000);
// 	monthA =
// 		'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'
// 		.split(',');
// 	var w = p.getDate();
// 	document.write(p.getDate() + ' ' + monthA[p.getMonth()] + ' ' + p.getFullYear());
// }