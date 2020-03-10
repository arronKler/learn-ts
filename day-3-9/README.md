# 查漏补缺

## 高级类型
- 交叉类型：将多种类型叠加到一起成为一种类型，包含了所需的所有类型的特性
- 联合类型：值可以是几种类型之一
- **类型保护机制**是指一旦我们检查过类型，就能在某个判断分支里面确切某个变量的类型
- 类型谓词 `parameterName is Type`
- `typeof` 类型保护
- `instanceof` 类型保护
- `identifier!`从 identifier的类型里去除了 null和 undefined
- 用 `type` 取类型别名。类型别名不会创建一个新的类型，它创建一个新名字来引用那个类型
- 接口 vs. 类型别名
  - 接口创建了一个名字，类型别名并不创建名字，编译后会替换为对应的代码，而不是名字
  - 类型别名不能被 extends 和 implements
- 你应该尽量使用接口代替类型别名，另一方面，如果你无法通过接口来描述一个类型并且需要使用联合类型或元组类型，这时通常会使用类型别名
- 索引类型查询操作符 `keyof T` 
- 索引访问操作符 `T[K]`
- `Exclude<T, U>` : 从T中剔除可以赋值给U的类型。
- `Extract<T, U>` : 提取T中可以赋值给U的类型。
- `NonNullable<T>` : 从T中剔除null和undefined。
- `ReturnType<T>` : 获取函数返回值类型。
- `InstanceType<T>` : 获取构造函数类型的实例类型。