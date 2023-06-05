import { Avatar, Flex, Text, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import LogoHTML from '../../assets/logosSkills/iconhtml.svg';
import LogoCSS from '../../assets/logosSkills/iconcss.svg';
import LogoJS from '../../assets/logosSkills/iconjs.svg';
import LogoReact from '../../assets/logosSkills/iconreact.svg';
import LogoGit from '../../assets/logosSkills/icongit.svg';
import LogoVScode from '../../assets/logosSkills/iconvscode.svg';
import LogoGithub from '../../assets/logosSkills/icongithub.svg';
import LogoMaterialUi from '../../assets/logosSkills/iconmaterialui.png';
import LogoChakraUI from '../../assets/logosSkills/iconchakraui.png';
import LogoMongoDB from '../../assets/logosSkills/iconmongoDB.png';
import LogoNodeJS from '../../assets/logosSkills/iconnodejs.png';

const Skills = () => {
  return (
    <Flex flexDirection="column" alignItems="center" id="techStack">
      <Text fontSize="40px" mb={4} color="white">
        My tech stack
      </Text>
      <Text fontSize="20px" mt={2} color="#a7a7a7">
        Technologies I’ve been working with recently
      </Text>
      <Flex justifyContent="center" flexWrap="wrap" marginBottom={20}>
        <WrapItem>
          <Avatar name="html" src={LogoHTML} width={70} />
        </WrapItem>
        <WrapItem>
          <Avatar name="css" src={LogoCSS} width={70} />
        </WrapItem>
        <WrapItem>
          <Avatar name="javaScript" src={LogoJS} width={70} />
        </WrapItem>
        <WrapItem>
          <Avatar name="React" src={LogoReact} width={70} />
        </WrapItem>
        <WrapItem>
          <Avatar name="NodeJS" src={LogoNodeJS} width={90} />
        </WrapItem>
      </Flex>
      <Flex justifyContent="center" flexWrap="wrap">
        <WrapItem>
          <Avatar name="GIT" src={LogoGit} width={70} />
        </WrapItem>
        <WrapItem>
          <Avatar name="VScode" src={LogoVScode} width={70} />
        </WrapItem>
        <WrapItem>
          <Avatar name="Github" src={LogoGithub} width={70} />
        </WrapItem>
        <WrapItem>
          <Avatar name="MaterialUi" src={LogoMaterialUi} width={90} />
        </WrapItem>
        <WrapItem>
          <Avatar name="ChakraUI" src={LogoChakraUI} width={80} />
        </WrapItem>
        <WrapItem>
          <Avatar name="MongoDB" src={LogoMongoDB} width={80} />
        </WrapItem>
      </Flex>
    </Flex>
  );
};

export default Skills;
