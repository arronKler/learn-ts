# 类

TS 的类和 JS 的类很相似，在 JS 类的基础上做了一定的扩展

# 继承和成员修饰符

## 成员修饰符

修饰符有很多种，其中的以下三种是控制在实例和子类中的访问权限的。

- **public**。公有。实例和子类中都可以访问。默认的修饰符可以省略
- **private**。私有。实例和之类中都无法访问。给构造函数 private，那这个类既无法实例化也无法被继承
- **proteted**。受保护的。实例中无法访问，子类中可以访问。给构造函数 protected，只能被继承，无法实例化

还可以使用 **readonly** 修饰符修饰只读的属性，只读属性必须在声明时或构造函数里被初始化。

另外使用 **static** 修饰符可以声明静态的属性，这类属性可以被继承，一个特点是只能使用类名加静态属性名的方式来访问。

## 参数属性

构造函数中的参数直接添加修饰符（private, public, protected,readonly）可以很方便的直接定义并初始化一个成员。

```typescript
class Octopus {
  readonly numberOfLegs: number = 8;
  constructor(readonly name: string) {}
}
```

上面代码相当于

```typescript
class Octopus {
  readonly numberOfLegs: number = 8;
  readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
}
```

# 抽象类

抽象类无法被实例化，只能被继承，而后实现其中的抽象方法，因而抽象类都是作为被继承的基类使用的。抽象类可以抽离出事物的共性，有利于代码的复用。

相比于接口来说，抽象类中的方法可以有实现细节。在抽象类中的抽象方法才是只定义了方法签名，没有定义方法实现，方法实现放到继承了抽象类的那个类中去使用。

# 多态

在父类中定义一个抽象方法，在多个子类中各自实现这一方法，在程序运行时会根据不同的对象执行不同的操作，达到运行时绑定的目的。

这在 Java 等面向对象语言中很常见，我自己的实际应用中倒是没有怎么用到过，但理论上看是比较强大和合理的一个特性。