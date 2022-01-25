import React from 'react';
import {
  Box,
  Flex
} from '@chakra-ui/react';

import banner from '../assets/images/banner.png'
import Navbar from '../components/nav';
// import About from '../components/about';
// import Members from '../components/members';
import Footer from '../components/footer';
import ComingSoon from '../components/comingsoon';
function Aboutpage() {

  return (
    <Box>
    
      <Navbar />
      <Flex
      w={'full'}
      h={'40vh'}
      // background={banner}
      // backgroundColor={'rgba(122, 12, 32, 0.66)'}
      backgroundImage={banner}
      backgroundBlendMode={'overlay'}
      backgroundSize={'cover'}
      backgroundPosition={'center'}
      back
          
       >

      
      </Flex>
      <ComingSoon/>
      <Footer/>
    </Box>
  );
}

export default Aboutpage;
