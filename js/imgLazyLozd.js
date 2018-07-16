/**
 * 
 * @authors LvHongbin (hblvsjtu@163.com)
 * @date    2018-07-17 02:44:04
 * @version v0.01
 */

var imgLazyLozd = document.querySelectorAll('img');

function lazyLoad(imgLazyLozd) {
    //document.documentElement.clientHeight是屏幕可视区域的高度，不包括滚动条跟工具条的高度。而window.innerHeight获得的是可视区域的高度，同时包括横向滚动条的高度。(IE8以及低版本浏览器不支持)。
    let seeHeight = document.documentElement.clientHeight || window.innerHeight;

    // 1、各浏览器下 scrollTop的差异 
    // IE6/7/8： 
    // 对于没有doctype声明的页面里可以使用  document.body.scrollTop 来获取 scrollTop高度 ； 
    // 对于有doctype声明的页面则可以使用 document.documentElement.scrollTop； 
    // Safari: 
    // safari 比较特别，有自己获取scrollTop的函数 ： window.pageYOffset ； 
    // Firefox: 
    // 火狐等等相对标准些的浏览器就省心多了，直接用 document.documentElement.scrollTop ； 
    // 2、获取scrollTop值 
    // 完美的获取scrollTop 赋值短语 ： 
    // var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    // 通过这句赋值就能在任何情况下获得scrollTop 值。 
    let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    imgLazyLozd.forEach((item, index) => {
        // offsetLeft、offsetTop
        // 这两个属性与offsetParent有关，查阅了别的文档，其英文解释：
        // 返回该对象元素边界的左上角顶点相对于offsetParent的左上角顶点(含margin)的水平偏移量。
        let src = item.getAttribute('src');
        let data_src = item.getAttribute('data-src');
        if (src == '' && data_src != "" &&
            (item.offsetTop < seeHeight + scrollTop && item.offsetTop + item.offsetHeight > scrollTop)) {
            item.src = item.getAttribute('data-src');
            console.log('index = ' + index);
            // console.log('item.offsetTop = ' + item.offsetTop);
            // console.log('seeHeight = ' + seeHeight);
            // console.log('scrollTop = ' + scrollTop);
            // console.log('item.offsetTop + item.offsetHeight = ' + item.offsetTop + item.offsetHeight);
        }
    });
}
lazyLoad(imgLazyLozd);

window.onscroll = throttle(500, 1000);

function throttle(delay, interval) {
    var canLazyLoad = true; // 添加节流模式
    var now;
    var old = new Date();
    var timeout;
    return function() {
        now = new Date();
        // 防抖动
        if (now - old < delay) {
            clearTimeout(timeout);
            old = now;
        } else {
            if (canLazyLoad) {
                canLazyLoad = false;
                timeout = setTimeout(() => {
                    lazyLoad(imgLazyLozd);
                    canLazyLoad = true;
                    old = now;
                }, interval);
                console.log("timeout");
            }
        }
    }
}