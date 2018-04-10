# react服务端渲染

## 一、客户端和服务端渲染对比

  现如今的SPA，backbone、ember、vue、angular、react这些包括各家的前端轮子都biubiubiu冒出来，带来的好
  处真的太多，以前由server控制的转移到客户端。页面渲染、路由跳转、数据拉取等等等等JS完全控制了，也大大提
  高了用户体验，这里讲的客户端渲染，基本上就是客户端ajax拉取数据，然后渲染，之后js操控全部的逻辑，
  但是这也就主要造成了两个问题：

  1、SEO问题，爬虫抓不到内容。目前这个也是有五花八门的解决方案。

  2、客户端初始化渲染比服务端页面直出还是慢，需要等js加载完之后才能渲染。

  因此为了解决上面两个问题，我们就有了 服务端渲染
http://blog.csdn.net/zccz14/article/details/50833960

## 二、服务端渲染

  用于用户首次请求，便于SEO，加快页面显示

  原理：

  server跟client共享一部分代码

  server拿到首次渲染需要的数据initialState

  server根据initialState把html render出来

  server把html和initialState发往客户端

  其实服务端渲染以前就有了，只是react的出现让这个重新被提起，因为react能让它实现起来更优雅


## 三、服务端渲染流程

  取得store

  获取initialState

  用renderToString渲染html

  把html和initialState注入到模板中，initialState用script的方式写在window对象下，客户端就可以用window. initial_state 取得

  发送注入模板后的字符串到客户端


## 四、服务端渲染代码实现步骤

### 1、项目目录结构

```
react-server-example
|---app   // 单页面应用项目文件夹
|   |---compontents
|   |---util
|   |---store
|   |---
|   |---
|   |---
|   |---
|   |---
|   |---
|---server   // 服务器文件夹
|   |---views   // 模板引擎文件夹
|   |---index.js   // babel启动文件
|   |---server.js   // expres服务
|---public   // 发布内容的文件夹
|   |---assets   // 发布之后的文件
|---README.md   // 项目文档
|---package.json
|---.gitignore
|---webpack.develop.config.js
|---webpack.public.config.js
|---gulpfile.js
|
|
|
|
|
|
```
### 2、server部分

### 、app部分部分

### 、webpack部分

### 、react-router部分

### 、redux部分

### 、react-redux部分

### 、SEO部分

## 五、服务器渲染步骤

1. 搭建express服务器，访问/可以返回内容
2. 渲染一个单独的组件
3. 用webpack构建
4. 用webpack的生成的json文件渲染（两种方式）
5. 配合react-router
6. 配合redux

# 重要参考文章
http://www.tuicool.com/articles/nQJR7vY  （最好）
http://www.jianshu.com/p/97af0000516a  （差劲）

# 重要参考项目源代码
https://github.com/Galen-Yip/react-redux-router
https://github.com/webpack/react-webpack-server-side-example
