# 关于 TS

Typescript 是 JavaScript 的一个超集, TS 为 js 扩展了很多能力。TS 最终还是会编译为 JavaScript 才能在浏览器中运行。因而可以说，现在能用 JavaScript 的地方都能用 TS。

而 Typescript 有更多的好处。它有严格的类型检查，让很多错误能直接在编译期甚至是还在编辑器里就能发现。其次它也增加了很多语言扩展，比如接口、模块、类、泛型等，让写代码更加严谨，高效。TS 与其说是一门语言，在目前来看，其实更像是一个工具，帮助我们发现代码问题，提高代码质量，提升开发幸福感。

# 重塑类型思维

学习 TS 的过程不只是学习一点新的语法知识点的过程，更是强化**类型思维**的过程。对于很多没有学习过 C、C++、Java 一类的强类型语言，直接就上手 JavaScript 这门动态弱类型语言的人来说，类型思维是很陌生的，而这又是学习 TS 的必经之路。语法总能看会，思维才是需要磨练的重点，学习过程中应该重点做这方面的训练。

强、弱、动、静的语言分类各自大概可以如下表述：

- 强类型语言：不允许改变变量类型，除非类型转换
- 弱类型语言：变量能被赋予不同的类型
- 动态类型语言：变量类型在运行阶段确定
- 静态类型语言：变量的类型在编译阶段确定

## JavaScript 是一门动态弱类型语言

先说动态，变量类型在运行阶段确定，这会导致一些的编译转换工作都是在运行的时候去做的，一定程度会降低运行效率；错误无法更早发现，甚至 bug 会隐藏十天半个月，只要那行错误代码没有被执行到，就会一直隐藏着。

再谈弱类型，弱类型会提供很大的灵活性，只要是个变量就能放任何值，不需要关心是黑猫还是白猫，反正都能逮耗子，用处是一样的。这是 js 写起来很爽的地方，但也是 bug 出现最多的地方，就像本来是用来洗脚的盆被你拿来洗了脸。但是弱类型的话，也意味着在执行的时候，js 引擎会做更多的工作来让弱类型生效，会增加一定的计算资源和存储资源。

## Typescript 是静态弱类型语言

这一点我一开始猜测 TS 可能是强类型的语言，毕竟是要做类型声明和类型检查的嘛。查了一些其他的资料发现，它应该被认为是弱类型的。

TS 为了兼容 JS，在类型方面还是有一些比较宽松的地方，比如很明显的 any 类型就是一个"bug"，让一个变量可以放任何类型的值，这显然不是强类型语言所强调的。

## 语言类型之争

在查资料的过程中发现，其实以上说法也不能完全界定其语言类型，因为什么是强、弱类型语言，什么是动、静态类型语言，实际上是没有一个特别标准的定义的，所以以上类型的区分不是一个黑白分明的边界，可以当做一个近似的答案。

# 搭建一个用于 TS 的 webpack 工程

大部分内容和正常搭建一个 webpack 工程项目没太多区别，主要需要注意的要装上 `typescript`和 `ts-loader` 作为编译 ts 代码的依赖

# TS 数据类型

在 JavaScript 中其实也是由数据类型的，我们常说 JavaScript 包含 6 种基本数据类型，string、boolean、number、null、undefined、symbol，还有一种对象类型。不过由于 js 是弱类型的，我们在使用的时候无需声明某个变量是属于什么类型的

TS 是 js 的超集也包含 js 已有的数据类型，另外还有一些其他扩展类型。包括 void、any、never、tuple、enum 和一些高级类型。

## 容易混淆的点

- undefined 和 null 值是任何类型的子类型，因而是可以赋值给任何类型的变量的，不过如果你在 tsconfig 中开启了 strictNullCheck，那这两个类型就只能赋值给他们自身或者 void 了

# 类型断言

类型断言好比其他语言中的类型转换，在 TS 中，就是用来告诉编译器，我知道这个变量的具体类型，让编译器依照你所判定的类型来运行。类型断言示例 `<string>someVariable` , `(someVariable as string).length`