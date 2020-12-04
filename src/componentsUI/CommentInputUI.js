import "antd/dist/antd.css"
import { Input, Button } from 'antd'
import "../components/comment.css"

const { TextArea } = Input;

export const CommentInputUI = (props) => {
    return (
        <div>
            <div className="inputRow">
                <span>用户名:</span>
                <Input
                    style={{ width: "300px", marginLeft:"20px" }}
                    placeholder="Please enter your name"
                    onChange={props.inputChange}
                />
            </div>
            <div className="inputRow secondRow">
                <span>评论内容:</span>
                <TextArea
                    rows={5}
                    style={{ width: "285px", marginLeft:"20px" }}
                    // ref={(textArea) => (this.textArea = textArea)}
                    onChange={props.textAreaChange}
                />
            </div>
            <div>
                <Button
                    type="primary"
                    onClick={props.commentSubmit}
                >发布</Button>
            </div>
        </div>
    );
}