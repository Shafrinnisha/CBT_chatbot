import React from 'react';
import { MessageBubble, MessageText } from '../styles/styles';

const Message = ({ text, from }) => {
    const senderLabel = from === 'user' ? 'You:' : 'Your Companion:';
    return (
        <MessageBubble from={from}>
            <strong>{senderLabel}</strong>
            <MessageText>{text}</MessageText>
        </MessageBubble>
    );
};

export default Message;
