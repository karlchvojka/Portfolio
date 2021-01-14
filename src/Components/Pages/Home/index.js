import { styled, createGlobalStyle } from 'styled-components';

// Component Includes
import Header from 'organisms/Header';
import Slider from 'molecules/Slider';
import Skills from 'organisms/Skills';
import Projects from 'organisms/Projects';
import Footer from 'organisms/Footer';

function Home() {
  return (
    <>
      <Header />
      <Slider />
      <Skills />
      <Projects />
      <Footer />
    </>
  )
}

export default Home;
