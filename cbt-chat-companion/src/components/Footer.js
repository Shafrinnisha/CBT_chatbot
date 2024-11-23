import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px 0;
  text-align: center;
  font-size: 1em;
  margin-top: 40px;
`;

const FooterLinks = styled.div`
  margin-top: 10px;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 15px;
  transition: color 0.3s ease;

  &:hover {
    color: #00b894;
  }
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; 2024 CBT Chat Companion. All Rights Reserved.</p>
    <FooterLinks>
      <FooterLink href="https://www.privacypolicy.com" target="_blank">Privacy Policy</FooterLink>
      <FooterLink href="https://www.termsandconditions.com" target="_blank">Terms & Conditions</FooterLink>
      <FooterLink href="mailto:support@cbtcompanion.com">Contact Us</FooterLink>
    </FooterLinks>
  </FooterContainer>
);

export default Footer;
