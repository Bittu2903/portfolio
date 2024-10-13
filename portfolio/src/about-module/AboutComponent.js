import React from 'react';
import { Box, Heading, Stack, Divider, Flex, Text, Circle, VStack, Image } from '@chakra-ui/react';
import InfoCard from './InfoCard';
import SkillsComponent from './SkillsComponent';

function AboutComponent() {
  const personalInfo = [
    {
      title: 'J.C. Bose University of Science and Technology',
      content: [
        'B.Tech: Computer Science and Engineering',
      ],
      duration: '2019-2023',
      colorScheme: 'teal',
    },
    {
      title: 'Jamia Millia Islamia',
      content: [
        'M.Tech: Computer Engineering',
      ],
      duration: '2023-2025 (1st Year Completed)',
      colorScheme: 'blue',
    },
  ];

  const experienceData = [
    {
      title: 'SaleAssist.ai - Full Stack Developer',
      subtext: 'Apr 2024 - Present',
      content: [
        'Built scalable APIs for a video shopping SaaS product using FastAPI, Node.js, Firebase, and other third-party APIs.',
      ],
      colorScheme: 'purple',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrDt1lCLI-aaM39IFg0wqaV7ggq1t4Wn_rVg&s',
    },
    {
      title: 'Tempus Labs - Freelancer',
      subtext: 'Sep 2023 - Sep 2024',
      content: [
        'Worked in night shifts on API testing, UI automation with Playwright, and building new features in React.js and PostgreSQL.',
      ],
      colorScheme: 'blue',
      logo: 'https://vivli.org/wp-content/uploads/2021/05/member_logo_tempus-1.jpg',
    },
    {
      title: 'Superceuticals.in - Full Stack Developer (Contract)',
      subtext: 'Sep 2023 - Nov 2023',
      content: [
        'Worked on integrating IoT devices with a medical testing dashboard, handled encrypted data, and generated PDF reports.',
      ],
      colorScheme: 'orange',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREgLgCt3zkHFnAbxBzM12QPfNTvEpo4p65lw&s',
    },
    {
      title: 'Droidshift IT Solutions - Python Developer',
      subtext: 'Jun 2023 - Feb 2024',
      content: [
        'Developed logistics web app with Django, optimized databases, integrated APIs, and built testing scripts with Playwright.',
      ],
      colorScheme: 'teal',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3JdpJkTMZBrIwKo1q-mZiti7NXMKhr_VkeQ&s',
    },
    {
      title: 'Skill Lotto Solutions - Software Developer Trainee/Engineer',
      subtext: 'Nov 2021 - Apr 2023',
      content: [
        'Worked on Android gaming platforms using Java, MySQL, and PHP.',
        'Promoted to Software Engineer, worked on Node.js backend and scalable APIs.',
      ],
      colorScheme: 'orange',
      logo: 'https://www.zricks.com/UserImg/a3a3e10e-672b-4ff3-8ab1-372b3bbdeb40.jpg',
    },
    {
      title: 'HashHackCode - HTML Developer Intern',
      subtext: 'Jan 2021 - Aug 2021',
      content: [
        'Mentored students in HTML, CSS, and JS. Contributed to a code editor used in sessions.',
      ],
      colorScheme: 'purple',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW3TRcAaswxOgI4ONWl50DMkdDFUjoxAnm6g&s',
    },
  ];

  return (
    <Box textAlign="center" py={10} px={5}>
      <Heading mb={5}>About Me</Heading>

      <Stack direction={['column', 'row']} spacing="40px" mb={10}>
        {personalInfo.map((info, index) => (
          <InfoCard
            key={index}
            title={info.title}
            content={info.content}
            colorScheme={info.colorScheme}
          >
            <Text fontSize="sm" color="gray.500">Duration: {info.duration}</Text>
          </InfoCard>
        ))}
      </Stack>

      <Heading my={5} size="md">Experience</Heading>

      <VStack align="stretch" spacing={8} position="relative">
        {experienceData.map((experience, index) => (
          <Flex key={index} align="center" width="100%">
            <Box position="relative">
              <Circle size="16px" bg={`${experience.colorScheme}.500`} mr={4} />

              {index !== experienceData.length - 1 && (
                <Divider
                  orientation="vertical"
                  borderColor="gray.300"
                  height="80px"
                  position="absolute"
                  top="16px"
                  left="7px"
                />
              )}
            </Box>

            <Box flex="1" ml={8} display="flex" alignItems="center" marginBottom={4} marginTop={4}>
              <Image
                src={experience.logo}
                alt={experience.title}
                boxSize="80px" // Keep the logo size reasonable
                maxHeight="80px" // Restrict the maximum height of the logo
                objectFit="contain"
                borderRadius="md"
                mr={4}
              />
              <InfoCard
                title={experience.title}
                content={experience.content}
                subtext={experience.subtext}
                colorScheme={experience.colorScheme}
                width="100%" // Ensure uniform width
                height="120px" // Set a fixed height for the card
              />
            </Box>
          </Flex>
        ))}
      </VStack>

      <Heading my={5} size="md">My Skills</Heading>

      <SkillsComponent />
    </Box>
  );
}

export default AboutComponent;
