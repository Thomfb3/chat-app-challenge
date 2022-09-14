import React, { useState, useEffect } from "react";
import TitleBar from "./TitleBar";
import MessageList from "./MessageList";
import ChatIconButton from "./ChatIconButton";
import SendMessageForm from "./SendMessageForm";
import Responses from "../test/responses.json";

function ChatWindow() {
    const [chatResponses, setChatResponses] = useState(Responses.responses);
    const [chatMessages, setChatMessages] = useState([]);
    const [typeIndicatorOn, setTypeIndicatorOn] = useState(false);
    const [activeUser, setActiveUser] = useState(true);
    const [responseCount, setResponseCount] = useState(0)
    const [chatOpen, setChatOpen] = useState(true)


    const addFirstChat = () => {
        if (!chatMessages.length) {
            setChatMessages([chatResponses[0]]);
            setResponseCount(1)
        }
    }

    const userTimer = () => {
        setTimeout(() => setActiveUser(false), 5000);
    }

    const handleTypeIndicatorChange = () => {
        if (!activeUser) {
            setTypeIndicatorOn(true)
        }
    }

    const handleUserActiveChange = () => {
        setActiveUser(true);
        setTypeIndicatorOn(false)
    }

    const handleMessageSubmit = () => {
        const date = new Date();
        let newResponse = chatResponses[responseCount];
        newResponse.date = date;
        setTimeout(() => {
            setResponseCount(responseCount + 1);
            setChatMessages([...chatMessages, newResponse])
            console.log(chatMessages)
        }, 2000)

    }

    const addMessages = (message, direction, date) => {
        const messageObj = { message, direction, date };
        setChatMessages([...chatMessages, messageObj])
        handleMessageSubmit();
    }

    const closeChat = () => {
        setChatOpen(false);
    }

    // const openChat = () => {
    //     setChatOpen(true);
    //     console.log(chatOpen)
    // }

    useEffect(() => {
        addFirstChat();
        userTimer();
        handleTypeIndicatorChange();

        console.log(activeUser);

    }, [chatMessages, activeUser, handleUserActiveChange, handleMessageSubmit]);

    return (
        <>

            {/* <ChatIconButton
                openChat={openChat}
                chat={chatOpen}
            /> */}

            <div className={`ChatWindow ${chatOpen ? "" : "ChatWindow__close"}`}>
                <TitleBar
                    closeChat={closeChat}
                />
                <MessageList
                    messages={chatMessages}
                    typeIndicatorOn={typeIndicatorOn}
                />
                <SendMessageForm
                    addMessages={addMessages}
                    handleUserActiveChange={handleUserActiveChange}
                    handleMessageSubmit={handleMessageSubmit}
                />
            </div>
        </>
    )
}


export default ChatWindow;
