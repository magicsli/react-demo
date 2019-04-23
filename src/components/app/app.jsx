import React, { Component } from 'react'
import PubSub from 'pubsub-js'


import CommentAdd from "../comment-add/comment-add"
import CommentList from '../comment-list/comment-list'
import Getkey from '../comment-axios/comment-gethub-Getkey'

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

      /*  子组件需要传值, 需要在父组件设置回调函数,  - 繁琐 - */
    // handleInput = (username, content)=>{
    //   const {comments} = this.state;
    //   comments.push({username, content});
    //   this.setState({comments})
    // }



    componentDidMount() {
      PubSub.subscribe("add", (msg, data) => {
        const {comments} = this.state;
        comments.push(data);
        this.setState(comments);
      });
      PubSub.subscribe("del", (msg, index)=>{
        const { comments } = this.state;
        comments.splice(index, 1);
        this.setState({ comments })
      })
    }
    

  render() {
    const {comments} = this.state;
    return (
      <div>
          <header className="site-header jumbotron">
            <div className="container">
                <div className="row">
                    <div className="colo-xs-12">
                        <h1>请发表对React的评论</h1>
                        <Getkey />
                    </div>
                </div>
            </div>
          </header>
          <div className="container">
                {/* 原生传值方式 */}
                {/*<CommentAdd handleInput = {this.handleInput} />*/}
               
                <CommentAdd  />
                <CommentList comments={comments} />
           </div>
      </div>
    )
  }
}
