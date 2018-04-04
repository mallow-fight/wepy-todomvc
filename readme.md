# wepy-todomvc

1. [申请账号](https://developers.weixin.qq.com/miniprogram/dev/)

2. 安装wepy-cli：`sudo cnpm install wepy-cli -g` `版本>1.7.0`

3. wepy new your-project-name

4. cd your-project-name

5. cnpm i

6. wepy build --watch

7. wepy项目结构

```txt
├── dist                   小程序运行代码目录（该目录由WePY的build指令自动编译生成，请不要直接修改该目录下的文件）
├── node_modules
├── src                    代码编写的目录（该目录为使用WePY后的开发目录）
|   ├── components         WePY组件目录（组件不属于完整页面，仅供完整页面或其他组件引用）
|   |   ├── com_a.wpy      可复用的WePY组件a
|   |   └── com_b.wpy      可复用的WePY组件b
|   ├── pages              WePY页面目录（属于完整页面）
|   |   ├── index.wpy      index页面（经build后，会在dist目录下的pages目录生成index.js、index.json、index.wxml和index.wxss文件）
|   |   └── other.wpy      other页面（经build后，会在dist目录下的pages目录生成other.js、other.json、other.wxml和other.wxss文件）
|   └── app.wpy            小程序配置项（全局数据、样式、声明钩子等；经build后，会在dist目录下生成app.js、app.json和app.wxss文件）
└── package.json           项目的package配置
```

> 微信开发者工具

```txt
1.选择小程序
2.填写appId
3.填写项目dist路径
4.取消开发工具右上角详情中的勾选
```

> [redux](http://cn.redux.js.org)
- [x] Action
  - [x] 把数据从应用传到store的有效载荷
  - [x] store数据的唯一来源
  - [x] 使用store.dispatch()将action传到store
  - [x] 普通js对象，具有type和其他属性
  - [x] 可写成函数返回对象形式，store.dispatch(fn())
- [x] Reducer
  - [x] 所有的state都被保存在一个单一的对象树中
  - [x] 纯函数，接受旧的state和action，返回新的state
  - [x] 禁止操作
    - [x] 修改传入参数
    - [x] 执行有副作用的操作，如api请求和路由跳转
    - [x] 调用非纯函数，如Date.now()或Math.random()
  - [x] 传入的参数相同，得到的结果就应该相同
- [x] Store
  - [x] getState()
  - [x] dispatch(action)
  - [x] subscrible(listener) 注册监听器
  - [x] (subscrible(listener))() 注销监听器
- [x] 三大原则
  - [x] 单一数据源
  - [x] state是只读的
  - [x] 使用纯函数执行修改

> [wepy-redux](https://www.npmjs.com/package/wepy-redux)

## 多任务列表

```txt
current state.todo:
{
  todoId: xx,
  todos: [
    {id: 0, text: "1111", complete: false, disabled: true, classes: ['class1']},
    {id: 0, text: "1111", complete: false, disabled: false, classes: ['class2']},
    ...
    {id: 0, text: "1111", complete: false, disabled: true, classes: ['class1']},
    {id: 0, text: "1111", complete: true, disabled: true, classes: ['class3']}
  ]
}

you can create a todomvc list, the tree of it like:
{
  todoId: xx, // prevent drag one to other cause conflict, so put it outside
  todosList: [
    [
      {id: 0, text: "1111", complete: false, disabled: true, classes: ['class1']},
      {id: 0, text: "1111", complete: false, disabled: false, classes: ['class2']},
      ...
      {id: 0, text: "1111", complete: false, disabled: true, classes: ['class1']},
      {id: 0, text: "1111", complete: true, disabled: true, classes: ['class3']}
    ],
    [
      {id: 0, text: "1111", complete: false, disabled: true, classes: ['class1']},
      {id: 0, text: "1111", complete: false, disabled: false, classes: ['class2']},
      ...
      {id: 0, text: "1111", complete: false, disabled: true, classes: ['class1']},
      {id: 0, text: "1111", complete: true, disabled: true, classes: ['class3']}
    ],
    [
      {id: 0, text: "1111", complete: false, disabled: true, classes: ['class1']},
      {id: 0, text: "1111", complete: false, disabled: false, classes: ['class2']},
      ...
      {id: 0, text: "1111", complete: false, disabled: true, classes: ['class1']},
      {id: 0, text: "1111", complete: true, disabled: true, classes: ['class3']}
    ]
    ...
  ]
}

try it! guys!
```