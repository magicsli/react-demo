import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Search extends Component {
  
  static propTypes = {
    getData: PropTypes.func.isRequired
  }

  state = {
    keyWord:""
  }

  handleInput = (e)=>{
    let {value} = e.target;
    this.setState({keyWord:value})
  }

  handleGet = ()=>{
      let {keyWord} = this.state;
      this.props.getData(keyWord)
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
