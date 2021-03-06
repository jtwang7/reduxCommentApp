import "antd/dist/antd.css"
import { Input, Button } from 'antd'
import "../components/comment.css"

const { TextArea } = Input;

export const CommentInputUI = (props) => {
    return (
        <div>
            <div className="appContainer">
                <div className="inputContainer">
                    <div className="input">
                        <span className="text">用户名:</span>
                        <Input
                            style={{ width: "285px",}}
                            placeholder="Please enter your name"
                            onChange={props.inputChange}
                        />
                    </div>
                    <div className="input">
                        <span className="text">评论内容:</span>
                        <TextArea
                            rows={5}
                            style={{ width: "285px",}}
                            // ref={(textArea) => (this.textArea = textArea)}
                            onChange={props.textAreaChange}
                        />
                    </div>
                </div>
                <div className="buttonContainer">
                    <Button
                        type="primary"
                        onClick={props.commentSubmit}
                    >发布</Button>
                </div>
            </div>
        </div>
    );
}