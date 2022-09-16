import React from "react";
import CloseIcon from '@mui/icons-material/Close';


function TitleBar({ closeChat }) { 
    
    return (
        <div className="TitleBar">
            <p>Chat</p>
            <CloseIcon
                className="TitleBar__close"
                onClick={closeChat}
                sx={{ width: '24px', height: '24px' }}
            />
        </div>
    )
}

export default TitleBar;
