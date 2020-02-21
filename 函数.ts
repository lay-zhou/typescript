// 2.1 函数定义
// 函数声明法
// function run() {
//     return 'run';
// }
// 匿名函数法
// var run2 = function () {
//     return 'run2';
// }

// ts中定义函数

// // 函数声明法
// function run():string {
//     return '123';
// }
// // 匿名函数
// var fun2 = function():number {
//     return 123;
// }
// var fun3 = function():void {
//     console.log('123');
// }

// ts中定义方法传参数
// function getInfo(name: string, age: number):string {
//     return `${name}----${age}`;
// }
// alert(getInfo('张三', 20));

// var getInfo = function(name:string, age:number):string {
//     return `${name}----${age}`;
// }
// alert(getInfo('张三', 20));

// 没有返回值的方法
// function run():void {
//     console.log('run');
// }

// es5中实参和形参  可以不一样 ，但ts中必须一样， 如果不一样要配置可选参数
// function getInfo(name: string, age?: number):string {
//     if (age) {
//         return `${name}----${age}`;
//     } else {
//         return `${name}----年龄保密`
//     }
// }
// alert(getInfo('张三'));
// 注意可选参数必须配置到参数后面

// 默认参数 es5不可以设置默认参数 es6和ts都可以设置默认参数
// function getInfo(name: string, age: number = 20):string {
//     if (age) {
//         return `${name}----${age}`;
//     } else {
//         return `${name}----年龄保密`
//     }
// }
// alert(getInfo('张三', 30));

// 剩余参数
// function sum(a:number, b: number, c: number, d:number):number {
//     return a + b + c + d;
// }
// alert(sum(1,2,3,4));

// 三点运算符
// function sum(...result:number[]):number {
//     var sum = 0;
//     for (let i = 0; i < result.length; i++) {
//         sum+=result[i];
//     }
//     return sum;
// }
// alert(sum(1,2,3,4,5));

// 2.2 函数的重载
// java中 重载指的是两个或两个以上的同名函数，他们的参数不同，这时候会出现函数重载的现象
// es5中出现同名函数后面的方法会覆盖上面的方法
// function css(config) {

// }
// function css(config,value){

// }

// ts中的重载
// function getInfo(name:string):string;
// function getInfo(age:number):number;
// function getInfo(str:any):any {
//     if (typeof str === 'string') {
//         return str;
//     } else {
//         return str;
//     }
// }
// alert(getInfo('张三'));
// alert(getInfo(20));
// alert(getInfo(true));

// // 定义规则
// function getInfo(name: string):string;
// function getInfo(age: number):string;
// function getInfo(name:string, age: number):string;
// // 真正函数
// function getInfo(name:any, age?:any):any {
//     if (age) {
//         return name + age;
//     } else {
//         return name;
//     }
// }
// alert(getInfo('张三'));
// alert(getInfo('张三', 20));
// alert(getInfo(20));

// 2.3 箭头函数
