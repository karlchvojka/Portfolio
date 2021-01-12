import React from 'react';
import { styled, createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';

// Style Includes
import { GlobalStyle } from '../../../GlobalStyles.js';

// Component Includes
import Header from '../../Organisms/Header';
import Slider from '../../Molecules/Slider';
import Skills from '../../Organisms/Skills';
import Projects from '../../Organisms/Projects';
import Footer from '../../Organisms/Footer';

function Home() {
  return (
    <div className="App">
      <Helmet>
        <title>Karl Chvojka's Portfolio</title>
        <meta name="description" content="The Web Development Portfolio for Karl Chvojka." />
        <meta name="keywords" content="Karl Chvojka, Web Development, React, Ruby on Rails" />
      </Helmet>
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
