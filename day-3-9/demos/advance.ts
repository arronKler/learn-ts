/* 交叉类型 */
interface Person {
  name: string;
}

interface Employee {
  id: number;
}
let mix: Person & Employee = {
  name: "Arron",
  id: 10
};

/* 联合类型 */
let union: string | number = "this is string";
union = 10; // you can specify number value to it

/* 类型保护 */
function isString(pet: string | string[]): pet is string {
  return (<string>pet).substring !== undefined;
}

let x: string | string[];

if (isString(x)) {
  // 类型保护了
  x.substring;
} else {
  x.length;
}

/* 类型别名 */
type Container<T> = { value: T };
