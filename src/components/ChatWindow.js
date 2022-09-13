import React from "react";
import TitleBar from "./TitleBar";
import MessageList from "./MessageList";
import SendMessageForm from "./SendMessageForm";


function ChatWindow() {

    return (
        <div className="ChatWindow">
            <TitleBar />
            <MessageList />
            <SendMessageForm />
        </div>
    )
}


export default ChatWindow;
