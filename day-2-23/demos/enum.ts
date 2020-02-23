// 数字枚举
enum Role {
  Reporter = 1,
  Developer,
  Maintainer,
  Guest
}

console.log(Role.Developer);
console.log(Role[3]);

// 字符串枚举
enum Message {
  Succes = "成功",
  Fail = "失败"
}

// 异构，既有数字，也有字符串。容易混淆，不建议使用
enum Answer {
  N,
  Y = "yes"
}

// 枚举成员
enum Mem {
  // constant
  One = 1,

  // computed
  Compute = "abc".length
}

// 常量枚举
const enum Weather {
  Sunday,
  RainyDay
}

enum E {
  a,
  b
}

let e: E = E.a;
