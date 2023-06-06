import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

const AboutMe = () => {
  return (
    <Flex flexDirection="column" id="about" ml={150} mt={170}>
      <Text fontSize="50px" mb={4} color="white" justifyContent={'flex-start'}>
        About me
      </Text>
      <Text fontSize="30px" mt={2} color="#a7a7a7" width={600}>
        Hi, I'm Ramon Lirani, 26 years old, software developer. Currently
        studying systems analysis and development at PUC-PR. I decided to start
        learning programming because each project is a new challenge and new
        learning, today I am deepening more in mobile development.
      </Text>
    </Flex>
  );
};

export default AboutMe;
