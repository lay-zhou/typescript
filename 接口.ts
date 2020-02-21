// ts中的接口
// 5.1 属性接口 对json的约束
// function printLabel(label:string):void {
//     console.log('printLabel');
// }
// printLabel('123');

// ts中自定义方法传入参数对json进行约束
// function printLabel(labelInfo:{ label:string }):void {
//     console.log('printLabel');
// }
// printLabel({label:'123'});

// interface 定义接口
// interface FullName {
//     first: string;// 注意封号结束
//     second: string;
// }

// function printName(name:FullName):void {
//     // 必须 first ,second
//     console.log(name.first + '----' + name.second);
// }
// //批量约束
// function printInfo(name:FullName):void {
//     // 必须 first ,second
//     console.log(name.first + '----' + name.second);
// }

// var obj = {
//     age: 20,
//     first: '123',
//     second: '123'
// }
// printName(obj);

// 接口可选参数
// interface FullName {
//     firstName:string,
//     secondName?:string // 接口的可选属性
// }

// function getName(name: FullName):void {
//     console.log(name);
// }
// getName({firstName: '123'});

//原生js写一个ajax
// interface Config {
//     type: string,
//     url: string,
//     data?:string,
//     dataType:string
// }

// function ajax(config:Config):void {
//     var xhr = new XMLHttpRequest();
//     xhr.open(config.type, config.url, true); // true代表异步
//     xhr.send(config.data);
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             console.log('success');
//             if (config.dataType == 'json') {
//                 console.log(JSON.parse(xhr.responseText));
//             } else {
//                 console.log(xhr.responseText);
//             }
//         }
//     }
// }


// ajax({
//     type: 'get',
//     data: 'name=zhangsan',
//     url: 'http://a.itying.com/api/productlist',
//     dataType: 'json'
// })

// 5.2 加密函数接口
// interface encrypt {
//     (key:string, value:string):string;
// }

// var md5:encrypt = function(key:string, value:string):string {
//     return key + value;
// }
// console.log(md5('12','1'));

// 5.3 可索引接口： 数组，对象得约束（不常用）
// 数组得可索引接口
// interface UserArr {
//     [index:number]:string;
// }

// var arr:UserArr = ['123','12312'];
// console.log(arr[0]);

// 对象得可索引接口
// interface UserObj {
//     [index:string]:string;
// }

// var obj:UserObj = {name: '20', age: '20'};


// 5.4 类类型接口
// interface Animal {
//     name: string;
//     eat(str:string):void;
// }

// class Dog implements Animal {
//     name:string;
//     constructor(name:string) {
//         this.name = name;
//     }
//     eat() {
//         console.log(this.name + '吃粮食')
//     }
// }
// var d = new Dog('小黑');
// d.eat();

// class Cat implements Animal {
//     name: string;
//     constructor(name:string) {
//         this.name = name;
//     }
//     eat(food:string) {
//         console.log(this.name + food);
//     }
// }
// var c = new Cat('小虎猫');
// c.eat('吃老鼠');

// 5.5 接口可以继承接口
// interface Animal {
//     eat(str:string):void;
// }

// interface Person extends Animal {
//     work(str:string):void;
// }

// class Programmer {
//     public name:string;
//     constructor(name:string) {
//         this.name = name;
//     }
//     coding(code:string) {
//         console.log(this.name + code)
//     }
// }
// class Web extends Programmer implements Person {
//     constructor(name:string) {
//         super(name);
//     }
//     eat(food:string) {
//         console.log(this.name + food);
//     }
//     work(work:string) {
//         console.log(this.name + work);
//     }
// }
// var w = new Web('小磊');
// w.eat('吃牛肉');
// w.work('在work');
// w.coding('写ts代码');