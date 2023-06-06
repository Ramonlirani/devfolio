import { Avatar, Flex, Link, Text, WrapItem } from '@chakra-ui/react';
import React from 'react';
import LogoWhatsapp from '../../assets/logosSkills/iconwhatsapp.svg';
import LogoLinkedin from '../../assets/logosSkills/iconlinkedin.svg';
import LogoGithub2 from '../../assets/logosSkills/icongithub2.svg';

const Contact = () => {
  return (
    <Flex alignItems={'center'} justifyContent={'center'}>
      <Flex flexDirection={'column'} id="contact" mt={100} marginX={100}>
        <Text fontSize={'50px'}>Contact me</Text>
        <Flex justifyContent="center" flexWrap="wrap" marginBottom={20}>
          <WrapItem>
            <Link
              href="https://www.linkedin.com/in/ramon-lirani-8941a0193/"
              isExternal
              target="_blank"
              _hover={{ opacity: 0.8 }} // Defina os estilos de "hover" aqui
            >
              <Avatar name="Linkedin" src={LogoLinkedin} width={30} ml={30} />
            </Link>
          </WrapItem>
          <WrapItem>
            <Link
              href="https://github.com/Ramonlirani"
              isExternal
              target="_blank"
              _hover={{ opacity: 0.8 }} // Defina os estilos de "hover" aqui
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
      </Flex>
    </Flex>
  );
};

export default Contact;
