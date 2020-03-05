import { notStrictEqual } from "assert";

let isDone: boolean = false;
let num: number = 10;
let str: string = "this is string";

let list: number[] = [1, 2, 3];

let list1: Array<string> = ["ss", "bb"];

let tup: [number, string] = [1, "ss"];

enum Color {
  Red = 1,
  Green,
  Blue
}

let c: Color = Color.Green;

let notSure: any = 4;
notSure = "s";

let obj: Object = 2;
obj = "osgos";

// obj.length;  // forbiden

function notReturn(): void {}

let un: void = null;
un = undefined;

function error(): never {
  throw new Error("s");
}
