# 概要

## babel 相关知识

### plugin 概念

- babel 转换代码是通过一串顺序执行的 plugin 来完成的。
- 每个 plugin 应该只负责单一的一种代码转换工作
- plugin 执行顺序：
  - plugin 是由一个 key 为 AST 语法树中类型名，值为`(path: NodePath, state: any) => void` 或 `{enter: (path: NodePath, state: any) => void, exit: (path: NodePath, state: any) => void}`类型的对象编写而成
  - 多个 plugin 执行顺序为顺序执行
  - 单个 plugin 中若使用 enter 和 exit 两个生命周期，则执行顺序类似于 DOM 捕获和冒泡，[plugin1, plugin2] 执行顺序为 plugin1.enter plugin2.enter plugin2.exit plugin1.exit

### preset 概念

- preset 为一组 plugins 序列
- 多个 presets 间逆序执行



## 事例演示

1. `npm run build` 展示 typeof-plugin 如何把 typeof 语句替换掉
2. `npm run babel-plugin-demo` 演示执行顺序