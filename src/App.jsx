import { Box } from '@chakra-ui/react';
import AboutMe from './components/AboutMe/AboutMe';
import ButtonCV from './components/ButtonCV/ButtonCV';
import Experience from './components/Experience/Experience';
import Contact from './components/Footer/Contact';
import Footer from './components/Footer/Footer';
import NameCustom from './components/NameCustom/NameCustom';
import Navbar from './components/NavBar/NavBar';
import Skills from './components/Skills/Skills';

export function App() {
  return (
    <Box
      style={{
        fontFamily: 'Roboto,sans-serif',
        color: 'rgba(255, 255, 255, 0.87)',
        backgroundColor: '#191919',
        height: '100%',
      }}
    >
      <Navbar />
      <NameCustom />
      <ButtonCV />
      <AboutMe />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </Box>
  );
}
