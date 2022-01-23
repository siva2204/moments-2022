import React from 'react';
import {
  ChakraProvider,
 
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Flex,
  extendTheme
} from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';
import banner from '../assets/images/banner.png'
import Navbar from '../components/nav';
import About from '../components/about';
import Members from '../components/members';
import Footer from '../components/footer';
import theme from '../components/customtheme.js'
// const theme= extendTheme({body:'monospace'},)
// import Fonts from '../fonts/fonts';

function Home() {
  return (
    <Box>
    
      <Navbar />
      <Flex
      w={'full'}
      h={'100vh'}
      
      backgroundColor={'rgba(10, 12, 32, 0.66)'}
      backgroundImage={banner}
      backgroundBlendMode={'overlay'}
      backgroundSize={'cover'}
      backgroundPosition={'center'}
      back
      
      
       >
      
      </Flex>
      <About/>
          <Members/>
      <Footer/>
    </Box>
    
  );
}

export default Home;
