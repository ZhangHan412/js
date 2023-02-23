//获取元素对象下标
function getElementIdx (item) {
  var elements = item.parentNode.children;
  for (var i = 0, len = elements.length; i < len; i++) {
    if (item === elements[i]) {
      return i;
    }
  }
}

//设置任意的标签中间的任意文本内容
function setInnerText (element, text) {
  var key = element.textContent == "undefined" ? 'innerText' : 'textContent';
  element[key] = text;
  // //判断浏览器是否支持这个属性
  // if (typeof element.textContent == "undefined") {//不支持
  //   element.innerText = text;
  // } else {//支持这个属性
  //   element.textContent = text;
  // }
}

//获取元素实际样式
function getStyle (obj, attr) {
  return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, false)[attr];
}

//querySelector
function $ (ele) {
  return document.querySelector(ele);
}

//querySelectorAll
function $$ (ele) {
  return document.querySelectorAll(ele);
}



function addEventListener (element, type, fn) {
  if (element.addEventListener) {
    //标准浏览器写法
    element.addEventListener(type, fn, false);
  } else if (element.attachEvent) {
    //IE兼容写法
    element.attachEvent("on" + type, fn);
  } else {
    //on绑定写法
    element["on" + type] = fn;
  }
}


function removeEventListener (element, type, fn) {
  if (element.removeEventListener) {
    element.removeEventListener(type, fn, false);
  } else if (element.detachEvent) {
    element.detachEvent("on" + type, fn);
  } else {
    element["on" + type] = null;
  }
}

function eventListener (element, type, fn, capture) {
  //处理capture的默认值为 false
  capture = capture || false; 
  if (element.addEventListener) {
    //标准浏览器写法
    element.addEventListener(type, fn, capture);
  } else {
    element.attachEvent("on" + type, fn);
  }

  return {
    'remove': function () {
      if (element.removeEventListener) {
        element.removeEventListener(type, fn, false);
      } else {
        element.detachEvent("on" + type, fn);
      }
    }
  }
}


function getPosition (element) {
  var pos = {
    left: 0,
    top: 0
  }
  while (element.offsetParent) {
    pos.left += element.offsetLeft;
    pos.top += element.offsetTop;
    element = element.offsetParent;
  }
  return pos;
}