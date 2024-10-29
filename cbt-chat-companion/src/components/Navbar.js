import React from 'react';
import { NavbarContainer, ButtonContainer } from '../styles/styles';
import LoginButton from './LoginButton';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <NavbarContainer>
            <h1>CBT Chat Companion</h1>
            <ButtonContainer>

                <button onClick={toggleTheme}>
                    Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
                </button>
                <LoginButton />
            </ButtonContainer>
        </NavbarContainer>
    );
};

export default Navbar;
