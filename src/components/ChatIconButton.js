import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';


function ChatIconButton({ openChat, chatOpen }) { 
    const [chatIconOn, setChatIconOn] = useState(true)

    const handleClick = () => {
        setChatIconOn(false)
    }

    return (
        <div>
            <ChatBubbleIcon
                className={`ChatIconButton ${chatIconOn ? "": "ChatIconButton__close"  }`}
           
                sx={{ width: '34px', height: '34px' }}
            />
        </div>
    )

}



export default ChatIconButton;
