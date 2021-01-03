import React from 'react';
import styled from 'styled-components';
import Header from '../../Atoms/Header';

//Styles
const StyledAbout = styled.section`
  border-top: 1px solid #00abdf;

  p {
    font-size: 20px;
    font-weight: 400;
    line-height:1.5;
    maring-bottom: 32px;
  }
`;

function About() {
  return (
    <StyledAbout>
      <div className="container">
        <Header type='h2' text='About' />
        <p>I am a Full-stack developer with 10 years of industry experience building websites, advertising campaigns, interacting with traditional media, and working in teams of people from a variety of disciplines.</p>
        <p> I have an unending curiosity for new ideas and processes that helps expand my work. The advancement of Technology Continues to bewilder and inspires me.</p>
      </div>
    </StyledAbout>
  )
}

export default About;
