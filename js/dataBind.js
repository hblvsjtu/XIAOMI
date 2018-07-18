/**
 * 
 * @authors LvHongbin (hblvsjtu@163.com)
 * @date    2018-07-18 23:28:32
 * @version v0.01
 */

var search = new DBind("search");


function DataBinder(object_id) {
	// 创建一个简单的pubSub对象
	let pubSub = {

			// 执行多个回调函数
			callbacks: {},

			on: function(msg, callback) {
				this.callbacks[msg] = this.callbacks[msg] || [];
				this.callbacks[msg].push(callback);
			},
			publish: function(msg) {
				this.callbacks[msg] = this.callbacks[msg] || [];
				for (var i = 0, len = this.callbacks[msg].length; i < len; i++) {
					this.callbacks[msg][i].apply(this, arguments);
				}
			}
		},
		data_attr = "data-bind-" + object_id,
		message = object_id + ":input",
		timeIn;

	let changeHandler = function(evt) {
		var target = evt.target || evt.srcElement, // IE8兼容
			prop_name = target.getAttribute(data_attr);

		if (prop_name && prop_name !== "") {
			clearTimeout(timeIn);
			timeIn = setTimeout(function() {
				pubSub.publish(message, prop_name, target.value);
			}, 50);

		}
	};

	// 监听事件变化，并代理到pubSub
	if (document.addEventListener) {
		document.addEventListener("input", changeHandler, false);
	} else {
		// IE8使用attachEvent而不是addEventListenter
		document.attachEvent("oninput", changeHandler);
	}

	// pubSub将变化传播到所有绑定元素
	pubSub.on(message, function(evt, prop_name, new_val) {
		var elements = document.querySelectorAll("[" + data_attr + "=" + prop_name + "]"),
			tag_name;

		for (var i = 0, len = elements.length; i < len; i++) {
			tag_name = elements[i].tagName.toLowerCase();

			if (tag_name === "input" || tag_name === "textarea" || tag_name === "select") {
				elements[i].value = new_val;
			} else {
				elements[i].innerHTML = new_val;
			}
			let length = elements[i].innerHTML.length;
			if (length == 0) {
				elements[i].nextSibling.innerHTML = '';
			} else {
				elements[i].nextSibling.innerHTML = `约有${length}件`;
			}
		}
	});

	return pubSub;
}


function DBind(uid) {
	let binder = new DataBinder(uid),

		user = {
			// 属性设置器使用数据绑定器pubSub来发布
			attributes: {},
			set: function(attr_name, val) {
				this.attributes[attr_name] = val;
				// Use the `publish` method
				binder.publish(uid + ":input", attr_name, val, this);
			},
			get: function(attr_name) {
				return this.attributes[attr_name];
			},

			_binder: binder
		};
	return user;
}