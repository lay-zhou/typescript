//6.1 泛型（可以支持不特定得数据类型） 要求：传入得参数和返回得参数要一致

//6.2 泛型函数
//  function getData<T>(value:T):T{
//     return value;
// }

// getData<number>(123);
// getData<string>("123");

// function getData<T>(value:T):any {
//     return value;
// }
// getData<number>(123);
// getData<string>("123");

//6.3 泛型类
// window.list = [1,2,3];
// class MinClass {
//     public list:number[] = [];
//     add(...num:number[]):void {
//         this.list = num;
//     }
//     min():number {
//         // ...运算符
//         // (1)函数的传参数过程。作用将剩余的参数放入一个数组中。
//         // (2)数组中的拓展运算  拆解 若拓展运算符后面是个空数组，则不产生效果。
//         // (3)替代apply方法
//         // 通俗点就是 Object.entries() 可以把一个对象的键值以数组的形式遍历出来，结果和 for...in 一致，但不会遍历原型属性。
//         // var minNum = this.list[0];
//         // for (let i = 0; i < this.list.length; i++) {
//         //     if (minNum > this.list[i]) {
//         //         minNum = this.list[i];
//         //     } 
//         // }   
//         // return minNum;
//         return Math.min(...this.list);
//         // 或者
//         // call/apply是用来改变函数的作用域的，第一次参数为this,第二个参数为传输的值，例如
//         // return Math.min.call(this, ...this.list);
//         // return Math.min.apply(null, list); // 指向window
//         // return Math.min.apply(this, this.list);
//     }
// }

// var m = new MinClass();

// m.add(1,2,3,4,5,6,7,8,9,0,-1,-2);
// console.log(m.min());

// 6.4定义类的泛型
// class MinClass<T> {
//     public list:T[] = [];
//     add(...num:T[]):void {
//         this.list = num;
//     }
//     min():T {
//         // ...运算符
//         // (1)函数的传参数过程。作用将剩余的参数放入一个数组中。
//         // (2)数组中的拓展运算  拆解 若拓展运算符后面是个空数组，则不产生效果。
//         // (3)替代apply方法
//         // 通俗点就是 Object.entries() 可以把一个对象的键值以数组的形式遍历出来，结果和 for...in 一致，但不会遍历原型属性。
//         var minNum = this.list[0];
//         for (let i = 0; i < this.list.length; i++) {
//             if (minNum > this.list[i]) {
//                 minNum = this.list[i];
//             } 
//         }   
//         return minNum;
//         // return Math.min(...this.list);
//         // 或者
//         // call/apply是用来改变函数的作用域的，第一次参数为this,第二个参数为传输的值，例如
//         // return Math.min.call(this, ...this.list);
//         // return Math.min.apply(null, list); // 指向window
//         // return Math.min.apply(this, this.list);
//     }
// }

// var m = new MinClass<number>(); // <>确定了泛型

// m.add(1,2,3,4,5,6,7,8,9,0,-1,-2);
// console.log(m.min());

// var m2 = new MinClass<string>(); // <>确定了泛型
// m2.add('1','-1','-3','11','-9');
// console.log(m2.min())

// 6.5泛型接口
// 函数类型接口
// interface ConfigFn {
//     (value1:string, value2:string):string;
// }

// var setData:ConfigFn = function(value1:string, value2:string):string {
//     return value1 + value2;
// }
// setData('张三', '李四');

// 泛型接口
// interface ConfigFn<T> {
//     (value:T):T
// }

// function setData<T>(value:T):T {
//     return value;
// }

// var myGetData:ConfigFn<string> = setData<string>()

// setData<string>('head');

// 把类作为参数来约束数据传入的类型
// class User {
//     username: string | undefined;
//     password: string | undefined;
// }

// class MysqlDb {
//     add(user:User):boolean {
//         console.log(user);
//         return true;
//     }
// }

// var u = new User();
// u.username = '张三';
// u.password = '123456';

// var Db = new MysqlDb();
// Db.add(u);

// class AticleCate {
//     title: string | undefined;
//     desc: string | undefined;
//     status: number | undefined;
// }

// class MysqlDb {
//     add(info:AticleCate):boolean {
//         console.log(info);
//         return true;
//     }
// }

// var a = new AticleCate();
// a.title = '国内';
// a.desc = '国内新闻';
// a.status = 1;
// var Db = new MysqlDb();
// Db.add(a);


// 操作数据库的泛型类
// class MysqlDb<T> {
//     add(info:T):boolean {
//         console.log(info);
//         return true;
//     }
//     update(info:T,id:number):boolean {
//         console.log(info, id);
//         return true;
//     }
// }


// 想给AticalCate表增加数据
// 1.定义一个AticalCate类 和数据库进行映射
// class AticleCate {
//     title: string | undefined;
//     desc: string | undefined;
//     status: number | undefined;
// }

// var a = new AticleCate();
// a.title = '国内';
// a.desc = '国内新闻';
// a.status = 1;
// var Db = new MysqlDb<AticleCate>();
// Db.add(a);

// 想给User表增加数据
// 2.定义一个User类 和数据库进行映射
// class User {
//     username: string | undefined;
//     password: string | undefined;
//     constructor(params:{
//         username: string | undefined;
//         password: string | undefined;
//     }) {
//         this.username = params.username;
//         this.password = params.password;
//     }
// }

// 增加操作
// var u = new User({
//     username: '张三',
//     password: '123456'
// });
// // 把类当作泛型类里面
// var Db = new MysqlDb<User>();
// Db.add(u);

// 更新数据
// var u = new User({
//     username: '张三',
//     password: '123456789'
// });
// var Db = new MysqlDb<User>();
// Db.update(u, 1);
// 把类作为泛型类的泛型


// import getData from './modules/db'; // export defualt时候
// import { getData  } from './modules/db';
// getData();


// import { UserClass, UserModel } from './model/user';
// var u = new UserClass();
// u.username = '张三'
// u.password = '12313131'
// UserModel.add(u);
// console.log(UserModel.get(1));