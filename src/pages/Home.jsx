import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import NameCustom from '../components/NameCustom/NameCustom';
import Skills from '../components/Skills/Skills';
import Experience from '../components/Experience/Experience';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <NavBar />
      <NameCustom />
      <Skills />
      <Experience />
      <Footer />
    </>
  );
};

export default Home;
