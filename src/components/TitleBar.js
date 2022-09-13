import React from "react";
import CloseIcon from '@mui/icons-material/Close';


function TitleBar() { 

    return (
        <div className="TitleBar">
            <p>Chat</p>
            <CloseIcon 
                sx={{ width: '24px', height: '24px' }}
            />
        </div>
    )

}



export default TitleBar;
