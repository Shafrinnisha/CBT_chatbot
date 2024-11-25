import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    // background-color: ${({ theme }) => (theme === 'light' ? '#ffffff' : '#333333')};
    // color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
    transition: all 0.3s ease;
    font-family: Arial, sans-serif;
    margin: 0; // Remove default margin
    height: 100vh; // Full height for body
    display: flex;
    flex-direction: column;
  }
`;

// Message
export const MessageBubble = styled.div`
  max-width: 75%;
  width: fit-content; 
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) =>
    props.from === 'user' ? props.theme.messageUserBackground : props.theme.messageBotBackground};
  align-self: ${(props) => (props.from === 'user' ? 'flex-end' : 'flex-start')}; // Align based on sender
  text-align: ${(props) => (props.from === 'user' ? 'right' : 'left')}; // Align text based on sender
  white-space: pre-line; 
  margin-left: ${(props) => (props.from === 'user' ? 'auto' : '0')}; // Align user messages from the right
  margin-right: ${(props) => (props.from === 'user' ? '0' : 'auto')}; // Align companion messages from the left
`;

export const MessageText = styled.div`
  margin-top: 5px;
  font-size: 1em;
`;

// Navbar
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  padding: 10px 20px;
  background-color: ${({ theme }) => (theme === 'light' ? '#f9f9f9' : '#444')};
  border-bottom: 1px solid #ccc;

  h1 {
    margin: 0;
    font-size: 24px;
  }
`;

// Login
export const Button = styled.button`
  background-color: ${({ theme }) => (theme === 'light' ? '#4CAF50' : '#f44336')};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => (theme === 'light' ? '#45a049' : '#d32f2f')};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px; // Add spacing between buttons
`;

// Chatbot
// Container for the entire chat area
export const ChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textColor};
`;

// Container for the messages
export const Messages = styled.div`
    flex: 1;
    overflow-y: auto;
    padding: 20px;
    background-color: ${({ theme }) => theme.background};
`;

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: ${({ theme }) => theme.background};
    // border-top: 1px solid ${({ theme }) => theme.messageUserBackground};
`;

export const Input = styled.input`
    flex: 1;
    padding: 10px;
    font-size: 16px;
    border: 1px solid ${({ theme }) => theme.textColor};
    border-radius: 5px;
    background-color: ${({ theme }) => theme.inputBackground};
    color: ${({ theme }) => theme.textColor};
    margin-right: 10px;

    &::placeholder {
        color: ${({ theme }) => theme.textColor};
    }
`;

export const SendButton = styled.button`
    padding: 10px 15px;
    background-color: #04AA6D;
    color: #fff ; 
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #00b894;
    }
`;



// About
export const AboutSection = styled.section`
  padding: 50px 20px;
  background-color: #f9f9f9;
  color: #333;
  text-align: center;
`;

export const AboutTitle = styled.h2`
font-size: 2.5em;
margin-bottom: 20px;
color: #6a11cb;
`;

export const AboutText = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 20px;
  color: #555;
`;

export const FeaturesList = styled.ul`
  list-style-type: none;
  padding: 0;
  
`;

export const FeatureItem = styled.li`
  line-height: 1.6;
  font-size: 1.2em;
  margin: 10px 0;
  color: #333;
  padding-left: 20px;
  text-align: left;
  position: relative;

  &:before {
    content: '✔';
    position: absolute;
    left: 0;
    color: #00b894;
  }
`;

export const DiagramSection = styled.section`
margin: 50px 0;
text-align: center;
`;

export const DiagramImage = styled.img`
max-width: 100%;
height: auto;
border-radius: 15px;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;