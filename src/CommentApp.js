import React, { Component } from 'react';
import CommentInput from "./components/CommentInput"
import CommentList from './components/CommentList';

class CommentApp extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <CommentInput />
                <CommentList />
            </div>
        );
    }
}

export default CommentApp;