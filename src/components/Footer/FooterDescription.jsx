import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

const FooterDescription = () => {
  return (
    <Flex mr={160}>
      <Text>
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

export default FooterDescription;
