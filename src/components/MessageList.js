import React from "react";
import { v4 as uuidv4 } from 'uuid';
import ChatBubble from "./ChatBubble";
import TypingIndicatorBubble from "./TypingIndicatorBubble"


function MessageList({ messages, typeIndicatorOn, showTypeIndicator, showDate }) {
    return (
        <div id="MessageList" className="MessageList">
            {messages.map(m => (
                <ChatBubble
                    key={uuidv4()}
                    direction={m.direction}
                    message={m.message}
                    date={m.date}
                    showDate={showDate}
                />
            ))}
            {typeIndicatorOn && showTypeIndicator && <TypingIndicatorBubble />}
        </div>
    )
}

export default MessageList;
