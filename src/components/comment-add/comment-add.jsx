import React, { Component } from 'react'

import PropTypes from 'prop-types'
export default class CommentAdd extends Component {

    static propTypes ={
        handleInput: PropTypes.func.isRequired
    }

    handleInput = ()=>{
        let username = this.username.value.trim();
        let content = this.content.value.trim();
        if(username === "" || content ===  "") return;
        this.props.handleInput(username, content);
        this.username.value = "";
        this.content.value = "";
    }   

  render() {
      
    return (
        <div className="col-md-4">
            <form className="form-horizontal">
                <div className="form-group">
                    <label htmlFor="">用户名</label>
                    <input type="text" className="form-control" placeholder="用户名" ref={username => this.username = username} />
                </div>
                <div className="form-group">
                    <label htmlFor="">评论内容</label>
                    <textarea className="form-control" placeholder="评论内容" rows="6" ref={content => this.content = content}></textarea>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="button" className="btn btn-default  pull-right" onClick={this.handleInput}>
                            提交
                        </button>
                    </div>
                </div>
            </form>
        </div>

    )
  }
}
