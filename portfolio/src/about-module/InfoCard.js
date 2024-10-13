import React from 'react';
import { Card, CardHeader, CardBody, Text, Heading } from '@chakra-ui/react';

const InfoCard = ({ title, content, subtext, colorScheme }) => (
  <Card
    width="100%" // Set a fixed width for all cards
    border="1px solid"
    borderColor={`${colorScheme}.200`}
    boxShadow="md"
    p="6"
    rounded="md"
    _hover={{ bg: `${colorScheme}.50` }} // Adds a soft hover effect
  >
    <CardHeader>
      <Heading size="md" color={`${colorScheme}.600`}>{title}</Heading>
      {subtext && <Text fontSize="sm" color={`${colorScheme}.500`}>{subtext}</Text>}
    </CardHeader>
    <CardBody>
      {content.map((text, index) => (
        <Text key={index} mb={2} color="gray.600">{text}</Text>
      ))}
    </CardBody>
  </Card>
);

export default InfoCard;
