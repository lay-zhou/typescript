import { MysqlDb } from '../modules/db';

// 定义数据库映射
class UserClass {
    username:string|undefined;
    password:string|undefined;
}

var UserModel = new MysqlDb<UserClass>();
export {
    UserClass,
    UserModel
}