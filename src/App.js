import React from 'react';
import Navbar from './components/navbar';
import Logo from './components/Logo';
import Body from './components/body';

//Chakra
import { Box, Text, VStack } from '@chakra-ui/react';

function App() {
  return (
    <VStack spacing={3} p={4}>
      <Box w="100%">
        <Navbar />
      </Box>
      <Box>
        <Logo />
      </Box>
      <Box>
        <Body />
      </Box>
    </VStack>
  );
}

export default App;
