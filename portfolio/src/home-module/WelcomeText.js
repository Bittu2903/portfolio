import React, { useEffect, useState } from 'react';
import { Text, useBreakpointValue, Box } from '@chakra-ui/react';

const phrases = [
  "Hi, I'm Bittu Singh, a Software Engineer.",
  " I build scalable & innovative solutions.",
];

const WelcomeText = () => {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const currentPhrase = phrases[phraseIndex]; // Define currentPhrase here
      setText(''); // Clear the text before typing new phrase

      currentPhrase.split('').forEach((char, index) => {
        setTimeout(() => {
          setText(prev => prev + char);
        }, index * 100); // Adjust speed by changing the timeout value
      });

      // Move to next phrase
      setPhraseIndex(prev => (prev + 1) % phrases.length); 

      // Reset text after the phrase is fully typed
      setTimeout(() => {
        setText(''); // Optionally clear text after typing
      }, currentPhrase.length * 100 + 2000); // Wait before clearing text

    }, phrases[phraseIndex].length * 100 + 3000); // Total interval duration

    return () => clearInterval(interval);
  }, [phraseIndex]);

  return (
    <>
      <Box minHeight="100px" mt={4} overflow="hidden"> {/* Fixed height for consistency */}
        <Text fontSize={useBreakpointValue({ base: '3xl', md: '5xl' })} fontWeight="bold">
          {text}
        </Text>
      </Box>
    </>
  );
};

export default WelcomeText;
