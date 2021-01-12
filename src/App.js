import React from 'react';
import ReactGA from 'react-ga';
import { styled, createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HttpsRedirect from 'react-https-redirect';

// Stylesheet includes
import { GlobalStyle } from './GlobalStyles.js';

// Component includes
import Home from './Components/Pages/Home';
import Resume from './Components/Pages/Resume';

function App() {
  ReactGA.initialize('UA-18900659-1');
  ReactGA.pageview(window.location.pathname);
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
