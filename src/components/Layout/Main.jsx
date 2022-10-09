import { Box, Flex, Spacer, Text, useColorMode } from '@chakra-ui/react';
import React from 'react';
import Toggle from '../../utils/Toggle';
import Logo from './Logo';

export default function Main() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box minH={'100vh'} w={'100%'}>
      <Flex
        w={'100%'}
        bg={'blue.500'}
        py={2}
        px={[2, 4, 8, 12]}
        align={'center'}
        as='section'
        maxW='1440px'
        mx={'auto'}
      >
        <Logo />
        <Spacer />
        <Toggle onClick={toggleColorMode} colorMode={colorMode} />
      </Flex>
      <Text fontSize={'2xl'} align={'center'} fontWeight={'bold'} p={2}>
        Chakra ui
      </Text>
      <br />
      <Text fontSize={'2xl'} align={'center'} fontWeight={'bold'} p={2}>
        Nexjs + Chakra ui + Next-seo
      </Text>
      <Text fontSize={'2xl'} align={'center'} fontWeight={'bold'} p={2}>
        Follow me on Github to find more projects and templates
      </Text>
    </Box>
  );
}
