import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex ,
  useColorModeValue,useColorMode,useDisclosure,
  
  Wrap,WrapItem, Avatar, Image, Center, HStack} from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

import {MEMBERDATA} from '../data/membersDat'
import { InfoIcon } from '@chakra-ui/icons';
const memberbig= MEMBERDATA.slice(0,4)
const membersmall= MEMBERDATA.slice(4,MEMBERDATA.length)

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
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
      <Text m={0} p={0} fontWeight={600} color={'#316BFF'}>{title.split(' ')[0]}</Text>
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
<Text fontSize={{base:'2xl',md:'5xl'}} color={'#316BFF'} >MOMENTS CORE</Text><Text ml={'0.7em'} fontSize={{base:'2xl',md:'5xl'}}>21-22</Text>
</Center>
      <SimpleGrid columns={{ base: 1, md: 2, lg:4}} spacing={15} p={100} pb={0}  >
      {memberbig.map((info) => (         
        <Feature
          icon={<Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' borderRadius='full' boxSize={{base: 150, md:'200px'}} />}
          title={info.name}
          text={
            'Head of operations'
          }
        />
      ))}
      </SimpleGrid>



     
      <SimpleGrid columns={{ base: 1, md: 3,lg:6 }} align={'center'} spacing={10} p={100} pt={50} >
      {membersmall.map((info) => (         
        <Feature
          icon={<Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' borderRadius='full' boxSize='150px' />}
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