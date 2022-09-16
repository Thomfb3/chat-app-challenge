import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';


function ChatIconButton({ openChat, chatIsOpen }) { 

    return (
        <div className={`ChatIconButton ${!chatIsOpen ? "" : "ChatIconButton__close"}`} onClick={openChat}>
            <ChatBubbleIcon
                className="ChatIconButton__icon"
                sx={{ width: '34px', height: '34px' }}
            />
        </div>
    )
}

export default ChatIconButton;
