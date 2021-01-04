import React from 'react';
import { styled, createGlobalStyle } from 'styled-components';
import './App.scss';

import { GlobalStyle } from './GlobalStyles.js';

import Header from './Components/Organisms/Header';
import About from './Components/Molecules/About';
import Skills from './Components/Organisms/Skills';
import Projects from './Components/Organisms/Projects';

// Styles

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}

export default App;
