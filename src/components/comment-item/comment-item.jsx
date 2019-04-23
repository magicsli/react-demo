/* eslint-disable no-script-url */
import React, {Component}  from "react";
import PropTypes from "prop-types"
import PubSub from 'pubsub-js'
import "./index.css";

export default class CommentItem extends Component{

    static propTypes = {
        comments:PropTypes.object.isRequired
    }

    handleDelet = ()=>{
        PubSub.publish('del', this.props.index)
        
    }

    render(){
        const {comments} = this.props;
        return(
                <li className="list-group-item">
                    <div className="handle">
                       {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */} 
                        <a onClick={this.handleDelet} href="javascript:;">删除</a>
                    </div>
                    <p className="user"><span>{comments.username}</span><span>说:</span></p>
                    <p>{comments.content}</p>
                </li>
         )
    }
}