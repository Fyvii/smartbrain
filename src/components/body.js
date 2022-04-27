import React from 'react';

//Chakra
import {
  Center,
  Flex,
  Container,
  Input,
  Button,
  VStack,
  Stack,
} from '@chakra-ui/react';

const Body = () => {
  return (
    <Flex textAlign="center">
      <Stack align="center">
        <Button colorScheme="teal" w={100}>
          Submit
        </Button>
        <Input></Input>
        <Container maxW="xl">
          <Center>
            This Magic Brain will detect any faces present in your pictures!
            Please upload any image link you may have so our Magic Brain could
            work!
          </Center>
        </Container>
      </Stack>
    </Flex>
  );
};

export default Body;
