import { Avatar, Button, Flex, Image, Link, WrapItem } from '@chakra-ui/react';
import LogoLinkedin from '../../assets/logosSkills/iconlinkedin.svg';
import LogoGithub2 from '../../assets/logosSkills/icongithub2.svg';
import LogoWhatsapp from '../../assets/logosSkills/iconwhatsapp.svg';

const Navbar = () => {
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
        <Link
          href="#home"
          ml={20}
          textDecoration="none"
          color="#a7a7a7"
          _hover={{ color: '#fff' }}
          fontSize={20}
        >
          Home
        </Link>
        <Link
          href="#about"
          ml={20}
          textDecoration="none"
          color="#a7a7a7"
          _hover={{ color: '#fff' }}
          fontSize={20}
        >
          About
        </Link>
        <Link
          href="#techStack"
          ml={20}
          textDecoration="none"
          color="#a7a7a7"
          _hover={{ color: '#fff' }}
          fontSize={20}
        >
          Tech Stack
        </Link>
        <Link
          href="#experience"
          ml={20}
          textDecoration="none"
          color="#a7a7a7"
          _hover={{ color: '#fff' }}
          fontSize={20}
        >
          Experience
        </Link>
        <Link
          href="#contact"
          ml={20}
          mr={15}
          textDecoration="none"
          color="#a7a7a7"
          _hover={{ color: '#fff' }}
          fontSize={20}
        >
          Contact
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
