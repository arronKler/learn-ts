/* 泛型函数 */
function identity<T>(arg: T): T {
  return arg;
}

/* 泛型类型 */
let myIdentity: <U>(arg: U) => U = identity;

/* 泛型接口 */
interface GenericIdentityFn<T> {
  (arg: T): T;
}

let myIdentity1: GenericIdentityFn<number> = identity;

/* 泛型类 */
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

/* 泛型约束 */
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
}
