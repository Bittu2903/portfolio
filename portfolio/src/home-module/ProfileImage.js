// src/home-module/ProfileImage.js
import React from 'react';
import { Image } from '@chakra-ui/react';
import myPhoto from '../assets/my-photo.jpg'; // Adjust the path if necessary

const ProfileImage = () => {
  return (
    <Image 
          src={myPhoto} // Replace with your image URL
          alt="My Photograph"
          borderRadius="full"
          boxSize="150px" // Adjust size as needed
          height={'auto'}
          width={200}
          mb={4} // Margin below the image
          mt={{ base: 4, md: 0 }} // Responsive margin-top: 4 on mobile, 0 on larger screens
        />
  );
};

export default ProfileImage;
