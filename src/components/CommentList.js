import React, { Component } from 'react';
import store from "../store/index"
import Comment from "./Comment"

class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()

        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }

    storeChange() {
        this.setState(store.getState())
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.list.map(
                        (item, index) => (<Comment content={item} index={index} key={index} />)
                    )}
                </div>
            </div>
        );
    }
}

export default CommentList;