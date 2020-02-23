// 函数类型接口

// No1. 直接在变量上定义
let Add1: (x: number, x: number) => number;

// No2. 用接口定义
interface Add2 {
  (x: number, y: number): number;
}

// No3. 用type定义
type Add3 = (x: number, y: number) => number;

let add: Add3 = (a, b) => a + b;

/* 自己定义一个混合类型的接口 */
interface Lib {
  (): void;
  version: string;
  doSomething(): void;
}

function getLib() {
  let lib: Lib = (() => {}) as Lib;
  lib.version = "1.0.0";
  lib.doSomething = () => {};
  return lib;
}

let lib1 = getLib();
lib1.doSomething();
