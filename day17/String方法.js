/****
 * replace() 
 * 该方法返回一个新的字符串 不修改原字符串
 * 参数：
 * 1.可以是字符串 也可以是一个正则表达式
 * 2.可以是一个字符串 也可以是一个函数
*/
var str = '1231231231231';
// 存在问题 只替换了第一次匹配到的字符串 
console.log(str.replace('1', '9'));

var str1 = '啊实打实打苏打啊实打实打'
// 利用正则表达式
console.log(str1.replace(/实打/g, '666'));
console.log(str.replace(/12/g, '66'));
//替换所有 字节
var str1='字节跳动字节跳动字节字节';
while(str1.indexOf('字节') !== -1){
    str1=str1.replace('字节','心脏')
} 
console.log(str1);
// 第二个参数传递函数
function text() {
    return 99;
};
console.log(str.replace(/12/g, text()));

