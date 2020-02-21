// 一.数据类型
// 1.1 boolean布尔类型
// 1.2 number数字类型
// 1.3 string字符串类型
// 1.4 array数组类型

// 第一种定义数组
// var arr:number[] = [1, 2];
// console.log(arr);
// 第二种定义数组
// var arr:Array<number> = [1,2,3];
// console.log(arr);
// 第三种定义数组
// var arr2:any[] = [1,'2',3];

// 1.5 tuple元组类型

// var arr:[number, string, string] = [1, '2', '2'];
// console.log(arr);

// 1.6 enum枚举类型
// status
// 1 => success
// 0 => error

// payStatus
// 0 => 未支付
// 1 => 已支付
// 2 => 取消支付

// enum Flag { success = 1, error = 0 };
// let s:Flag = Flag.success;
// let f:Flag = Flag.error;
// console.log(s, f); // 1 0

// enum Color { yellow, red, blue };
// let c:Color = Color.blue;
// console.log(c); // 2
// 如果标识符没有赋值，它的值就是下标

// enum Color { yellow, red, blue = 11, 'orange' };
// let c:Color = Color.orange;
// console.log(c); // 12

// enum Err { 'undefined' = -1, 'null' = -2, 'success' = 1 };
// let e:Err = Err.success;
// console.log(e);

// 1.7 any任意类型
// var a:any = '123';

// a = 123;

// a = true;
// console.log(a);

// 任意类型的用处

// var oBox:any = document.getElementById('box');
// oBox.style.color = 'red';

// 1.8 null和undefined 其他（never类型）数据类型的子类型
// undefined
// var num:undefined;
// console.log(num); // 输出undefined;

// var num: number | undefined;

// console.log(num); // undefined
// num = 1;
// console.log(num); // 1

// null
// var num:null;
// num = null;

// 一个元素可能是number, null, undefined
// var num:number | null | undefined;
// num = 1234;
// console.log(num);

// 1.9 void ts中表示没有任何类型，一般是定义方法的时候没有返回值
// 表示方法没有返回任何类型

// function run():void {
//     console.log('run');
// }
 
// 表示函数返回值为string
// function run():string {
//     return '111';
// }

// 表示函数返回值为number
// function run():number {
//     return 123;
// }
// 1.10 never其他类型（包括null和undefined）,代表不会出现的值

// var a:undefined;
// a = undefined;

// var b:null;
// b = null;

// var a:never;

// a=123; 报错

// a = (()=>{
//     throw new Error('hello world');
// })()