import React, { useState, useRef, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/theme';
import { 
    GlobalStyle, 
    Messages, 
    ChatContainer, 
    InputContainer, 
    Input, 
    SendButton
} from '../styles/styles';
import Message from './Message';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textColor};
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const ThemeButton = styled.button`
    background-color: ${({ theme }) => theme.inputBackground};
    color: ${({ theme }) => theme.textColor};
    border: 2px solid ${({ theme }) => theme.textColor};
    border-radius: 5px;
    padding: 8px 12px;
    cursor: pointer;
    font-size: 14px;

    &:hover {
        background-color: ${({ theme }) => theme.background};
    }
`;

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [theme, setTheme] = useState(lightTheme);
    const [loading, setLoading] = useState(false); // New loading state
    const messagesEndRef = useRef(null);

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); // Sleep function

    const handleSendMessage = async () => {
        if (input.trim() === '') return;

        setMessages([...messages, { text: input, from: 'user' }]);
        setInput('');
        setLoading(true); // Set loading to true when bot starts "thinking"

        // Simulate bot thinking
        await sleep(1000);

        setMessages((prevMessages) => [
            ...prevMessages,
            { text: 'Chatbot response to: ' + input, from: 'bot' },
        ]);
        setLoading(false); // Set loading to false after bot responds
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme.name === 'light' ? darkTheme : lightTheme));
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, loading]);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <ChatContainer>
                {/* Navbar Section */}
                <NavbarContainer>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <h1>CBT Chat Companion</h1>
                    </Link>
                    <ThemeButton onClick={toggleTheme}>
                        {theme.name === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                    </ThemeButton>
                </NavbarContainer>

                {/* Chat Messages Section */}
                <Messages>
                    {messages.map((msg, index) => (
                        <Message key={index} text={msg.text} from={msg.from} theme={theme} />
                    ))}
                    {loading && (
                        <div style={{ color: theme.textColor, fontStyle: 'italic' }}>
                            Bot is typing...
                        </div>
                    )}
                    <div ref={messagesEndRef} /> {/* Scroll to bottom reference */}
                </Messages>

                {/* Input Section */}
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