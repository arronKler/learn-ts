# 实战-创建项目

## 1. 使用 webpack 手动创建一个基于 ts 的 react 项目

[项目 demo 地址](./demos/react-project/)

## 2. 使用 create-react-app 创建项目

```bash
npx create-react-app ts-react-app --typescript
```

[使用 create-react-app 创建的项目](./demos/ts-react-app/)

## 使用 TS 开发 React 项目的区别

- 使用 TS 开发函数组件的时候需要确定 props 类型，开发类组件的时候需要确定 props 类型和 state 的类型（通过泛型传入）
- 使用 react 开发的时候，Hooks 是未来
