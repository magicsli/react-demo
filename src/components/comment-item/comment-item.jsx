/* eslint-disable no-script-url */
import React, {Component}  from "react";
import PropTypes from "prop-types"

import "./index.css";

export default class CommentItem extends Component{

    static propTypes = {
        comments:PropTypes.object.isRequired,
        handleDelet: PropTypes.func.isRequired
    }

    handleDelet = ()=>{
        this.props.handleDelet(this.props.index)
        
    }

    render(){
        const {comments} = this.props;
        const {index} = this.props;
        return(
                <li className="list-group-item">
                    <div className="handle">
                       {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */} 
                        <a ref={ a => this.del = a } onClick={this.handleDelet} index={index} href="javascript:;">删除</a>
                    </div>
                    <p className="user"><span>{comments.username}</span><span>说:</span></p>
                    <p>{comments.content}</p>
                </li>
         )
    }
}