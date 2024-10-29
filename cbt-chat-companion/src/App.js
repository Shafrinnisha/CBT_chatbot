import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { GlobalStyle } from './styles/styles';
import Chatbot from './components/Chatbot';

const App = () => (
    <ThemeProvider>
        <GlobalStyle />
        <Chatbot />
    </ThemeProvider>
);

export default App;
