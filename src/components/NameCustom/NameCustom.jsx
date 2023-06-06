import { useEffect } from 'react';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import MyPicture from '../../assets/photo2.png';

const NameCustom = () => {
  useEffect(() => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let interval = null;
    const nameElement = document.querySelector('.name');

    const animateName = (target) => {
      let iteration = 0;
      clearInterval(interval);

      interval = setInterval(() => {
        target.innerText = target.innerText
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join('');

        if (iteration >= target.dataset.value.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    };

    if (nameElement) {
      animateName(nameElement);
    }

    const handleMouseOver = (event) => {
      animateName(event.target);
    };

    if (nameElement) {
      nameElement.addEventListener('mouseover', handleMouseOver);
    }

    return () => {
      if (nameElement) {
        nameElement.removeEventListener('mouseover', handleMouseOver);
      }
    };
  }, []);

  return (
    <Flex
      alignItems={'center'}
      justifyContent={'space-between'}
      marginX={300}
      id="home"
    >
      <Text fontSize={'45px'} mt={200}>
        Hi, <br /> My name is <br />
        <Text
          as="span"
          className="name"
          data-value="Ramon Lirani"
          style={{
            background: 'linear-gradient(to right, #1919ff, #00bfff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Ramon Lirani
        </Text>{' '}
        <br />
        Developer web and mobile
      </Text>
      <Box mt={200}>
        <Image
          src={MyPicture}
          alt="Ramon Lirani"
          width={250}
          borderRadius={250}
          boxSize="250px"
          boxShadow={'0px 0px 0px 2px #00bfff'}
        />
      </Box>
    </Flex>
  );
};

export default NameCustom;
