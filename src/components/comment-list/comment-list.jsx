
import React, { Component } from 'react';
import PropTypes from "prop-types";
import CommentItem  from "../comment-item/comment-item"
import "./index.css";

export default class CommentList extends Component {

    static propTypes = {
        comments: PropTypes.array.isRequired
    }

  render() {
      const {comments} = this.props;
      console.log(comments);
    return (
        <div className="col-md-8">
            <div className="reply">评论回复: </div>
            <h2 style={{ dispaly: "none" }}>暂无评论,点击左侧添加评论!!!</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="handle">

             {   /* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
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
