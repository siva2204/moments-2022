import React from 'react';
import {
  ChakraProvider,
  theme,
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Flex
} from '@chakra-ui/react';

import banner from '../assets/images/banner.png'
import Navbar from '../components/nav';
import About from '../components/about';
import Members from '../components/members';
import Footer from '../components/footer';
function Home() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Flex
      w={'full'}
      h={'100vh'}
      backgroundColor={'rgba(10, 12, 32, 0.66)'}
      backgroundImage={banner}
      backgroundSize={'cover'}
      backgroundPosition={'center'}
      back
      
      
       >
      
      </Flex>
      <About/>
          <Members/>
      <Footer/>
    </ChakraProvider>
  );
}

export default Home;
