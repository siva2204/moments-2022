import {
    Box,
    Container,
    Text,
    Stack,
    HStack,
    Center,
    Flex,
    Button,
    useColorModeValue,
    Image
    
  } from '@chakra-ui/react';
  import ring from '../assets/svgs/Vector.svg'
  import circle from '../assets/svgs/Vector-1.svg'
  // Replace test data with your own
  // const features = Array.apply(null, Array(2)).map(function (x, i) {
  //   return {
  //     id: i,
  //     title: 'Lorem ipsum dolor sit amet',
  //     text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
  //   };
  // });

  export default function About() {
    const bg=useColorModeValue("white", "#202236"  )
    return (
      <Box  w={'full'}
      minh={'100vh'}
      pt={20}
      bg={useColorModeValue("white")}
      
      >
      <Image src={ring} mt={-20} position={'absolute'} zIndex={1}/>
        <Stack spacing={4} as={Container} maxW={'5xl'} textAlign={'center'} >
          
          <Center as="section" w="100%">
          <Stack
            w="100%"
            rounded="md"
            borderWidth={1}
            bg={bg}
            zIndex={2}
            boxShadow= {'md'}
            borderRadius= {20}
            
            m={30}
            p={6}
            spacing={4}
    >
    <Center spacing={10} mb={25}>
    <Text fontSize={'4xl'} color={'accent'}>ABOUT </Text> <Text ml={'0.5rem'}fontSize={'4xl'}>US</Text>
    </Center>
    <Text color={'gray.600'}>Moments is the national level technical symposium of the department of civil engineering, NIT Trichy. Since its inception in 1992, MOMENTS, NIT Trichy has been running with a single aim: To acknowledge and show the significance of Civil Engineering in this transforming world and motivate students in core research. From insightful guest lectures to inventive and challenging events and workshops, this event promotes learning for brilliant minds all over the country. </Text>
    </Stack>
        </Center>
        </Stack>
  
        <Box position={'relative'}>
      
      <Container maxW={'7xl'} zIndex={10} position={'relative'} pt={2}>
      <Image src={circle} mt={-20} ml={-40} position={'absolute'} zIndex={-1}/>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack
            flex={1}
       
            justify={{ lg: 'center' }}
            py={{ base: 4, md: 20, xl: 15 }}>
            <Box mb={{ base: 8, md: 20 }}>
              
              <HStack>
              <Text color={'accent'}fontSize={{ base: '3xl', md: '5xl' }}>
                Moments </Text>
              <Text
                
               
                fontSize={{ base: '3xl', md: '5xl' }}>
                 is 
              </Text>
              </HStack>
              <Text
               mb={5}
                fontSize={{ base: '3xl', md: '5xl' }}
              >the annual symposium</Text>
              <Text fontSize={'xl'}>
                Moments also helps students in building practical applications knowledge by educating them on industry-level research and developments. Entirely run by students, this organisation maintains a good role in developing creative and management skills in students while maintaining excellent team spirit.
              </Text>

               <Text fontSize={'xl'}>
               This year, Moments is all set to explore a whole new spectrum of the latest technology and engineering with the theme "Aedificium". It aims to provide a platform for budding engineers to showcase their prowess and skills.
              </Text>



              {/* <Button
              mt={15}
                size='md'
                height='48px'
                width='200px'
                border='1px'
                borderColor='#C0C1D1'
                borderRadius={4}
                zIndex={1}
                _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('accent','accent'),
                color:'white'
              }}

              >
                Register Now
              </Button> */}
            </Box>

           
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
      </Box>
    );
  }