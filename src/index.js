
import React from 'react';
import {render} from 'react-dom';


import "./index.css";

// 评论栏Demo    --------------------------------------------------------分割线
// import App from './components/app/app';


// Axios demo   ---------------------------------------------------------分割线
// import Axios_app from './components/app/axios-app';


// Router demo  ---------------------------------------------------------分割线
//import {BrowserRouter} from "react-router-dom"
//import App_Route from "./components/app/app-Route"
// render(<BrowserRouter>
//   < App_Route />
// </BrowserRouter>, document.getElementById("root")); 


// redux demo  ----------------------------------------------------------分割线
// 根据我们创建的reducer函数创建新的store管理对象
import {createStore} from 'redux'
import {counter} from './redux/reducers'
import AppRedux from './components/app/app-redux'
const store = createStore(counter);
// 设置渲染函数
function setrender(){
  render(<AppRedux store={store} />, document.getElementById("root")); 
}
// 初始化渲染
setrender()

// 监听消息
store.subscribe(setrender)











