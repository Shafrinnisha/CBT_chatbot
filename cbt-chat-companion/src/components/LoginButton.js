import React from 'react';
import { Button } from '../styles/styles';

const LoginButton = () => {
    const handleLogin = () => {
        alert('Login button clicked!');
        // Handle login functionality here
    };

    return <Button onClick={handleLogin}>Login</Button>;
};

export default LoginButton;
