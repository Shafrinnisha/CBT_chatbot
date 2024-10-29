import React, { useState } from 'react';
import { Messages, ChatContainer, InputContainer, Input, SendButton } from '../styles/styles';
import Message from './Message';
import Navbar from './Navbar';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [theme, setTheme] = useState('light'); // Default theme

    const handleSendMessage = () => {
        if (input.trim() === '') return; // Prevent sending empty messages
        setMessages([...messages, { text: input, from: 'user' }]);
        // Simulate a chatbot response
        setTimeout(() => {
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: 'Chatbot response to: ' + input, from: 'bot' },
            ]);
        }, 1000);
        setInput(''); // Clear input after sending
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage(); // Call send function on Enter key press
        }
    };

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ChatContainer>
            <Navbar toggleTheme={toggleTheme} />
            <Messages>
                {messages.map((msg, index) => (
                    <Message key={index} text={msg.text} from={msg.from} theme={theme} />
                ))}
            </Messages>
            <InputContainer>
                <Input
                    type="text"
                    placeholder="Enter your prompt..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress} // Add key press event
                />
                <SendButton onClick={handleSendMessage}>Send</SendButton>
            </InputContainer>
        </ChatContainer>
    );
};

export default Chatbot;
