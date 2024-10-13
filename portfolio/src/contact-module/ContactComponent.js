import React from 'react';
import { Box, Stack, IconButton, Text, Heading, Link, VStack } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import { FaLinkedin, FaTwitter, FaWhatsapp, FaMedium, FaCode } from 'react-icons/fa';

const ContactComponent = () => {
  return (
    <Box
      className="contact"
      bgGradient="linear(to-b, teal.500, white)" // Gradient from teal to white
      p={10}
      rounded="md"
      boxShadow="lg"
    >
      <VStack spacing={5} align="center">
        <Heading size="lg" color="gray.700">Contact Me</Heading>
        <Text fontSize="md" color="gray.600">Feel free to reach out to me through any of the platforms below:</Text>
        
        <Stack direction="row" spacing={6}>
          {/* Email */}
          <Link href="mailto:bittusinghtech@gmail.com" isExternal>
            <IconButton
              icon={<EmailIcon />}
              aria-label="Email"
              colorScheme="teal" // Change to 'teal'
              variant="outline"
              size="lg"
              isRound
            />
          </Link>

          {/* LinkedIn */}
          <Link href="https://www.linkedin.com/in/bittu-singh-2903" isExternal>
            <IconButton
              icon={<FaLinkedin />}
              aria-label="LinkedIn"
              colorScheme="teal" // Change to 'teal'
              variant="outline"
              size="lg"
              isRound
            />
          </Link>

          {/* WhatsApp */}
          <Link href="https://wa.me/+918920337656" isExternal>
            <IconButton
              icon={<FaWhatsapp />}
              aria-label="WhatsApp"
              colorScheme="teal" // Change to 'teal'
              variant="outline"
              size="lg"
              isRound
            />
          </Link>

          {/* Twitter */}
          <Link href="#" isExternal>
            <IconButton
              icon={<FaTwitter />}
              aria-label="Twitter"
              colorScheme="teal" // Change to 'teal'
              variant="outline"
              size="lg"
              isRound
            />
          </Link>

          {/* LeetCode */}
          <Link href="https://leetcode.com/u/bittusinghtech/" isExternal>
            <IconButton
              icon={<FaCode />}
              aria-label="LeetCode"
              colorScheme="teal" // Change to 'teal'
              variant="outline"
              size="lg"
              isRound
            />
          </Link>

          {/* Medium */}
          <Link href="https://medium.com/@bittusinghtech" isExternal>
            <IconButton
              icon={<FaMedium />}
              aria-label="Medium"
              colorScheme="teal" // Change to 'teal'
              variant="outline"
              size="lg"
              isRound
            />
          </Link>
        </Stack>
      </VStack>
    </Box>
  );
};

export default ContactComponent;
