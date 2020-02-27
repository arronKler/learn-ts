# 交叉类型与联合类型

交叉类型：将多个类型合并为一个类型，这个类型具有着多个类型的特性。即 **取所有类型的并集**

联合类型：声明的类型并不确定，可以为多个类型中的一个。即 **多个类型多取一**

**可辨识联合类型** 就是在联合类型的基础上加上可辨识的一个特征或者叫做标签，然后通过这个特征来进行区分

[demo](./demos/advance1.ts)

# 索引类型

全方位获取到一个对象的键、值的类型信息，并可以进行约束

- `keyof T` **索引类型查询操作符**。得到一个 T 上所有已知公共属性名的联合类型
- `T[K]` **索引访问操作符**。得到类型 T 的索引 K 的值的类型 (这里 K extends keyof T)
- `T extends U` 类型约束。约束 T 只能是 U 的一个子集

[demo](./demos/advance2.ts)

# 映射类型

可以将一个旧的类型生成一个新的类型

内置的几种映射类型写法

```typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Partial<T> = {
  [P in keyof T]?: T[P];
};

type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type Record<T extends keyof any, K> = {
  [P in T]: K;
};
```

# 条件类型

示例代码

```typescript
type Exclude<T, U> = T extends U ? never : T;
```

以上代码是说，如果 T 是能赋值给 U 的，那就不返回，如果不能，那就返回。这样就可以过滤掉 T 中存在的在 U 中也定义的内容

TS 中预定义的条件类型：

- `Exclude<T, U>` : 从 T 中剔除可以赋值给 U 的类型。
- `Extract<T, U>` : 提取 T 中可以赋值给 U 的类型。
- `NonNullable<T>` : 从 T 中剔除 null 和 undefined。
- `ReturnType<T>` : 获取函数返回值类型。
- `InstanceType<T>` : 获取构造函数类型的实例类型。

手动实现示例：[advance3.ts](./demos/advance3.ts)
