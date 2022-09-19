import React, { useState, useEffect } from "react";
import TitleBar from "./TitleBar";
import MessageList from "./MessageList";
import ChatIconButton from "./ChatIconButton";
import SendMessageForm from "./SendMessageForm";
import Header from "./Header";
import Footer from "./Footer";
import DummyContent from "./DummyContent";
import Responses from "../test/responses.json";


function ChatWindow() {
    const [chatMessages, setChatMessages] = useState([]);
    const [typeIndicatorOn, setTypeIndicatorOn] = useState(false);
    const [responseCount, setResponseCount] = useState(2);
    const [chatIsOpen, setChatIsOpen] = useState(true);
    const [showDate, setShowDate] = useState(false);
    const [reset, setReset] = useState(false)

    const chatResponses = Responses.responses;
    const timeouts = [];

    const addMessageToChatMessages = (message) => {
        message.date = new Date();
        setChatMessages(chatMessages => [...chatMessages, message]);
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
        }, 100)
        timeouts.push(delayTypeIndicator)
        return () => {
            clearTimeout(delayTypeIndicator);
        }
    }

    const handleMessageResponse = () => {
        const delayResponse = setTimeout(() => {
            setTypeIndicatorOn(true);
            setTimeout(() => {
                setTypeIndicatorOn(false);
                addResponseToChatMessages(responseCount);
                handleResponseCountChange(1);
            }, 3000)
        }, 1500)
        timeouts.push(delayResponse)
        return () => {
            clearTimeout(delayResponse);
        }
    }

    const scrollDown = () => {
        const mList = document.getElementById("MessageList");
        mList.scrollTop = mList.scrollHeight - 373;
    }

    useEffect(() => {
        let firstMessageTimer = setTimeout(() => addResponseToChatMessages(0), 1500);
        let typeIndicatorTimer = setTimeout(() => setTypeIndicatorOn(true), 5000);
        let secondMessageTimer = setTimeout(() => {
            addResponseToChatMessages(1);
            setTypeIndicatorOn(false);
        }, 7000);
        timeouts.push(firstMessageTimer, typeIndicatorTimer, secondMessageTimer);

        setResponseCount(2);
        setReset(false);
        
        return () => {
            for (let i = 0; i < timeouts.length; i++) {
                clearTimeout(timeouts[i])
            }
        };
    }, [reset])


    useEffect(() => {
        scrollDown();
    }, [chatMessages, typeIndicatorOn])

    //Extras
    const closeChat = () => {
        setChatIsOpen(false);
    }

    const openChat = () => {
        setChatIsOpen(true);
    }

    const handleShowDateToggle = () => {
        const show = showDate ? false : true;
        setShowDate(show)
    }

    const handleReset = () => {
        setReset(true);
        setTypeIndicatorOn(false)
        setChatMessages([]);
        setChatIsOpen(true);
        setShowDate(false);
        setResponseCount(2);
    }
    
    return (
        <>
            <ChatIconButton
                openChat={openChat}
                chatIsOpen={chatIsOpen}
            />
            <div className={`ChatWindow ${chatIsOpen ? "" : "ChatWindow__close"}`}>
                <TitleBar
                    closeChat={closeChat}
                />
                <MessageList
                    messages={chatMessages}
                    typeIndicatorOn={typeIndicatorOn}
                    showDate={showDate}
                />
                <SendMessageForm
                    responseCount={responseCount}
                    addMessageToChatMessages={addMessageToChatMessages}
                    handleUserIsActiveChange={handleUserIsActiveChange}
                />
            </div>

            <Header
                handleShowDateToggle={handleShowDateToggle}
                handleReset={handleReset}
            />
            <DummyContent />
            <Footer />
         
        </>
    )
}


export default ChatWindow;
