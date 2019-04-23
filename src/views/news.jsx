import React, { Component } from 'react'

export default class News extends Component {
  state = {
    newsArr:["new001", "new002", "new003"]
  }
  render() {
    return (
      <ul>
        {this.state.newsArr.map( (v, i)=> <li key={i}>{v}</li> )}
      </ul>
    )
  }
}
