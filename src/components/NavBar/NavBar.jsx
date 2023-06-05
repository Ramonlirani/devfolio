import { Avatar, Flex, Image, Link, WrapItem } from '@chakra-ui/react';
import LogoLinkedin from '../../assets/logosSkills/iconlinkedin.svg';
import LogoGithub2 from '../../assets/logosSkills/icongithub2.svg';
// import LogoWhatsApp from '../../assets/logosSkills/iconwhatsapp2.png';
import LogoCurriculo from '../../assets/logosSkills/iconcurriculo.png';

import { saveAs } from 'file-saver';
const handleDownloadResume = () => {
  const fileUrl =
    'https://drive.google.com/file/d/1SqJnBGcycCebY6bm-a38rdRyIIbwulwY/view?usp=sharing';
  saveAs(fileUrl, 'RamonLiraniCurriculo.pdf');
};

const Navbar = () => {
  return (
    <Flex
      px={8}
      py={6}
      justifyContent="center"
      position="fixed"
      top={0}
      width="100%"
      height={100}
      backgroundColor="#191919"
      zIndex={100}
    >
      <Flex alignItems="center">
        <Link
          href="#"
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
        <WrapItem>
          <Link
            href="https://www.linkedin.com/in/ramon-lirani-8941a0193/"
            isExternal
            target="_blank"
          >
            <Avatar name="Linkedin" src={LogoLinkedin} width={30} ml={30} />
          </Link>
        </WrapItem>
        <WrapItem>
          <Link
            href="https://github.com/Ramonlirani"
            isExternal
            target="_blank"
          >
            <Avatar name="Github" src={LogoGithub2} width={30} ml={15} />
          </Link>
        </WrapItem>
        {/* <WrapItem>
          <Avatar name="WhatsApp" src={LogoWhatsApp} width={30} ml={15} />
        </WrapItem> */}
        <WrapItem>
          <Link onClick={handleDownloadResume} cursor="pointer">
            <Avatar
              name="Curriculo"
              src={LogoCurriculo}
              width={30}
              ml={15}
              backgroundColor="#a7a7a7"
            />
          </Link>
        </WrapItem>
      </Flex>
    </Flex>
  );
};

export default Navbar;
