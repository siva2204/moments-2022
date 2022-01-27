import React from 'react';
import {
  Box,
  Flex,
  Text,
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
    <Text fontSize={{ base: '15px', md: '25px', lg: '35px' }} p={10}>
       We have many scintillating workshops in store for you! Stay Tuned to know more!
     </Text>
      </Center>

      </Flex>


      

    </Box>
  );
}

export default ComingSoon;
