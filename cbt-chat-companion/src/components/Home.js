import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import About from './About';
import Footer from './Footer';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const removeCursor = keyframes`
  from{border-right: 3px solid #fff;}
  to{border-right: none;}
`;

// const blink = keyframes`
//   from, to { border-color: transparent; }
//   50% { border-color: #fff; }
// `;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  // background: linear-gradient(135deg, #6a11cb, #2575fc);
  background: #000;
  color: #fff;
  animation: ${fadeIn} 1.5s ease-in-out;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 3em;
  font-weight: bold;
  margin: 0;
  color: #fff;
  overflow: hidden;
  white-space: nowrap; /* Allow wrapping */
  border-right: 3px solid #fff;
  width: fit-content;
  animation: ${typing} 3s steps(30, end) , ${removeCursor} 0.1s forwards 3s;;
  animation-fill-mode: forwards;

  /* Responsive Design */
  @media (max-width: 768px) {
    font-size: 2.5em; /* Smaller font size for tablets */
  }

  @media (max-width: 480px) {
    font-size: 2em; /* Even smaller font size for mobile devices */
    // border-right: 2px solid #fff; /* Adjust border size */
    overflow: normal;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  margin-top: 20px;
  max-width: 80%;
  line-height: 1.6;
  color: #e0e0e0;

  @media (max-width: 768px) {
    font-size: 1em;
  }
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
  cursor: pointer;
  display: inline-block;

  &:hover {
    background-color: #00a572;
    transform: scale(1.05);
  }

  // &:focus {
  //   outline: 2px solid #fff;
  // }
`;

// Samples

const SamplesSection = styled.div`
  // margin: 50px 0;
  // width: 90%;
  max-width: 100%;
  background-color: #f9f9f9;
  // border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  color: #333;
  overflow: hidden;
`;

const SliderContainer = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-bottom: 10px;

  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #926fe8;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #f0f0f0;
  }
`;

const Slide = styled.div`
  min-width: 300px;
  max-width: 300px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  flex: none;
`;

const ChatBubble = styled.div`
  margin: 10px 0;
  padding: 10px 15px;
  border-radius: 15px;
  display: inline-block;
  max-width: 100%;
  font-size: 1em;
  line-height: 1.5;
`;

const UserBubble = styled(ChatBubble)`
  background-color: #00b894;
  color: #fff;
  align-self: flex-start;
  width: 70%;
`;

const BotBubble = styled(ChatBubble)`
  background-color: #926fe8;
  color: #fff;
  align-self: flex-end;
`;

const Logo = styled.img`
  width: 300px; /* Adjust logo size */
  margin-bottom: 20px;
`;

const Samples = () => (
  <SamplesSection>
    <h3>Chatbot Examples</h3>
    <SliderContainer>
      {/* Slide 1 */}
      <Slide>
        <UserBubble>I'm feeling overwhelmed with work.</UserBubble>
        <BotBubble>
          I hear you. Let’s break it into smaller tasks. Can you list your top priorities?
        </BotBubble>
      </Slide>

      {/* Slide 2 */}
      <Slide>
        <UserBubble>I feel stuck in negative thinking patterns.</UserBubble>
        <BotBubble>
          Let’s try identifying those thoughts. Can you share one recurring negative thought?
        </BotBubble>
      </Slide>

      {/* Slide 3 */}
      <Slide>
        <UserBubble>How can I practice mindfulness daily?</UserBubble>
        <BotBubble>
          A great way to start is by setting aside 5 minutes to focus on your breathing. Want to try it now?
        </BotBubble>
      </Slide>

      {/* Slide 3 */}
      <Slide>
        <UserBubble>How can I practice mindfulness daily?</UserBubble>
        <BotBubble>
          A great way to start is by setting aside 5 minutes to focus on your breathing. Want to try it now?
        </BotBubble>
      </Slide>

      {/* Slide 3 */}
      <Slide>
        <UserBubble>How can I practice mindfulness daily?</UserBubble>
        <BotBubble>
          A great way to start is by setting aside 5 minutes to focus on your breathing. Want to try it now?
        </BotBubble>
      </Slide>
    </SliderContainer>
  </SamplesSection>
);



// const scrollToAbout = () => {
//   document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' });
// };

const Home = () => {
  return (
    <>
      <HomeContainer>
        {/* Logo Section */}
        <Logo src="/logo.png" alt="CBT Chat Companion Logo" />
        <Title>Hi, I'm a CBT Chatbot</Title>
        <Subtitle>Your supportive AI companion for Cognitive Behavioral Therapy</Subtitle>
        <ButtonContainer>
          <StartButton to="/chat" aria-label="Start chatting with CBT Companion">
            Start Chatting
          </StartButton>
          {/* <ScrollButton onClick={scrollToAbout}>Learn More</ScrollButton> */}
        </ButtonContainer>
      </HomeContainer>
      <Samples />
      <div id="about-section">
        <About />
      </div>
      <Footer />
    </>
  );
};

export default Home;
