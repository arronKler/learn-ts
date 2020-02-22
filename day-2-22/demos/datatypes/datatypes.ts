/* 基础数据类型 */

//
let str: string = "string";
let num: number = 24;
let boo: boolean = true;

// 数组
let numArr: number[] = [4, 56, 6];
let arr2: Array<number | string> = [42, "5"]; // 用泛型实现的

// 元组。数组的形式，不过会限定元素数量和其对应的类型
let tup: [number, string] = [1, "s"];

// 函数
let compute: (x: number, y: number) => number; // 定了函数的类型，但是没有给予实现

// 对象类型
let obj: { x: number; y: number } = { x: 1, y: 2 };

// symbol
let s1: symbol = Symbol();

// undefined,null 只能赋值给它本身。它是任何类型的子类型
let un: undefined = undefined;
let nu: null = null;
s1 = un;

// void 表示没有返回值的函数
let noReturn = () => {};

// any ，给任何值都行
let x;
x = 1;
x = [];

// never 用于异常和死循环
function error(message: string): never {
  throw Error("never return"); // 因为抛出异常而非返回，既然一定会抛出异常，那就是永远不返回咯
}

let o: object = { x: 1 };
