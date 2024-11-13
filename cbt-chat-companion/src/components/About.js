// src/pages/About.js
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: #333;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2em;
  font-weight: bold;
  color: #926fe8;
  margin-bottom: 20px;
//   text-shadow: 0px 2px 5px rgba(255, 255, 255, 0.6);
`;

const Content = styled.p`
  font-size: 1.1em;
  max-width: 800px;
  line-height: 1.6;
  color: #fff;
//   text-shadow: 0px 1px 3px rgba(255, 255, 255, 0.6);
`;

const About = () => {
  return (
    <AboutContainer>
      <Title>About CBT Chat Companion</Title>
      <Content>
        CBT Chat Companion is a supportive AI tool designed to assist users with cognitive behavioral therapy (CBT) techniques.
        Through guided conversations and helpful insights, our chatbot aims to make CBT accessible and effective for anyone
        looking to improve their mental well-being.
      </Content>
    </AboutContainer>
  );
};

export default About;
