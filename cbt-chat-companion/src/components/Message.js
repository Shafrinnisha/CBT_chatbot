import React from 'react';
import styled from 'styled-components';

// Container for each message
const MessageContainer = styled.div`
  display: flex;
  flex-direction: column; // Stack label and text vertically
  margin: 10px 0; // Margin between messages
`;

// Styled component for user messages
const UserMessage = styled.div`
  align-self: flex-start; // Align to the left
  background-color: ${(props) => (props.theme === 'light' ? '#d1e7dd' : '#1f2e44')}; // Light green or dark blue
  color: ${(props) => (props.theme === 'light' ? '#000' : '#fff')}; // Text color
  border-radius: 10px; // Rounded corners
  padding: 10px; // Padding for inner text
  margin-bottom: 5px; // Space below the message
`;

// Styled component for bot messages
const BotMessage = styled.div`
  align-self: flex-end; // Align to the right
  background-color: ${(props) => (props.theme === 'light' ? '#cfe2f3' : '#2c3e50')}; // Light blue or dark grey
  color: ${(props) => (props.theme === 'light' ? '#000' : '#fff')}; // Text color
  border-radius: 10px; // Rounded corners
  padding: 10px; // Padding for inner text
  margin-bottom: 5px; // Space below the message
`;

const Message = ({ text, from, theme }) => {
    return (
        <MessageContainer>
            {from === 'user' ? (
                <UserMessage theme={theme}>
                    <strong>You:</strong>
                    <span>{text}</span>
                </UserMessage>
            ) : (
                <BotMessage theme={theme}>
                    <strong>Your companion:</strong>
                    <span>{text}</span>
                </BotMessage>
            )}
        </MessageContainer>
    );
};

export default Message;
