/****
 * 
 * reduce(callback,initialVlue) 接收一个函数（必须）和指定的初始值（非必须）作为参数，
 * 函数有三个参数，分别为初始值，当前项，当前数组，
 * 进行累加或者累积操作，初始值为每次累加或者累计后的结果
 * 
 * 参数
 * （1）回调函数内
 * 1.initialValue初始值 或者 函数先返回的值（上一次返回的值） 说白话可以理解为累计器 
 * 2.数组的当前项
 * 3.数组的当前项索引
 * 4.当前元素所属于的数组本身
 * （2）回调外
 * initialValue
 * 有的话则作为函数的第一个值
 */
var arr = [1, 2, 3, 4, 5];
var newArr = arr.reduce(function (prev, curr, index, arr) {
    console.log(prev, curr, index, arr);
})
console.log(newArr);
//有initialVlaue 和没有的区别
//有的话则将他作为第一个值传递给回调 且索引从0开始
//没有的话回调函数会从索引为 1 的位置开始执行 跳过第一个索引
var newArr1 = arr.reduce(function (prev, curr, index, arr) {
    console.log(prev, curr, index, arr);
}, 0)
console.log(newArr1);

//简单用法
// 累加 累积
var num = [1, 2, 3, 4];
var sum = num.reduce(function (x, y) {
    return x + y
});
console.log(sum);
var mul = num.reduce((x, y) => {
    return x * y
})
console.log(mul);

//计算数组中每个元素的出现次数
var xx = ['asdasasdaasdaaaaa'];
var numXx = xx.toString().split('').reduce((pre, cur) => {
    pre[cur] ? pre[cur]++ : pre[cur] = 1;
    return pre
}, {})
console.log(numXx);
/***
 * 回顾 split，slice和splice的用法及区别
 * split('字符串') 分割 用什么样的方式来分割字符串 将字符串分割成数组 原数组不改变
 * 
 * slice(index,end) 截取 对数组进行部分截取 并返回一个新的数组 第一个参数 开始截取的索引
 * 第二个参数 截取结束的位置 不包含该元素  原数组不改变
 * 
 * splice(index,num,item) 切割 第一个参数 从数组什么位置开始切割 第二个参数 切割多少项目 
 * 第三个参数 如果第二个参数为0则第三个参数将添加到数组中 原数组改变
 * 
 * split、slice 不改变原数组
 * splice 改变原数组
 */

var arrNew = [1, 2, 3, 4];
//split()
var splitString = '12312312312'
var newSplitString = splitString.split('');
console.log(newSplitString);
//splice()
var spliceArr = arrNew.splice(1, 2, '22');
console.log(spliceArr, arrNew);
//slice()
var sliceArr = arrNew.slice(1, 3);
console.log(sliceArr);