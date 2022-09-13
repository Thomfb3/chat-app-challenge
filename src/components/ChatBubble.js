import React from "react";

function ChatBubble({ direction, message }) {

    return (
        <div className={
        `ChatBubble 
         ChatBubble__${
        direction === 'incoming'
        ? 'incoming'
        : 'outgoing'}`
        }>
            <div className="ChatBubble__bubble">
            {message}
            </div>
                
        </div>
    )

}

export default ChatBubble;
