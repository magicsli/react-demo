
import React, { Component } from 'react';
import PropTypes from "prop-types";


import CommentItem  from "../comment-item/comment-item"


import "./index.css";


export default class CommentList extends Component {

    static propTypes = {
        comments: PropTypes.array.isRequired,
    }

  render() {
      const {comments} = this.props;
      console.log(comments);
      
    return (
        <div className="col-md-8">
            <div className="reply">评论回复: </div>
            <h2 style={ {display: comments.length ? "none" : "block"} }>暂无评论,点击左侧添加评论!!!</h2>
            <ul className="list-group">
                {comments.map((v, i) => <CommentItem  index={i}  key={i} comments={v} /> ) }
            </ul>
        </div>
    )
  }
}
