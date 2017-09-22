# 概要
### 主要演示 tree-shaking 功能的使用条件和限制
- 必须为 es2015 模块
- webpack 指定为 production 环境才会真正去掉代码，在 dev 模式下，会通过注释告诉你这段代码没有用到
- loader 的执行顺序