import React from 'react';
import {
  Box,
  Flex,
  SimpleGrid,
  Badge,
  Button,
  Text,
  useColorModeValue,
  Center,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  UnorderedList,
  ListItem

} from '@chakra-ui/react';

import banner from '../assets/images/banner.png'
import Navbar from '../components/nav';
// import About from '../components/about';
// import Members from '../components/members';
import Footer from '../components/footer';

// i'm sorry delete it later
const event1 = [
  'The contestants are required to record an audio clip for the domain given and submit it within the specified period of time.',
  'The audio clip must not exceed 7 minutes.',
  'Evaluation will be based on the narrative, detailing of the topic, coherency and strengthening of the points.Technical details are given the least priority for evaluation.',
  'The competition is open to all years.',
  'Participants are required to start the podcast by introducing their name, educational institution and year of study.',
  'The audio clip should be submitted as a .mp4 file in a drive link via email'
];

const event2 = [
  'The contestants are required to capture a picture of any structure relevant to the given theme / topic',
  'A small description shall be given to the picture.',
  'The contestants should upload the picture taken by them on their instagram handle with the description using the hashtags #moments22 #momentsphotography22',
  'The picture will be judged based on number of likes, relation to the theme, photographical skills and quality.',
  " Plagiarism isn't tolerated."
];
function Events() {

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
      
      {/* hard coding 2 pre events here cuz data given are inconsistent pls to remove for the moments */}

      <SimpleGrid columns={{ base: 1, md: 2, lg:4}} spacing={{base:10,md:15}} p={50}>

       <Event title="Photography Contest" description="We cannot freeze the beautiful moments of life. But can capture them and can carry it forever. Moment's photography contest is here to bring your distinctive clicks to the spotlight!" rules={event2} tag="contest" />

       <Event title=" Podcast Competition" description="The contestants are required to record an audio clip for the domain given and submit it within the specified period of time..." rules={event1} tag="competition" />

      </SimpleGrid>

      <Footer/>
    </Box>
  );
}



function Event({title, description, rules, tag}) {
    const { isOpen, onOpen, onClose } = useDisclosure();

  return (
     <Box maxW='sm' borderWidth='2px' borderRadius='lg' overflow='hidden' p={15} pb={20} position="relative">

        <Badge borderRadius='full' px='5' py='1'>
            {tag}
        </Badge>

        <Text as='h3' my={5}  fontWeight='bold' fontSize='2xl'>{title}</Text>
        <Text>{description === "" ? "Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam duaisdhusia dusa duashu duasdhusahd saudusahud ausdhuisahdui ddcdsfd" : description}</Text>
        <Center>
        <Button
              mt={25}
                size='md'
                height='40px'
                width='100px'
                border='1px'
                borderColor='#C0C1D1'
                borderRadius={4}
                zIndex={1}
                _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('accent','accent'),
                color:'white'
              }}
              onClick={onOpen}
              style={{position: 'absolute', bottom:'20px'}}
              
              >
                View more
        </Button>

        </Center>

         <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset='slideInBottom' size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>

            <UnorderedList>
              {rules.map((s,i)=>{
                return <ListItem key={i}>{s}</ListItem>;
              })}
            </UnorderedList>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>


          
        </Box>
  );
}


export default Events;
