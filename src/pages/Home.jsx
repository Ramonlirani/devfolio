import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import NameCustom from '../components/NameCustom/NameCustom';
import Skills from '../components/Skills/Skills';
import Experience from '../components/Experience/Experience';
import ButtonCV from '../components/ButtonCV/ButtonCV';
import AboutMe from '../components/AboutMe/AboutMe';
import Contact from '../components/Footer/Contact';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <NavBar />
      <NameCustom />
      <ButtonCV />
      <AboutMe />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
