import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => (theme === 'light' ? '#ffffff' : '#333333')};
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
    transition: all 0.3s ease;
    font-family: Arial, sans-serif;
    margin: 0; // Remove default margin
    height: 100vh; // Full height for body
    display: flex;
    flex-direction: column;
  }
`;

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

// Container for the entire chat area
export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; // Full height of the viewport
`;

// Container for the messages
export const Messages = styled.div`
  flex: 1; // Allow messages to grow and take available space
  overflow-y: auto; // Enable scrolling if messages exceed the height
  padding: 10px; // Padding around the messages
  margin-bottom: 10px; // Optional: Margin below the messages section
`;

export const InputContainer = styled.div`
  position: fixed; // Fix it at the bottom
  bottom: 20px; // Margin from the bottom
  left: 20px; // Margin from the left
  right: 20px; // Margin from the right
  display: flex; // Flex for input and button
  margin-top: 10px; // Space from messages
`;

export const Input = styled.input`
  flex: 1; // Take available space
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
  font-size: 16px;
`;

export const SendButton = styled.button`
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