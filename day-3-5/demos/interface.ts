interface LabelldValue {
  label: string;
  option?: string; // 可选的
}

function printLabel(obj: LabelldValue) {
  console.log(obj.label);
}

let myObj = { label: "Size 10", size: 10 };
printLabel(myObj);

interface Point {
  readonly x: number; // 标明只读
  readonly y: number;
}

interface SquareConfig {
  color?: string;
  width?: number;
}

let s: SquareConfig = {
  color: "red"
  // name: "songos" // 对象字面量给变量的时候会被额外类型检测
};

interface SeachFunc {
  (soure: string, subString: string): boolean;
}

let sfn: SeachFunc = (s: string, sb: string): boolean => {
  return false;
};

interface StringArray {
  [index: string]: number;
  [index: number]: number;
}

interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): any;
}
class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date): any {}
  constructor(h: number, m: number) {}
}

// extends interface
interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

// mix type
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function(start: number) {};
  counter.interval = 10;
  counter.reset = () => {};
  return counter;
}

// 接口继承类

class Control {
  private state: any;
}
