/**
* @description: 获取当前元素前面的所有节点
* @param {type} elm 元素
* @return: 
*/

function getpreviousElements(elm) {
    let arr = [];

    while (elm) {
        elm = elm.previousElementSibling;
        if (elm != null) {

            arr.unshift(elm)
        }
    }
    return arr
}


/**
* @description: 获取当前元素后面的所有节点
* @param {type}  elm 元素
* @return: 
*/
function getNextElements(elm) {
    let arr = [];
    // elm 的值有两种结果
    // 第一种：有值，循环继续
    // 第二种：null ,循环结束   
    while (elm) {
        elm = elm.nextElementSibling;

        if (elm != null) {
            arr.push(elm)
        }
    }
    return arr
}

/**
* @description: 获取页面元素属性
* @param {type} elm 元素
* @param {type} attr 元素[key]
* @return: 
*/

function getStyle(elm, attr) {
    return window.getComputedStyle(elm)[attr]
}

/**
* @description: 滚动事件兼容
* @param {type} 
* @return: 滚动距离
*/
function getScroll() {
    return {
        scrollTop: window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        scrollLeft:window.pageYOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0
    }
}