import React from 'react';

//Color Mode
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  Icon,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

//Chakra
import { HStack, Button } from '@chakra-ui/react';

// Navigation
const Navbar = () => {
  return (
    <HStack justify="flex-end">
      <Button fontSize="sm" size="sm" colorScheme="teal">
        Sign Out
      </Button>
      <ColorModeSwitcher />
    </HStack>
  );
};

export default Navbar;

// Color Mode Switch

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};
