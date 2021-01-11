import React from 'react';
import { styled, createGlobalStyle } from 'styled-components';

import { GlobalStyle } from '../../../GlobalStyles.js';

import Header from '../../Organisms/Header';
import Slider from '../../Molecules/Slider';
import Skills from '../../Organisms/Skills';
import Projects from '../../Organisms/Projects';
import Footer from '../../Organisms/Footer';

// Styles

function Home() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Slider />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default Home;
