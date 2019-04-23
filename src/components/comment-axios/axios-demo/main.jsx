import React, { Component } from 'react'
import axios from 'axios'
import  PubSub from  "pubsub-js"


export default class Main extends Component {


  state = {
    initView: true,
    loading: false,
    users:null,
    errorMsg: null
  }

  componentDidMount() {
    //  订阅消息 (search)
    PubSub.subscribe('search', (msg, keyWord)=>{
        this.setState({
          initView:false,
          loading:true
        })

      const url = " https://api.github.com/search/users?q=" + keyWord;
      axios.get(url).then((response) => {
        console.log(response);
        const users = response.data.items;
        this.setState({
          loading: false,
          users
        })
      }).catch((errorMsg) => {
        this.setState({
          loading: false,
          errorMsg
        })
      })
    } )
  }
  

  render() {
    const {initView, loading, users, errorMsg} = this.state;
     if (initView) { 
       return <h2>请输入关键字</h2>
     }else if (loading){
       return <h2>正在请求中</h2>
     } else if (errorMsg){
       return <h2>{errorMsg}</h2>
     }else{
       return (
         <div className="row">
        { users.length ? users.map( (v, i)=>{
          return (
            <div className="card"  key={i} style={{ display:"inline-block",  padding:"20px", textAlign:"center", border:"1px solid #666"}}>
              <a href={v.url} target="noopener noreferrer">
                <img src={v.avatar_url} style={{ width: "100px" }} alt="" />
              </a>
              <p className="card-text">{v.login}</p>
            </div>
          )
        }) : <h2>查无此人</h2>  }
         </div>)   
       
     }  
  
  }
}
