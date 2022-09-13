import React, { useState, useEffect } from "react";
import ChatBubble from "./ChatBubble";
import data from '../test/messages.json';
import { v4 as uuidv4 } from 'uuid';



function MessageList() {
  

    return (
        <div className="MessageList">
            {data.messages.map(m => (
                <ChatBubble
                    key={uuidv4()}
                    direction={m.direction}
                    message={m.message}
                />
            ))}
        </div>
    )

}

export default MessageList;
