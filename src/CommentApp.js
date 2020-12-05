import React, { Component } from 'react';
import CommentInput from "./components/CommentInput"
import CommentList from './components/CommentList';
import "./components/comment.css"

class CommentApp extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className="app">
                    <CommentInput />
                    <div className="listContainer">
                        <CommentList />
                    </div>
                </div>
            </div>
        );
    }
}

export default CommentApp;