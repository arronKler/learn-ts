// string兼容null
let s: string = "a";
s = null;

// 接口兼容性
interface X {
  a: any;
  b: any;
}

interface Y {
  a: any;
  b: any;
  c: any;
}

let x: X = { a: 1, b: 2 };
let y: Y = { a: 1, b: 2, c: 3 };

x = y; // X 兼容 Y

// 鸭式辩型法

type Handler = (a: number, b: number) => void;
