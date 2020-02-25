// 类实现接口
interface Human {
  name: string;
  eat(): void;
}

class Asia implements Human {
  constructor(name: string) {
    this.name = name;
  }

  name: string;
  eat() {}
}

// 接口的继承
interface Man extends Human {
  run(): void;
}

interface Child {
  cry(): void;
}

interface Boy extends Man, Child {}

let boy: Boy = {
  name: "",
  eat() {},
  run() {},
  cry() {}
};

// 接口继承类
class Auto {
  state = 1;

  eat() {}
}

interface AutoInterface extends Auto {}

let au: AutoInterface = {
  state: 2,
  eat() {}
};
