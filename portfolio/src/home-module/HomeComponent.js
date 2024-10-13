// src/home-module/HomeComponent.js
import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import ProfileImage from './ProfileImage';
import WelcomeText from './WelcomeText';

function HomeComponent() {
  return (
    <Box color="teal" textAlign="center" py={10} px={5}>
      <Flex direction="column" align="center" justify="center" height="100vh">
        <ProfileImage />
        <WelcomeText />
      </Flex>
    </Box>
  );
}

export default HomeComponent;
