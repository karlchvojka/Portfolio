import React from 'react';
import { styled, createGlobalStyle } from 'styled-components';
import './App.scss';

import { GlobalStyle } from './GlobalStyles.js';

import Header from './Components/Organisms/Header';
import Slider from './Components/Molecules/Slider';
import Skills from './Components/Organisms/Skills';
import Projects from './Components/Organisms/Projects';
import Footer from './Components/Organisms/Footer';

// Styles

function App() {
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

export default App;
