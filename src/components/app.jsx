import React, { Component } from 'react'
import logo from '../logo.svg';

export default class app extends Component {
  render() {
    return (
      <div>
        <img className="logo" src={logo} alt="logo" />
        <p className="title">React App组件</p>
      </div>
    )
  }
}
