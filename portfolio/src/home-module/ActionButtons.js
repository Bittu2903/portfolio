import React from 'react';
import { Link, Button, Stack, useBreakpointValue } from '@chakra-ui/react';

const ActionButtons = () => {
  return (
    <Stack
      spacing={4}
      mt={8}
      direction={useBreakpointValue({ base: 'column', md: 'row' })} // Stacked on mobile, inline on larger screens
    >
      <Link href="#about">
        <Button 
          colorScheme="teal" 
          variant="outline" 
          size="lg" 
          _hover={{ bg: 'white', color: 'teal.500', transform: 'scale(1.05)', transition: '0.3s' }}
        >
          About Me
        </Button>
      </Link>
      <Link href="#work">
        <Button 
          colorScheme="purple" 
          size="lg" 
          _hover={{ bg: 'white', color: 'purple.500', transform: 'scale(1.05)', transition: '0.3s' }}
        >
          See My Work
        </Button>
      </Link>
      <Link href="#companies">
        <Button 
          colorScheme="orange" 
          size="lg" 
          _hover={{ bg: 'white', color: 'orange.500', transform: 'scale(1.05)', transition: '0.3s' }}
        >
          Companies I Worked At
        </Button>
      </Link>
      <Link href="#contact">
        <Button 
          colorScheme="blue" 
          size="lg" 
          _hover={{ bg: 'white', color: 'blue.500', transform: 'scale(1.05)', transition: '0.3s' }}
        >
          Contact Me
        </Button>
      </Link>
    </Stack>
  );
};

export default ActionButtons;
