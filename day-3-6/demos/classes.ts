class Greeter {
  public greetring: string;
  constructor(message: string) {
    this.greetring = message;
  }
  greet() {
    return "Hello " + this.greetring;
  }
}

/* 类型兼容 */
class Animal {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

class Rhino extends Animal {
  constructor() {
    super("Rhino");
  }
}

let animal = new Animal("Goat");
let rhino = new Rhino();

animal = rhino;

/* readonly必须被初始化 */
class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor(theName: string) {
    this.name = theName;
  }
}

let dad = new Octopus("Man with the 8 string legs");

/* 参数属性 */
class OctopusWith {
  constructor(readonly name: string) {}
}

/* 存取器 */
class Employee {
  private _fullName: string;
  get fullName(): string {
    return this._fullName;
  }

  set fullName(name: string) {
    this._fullName = name;
  }
}

/* 静态属性 */
class Grid {
  static origin = { x: 0, y: 0 };
}

Grid.origin;

/* 抽象类 */
abstract class Department {
  constructor(public name: string) {}
  printName(): void {
    console.log(this.name);
  }

  abstract printMeeting(): void;
}

class AccountingDepartment extends Department {
  constructor() {
    super("The account department");
  }

  printMeeting() {
    console.log("nice");
  }
}
