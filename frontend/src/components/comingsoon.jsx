import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Center
} from '@chakra-ui/react';

function ComingSoon() {

  return (
    <Box>
   
      <Flex
      w={'full'}
      h={'30vh'}
       >
    <Center width={'full'}>
    <Heading as='text' p={10}>
       We have many scintillating workshops in store for you! Stay Tuned to know more!
     </Heading>
      </Center>

      </Flex>


      

    </Box>
  );
}

export default ComingSoon;
