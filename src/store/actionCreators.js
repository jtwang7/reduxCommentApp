import { INPUT_CHANGE, TEXT_AREA_CHANGE, COMMENT_SUBMIT, DELETE_COMMENT } from "./actionTypes"

export const inputChangeAction = (value) => ({
    type: INPUT_CHANGE,
    value,
})
export const textAreaChangeAction = (value) => ({
    type: TEXT_AREA_CHANGE,
    value,
})
export const commentSubmitAction = () => ({
    type: COMMENT_SUBMIT,
})
export const deleteCommentAction = (index) => ({
    type: DELETE_COMMENT,
    index,
})