import React, {useRef, useEffect} from 'react';

function Chat({messages}) {
    const AlwaysScrollToBottom = () => {
        const elementRef = useRef();
        useEffect(() => elementRef.current.scrollIntoView());
        return <div ref={elementRef} />;
      };

    const renderMessages = () => {
        const messages_list = [];
        messages.forEach((message)=>{
            messages_list.push(
                <li className="message">
                    {message}
                </li>
            )
        })
        return messages_list
    }

    return (
        <div className="chat">
            <ul>
                {renderMessages()}
                <AlwaysScrollToBottom />
            </ul>
        </div>
    )
}

export default Chat
