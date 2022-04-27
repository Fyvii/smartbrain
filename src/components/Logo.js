import React from 'react';

//React Tilt
import Tilt from 'react-tilt';

//Chakra
import { VStack, Box, Heading, Icon } from '@chakra-ui/react';
import { FaBrain } from 'react-icons/fa';

const Logo = () => {
  return (
    <Box>
      <Tilt
        className="Tilt"
        style={{
          height: 250,
          width: 250,
        }}
      >
        <VStack>
          <Heading size="lg">Smart Brain</Heading>
          <Icon as={FaBrain} boxSize={20} color="teal.200"></Icon>
        </VStack>
      </Tilt>
    </Box>
  );
};

export default Logo;
