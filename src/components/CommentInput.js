import React, { Component } from 'react';
import store from "../store/index"
import { inputChangeAction, textAreaChangeAction, commentSubmitAction } from "../store/actionCreators"
import { CommentInputUI } from "../componentsUI/CommentInputUI"

class CommentInput extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()

        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)

        this.inputChange = this.inputChange.bind(this)
        this.textAreaChange = this.textAreaChange.bind(this)
        this.commentSubmit = this.commentSubmit.bind(this)
    }

    storeChange() {
        this.setState(store.getState())
    }

    inputChange(e) {
        const action = inputChangeAction(e.target.value)
        store.dispatch(action)
    }

    textAreaChange(e) {
        const action = textAreaChangeAction(e.target.value)
        store.dispatch(action)
    }

    commentSubmit() {
        const action = commentSubmitAction()
        store.dispatch(action)
    }

    render() {
        return (
            <div>
                <CommentInputUI
                    inputChange={this.inputChange}
                    textAreaChange={this.textAreaChange}
                    commentSubmit={this.commentSubmit}
                />
            </div>
        )
    }
}

export default CommentInput;