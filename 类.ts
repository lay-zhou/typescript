//3.1 ts中的类
// es5中
// function Person (name) {
//     this.name = name;
//     this.run = function () {
//         console.log(this.name)
//     }
// }

// var p = new Person();
// p.run();

// class Person {
//     name:string; // 属性 前面省略了pblic关键字
//     constructor(name:string) { // 构造函数 实例化类的时候触发的方法
//         this.name  = name; 
//     }
//     run():void {
//         console.log(this.name);
//     }
// }

// var p = new Person('张三');
// p.run();

// class Person {
//     name:string; // 属性 前面省略了pblic关键字
//     constructor(name:string) { // 构造函数 实例化类的时候触发的方法
//         this.name  = name; 
//     }
//     getName():string {
//         return this.name;
//     }
//     setName(name:string):void {
//         this.name = name;
//     }
// }

// var p = new Person('张三');
// console.log(p.getName());
// p.setName('李四');
// console.log(p.getName());

// 3.2 ts中实现继承 extends super
// class Person {
//     name:string;
//     constructor (name: string) {
//         this.name = name;
//     }
//     run():void {
//         console.log(this.name)
//     }
// }

// class Web extends Person {
//     constructor(name:string) {
//         super(name); // 初始化父类的构造函数
//     }
//     run():void {
//         console.log('子类' + this.name)
//     }
//     work():void {
//         console.log(this.name);
//     }
// }

// var w = new Web('李四');
// w.run();
// w.work();

// 3.3 类里面的修饰符 typescript 定义属性的时候定义了三种修饰符 
// public(类里面 子类里面 类外部均可以访问) 
// protected(类里面 子类里面可以访问 类外部不可以访问) 
// private(类里面 子类和类外部不可以访问)
// 属性不加修饰符默认就是public
// (1) public
// class Person {
//     name:string;
//     constructor (name: string) {
//         this.name = name;
//     }
//     run():void {
//         console.log(this.name)
//     }
// }

// class Web extends Person {
//     constructor(name:string) {
//         super(name); // 初始化父类的构造函数
//     }
//     run():void {
//         console.log('子类' + this.name)
//     }
//     work():void {
//         console.log(this.name);
//     }
// }

// var w = new Web('李四');
// w.run();
// w.work();

// 类外部访问属性
// class Person {
//     name:string;
//     constructor (name: string) {
//         this.name = name;
//     }
//     run():void {
//         console.log(this.name)
//     }
// }

// var p = new Person('哈哈哈');
// console.log(p.name);

// (2) protected
// class Person {
//     protected name:string;
//     constructor (name: string) {
//         this.name = name;
//     }
//     run():void {
//         console.log(this.name)
//     }
// }

// class Web extends Person {
//     constructor(name:string) {
//         super(name); // 初始化父类的构造函数
//     }
//     run():void {
//         console.log('子类' + this.name)
//     }
//     work():void {
//         console.log(this.name);
//     }
// }

// var w = new Web('李四');
// w.run();
// w.work();

// 类外部访问属性
// class Person {
//     protected name:string;
//     constructor (name: string) {
//         this.name = name;
//     }
//     run():void {
//         console.log(this.name)
//     }
// }

// var p = new Person('哈哈哈');
// console.log(p.name); // 错误

// (3) private
// class Person {
//     private name:string;
//     constructor (name: string) {
//         this.name = name;
//     }
//     run():void {
//         console.log(this.name)
//     }
// }

// class Web extends Person {
//     constructor(name:string) {
//         super(name); // 初始化父类的构造函数
//     }
//     run():void {
//         console.log('子类' + this.name)
//     }
//     work():void {
//         console.log(this.name);
//     }
// }

// var w = new Web('李四');
// w.run(); // 报错
// w.work();// 报错 拿不到this.name

// 类外部访问属性
// class Person {
//     private name:string;
//     constructor (name: string) {
//         this.name = name;
//     }
//     run():void {
//         console.log(this.name)
//     }
// }

// var p = new Person('哈哈哈');
// console.log(p.name); // 错误 只能在子类内部用
