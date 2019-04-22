import React, { Component } from 'react'

export default class CommentAdd extends Component {
  render() {
    return (
        <div className="col-md-4">
            <form className="form-horizontal">
                <div className="form-group">
                    <label htmlFor="">用户名</label>
                    <input type="text " className="form-control" placeholder="用户名" />
                </div>
                <div className="form-group">
                    <label htmlFor="">评论内容</label>
                    <textarea className="form-control" placeholder="评论内容" rows="6"></textarea>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="button" className="btn btn-default  pull-right" >
                            提交
                                </button>
                    </div>
                </div>
            </form>
        </div>

    )
  }
}
