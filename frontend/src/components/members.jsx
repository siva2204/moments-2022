import { Box, SimpleGrid, Text, Stack, Flex ,
  useColorModeValue, Image, Center, HStack} from '@chakra-ui/react';

import {MEMBERDATA} from '../data/membersDat'
const memberbig= MEMBERDATA.slice(0,4)
const membersmall= MEMBERDATA.slice(4,MEMBERDATA.length)

const Feature = ({ title, text, icon }) => {
  return (
    <Stack alignItems={'center'}>
      
      <Flex
        
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={13}
        >
        {icon}
      </Flex>
      <HStack>
      <Text m={0} p={0} fontWeight={600} color={'accent'}>{title.split(' ')[0]}</Text>
      <Text m={0} p={0} fontWeight={600}>{title.split(' ').reverse().slice( 0,-1).join(' ')}</Text>
      </HStack>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function Members() {
  
  return (
    
    <Box p={4} bg={useColorModeValue('#FBFBFD','#202736')}
    
    
    
    >
<Center spacing={10} mb={25}>
<Text fontSize={{base:'2xl',md:'5xl'}} color={'accent'} >MOMENTS CORE</Text><Text ml={'0.7em'} fontSize={{base:'2xl',md:'5xl'}}>21-22</Text>
</Center>
      <SimpleGrid columns={{ base: 1, md: 2, lg:4}} spacing={{base:10,md:15}} p={100} pb={0}  >
      {memberbig.map((info) => (         
        <Feature
          icon={<Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' borderRadius='full' maxH={{base: 300, md:200}} />}
          title={info.name}
          text={
            'Head of operations'
          }
          pb={{base:50,md:0}}
        />
      ))}
      </SimpleGrid>



     
      <SimpleGrid columns={{ base: 1, md: 3,lg:5, xl:6 }} align={'center'} spacing={10} p={100} pt={50} >
      {membersmall.map((info) => (         
        <Feature
          icon={<Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' borderRadius='full'  maxH={{base: 300, md:150}}/>}
          title={info.name}
          text={
            'Head of operations'
          }
          pb={50}
        />
      ))}
      </SimpleGrid>
     
      
    </Box>
  );
}