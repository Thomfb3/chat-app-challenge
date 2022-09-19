import React from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RefreshIcon from '@mui/icons-material/Refresh';

function Header({ handleShowDateToggle, handleReset }) {


    return (
        <>

            <div className="Header">
                <p className="Header__title">Tom Balunis - Chat Application</p>
                <div className="Header__icon-box" onClick={handleReset} >
                    <RefreshIcon />
                    <p>Refresh Chat</p>
                </div>

                <div className="Header__icon-box" onClick={handleShowDateToggle} >
                    <AccessTimeIcon />
                    <p>Show Date</p>
                </div>
            </div>
            <a href="https://thomasbalunis.com/" target="_blank">
                <div className="Header__hero"></div>
            </a>
        </>
    )
}

export default Header;
