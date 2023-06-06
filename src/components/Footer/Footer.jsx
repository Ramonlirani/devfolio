import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Flex
      justifyContent={'flex-end'}
      alignItems={'center'}
      height={70}
      style={{ borderTop: '1px solid white' }}
    >
      <Text mr={160}>
        Designed and built by{' '}
        <Text
          style={{
            background: 'linear-gradient(to right, #1919ff, #00bfff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline',
          }}
        >
          Ramon
        </Text>{' '}
        with love,{' '}
        <Text
          style={{
            background: 'linear-gradient(to right, #1919ff, #00bfff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline',
          }}
        >
          Thanks{' '}
        </Text>
      </Text>
    </Flex>
  );
};

export default Footer;
