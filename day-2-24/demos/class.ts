class Dog {
  constructor(name: string) {
    this.name = name;
  }
  public name: string;
  private pri() {}
  protected pro() {}

  readonly legs: number = 4;
  static food: string = "bones";
  run() {}
}

let dog = new Dog("wnagwang");
console.log(dog);
Dog.food;

// 继承
class Husky extends Dog {
  // color 参数属性
  constructor(name: string, public color: string) {
    super(name);
  }
}

Husky.food;
