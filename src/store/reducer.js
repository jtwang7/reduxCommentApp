import { act } from "react-dom/test-utils"

const defaultState = {
    inputValue: "",
    textAreaValue: "",
    list: [],
}

export default (state = defaultState, action) => {
    if (action.type === "input_change") {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (action.type === "text_area_change") {
        let newState = JSON.parse(JSON.stringify(state))
        newState.textAreaValue = action.value
        return newState
    }
    if (action.type === "comment_submit") {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(`${newState.inputValue}: ${newState.textAreaValue}`)
        return newState
    }
    if (action.type === "delete_comment") {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }
    return state
}