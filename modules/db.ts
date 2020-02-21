// 支持 mysql, mssql, mongodb

// 定义类接口规范，需要泛型配合
interface Db<T> {
    add(info:T):boolean;
    update(info:T,id:number):boolean;
    delete(id:number):boolean;
    get(id:number):any[];
}

// 要实现泛型接口 这个类也必须是泛型
export class MysqlDb<T> implements Db<T> {
    constructor() {
        // 连接数据库
    }
    add(info: T): boolean {
        console.log(info);
        return true;
    }    
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        console.log(id);
        var list = [
            {
            username: '增效益',
            password: '123456'
        }
        ]
        return list;
    }
}
