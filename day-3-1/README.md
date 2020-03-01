# 从 ts-loader 到 babel

在 [day-2-22 的 webpack project](../day-2-22/demos/webpack-project) 中，使用了 ts-loader 用来配置 webpack，对 ts 文件进行编译和类型检查。注意这里是会同时做编译和类型检查工作的，不过在你用 VS code 的情况下，类型检查是在编写过程中就会有的。所以可以给 ts-loader 传递一个 `transpileOnly` 的选项，让它只执行编译过程，速度会快上很多。

这时候如果想要类型检查，可以通过 `fork-ts-checker-webpack-plugin` 实现。它是运行在一个独立进程中的，所以对速度影响就很小

除了 ts-loader 还有一个 loader 也很好用，叫做 `awesome-typescript-loader`，与 ts-loader 的区别：

1. 更适合与 babel 集成，使用 babel 的转义和缓存
2. 不需要额外安装插件，就可以把类型检查放在独立进程中执行

**不过综合来说，还是建议使用 ts-loader 默认的配置就好**

## 使用 babel

为什么使用了 TS 还要谈 babel？

因为如果是 tsc 编译 ts 文件，会先编译成 js，然后 js 再通过 babel 编译，这个过程显然还是比较长的。而在 babel7 之后，可以直接让 ts 文件通过 babel 的编译能力，直接编译成目标 js 文件。效率更高。

[ts-babel demo](./demos/ts-babel)

可以看示例，将 babel 只作为语言转换，而在 tsconfig 中设置 noEmit 属性，用 tsc 来做类型检查。

## 如何选择 Typescript 编译工具

1. 如果没有使用过 Babel，首选 Typescript 自身的编译器（可配合 ts-loader 使用）
2. 如果项目中已经使用了 Babel，安装 @babel/preset-typescript (可配合 tsc 做类型检查)
3. 两种编译工具不要混用
