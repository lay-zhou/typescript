// 4.1 静态属性 静态方法
// class Person {
//     public name:string;
//     // 静态属性
//     static sex = '男';
//     constructor(name:string) {
//         this.name = name;
//     }
//     run():void {
//         console.log(`${this.name}在运动`);
//     }
//     work():void {
//         console.log(`${this.name}在工作`);
//     }
//     static print(): void {
//         // console.log('print方法' + this.name); // 静态方法里面没办法直接调用类的属性
//         // console.log('print方法'); // 静态方法里面没办法直接调用类的属性
//         console.log('print方法' + Person.sex); // 静态方法里面可以直接调用类的静态属性


//     }
// }
// var p = new Person('张三');
// p.run();
// p.work();
// Person.print();

// 4.2 多态：父类定义的一个方法不去实现，让继承它的子类去实现 每个子类有不同表现
// 多态属于继承
// class Animal {
//     public name:string;
//     constructor (name:string) {
//         this.name = name;
//     }
//     eat():void {
//         console.log('吃的方法');
//     }
// }

// class Dog extends Animal {
//     constructor(name:string) {
//         super(name);
//     }
//     eat():string {
//         return this.name + '吃粮食';
//     }
// }

// class Cat extends Animal {
//     constructor(name:string) {
//         super(name);
//     }
//     eat():string {
//         return this.name + '吃老鼠'
//     }
// }

// 4.3 抽象方法 抽象类 它提供其他类继承的基类，不能直接被实例化
// 用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中去使用
// abstract抽象方法只能放在抽象类里面
// 抽象方法和抽象类用来定义方法，标准是：Animal的子类中必须包含eat方法

// abstract class Animal {
//     public name:string;
//     constructor(name:string) {
//         this.name = name;
//     }
//     abstract eat():any;
//     run():void {
//         console.log('run');
//     }
// }

// // var a = new Animal() // 无法直接实例化 是给基类继承使用

// class Dog extends Animal {
//     // 抽象子类中必须包含抽象类中的抽象方法
//     constructor(name:string) {
//         super(name);
//     }
//     eat() {
//         console.log(this.name + '吃粮食');
//     }
// }

// var d = new Dog('小花');
// d.eat();

// class Cat extends Animal {
//     constructor (name: string) {
//         super(name);
//     }
//     eat() { // 抽象子类中必须包含抽象类中抽象方法
//         console.log(this.name + '吃老鼠');
//     }
// }

// var c = new Cat('小猫');
// c.eat();