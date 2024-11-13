import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Navbar from './Navbar';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: #333;
  animation: ${fadeIn} 1.5s ease-in-out;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.8em;
  font-weight: bold;
  margin: 0;
  color: #926fe8;
//   text-shadow: 2px 2px 5px rgba(255, 255, 255, 0.6); /* White shadow effect */
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  margin-top: 10px;
  max-width: 80%;
  line-height: 1.6;
  color: #fff ;  // #6f6fe8
//   text-shadow: 0px 1px 3px rgba(255, 255, 255, 0.6); /* White shadow effect */
`;

const ButtonContainer = styled.div`
  margin-top: 40px;
`;

const StartButton = styled(Link)`
  padding: 12px 30px;
  font-size: 1.2em;
  color: #fff;
  background-color: #00b894;
  border-radius: 30px;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #00a572;
    transform: scale(1.05);
  }
`;

const Home = () => {
  return (
    <>
    <Navbar />
    <HomeContainer>
            
      <Title>Welcome to CBT Chat Companion</Title>
      <Subtitle>Your supportive AI companion for Cognitive Behavioral Therapy</Subtitle>
      <ButtonContainer>
        <StartButton to="/chat">Start Chatting</StartButton>
      </ButtonContainer>
    </HomeContainer>
    </>
  );
};

export default Home;
