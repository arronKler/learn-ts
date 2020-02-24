abstract class Animal {
  eat() {
    console.log("eat");
  }

  abstract sleep(): void;
}

class Doge extends Animal {
  sleep(): void {
    console.log("doge sleep");
  }
  constructor(name: string) {
    super();
    this.name = name;
  }
  name: string;
  run() {}
}

class Cat extends Animal {
  sleep() {
    console.log("cat sleep");
  }
}

let doge = new Doge("wangwang");
let cat = new Cat();

let animals: Animal[] = [doge, cat];
animals.forEach(animal => {
  animal.sleep(); // 实现多态调用
});

// 方法链式调用
class WorkFlow {
  step1() {
    return this;
  }

  step2() {
    return this;
  }
}

class MyFlow extends WorkFlow {
  next() {
    return this;
  }
}

new MyFlow().next().step1();
