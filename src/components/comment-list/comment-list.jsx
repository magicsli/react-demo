import React, { Component } from 'react';


import "./index.css";

export default class CommentList extends Component {

    // static propTypes = {
    //     comments: PropTypes.array.isRequired
    // }

  render() {
    return (
        <div className="col-md-8">
            <div className="reply">评论回复: </div>
            <h2 style={{ dispaly: "none" }}>暂无评论,点击左侧添加评论!!!</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="handle">
                        <a href="javascript:;">删除</a>
                    </div>
                    <p className="user"><span>xxx</span><span>说:</span></p>
                    <p>React不错</p>
                </li>
            </ul>
        </div>
    )
  }
}
