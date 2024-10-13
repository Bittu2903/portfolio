import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComponent from './home-module/HomeComponent';
import AboutComponent from './about-module/AboutComponent';
import ContactComponent from './contact-module/ContactComponent';
import GlobalStyle from './global-style-module/GlobalStyleComponent';
import AnimationOne from './home-module/AnimationOne';
import { useRef } from 'react';
import { Box, Flex, Button, Link } from '@chakra-ui/react';

function App() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      {/* Background Animation */}
      <div className="animation-background">
        <AnimationOne />
      </div>

      {/* Global Styles */}
      <div className="content">
        <GlobalStyle />

        {/* Navbar */}
        <Box
          as="nav"
          bg="rgba(0, 0, 0, 0.5)" // Semi-transparent background
          color="white"
          py={4}
          px={8}
          position="fixed"
          width="100%"
          zIndex={1000}
          style={{ transition: 'opacity 0.3s ease', backdropFilter: 'blur(10px)' }} // Smooth transition with blur effect
        >
          <Flex justify="space-between" alignItems="center">
            {/* Left side navigation */}
            <Flex>
              <Button variant="link" color="white" onClick={() => scrollToSection(homeRef)} mr={4}>
                Home
              </Button>
              <Button variant="link" color="white" onClick={() => scrollToSection(aboutRef)} mr={4}>
                About Me
              </Button>
              <Button variant="link" color="white" onClick={() => scrollToSection(contactRef)} mr={4}>
                Contact Me
              </Button>
            </Flex>

            {/* Right side: Resume Download */}
            <Link href="https://drive.google.com/file/d/1HXHXnAE9QI3nhyWzT8_qk04JXfpMynk4/view?usp=sharing" isExternal>
              <Button colorScheme="teal" variant="solid">
                Download Resume
              </Button>
            </Link>
          </Flex>
        </Box>

        {/* Components with Refs */}
        <Box pt={16}> {/* Add padding to avoid overlap with fixed navbar */}
          <div ref={homeRef}>
            <HomeComponent />
          </div>
          <div ref={aboutRef}>
            <AboutComponent />
          </div>
          <div ref={contactRef}>
            <ContactComponent />
          </div>
        </Box>
      </div>
    </div>
  );
}

export default App;
