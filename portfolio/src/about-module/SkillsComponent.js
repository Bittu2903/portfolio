import React from 'react';
import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import { SiDjango } from "react-icons/si";
import {
  FaJava,
  FaPython,
  FaJsSquare,
  FaAngular,
  FaNodeJs,
  FaReact,
  FaDatabase,
  FaDocker,
  FaGit,
  FaJira,
  FaPlay,
  FaConfluence
} from 'react-icons/fa';

const skills = [
  { name: 'Java', icon: <div style={{ color: '#f89820' }}><FaJava /></div> },
  { name: 'Python', icon: <div style={{ color: '#306998' }}><FaPython /></div> },
  { name: 'JavaScript', icon: <div style={{ color: '#F7DF1E' }}><FaJsSquare /></div> },
  { name: 'Angular', icon: <div style={{ color: '#DD0031' }}><FaAngular /></div> },
  { name: 'Node.js', icon: <div style={{ color: '#8CC84B' }}><FaNodeJs /></div> },
  { name: 'React', icon: <div style={{ color: '#61DAFB' }}><FaReact /></div> },
  { name: 'MySQL', icon: <div style={{ color: '#4479A1' }}><FaDatabase /></div> },
  { name: 'PostgreSQL', icon: <div style={{ color: '#336791' }}><FaDatabase /></div> },
  { name: 'MongoDB', icon: <div style={{ color: '#47A248' }}><FaDatabase /></div> },
  { name: 'Redis', icon: <div style={{ color: '#D83B01' }}><FaDatabase /></div> },
  { name: 'Docker', icon: <div style={{ color: '#2496ED' }}><FaDocker /></div> },
  { name: 'Git', icon: <div style={{ color: '#F05032' }}><FaGit /></div> },
  { name: 'Jira', icon: <div style={{ color: '#0052CC' }}><FaJira /></div> },
  { name: 'Playwright', icon: <div style={{ color: '#A95B15' }}><FaPlay /></div> },
  { name: 'Confluence', icon: <div style={{ color: '#0052CC' }}><FaConfluence /></div> },
  { name: 'Django', icon: <div style={{ color: '#092E20' }}><SiDjango /></div> }
];

const SkillsComponent = () => {
  return (
    <Box py={10} textAlign="center">
      <SimpleGrid columns={[2, 3, 4]} spacing={8}> {/* Adjusted columns prop */}
        {skills.map((skill) => (
          <Box
            key={skill.name}
            borderWidth={1}
            borderRadius="md"
            backgroundColor="white"
            p={4}
            textAlign="center"
            boxShadow="md"
            _hover={{
              transform: 'scale(1.1)',
              transition: 'transform 0.3s ease'
            }}
          >
            <Box fontSize="3xl" mb={2}>
              {skill.icon}
            </Box>
            <Text fontSize="lg">{skill.name}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default SkillsComponent;
