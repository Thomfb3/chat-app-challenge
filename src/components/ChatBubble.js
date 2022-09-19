import React from "react";
import { formatShortDate, formatTime } from "../helpers/formatDate";

function ChatBubble({ direction, message, date, showDate }) {

    return (
        <div className={
            `ChatBubble 
             ChatBubble__${direction === 'incoming'
                ? 'incoming'
                : 'outgoing'
            }`
        }>
            <div className="ChatBubble__bubble">
                {message}
            </div>
          {showDate &&  <p className="ChatBubble__date">{`${formatShortDate(date)} - ${formatTime(date)}`}</p>}
        </div>
    )
}

export default ChatBubble;
