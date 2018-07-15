/**
 * 
 * @authors Lvhongbin (hblvsjtu@163.com)
 * @date    2018-07-15 02:13:52
 * @version V0.0.1
 */

$("#flash_purchase_left").bind('click', () => {
	$("#flash_purchase_box_container").attr("style", "transform: translateX(-492px)");
	$("#flash_purchase_left").attr("style", "opacity: 0.4");
	$("#flash_purchase_right").attr("style", "opacity: 1");
});

$("#flash_purchase_right").bind('click', () => {
	$("#flash_purchase_box_container").attr("style", "transform: translateX(0)");
	$("#flash_purchase_left").attr("style", "opacity: 1");
	$("#flash_purchase_right").attr("style", "opacity: 0.4");
});

var targetTime = {
	year: 2018,
	month: 7,
	day: 15,
	hour: 11,
	minute: 0,
	second: 0
}

function timecount() {
	console.log("hello");
	let leftTime = (new Date(targetTime.year, targetTime.month - 1, targetTime.day, targetTime.hour, targetTime.minute, targetTime.second)) - (new Date()); //计算剩余的毫秒数
	leftTime /= 1000;
	console.log(leftTime);
	let hour = 0,
		min = 0,
		sec = 0;
	if (leftTime <= 0 || leftTime >= 86400) {
		$("#flash_purchase_hour").html("00");
		$("#flash_purchase_min").html("00");
		$("#flash_purchase_sec").html("00");
		let flash_purchase_targetTime = $("#flash_purchase_targetTime");
		flash_purchase_targetTime.attr("style", "color: grey");
		return;
	} else {
		hour = parseInt(leftTime / 3600);
		min = parseInt((leftTime - 3600 * hour) / 60);
		sec = parseInt((leftTime - 3600 * hour - 60 * min));
		hour = hour < 10 ? "0" + hour : hour;
		min = min < 10 ? "0" + min : min;
		sec = sec < 10 ? "0" + sec : sec;
		$("#flash_purchase_hour").html(hour);
		$("#flash_purchase_min").html(min);
		$("#flash_purchase_sec").html(sec);
	}
}
$(document).ready(() => {
	setInterval(timecount, 1000);
});