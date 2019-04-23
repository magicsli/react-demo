import React, { Component } from 'react'

import PubSub from 'pubsub-js'

export default class Search extends Component {
  


  state = {
    keyWord:""
  }

  handleInput = (e)=>{
    let {value} = e.target;
    this.setState({keyWord:value})
  }

  handleGet = ()=>{
      //  得到input的关键字
      let keyWord = this.state.keyWord.trim(); 
      if(keyWord){
        //  发布消息
        PubSub.publish("search", keyWord)
      }
  }

  render() {
    return (
      <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <div>
            <input onChange={this.handleInput} value={this.state.keyWord}  type="text" placeholder="enter the name you search" />
            <button onClick={this.handleGet}>Search</button>
          </div>
      </section>
    )
  }
}
