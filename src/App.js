import React from 'react';
import { styled, createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HttpsRedirect from 'react-https-redirect';

import './App.scss';

import { GlobalStyle } from './GlobalStyles.js';

import Home from './Components/Pages/Home';
import Resume from './Components/Pages/Resume';

// Styles

function App() {
  return (

    <HttpsRedirect>
    <GlobalStyle />

    <Router>
      <Route path="/" exact component={ Home } />
      <Route path="/resume" exact component={ Resume } />
    </Router>
    </HttpsRedirect>
  )
}

export default App;
