# 基于NodeJS的全栈开发、测试、构建的工具包

## 重新审视 Backend For Frontend (BFF)

[BFF概念](https://mp.weixin.qq.com/s/IYddaaw2ps1wR2VT1dmcorePg)
已出现许久，使用的BFF层许多时候是被动的，被项目驱动着的，由于年久失修，整个框架存在着各种各样的问题，依附于大量的前端代码，导致迁移工作变得十分困难。

在之前开发的项目中，出现以下问题：

1. 项目开发、测试、构建流程不清晰，缺乏详细的文档，新人接手困难；
2. 前端代码和Node层代码强耦合，框架弹性差，升级迁移困难；

解决方案：

1. 规范项目结构，减少心智负担；
2. 框架文档友好、源码清晰精简；
3. 开发、测试、构建、部署工具化，无感开发；

## 项目说明
  1. cloud-cli: 用于开发Web前端项目，上传云组件，以及云开发；
  2. nestjs: 基于TS的Web框架，支持依赖注入;
  3. styled-system: 基于styled-components的[设计系统](https://styled-system.com/);
  4. ui: 基于[Zarm-React](https://zarm.gitee.io)的组件库;