import { Avatar, Divider, Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';
import FooterDescription from './FooterDescription';
import LogoWhatsapp from '../../assets/logosSkills/iconwhatsapp.png';

const Footer = () => {
  return (
    <Flex flexDirection="column">
      <Flex
        id="contact"
        mt={100}
        height={80}
        justifyContent="space-between"
        marginX={100}
        style={{ borderBottom: '1px solid white' }}
      >
        <Text ml={60}>{'<Ramon/>'}</Text>

        <Text mr={60}>
          <Text display={'inline'} color={'#fff'}>
            +55 41 99854-5699
            <Link
              href="https://api.whatsapp.com/send?phone=41998545699"
              textDecoration="none"
              isExternal
              target="_blank"
            >
              <Avatar
                src={LogoWhatsapp}
                width={25}
                height={25}
                ml={10}
                mr={60}
              />
            </Link>
          </Text>
          ramonlirani@hotmail.com
        </Text>
      </Flex>
      <Flex
        justifyContent="flex-end"
        marginTop={5}
        height={80}
        alignItems={'center'}
      >
        <FooterDescription />
      </Flex>
    </Flex>
  );
};

export default Footer;
