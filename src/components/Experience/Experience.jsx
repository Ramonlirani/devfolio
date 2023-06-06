import { Flex, Text } from '@chakra-ui/react';

const Experience = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="flex-start"
      id="experience"
      ml={150}
    >
      <Text fontSize="50px" mb={4} mt={80} color="white">
        Experience
      </Text>
      <Text fontSize="30px" mt={2} color="#a7a7a7">
        Featured Professional Experiences
      </Text>
      <Flex flexDirection="column" alignItems="flex-start">
        <Text fontSize="23px">
          Robert Bosch Curitiba - Young Apprentice (1 year and 4 months) <br />
          - Experience in 5S project, administrative area, measurements of parts
          and responsible
          <br /> for project improvement in production, and basic administrative
          functions.
        </Text>

        <Text fontSize="23px">
          View Software House - Internship (4 months) <br />- Development of the
          Storeview application made in React Native.
        </Text>
      </Flex>
    </Flex>
  );
};

export default Experience;
