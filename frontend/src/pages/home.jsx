import React from 'react';
import { 
  Box,
  Flex,
  AspectRatio,
  Center
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
      h={{base:'450px', md: '100vh', lg: '100vh'}}
      
      // backgroundColor={'rgba(10, 12, 32, 0.22)'}
      backgroundImage={banner}
      backgroundBlendMode={'overlay'}
      backgroundSize={'cover'}
      backgroundPosition={'center'}
      back
       >
      <Center width={'full'}>
  <Box
    as="iframe"
    title="naruto"
    src="https://www.youtube.com/embed/cThFNALuXiY"
    allowFullScreen
    width="600px"
    height="320px"
    borderRadius={20}
    boxShadow='md'
    mx={5}
  />
  <Box
    as="iframe"
    title="naruto"
    src="https://www.youtube.com/embed/hbUxaHwUci8"
    allowFullScreen
    width="600px"
    height="320px"
    borderRadius={20}
    boxShadow='md'
    mx={5}
  />

      </Center>

      
      </Flex>
      <About/>
          <Members/>
      <Footer/>
    </Box>
    
  );
}

export default Home;
