import { Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { DownloadIcon } from '@chakra-ui/icons';

import { saveAs } from 'file-saver';
const handleDownloadResume = () => {
  const fileUrl =
    'https://drive.google.com/file/d/1SqJnBGcycCebY6bm-a38rdRyIIbwulwY/view?usp=sharing';
  saveAs(fileUrl, 'RamonLiraniCurriculo.pdf');
};

const ButtonCV = () => {
  return (
    <Flex alignItems={'center'} justifyContent={'center'}>
      <Button
        onClick={handleDownloadResume}
        rightIcon={<DownloadIcon />}
        _hover={{ opacity: 0.8 }}
        cursor={'pointer'}
        mt={400}
        borderRadius={6}
        padding={0}
        height={40}
        fontFamily={'Roboto'}
      >
        Download CV
      </Button>
    </Flex>
  );
};

export default ButtonCV;
