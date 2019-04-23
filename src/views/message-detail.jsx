import React, { Component } from 'react'

const allMessage = [
    { id: "1", title: "message001", content:"你的rap像吴亦凡" },
    { id: "3", title: "message003", content:"你演戏像鹿晗"},
    { id: "6", title: "message006", content:"你打球像蔡徐坤"}
];

export default class MessageDetail extends Component {

  render() {
      const { id } = this.props.match.params;
      
      const message = allMessage.find( (m) => m.id === id )
    return (
            <ul>
                <li>ID : {message.id}</li>
                <li>TITLE:  {message.title}</li>
                <li>CONTENT: {message.content}</li>
            </ul>
    )
  }
}
