import React from 'react';
import { AboutSection, AboutTitle, AboutText,
    FeaturesList, FeatureItem,
    DiagramSection, DiagramImage      
} from '../styles/styles'

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
      <DiagramImage src="/CBT.png" alt="How CBT Works Diagram" />
    </DiagramSection>
  </AboutSection>
);

export default About;
