import React from 'react';
import { styled, createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HttpsRedirect from 'react-https-redirect';

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
    <HttpsRedirect>
    <Router>
      <Route path="/" exact component={ Home } />
      <Route path="/resume" exact component={ Resume } />
    </Router>
    </HttpsRedirect>


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
