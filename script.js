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
}]

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
}]


$("#site_middle").bind("mouseover", function(event) {
	let id = event.target.id;
	let num = id.slice(11);
	console.log(id, num);

	function load(obj) {
		for (let i = 0; i < 6; i++) {
			if (obj[i].flag === true) $("#nav_menu_flag" + i).attr("style", "visibility: visible");
			else $("#nav_menu_flag" + i).attr("style", "visibility: hidden");
			$("#nav_menu_img" + i).attr("style", `background: url(${obj[i].img}) no-repeat center; background-size: contain;`);
			$("#nav_menu_name" + i).html(obj[i].name);
			$("#nav_menu_price" + i).html(obj[i].price);
		}
	}
	if (id.match(/^site_middle\d+/)) {
		console.log("match");
		$("#nav_menu").attr("style", "clip: rect(0, 2000px, 241px, 0)");
		if (num % 2 == 0) load(obj0);
		else load(obj1);
	}
});


$("#nav_menu").bind("mouseleave", function() {
	$("#nav_menu").attr("style", "clip: rect(0, 2000px, 0, 0)");
});