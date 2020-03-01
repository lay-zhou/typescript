// 装饰器：其实就是一个函数（装饰模式）
// 1.是继承方式的一种替代方案 2.动态的给对象添加额外职责 3.在不改变接口的前提下，增强类的性能
// 一.类装饰器
// (类装饰器指向构造函数，属性，方法，参数装饰器对于静态成员来说指向构造函数，否则指向类的原型对象)
// (1).普通类装饰器(函数参数指向构造函数),只有类装饰器才有普通装饰器
// function decoratorClass(target:any) {
//     console.log(target.toString());
//     target.prototype.apiUrl = 'https://www.logpay.cn';
//     target.prototype.run = function() {
//         console.log(this.dataType);
//     }
// }

// @decoratorClass
// class HttpClient {
//     public dataType = 'json';
//     constructor() {
        
//     }
//     fetchData() {
//         console.log('111');
//     }
// }

// let http:any = new HttpClient();
// console.log(http.apiUrl);
// http.run();

//  类装饰器重载构造函数，类装饰器用于类构造函数，可以用来监视，修改，或者替代类定义
// function decoratorClass(target:any) {
//     return class extends target {
//         url:string = '/user';
//     }
// }

// @decoratorClass
// class HttpClient {
//     public dataType:string = 'json';
//     // 如果想增加通过装饰器添加属性那么就不要在构造函数中提前声明了
//     public url:string = '/';
//     constructor() {
        
//     }
//     fetchData() {
//         console.log('111');
//     }
// }

// let http:any = new HttpClient();
// console.log(http.url);


// (2).装饰器工厂
// function decoratorClass(params?:any) {
//     return function(target) {
//         if (params) {
//             target.prototype.url = `/${params}` 
//         }
//     }
// }

// @decoratorClass('user')
// class HttpClient {
//     public dataType:string = 'json';
//     // 如果想增加通过装饰器添加属性那么就不要在构造函数中提前声明了
//     // public url:string = '/';
//     constructor() {
        
//     }
//     fetchData() {
//         console.log('111');
//     }
// }

// let http:any = new HttpClient();
// console.log(http.url);

//  类装饰器重载构造函数，类装饰器用于类构造函数，可以用来监视，修改，或者替代类定义

// function decoratorClass(params?:any) {
//     return function(target:any) {
//         return class extends target {
//             url = '/' + params;
//         }
//     }
// }

// @decoratorClass('user')
// class HttpClient {
//     public dataType:string = 'json';
//     // 如果想增加通过装饰器添加属性那么就不要在构造函数中提前声明了
//     // public url:string = '/';
//     constructor() {
        
//     }
//     fetchData() {
//         console.log('111');
//     }
// }

// let http:any = new HttpClient();
// console.log(http.url);

// 二.属性装饰器
// 属性装饰器在运行时被调用，传入下列两个参数
// 1.对于实例成员为类的原型对象，对于静态成员来说是类的构造函数
// 2.成员名称
// 除了类装饰器，其他的都是只有装饰器工厂
// 构造函数自身的属性和方法无法被共享，而原型对象的属性和方法可以被所有实例对象所共享。
// function decoratorProperty(params?:any) {
//     console.log(params);
//     return function(target:any, propertyName:string) {
//         target[propertyName] = params;
//         // 类构造函数HttpClient不能在没有“new”的情况下调用
//         // target.constructor() {
//         //     console.log(1);
//         // }
//     }
// }

// class HttpClient {
//     public dataType:string = 'json';
//     @decoratorProperty('/user')
//     public url:string;
//     constructor() {
        
//     }
//     fetchData() {
//         console.log('111');
//     }
// }
// let http:any = new HttpClient();
// console.log(http.url);

// 三.方法装饰器
// 他被用到方法的 属性描述符上，可以用来监视，修改或者替换方法的定义
// 1.对于实例成员为类的原型对象，对于静态成员来说是类的构造函数
// 2.成员名称
// 3.成员的属性描述符
// 除了类装饰器，其他的都是只有装饰器工厂
// 构造函数自身的属性和方法无法被共享，而原型对象的属性和方法可以被所有实例对象所共享。
// function decoratorFunc(params?:any) {
//     return function(target:any, funcName:string, desc:any) {
//         console.log(funcName);
//         console.log(desc.value.toString());
//         desc.value = function () {
//             console.log('222');
//         }
//     }
// }

// class HttpClient {
//     public dataType:string = 'json';
//     constructor() {
        
//     }
//     @decoratorFunc()
//     fetchData():void {
//         console.log('111');
//     }
// }
// let http:any = new HttpClient();
// http.fetchData();

// 四.参数装饰器
// 参数装饰器会在函数运行时当作函数被调用，可以使用参数装饰器为类的原型对象增加一些元素数据，
// 1.对于实例成员为类的原型对象，对于静态成员来说是类的构造函数
// 2.成员名称(方法名字)
// 3.参数在函数中的索引
// 除了类装饰器，其他的都是只有装饰器工厂
// 构造函数自身的属性和方法无法被共享，而原型对象的属性和方法可以被所有实例对象所共享。
// function decoratorArg(params?:any) {
//     return function(target:any, funcName:string, index:any) {
//         // bind是创建新的函数，而call,apply不是，是引用
//         let arg:string[] = [];
//         arg[index] = params;
//         // 无法覆盖之前的函数
//         // target[funcName](...arg);
//         // function assignMetadata(args:any, paramtype:any, index:any, data:any) {
//         //     return Object.assign(Object.assign({}, args), { [`${paramtype}:${index}`]: {
//         //             index,
//         //             data
//         //         } });
//         // }
//         // console.log(assignMetadata(arg, 'decoratorArg', index, params));
//         // target.constructor = ('arg') => {
//         //     console.log(arguments)
//         // }
//         return class extends target {
            
//         }
//     }
// }

// class HttpClient {
//     public dataType:string = 'json';
//     constructor() {
        
//     }
//     fetchData(@decoratorArg('arg') arg:string):string {
//         console.log(arguments);
//         return 'ff';

//     }
// }
// let http:any = new HttpClient();
// http.fetchData();

// 执行顺序 属性》方法》方法参数》类