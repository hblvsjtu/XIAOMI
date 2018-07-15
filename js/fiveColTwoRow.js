/**
 * 
 * @authors Lvhongbin (hblvsjtu@163.com)
 * @date    2018-07-15 21:41:09
 * @version V0.0.1
 */

function fiveColTwoRow(part, amount, index) {
	$(`#${part}_select`).bind("mouseover", (event) => {
		let target = event.target.id;
		let reg = new RegExp(`${part}_select` + "\\d+", "g");
		if (target.match(reg)) {
			let num = target.slice(index);
			for (let i = 0; i < amount; i++) {
				if (i != num) {
					$(`#${part}_select` + i).attr("style", "color: #424242; border-bottom: none;");
					$(`#${part}_content` + i).attr("style", "display: none");
				} else {
					$(`#${part}_select` + i).attr("style", "color: #ff6700;border-bottom: solid 1px #ff6700;");
					$(`#${part}_content` + i).attr("style", "display: block");
				}
				event.stopPropagation();
			}
		}
	})
}

// home_elec_part
fiveColTwoRow("home_elec", 4, 16);

// AI_part
fiveColTwoRow("AI", 5, 9);

// match_part
fiveColTwoRow("match", 4, 12);

// accessories_part
fiveColTwoRow("accessories", 4, 18);

// around_part
fiveColTwoRow("around", 5, 13);