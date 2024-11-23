import React from 'react';
import { NavbarContainer,} from '../styles/styles'; // ButtonContainer } from '../styles/styles';
import { Link } from 'react-router-dom';
// import LoginButton from './LoginButton';

const Navbar = () => {
    return (
        <NavbarContainer>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h1>CBT Chat Companion</h1>
            </Link>
            {/* Uncomment the following if you want to use the login button */}
            {/* <ButtonContainer>
                <LoginButton />
            </ButtonContainer> */}
        </NavbarContainer>
    );
};

export default Navbar;


