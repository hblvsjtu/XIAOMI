/**
 * 
 * @authors Lvhongbin (hblvsjtu@163.com)
 * @date    2018-07-15 21:41:09
 * @version V0.0.1
 */


$("#home_elec_select").bind("mouseover", (event) => {
	let target = event.target.id;
	if (target.match(/home_elec_select\d+/)) {
		let num = target.slice(16);
		for (let i = 0; i < 4; i++) {
			if (i != num) {
				$("#home_elec_select" + i).attr("style", "color: #424242; border-bottom: none;");
				$("#home_elec_content" + i).attr("style", "display: none");
			} else {
				$("#home_elec_select" + i).attr("style", "color: #ff6700;border-bottom: solid 1px #ff6700;");
				$("#home_elec_content" + i).attr("style", "display: block");
			}
			event.stopPropagation();
		}
	}
})