##  感谢
  + 此项目学习于哔哩哔哩网的尚硅谷视频, 多谢各位的教程提供
## 项目简介
  + 这个项目主要是用于学习React的demo组件开发,没有生产条件, 我会在这里将我所学到的React技术转化为各类的demo组件,

  + 此项目主要利用 create-react-app 官方脚手架进行搭建环境, 采用的 react + webpack + eslint + ...各类插件demo
    
## 作者博客 
   <a href="www.magicsli.com">www.magicsli.com</a>欢迎提供意见( = =  如果有HR小姐姐或在老哥哥也欢迎留言哦!!! )

## demo 组件内容

###  评论框 demo   
  + 使用原生的React + React-dom + prop-types 组成一个基础的评论面板,支持动态增删, 跨组件交互

###  Axios demo
  + 增加了Axios 插件, 是一个通过关键字搜索github用户的搜索面板, 通过在input输入用户关键字进行用户查询
  + Axios用法:
      - axios.get( url ).then( (response) => { ... } )
      - axios基于promise风格对ajax进行封装, 书写起来更舒服

### PubSub 消息订阅机制 demo
  + 使用Pubsub对之前的评论框demo组件进行事件重写, 解决了跨组件传值的繁琐性, 
  + Pubsub的用法;
    - PubSub.publish( '事件名', '传输的数据'  )    -  发布消息
    - PubSub.subscribe("事件名" , (msg, data) => {
      ...
    }  )

### react-router demo (遇到一个bug)
  + 使用react-router-dom 制作了一个类似tab栏的三级联动的小demo, 通过路由进行组件切换,传值
  + react-router-dom 实际用法:
      - 导入react-router-dom 组件
      - 初始化路由组件 `<BrowserRouter></BrowserRouter>` 将app结构放在里面
      - + 设置路由 route 和 Link或NavLink 进行消息的传递触发.用法类似于消息订阅机制:
          - 定义NavLink `<NavLink to="/url" activeClassName="activeClass" />`
          - 定义route   `<Route path="/url" component={`Component `} />`
          - 传参 在NavLink定义中 `<NavLink to="/url/:id" />` 即使用站位符定义了一个位置的地址, 且使用id将其存储在 this.props.match.params 中

  + 遇到的问题:
    - 在二级路由的状态下刷新页面, 这时候会出现在index.html中引入的css样式表失效, 查看Network请求时,发现请求到的样式表以及一些组件返回的是index.html的html内容?