import React from 'react';
import { Box, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { FaJava, FaPython, FaDatabase, FaCogs, FaCode } from 'react-icons/fa'; // Importing icons from react-icons

const certifications = [
  { name: 'Core Java', icon: FaJava, color: 'orange.400' },
  { name: 'Python Programming', icon: FaPython, color: 'blue.400' },
  { name: 'DBMS', icon: FaDatabase, color: 'green.400' },
  { name: 'Operating Systems', icon: FaCogs, color: 'purple.400' },
  { name: 'System Design', icon: FaCode, color: 'teal.400' }
];

const CertificationsComponent = () => {
  return (
    <Box textAlign="center" py={10} px={5}>
      <SimpleGrid columns={[1, 2, 3, 5]} spacing={8}>
        {certifications.map((cert, index) => (
          <VStack
            key={index}
            border="1px solid"
            borderColor="gray.200"
            borderRadius="md"
            p={5}
            bg="white"
            boxShadow="lg"
            _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}
          >
            <Box color={cert.color} fontSize="4xl">
              <cert.icon />
            </Box>
            <Text fontWeight="bold">{cert.name}</Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default CertificationsComponent;
