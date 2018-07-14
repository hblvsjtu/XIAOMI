"use strict";

/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-07-13 21:08:38
 * @version $Id$
 */

// home_hero_slide
var slideImg = ["https://i1.mifile.cn/a4/xmad_15311087505587_ZrTIc.jpg", "https://i1.mifile.cn/a4/xmad_15312180684983_AIChl.jpg", "https://i1.mifile.cn/a4/xmad_15283359125436_gBSNq.jpg", "https://i1.mifile.cn/a4/xmad_15312182978122_eSDBf.jpg", "https://i1.mifile.cn/a4/xmad_1531019857613_pvXfL.jpg", "https://i1.mifile.cn/a4/xmad_15310599701167_AYcbi.jpg"];

var obj = [{
	name: '小米手机8',
	img: "https://i1.mifile.cn/f/i/g/2015/cn-index/6A320.png"
}, {
	name: '小米电视4 75英寸"',
	img: "https://i1.mifile.cn/f/i/2014/cn/icon/icon-slides.png"
}, {
	name: '笔记本Pro 15.6"',
	img: "https://i1.mifile.cn/f/i/g/2015/cn-index/WechatIMG603.png"
}, {
	name: '米家电饭煲',
	img: "https://i1.mifile.cn/f/i/g/2015/cn-index/dfb.jpg"
}, {
	name: '智能灯泡',
	img: "https://i1.mifile.cn/a1/pms_1496647119.81414190!220x220.jpg"
}];

var i = 0;
setInterval(function () {
	i = i == 6 ? 0 : i;
	for (var j = 0; j < 6; j++) {
		if (j == i) {
			$("#spot" + j).attr("style", "background: white; border-color: rgba(0,0,0,0.6);");
		} else {
			$("#spot" + j).attr("style", "background: rgba(0,0,0,0.6); border-color: rgba(255,255,255,0.3);");
		}
	}
	$("#slideImg").attr("src", slideImg[i]);

	i++;
}, 10000);

$(".spot").bind("click", function (event) {
	var num = event.target.id.slice(4);
	if (num) {
		for (var _i = 0; _i < 6; _i++) {
			if (_i == num) {
				$("#slideImg").attr("src", slideImg[_i]);
				for (var j = 0; j < 6; j++) {
					if (j == _i) {
						$("#spot" + j).attr("style", "background: white; border-color: rgba(0,0,0,0.6);");
					} else {
						$("#spot" + j).attr("style", "background: rgba(0,0,0,0.6); border-color: rgba(255,255,255,0.3);");
					}
				}
				event.stopPropagation();
			}
		}
	}
});

$(".arrayLeft").bind("click", function () {
	i = i - 1 == -1 ? 5 : i - 1;
	$("#slideImg").attr("src", slideImg[i]);
	for (var j = 0; j < 6; j++) {
		if (j == i) {
			$("#spot" + j).attr("style", "background: white; border-color: rgba(0,0,0,0.6);");
		} else {
			$("#spot" + j).attr("style", "background: rgba(0,0,0,0.6); border-color: rgba(255,255,255,0.3);");
		}
	}
});

$(".arrayRight").bind("click", function () {
	i = i + 1 == 6 ? 0 : i + 1;
	$("#slideImg").attr("src", slideImg[i]);
	for (var j = 0; j < 6; j++) {
		if (j == i) {
			$("#spot" + j).attr("style", "background: white; border-color: rgba(0,0,0,0.6);");
		} else {
			$("#spot" + j).attr("style", "background: rgba(0,0,0,0.6); border-color: rgba(255,255,255,0.3);");
		}
	}
});

$("#home_hero_slide_nav").bind("mouseover", function (event) {
	$("#home_hero_slide_aside").attr("style", "visibility: visible;");
	var id = event.target.id;
	var num = id.slice(22);
	if (id.match(/home_hero_slide_nav_li\d+/)) {
		for (var _i2 = 0; _i2 < 24; _i2++) {
			$("#home_hero_slide_aside_i" + _i2).attr("style", "background: url(" + obj[num % 5].img + ") no-repeat center; background-size: contain;");
			$("#home_hero_slide_aside_span" + _i2).html(obj[num % 5].name);
		}
		event.stopPropagation;
	}
});
$("#home_hero_slide_nav").bind("mouseleave", function () {
	$("#home_hero_slide_aside").attr("style", "visibility: hidden;");
});

// 这里不能使用mouseout，因为这个表示只要一离开他某一个子元素就会被触发，即是你是从一个子元素到另一个子元素；
$("#home_hero_slide_aside").bind("mouseleave", function () {
	$("#home_hero_slide_aside").attr("style", "visibility: hidden;");
});

$("#home_hero_slide_aside").bind("mouseover", function () {
	$("#home_hero_slide_aside").attr("style", "visibility: visible;");
});
"use strict";

/**
 * 
 * @authors Lvhongbin (hblvsjtu@163.com)
 * @date    2018-07-12 09:29:54
 * @version V0.0.1
 */

// nav_menu

var obj0 = [{
	flag: true,
	img: 'https://i1.mifile.cn/a1/pms_1527684990.93616987!220x220.jpg',
	name: "小米8",
	price: "500元"
}, {
	flag: true,
	img: 'https://i1.mifile.cn/a1/pms_1522034061.12391230!220x220.jpg',
	name: "小米mix",
	price: "1000元"
}, {
	flag: false,
	img: 'https://i1.mifile.cn/a1/pms_1527144859.25489991!220x220.jpg',
	name: "小米mix X2",
	price: "1500元"
}, {
	flag: true,
	img: 'https://i1.mifile.cn/a1/pms_1495692033.10494295!220x220.jpg',
	name: "红米plus",
	price: "2000元"
}, {
	flag: false,
	img: 'https://i1.mifile.cn/a1/pms_1509723483.31416776!220x220.jpg',
	name: "红米8",
	price: "2500元"
}, {
	flag: true,
	img: 'https://i1.mifile.cn/a1/pms_1525853341.8312102!220x220.jpg',
	name: "小米7s",
	price: "3000元"
}];

var obj1 = [{
	flag: false,
	img: 'https://i1.mifile.cn/a1/pms_1509723483.31416776!220x220.jpg',
	name: "小米7s",
	price: "3000元"
}, {
	flag: true,
	img: 'https://i1.mifile.cn/a1/pms_1495692033.10494295!220x220.jpg',
	name: "红米8",
	price: "2500元"
}, {
	flag: true,
	img: 'https://i1.mifile.cn/a1/pms_1527144859.25489991!220x220.jpg',
	name: "红米plus",
	price: "2000元"
}, {
	flag: false,
	img: 'https://i1.mifile.cn/a1/pms_1525853341.8312102!220x220.jpg',
	name: "小米mix",
	price: "1500元"
}, {
	flag: true,
	img: 'https://i1.mifile.cn/a1/pms_1522034061.12391230!220x220.jpg',
	name: "小米mix X2",
	price: "1000元"
}, {
	flag: true,
	img: 'https://i1.mifile.cn/a1/pms_1527684990.93616987!220x220.jpg',
	name: "小米8",
	price: "500元"
}];

$("#site_middle").bind("mouseover", function (event) {
	var id = event.target.id;
	var num = id.slice(11);
	console.log(id, num);

	function load(obj) {
		for (var i = 0; i < 6; i++) {
			if (obj[i].flag === true) $("#nav_menu_flag" + i).attr("style", "visibility: visible");else $("#nav_menu_flag" + i).attr("style", "visibility: hidden");
			$("#nav_menu_img" + i).attr("style", "background: url(" + obj[i].img + ") no-repeat center; background-size: contain;");
			$("#nav_menu_name" + i).html(obj[i].name);
			$("#nav_menu_price" + i).html(obj[i].price);
		}
	}
	if (id.match(/^site_middle\d+/)) {
		console.log("match");
		$("#nav_menu").attr("style", "clip: rect(0, 2000px, 241px, 0)");
		if (num % 2 == 0) load(obj0);else load(obj1);
	}
});

$("#nav_menu").bind("mouseleave", function () {
	$("#nav_menu").attr("style", "clip: rect(0, 2000px, 0, 0)");
});
//# sourceMappingURL=all.js.map
