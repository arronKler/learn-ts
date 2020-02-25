// 定义 泛型函数
function log<T>(value: T): T {
  console.log(value);
  return value;
}

log<string[]>(["a", "b"]);

// 定义 泛型函数类型。表示一个函数的类型是包含泛型的
type Log = <T>(value: T) => T;
let myLog: Log = log;

// 泛型接口。定义在接口上，那么所有的接口成员都会受到该泛型的影响
interface LogI<T = string> {
  // T = string 表示给予的一个默认类型
  (value: T): T;
}

let myLog1: LogI<number> = log;

/* 泛型类 */
class Logg<T> {
  run(value: T) {
    console.log(value);
    return value;
  }
}

let logg1 = new Logg<number>();

interface Length {
  length: number;
}
function print<T extends Length>(value: T) {
  console.log(value, value.length);
}
