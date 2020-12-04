import React, { Component } from 'react';
import "antd/dist/antd.css"
import { Button } from 'antd'
import store from '../store';
import { deleteCommentAction } from "../store/actionCreators"

class Comment extends Component {
    constructor(props) {
        super(props);

        this.deleteComment = this.deleteComment.bind(this);
    }

    deleteComment(index) {
        const action = deleteCommentAction(index)
        store.dispatch(action)
    }

    render() {
        return (
            <div>
                <div>
                    {this.props.content}
                    <Button
                        type="link"
                        onClick={() => (this.deleteComment(this.props.index))}
                    >删除</Button>
                </div>
            </div>
        );
    }
}

export default Comment;