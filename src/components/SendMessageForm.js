import React from "react";
import SendIcon from '@mui/icons-material/Send';
import TextareaAutosize from '@mui/material/TextareaAutosize';

function SendMessageForm() {

    return (
        <form className="SendMessageForm">
            <TextareaAutosize
                className="SendMessageForm__textarea"
                role="textbox"
                aria-multiline="true"
                aria-placeholder="How can we help you?"
                aria-label="chat textarea"
                placeholder="How can we help you?"
            />
            <div className="SendMessageForm__send-icon-box">
                <SendIcon className="SendMessageForm__send-icon"/>
            </div>

            
        </form>
    )

}

export default SendMessageForm;