import React, { useState, useRef, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/theme';
import { GlobalStyle, Messages, ChatContainer, InputContainer, Input, SendButton } from '../styles/styles';
import Message from './Message';
import Navbar from './Navbar';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [theme, setTheme] = useState(lightTheme);
    const messagesEndRef = useRef(null); // Ref for scrolling to the latest message

    const handleSendMessage = () => {
        if (input.trim() === '') return;
        setMessages([...messages, { text: input, from: 'user' }]);
        setTimeout(() => {
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: 'Chatbot response to: ' + input, from: 'bot' },
            ]);
        }, 1000);
        setInput(''); // Clear the input after sending
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage(); // Send message on Enter key press
        }
    };

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom(); // Scroll to bottom whenever messages change
    }, [messages]);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <ChatContainer>
                <Navbar toggleTheme={toggleTheme} />
                <Messages>
                    {messages.map((msg, index) => (
                        <Message key={index} text={msg.text} from={msg.from} theme={theme} />
                    ))}
                    <div ref={messagesEndRef} /> {/* This element scrolls into view */}
                </Messages>
                <InputContainer>
                    <Input
                        type="text"
                        placeholder="Enter your prompt..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <SendButton onClick={handleSendMessage}>Send</SendButton>
                </InputContainer>
            </ChatContainer>
        </ThemeProvider>
    );
};

export default Chatbot;
