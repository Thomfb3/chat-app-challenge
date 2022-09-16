import React, { useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

function SendMessageForm({ addMessageToChatMessages, handleUserIsActiveChange, handleMessageSubmit, responseCount }) {
    const [errorVisible, setErrorVisible] = useState(false)
    const [formData, setFormData] = useState({
        "message": "",
        "direction": "outgoing",
    })

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(data => ({ ...data, [name]: value }));
        setErrorVisible(false);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        if (formData.message === "") {
            setErrorVisible(true);
        } else {
            addMessageToChatMessages(formData, responseCount);
            setFormData({
                "message": "",
                "direction": "outgoing",
            })
        }
    }

    return (
        <form className="SendMessageForm">
            <TextareaAutosize
                className="SendMessageForm__textarea"
                role="textbox"
                aria-multiline="true"
                aria-placeholder="How can we help you?"
                aria-label="chat textarea"
                placeholder="How can we help you?"
                onChange={e => { handleChange(e); handleUserIsActiveChange() }}
                name="message"
                value={formData.message}
            />
            <div
                className="SendMessageForm__send-icon-box"
                onClick={handleSubmit}
            >
                <SendIcon
                    className="SendMessageForm__send-icon"
                />
            </div>
            <p
                className="SendMessageForm__error-message"
                style={{ display: errorVisible ? 'block' : 'none' }}
            >
                <ErrorOutlineIcon
                    sx={{
                        width: '18px',
                        height: '18px',
                        transform: 'translate(-3px, 5px)'
                    }} />
                Please type your message in the text area.
            </p>
        </form>
    )
}

export default SendMessageForm;