import React from 'react';
import { Box, Flex, Button, HStack, useColorModeValue, Link } from '@chakra-ui/react';

const Navbar = ({ aboutRef, workRef, companiesRef, contactRef }) => {
  // Scroll function to scroll to the section smoothly
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} py={2}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}> {/* Align items to opposite sides */}
        <HStack spacing={8} alignItems={'center'}>
          <Button variant="ghost" onClick={() => scrollToSection(aboutRef)}>
            About Me
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection(workRef)}>
            See My Work
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection(companiesRef)}>
            Companies I Worked At
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection(contactRef)}>
            Contact
          </Button>
          {/* Resume Download Button */}
        <Link href="https://drive.google.com/file/d/1HXHXnAE9QI3nhyWzT8_qk04JXfpMynk4/view?usp=sharing" isExternal>
          <Button colorScheme="teal" variant="solid">
            Download Resume
          </Button>
        </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
