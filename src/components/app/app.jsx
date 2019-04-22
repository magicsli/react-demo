import React, { Component } from 'react'

import CommentAdd from "../comment-add/comment-add"
import CommentList from '../comment-list/comment-list'
export default class App extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {

    //     }
    // }

    state = {
        comments:[
            {username:"Tony",  content:"React学起来想死"},
            {username:"jack", content:"你学React看起来像蔡徐坤"}
        ]
    }

  render() {
    const {comments} = this.state

    return (
      <div>
          <header className="site-header jumbotron">
            <div className="container">
                <div className="row">
                    <div className="colo-xs-12">
                        <h1>请发表对React的评论</h1>
                    </div>
                </div>
            </div>
          </header>
          <div className="container">
                <CommentAdd />
                <CommentList comments={comments} />
           </div>
      </div>
    )
  }
}