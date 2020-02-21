// 8.1 普通类装饰器（无法传参数）
// 装饰器 :装饰器其实就是一个方法
// function logClass(params:any) {
//     console.log(params);
//     params.prototype.apiUrl = '动态扩展属性';
//     params.prototype.run = function () {
//         console.log('run');
//     }
// }

// @logClass
// class HttpClent {
//     constructor() {
        
//     }
//     getData() {

//     }
// }
// var http:any = new HttpClent();
// console.log(http.apiUrl);
// http.run();

// 装饰器工厂
// function logClass(params:any) {
//     console.log(params);
//     return function (target:any) {
//         console.log(target);

//         console.log(params);

//         target.prototype.apiUrl = params;
//     }
// }

// @logClass('https://pay.logpay.cn/server/api/pay')
// class HttpClent {
//     constructor() {

//     }
//     getData() {

//     }
// }
// var http:any = new HttpClent();
// console.log(http.apiUrl);

// 装饰器重载构造函数, 类装饰器应用于类构造函数，可以用来监视，修改，或替代类定义


// function logClass(target:any) {
//     return class extends target {
//         apiUrl = 'https://newPay.logpay.cn/server/api/pay'
//         getData() {
//             console.log('new' + this.apiUrl)
//         }
//     }
// }

// @logClass
// class HttpClent {
//     public apiUrl:string | undefined;
//     constructor() {
//         this.apiUrl = 'https://pay.logpay.cn/server/api/pay';
//     }
//     getData() {
//         console.log(this.apiUrl);
//     }
// }
// var http:any = new HttpClent();
// console.log(http.apiUrl);
// http.getData();

// 8.2 属性装饰器
// 类装饰器
// function logClass(params:any) {
//     return function(target:any) {
//         target.prototype.url = params
//     }
// }

// 属性装饰器
// 属性装饰器会在运行时被调用，传入下列两个参数
// 1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
// 2.成员名称
// function logProperty(params:any) {
//     return function(target:any, attr:any) {
//         console.log(target);
//         console.log(attr);
//         target[attr] = params;
//     }
// }

// @logClass('https://pay.logpay.cn')
// class HttpClent {
//     @logProperty('https://logpay.cn')
//     public url:string | undefined;
//     constructor() {
//     }
//     getData() {
//     }
// }
// var http:any = new HttpClent();
// console.log(http.url);
// http.getData();

// 8.3 方法装饰器
// 他被应用到方法的 属性描述符上，可以用来监视，修改或替换方法定义
// 方法修饰符在运行时传入下列3个参数
// 1.对于静态成员来说是类的构造函数，对于实例成员来说是类的原型对象
// 2.成员的名字
// 3.成员的属性描述符


// 8.4 方法参数装饰器
// 参数装饰器会在函数运行时当作函数被调用，可以使用参数装饰器为类的原型对象增加一些元素数据，
// 1.对于静态成员来说是类的构造函数，对于实例成员来说是类的原型对象
// 2.方法的名字
// 3.参数在函数列表中的索引

//8.5 装饰器执行顺序
// function logClass(params?:string) {
//     return function(target:any) {
//         console.log(target + '我是类装饰器');
//     }
// }

// function logAttr(params?:string) {
//     return function(target:any, attr:string) {
//         console.log(target);
//         console.log(attr);
//         console.log('我是属性装饰器');
//     }
// }

// function logMethod(params?:string) {
//     return function(target:any, methodsName:string, desc:any) {
//         console.log(methodsName)
//         console.log(desc);
//         console.log('我是方法装饰器1');
//     }
// }

// function logParams1(params?:string) {
//     return function(target:any, methodsName:string, key:number) {
//         console.log(target);
//         console.log(methodsName);
//         console.log(key);
//         console.log('我是方法参数装饰器1');
//     }
// }
// function logParams2(params?:string) {
//     return function(target:any, methodsName:string, key:number) {
//         console.log(target);
//         console.log(methodsName);
//         console.log(key);
//         console.log('我是方法参数装饰器2');
//     }
// }


// @logClass()
// class HttpClent {
//     @logAttr()
//     public url: string|undefined;
//     constructor() {
//         console.log(this);
//     }
//     @logMethod()
//     getData(@logParams1() id:number) {
//         console.log('getData');
//     }
//     setData(@logParams2() data:any) {
//     }

// }
// 属性》方法参数》方法》类
// 如果多个同样的装饰器，他会先执行后面的   