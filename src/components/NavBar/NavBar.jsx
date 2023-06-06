import { Avatar, Button, Flex, Image, Link, WrapItem } from '@chakra-ui/react';
import LogoLinkedin from '../../assets/logosSkills/iconlinkedin.svg';
import LogoGithub2 from '../../assets/logosSkills/icongithub2.svg';
import LogoWhatsapp from '../../assets/logosSkills/iconwhatsapp.svg';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Flex
      px={8}
      py={6}
      position="fixed"
      top={0}
      width="100%"
      height={60}
      backgroundColor="#191919"
      zIndex={100}
      justifyContent={'center'}
    >
      <Flex alignItems="center" mr={200}>
        <WrapItem>
          <Link
            href="https://www.linkedin.com/in/ramon-lirani-8941a0193/"
            isExternal
            target="_blank"
            _hover={{ opacity: 0.8 }}
          >
            <Avatar name="Linkedin" src={LogoLinkedin} width={30} ml={30} />
          </Link>
        </WrapItem>
        <WrapItem>
          <Link
            href="https://github.com/Ramonlirani"
            isExternal
            target="_blank"
            _hover={{ opacity: 0.8 }}
          >
            <Avatar name="Github" src={LogoGithub2} width={30} ml={15} />
          </Link>
        </WrapItem>
        <WrapItem>
          <Link
            href="https://api.whatsapp.com/send?phone=41998545699"
            textDecoration="none"
            isExternal
            target="_blank"
            _hover={{ opacity: 0.8 }}
          >
            <Avatar src={LogoWhatsapp} width={30} height={30} ml={15} />
          </Link>
        </WrapItem>
      </Flex>

      <Flex alignItems="center" mr={400}>
        <ScrollLink
          to="home"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          style={{ marginLeft: 20 }}
          activeClass={'active'}
        >
          <span
            style={{ cursor: 'pointer', marginRight: 20, color: '#a7a7a7' }}
            _hover={{ opacity: 0.8 }}
          >
            Home
          </span>
        </ScrollLink>
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          style={{ marginLeft: 20 }}
        >
          <span
            style={{ cursor: 'pointer', marginRight: 20, color: '#a7a7a7' }}
            _hover={{ opacity: 0.8 }}
          >
            About
          </span>
        </ScrollLink>
        <ScrollLink
          to="techStack"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          style={{ marginLeft: 20 }}
        >
          <span
            style={{ cursor: 'pointer', marginRight: 20, color: '#a7a7a7' }}
            _hover={{ opacity: 0.8 }}
          >
            Tech Stack
          </span>
        </ScrollLink>
        <ScrollLink
          to="experience"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          style={{ marginLeft: 20 }}
        >
          <span
            style={{ cursor: 'pointer', marginRight: 20, color: '#a7a7a7' }}
            _hover={{ opacity: 0.8 }}
          >
            Experience
          </span>
        </ScrollLink>
        <ScrollLink
          to="contact"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          style={{ marginLeft: 20 }}
        >
          <span
            style={{ cursor: 'pointer', marginRight: 20, color: '#a7a7a7' }}
            _hover={{ opacity: 0.8 }}
          >
            Contact
          </span>
        </ScrollLink>
      </Flex>
    </Flex>
  );
};

export default Navbar;
