import React, { Component } from 'react'
import {Route} from 'react-router-dom'

import MessageDetail from './message-detail'
import MyNavLink from './myNavLink'

export default class Message extends Component {
    state = {
            messages:[]
        }

    componentDidMount() {
      // 模拟发送AJAX请求
      setTimeout(() => {
          const  messages = [
              {id:1, title:"message001"},
              {id:3, title:"message003"},
              {id:6, title:"message006"}
          ];
          this.setState({messages})

      }, 1000);
    }
    

  render() {

    return (
      <div>
        <ul>
          {this.state.messages.map((v, i) => (
            <li key={i}>
              <MyNavLink to={'/home/message/messagedetail/' + v.id}>{v.title}</MyNavLink>
            </li>
          ))}
        </ul>
        <Route path="/home/message/messagedetail/:id" component={MessageDetail} />
      </div>
     
    )
  }
}
