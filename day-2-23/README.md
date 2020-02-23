# 枚举类型

枚举可以分为数字枚举、字符串枚举，以及两者放在一起的异构枚举。需要特别注意的一点是<u>只有数字枚举是可以进行反向映射的</u>

在日常开发中经常在传递给后端的某个字段是限定的几个特定的值，且都是硬编码，这种情况就可以用数字枚举。如果是对在用户操作后会根据返回状态给予特定的提示内容，就可以使用字符串枚举。异构枚举一般不推荐使用。

枚举的出现能够减少在程序中写很多不易识别和使用的硬编码，在没有枚举之前，可能我们是使用对象字面量或者 map 来使用的，现在有了枚举这一工具，很多情况就可以直接用枚举来做了，提高程序的可读性和可维护性。

## 常量成员与计算成员

枚举的成员是常量的就是**常量成员**，也即成员的值是在编译阶段就已经知道的。还有一种枚举成员叫做**计算成员**，是指枚举成员的值在运行的时候执行代码才能知道的。需要注意的是，在计算成员之后的常量成员，必须要给一个初始值。

## 常量枚举

`const enum Month { ... }` 在 enum 关键字前加上 const 关键字就是常量枚举，与普通枚举不同的地方在于，常量枚举在编译后并不生成枚举代码，而是直接将具体的值给到了使用枚举的地方，这样可以降低额外生成的代码上的开销。不过既然是在编译阶段就处理完所有事情，那自然有一点限制就是，只能有常量成员，不能用计算成员。

## 反向映射

数字类型的枚举，除了可以通过枚举名得到枚举值，也可以直接通过枚举值得到对应的枚举名。这个特性在字符串枚举中不存在。

```typescript
enum Role {
  Reporter = 1,
  Developer,
  Maintainer,
  Guest
}

console.log(Role.Developer); // ===> 2
console.log(Role[3]); // ===> Maintainer
```

# 接口

接口可以用来约束对象，函数以及类的结构和类型。它会对值所具有的结构进行类型检查。从代码层面来看，一个接口就是某种类型的一个定义和命名，也可以当做给到第三方代码的一个契约。当对接口进行类型检查的时候，采用的是“鸭式辩型”法，简单说就是只对必要的属性做检查，看其是否存在并且类型匹配。

对象类型接口、函数类型接口

## 额外类型检查

> 对象字面量会被特殊对待而且会经过 **额外属性检查**，当将它们赋值给变量或作为参数传递的时候。 如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误。

绕过类型检查的方法有三种：

1. 将对象字面量先赋值给一个变量，然后将变量作为参数传递
2. 使用类型断言 `as` （推荐）
3. 在接口中增加兼容的索引签名

## 可索引的接口

通过定义索引签名来定义可索引的接口，一般是用在对数组的类型定义上。

# 小收获

- 在 vscode 中，可以使用顶部的运行按钮直接执行 ts 文件的代码（前提是全局装了 ts-node），快捷键 `control + option + N`