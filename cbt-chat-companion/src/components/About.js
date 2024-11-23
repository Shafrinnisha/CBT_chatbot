import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 50px 20px;
  background-color: #f9f9f9;
  color: #333;
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #6a11cb;
`;

const AboutText = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 20px;
  color: #555;
`;

const FeaturesList = styled.ul`
  list-style-type: none;
  padding: 0;
  
`;

const FeatureItem = styled.li`
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

const DiagramSection = styled.section`
  margin: 50px 0;
  text-align: center;
`;

const DiagramImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const About = () => (
  <AboutSection>
    <AboutTitle>About the CBT Chat Companion</AboutTitle>
    <AboutText>
      The CBT Chat Companion is a free, easy-to-use AI-powered chatbot designed to support individuals in their
      journey through Cognitive Behavioral Therapy (CBT). It provides a safe and non-judgmental space where you can
      express your thoughts and emotions. The chatbot will guide you through simple CBT exercises to help you manage
      stress, anxiety, and negative thinking patterns.
    </AboutText>
    <AboutText>
      Best of all, it is completely free to use and does not require any login. Start chatting right away and begin
      your journey toward emotional well-being!
    </AboutText>
    <AboutText>
      Here are some things the chatbot can help you with:
    </AboutText>

    <AboutText>
      <FeaturesList>
        <FeatureItem>Identify and challenge negative thought patterns</FeatureItem>
        <FeatureItem>Practice mindfulness and relaxation techniques</FeatureItem>
        <FeatureItem>Gain support for stress management and emotional regulation</FeatureItem>
        <FeatureItem>Receive guidance on improving your mental well-being</FeatureItem>
      </FeaturesList>
    </AboutText>

    <DiagramSection>
      <h3>How CBT Works</h3>
      <DiagramImage src="/images/cbt_diagram.png" alt="How CBT Works Diagram" />
    </DiagramSection>
  </AboutSection>
);

export default About;
