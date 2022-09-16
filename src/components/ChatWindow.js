import React, { useState, useEffect } from "react";
import TitleBar from "./TitleBar";
import MessageList from "./MessageList";
import ChatIconButton from "./ChatIconButton";
import SendMessageForm from "./SendMessageForm";
import Responses from "../test/responses.json";


function ChatWindow() {
    const [chatMessages, setChatMessages] = useState([]);
    const [typeIndicatorOn, setTypeIndicatorOn] = useState(false);
    const [responseCount, setResponseCount] = useState(0)
    const [chatOpen, setChatOpen] = useState(true)
    const chatResponses = Responses.responses;

    const addMessageToChatMessages = (message) => {
        message.date = new Date();
        setChatMessages(chatMessages => [...chatMessages, message]);
        scrollDown();
        handleMessageResponse();      
    }

    const addResponseToChatMessages = (responseIdx) => {
        const message = { ...chatResponses[responseIdx] };
        message.date = new Date();
        setChatMessages(chatMessages => [...chatMessages, message]);
    }

    const handleResponseCountChange = (numToAdd) => {
        responseCount + numToAdd > chatResponses.length - 1
        ? setResponseCount(0)
        : setResponseCount(responseCount + numToAdd);
    }

    const handleUserIsActiveChange = () => {
        const delayTypeIndicator = setTimeout(() => {
            setTypeIndicatorOn(false)
        }, 1500)
        return () => {
            clearTimeout(delayTypeIndicator);
        }
    }

    const handleMessageResponse = () => {
        const delayResponse = setTimeout(() => {
            setTypeIndicatorOn(true);
            scrollDown();
            setTimeout(() => {
                setTypeIndicatorOn(false);
                addResponseToChatMessages(responseCount);
                handleResponseCountChange(1);
                scrollDown();
            }, 3000)
        }, 1500)
        return () => {
            clearTimeout(delayResponse);
        }
    }

    const closeChat = () => {
        setChatOpen(false);
    }

    const openChat = () => {
        setChatOpen(true);
        console.log(chatOpen)
    }

    const scrollDown = () => {
        const mList = document.getElementById("MessageList"); 
        const mListScrollPos = mList.scrollHeight - mList.client
        mList.scrollTop = mListScrollPos;
    }

    useEffect(() => {
        //Initial Chat Bubble and Type Indicator timers
        let initialTimer = setTimeout(() => {
            addResponseToChatMessages(0);
            setTimeout(() => {
                setTypeIndicatorOn(true)
                setTimeout(() => {
                    addResponseToChatMessages(1);
                    setTypeIndicatorOn(false)
                }, 3000)
            }, 5000)
        }, 2000)
        handleResponseCountChange(2);
        
        return () => {
            clearTimeout(initialTimer);
        };
    }, [])

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
                    responseCount={responseCount}
                    addMessageToChatMessages={addMessageToChatMessages}
                    handleUserIsActiveChange={handleUserIsActiveChange}
                />
            </div>
        </>
    )
}


export default ChatWindow;
