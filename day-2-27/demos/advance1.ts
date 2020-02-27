/* 交叉类型 */
interface DogInterface {
  run(): void;
}

interface CatInterface {
  jump(): void;
}

let pet: DogInterface & CatInterface = {
  run() {},
  jump() {}
};

/* 联合类型 */
let a: number | string = "a"; // 值可以是number或者string类型的
let b: "a" | "b" | "c" = "c"; // 字面量联合类型，不仅限定了类型，还限定了值的范围
let c: 1 | 2 | 3;

class Dog implements DogInterface {
  run() {}
  eat() {}
}

class Cat implements CatInterface {
  jump() {}
  eat() {}
}

enum Master {
  Boy,
  Girl
}
function getPet(master: Master) {
  let pet = master === Master.Boy ? new Dog() : new Cat();
  pet.eat();
  return pet;
}

/* 可辨识联合 */
interface Square {
  kind: "square";
  size: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

type Shape = Square | Rectangle;

function area(s: Shape) {
  // kind 被称为 “可辨识的特征（或标签）”
  switch (s.kind) {
    case "square":
      return s.size * s.size;
    case "rectangle":
      return s.height * s.width;
  }
}
