import React from 'react';
import { 
  Box,
  Flex,
} from '@chakra-ui/react';
import banner from '../assets/images/banner.png'
import Navbar from '../components/nav';
import About from '../components/about';
import Members from '../components/members';
import Footer from '../components/footer';
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
