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
  ListItem,
  Image

} from '@chakra-ui/react';

import banner from '../assets/images/banner.png'
import Navbar from '../components/nav';
import Footer from '../components/footer';

const workshop1 = [
  'Construction industry is turning to the use of environmentally friendly materials. The increasing global warming has raised concerns about the extensive use of Portland cement due to the high amount of CO2 emission, depletion of natural resources. The development of Geopolymer Concrete (GPC) offers promising signs for a change in the way of producing concrete. Dr. J. Karthikeyan, Associate Professor at NITT will conduct the workshop and address the application and use cases of GPC on the field.',
  'Registration fee: ₹250',
  'Date & Time : 9th Apr 10 AM to 1 PM'
];

const workshop2 = [
  'The workshop is conducted by Ms. Ayushi Tiwari, Project scientist at National Geophysical Research Institute, NIT Trichy 2016 alumnus',
  'This workshop is aimed at introducing the major applications and examples of geotechnical engineering projects of the industry relevant to today’s society. This will show the magic of ground engineering unfold before your eyes and display the beauty of designing sustainable futures. From geotechnical testing and investigation to pile driving analysis, construction quality assurance to seismic hazard and liquefaction analysis, this workshop will give a glimpse of the outline of geotechnical engineering work for some of the major projects across the globe. This will also demonstrate some of the important geotechnical engineering software’s like SLIDE, gINT, GRLWEAP, ArcGIS, DEEPSOIL, etc. After running through few of the important applications, this workshop introduces the fundamental concepts and applications of Earthquake Engineering along with its importance for the safety of our country.',
  'Registration fee: ₹250',
  'Date & Time :9th Apr 2 PM to 5 PM'
];

const workshop3 = [
  'This workshop is conducted by Dr. Vikas Sharma, Post-Doctoral Researcher, Kyoto university',
  'Whether you are building a simple residential building or the next Burj Khalifa, understanding the structural behavior and integrity of your building is extremely important to ensure the safety of its occupants. Using basic concepts of applied mathematics, any built structure can be analyzed—buildings, bridges, dams or even foundations. Finite element analysis (FEA) is an extremely useful tool in civil engineering for numerically approximating physical structures that are too complex for regular analytical solutions.',
  'Registration fee: ₹250',
  'Date & Time : 10th Apr 10 AM to 1 PM'
];

const workshop4 = [
'To thrive as a pro in designing multi-storey buildings is still an aspiration for many. Fret Not! Moments 22 is here to present a workshop on ETABS, which is the ultimate software package for structural analysis. Udhaya Sankar Ramasamy would provide detailed mentoring all the way through.',
'Registration fee: ₹250',
'Date & Time : 10th Apr 2 PM to 5 PM'
];

function Workshop() {
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

      <SimpleGrid columns={{ base: 1, md: 2, lg:4}} spacing={{base:10,md:15}} p={50}>

       <WorkshopCard title="Geopolymer concrete workshop" description="Construction industry is turning to the use of environmentally friendly materials. The increasing global warming has raised concerns about the extensive use of Portland cement due to the high amount of CO2 emission, depletion of natural resources." tag="9th Apr 10 AM to 1 PM" rules={workshop1} url='https://i.imgur.com/0vd5Qho.jpg' registerLink='https://forms.gle/ZwbVPxC5jdQsBW3K8'/>

       <WorkshopCard title="Geotechnical Applications in Industry with special emphasis on Earthquake Engineering" description="This workshop is aimed at introducing the major applications and examples of geotechnical engineering projects of the industry relevant to today’s society. This will show the magic of ground engineering unfold before your eyes and display the beauty of designing sustainable futures." tag="9th Apr 2 PM to 5 PM" rules={workshop2} url='https://i.imgur.com/Cnn9Fnr.jpg' registerLink='https://forms.gle/utbK86ejygXQ2HH69'/>

      <WorkshopCard title="Engineering Applications of Finite Element Methods" description="Whether you are building a simple residential building or the next Burj Khalifa, understanding the structural behaviour and integrity of your building is extremely important to ensure the safety of its occupants" tag="10th Apr 10 AM to 1 PM" rules={workshop3} url= 'https://i.imgur.com/3jLqLoa.jpg' registerLink='https://forms.gle/4Rn9hcs9FGKc9VKNA'/>

       <WorkshopCard title="ETABS workshop" description="To thrive as a pro in designing multi-storey buildings is still an aspiration for many. Fret Not! Moments 22 is here to present a workshop on ETABS, which is the ultimate software package for structural analysis." tag="10th Apr 2 PM to 5 PM" rules={workshop4} url='https://i.imgur.com/bamZh62.png' registerLink='https://forms.gle/CUvxqvwiLxmYb9pN9' />
      </SimpleGrid>


      <Footer/>
    </Box>
  );
}


function WorkshopCard({title, description ,rules, tag, url, registerLink}) {
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

         <Modal scrollBehavior="inside" isOpen={isOpen} onClose={onClose} isCentered motionPreset='slideInBottom' size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            
            <Center>
               <Image height="400" src={url} alt={title} />
            </Center>

            <UnorderedList>
              {rules.map((s,i)=>{
                return <ListItem key={i}>{s}</ListItem>;
              })}
            </UnorderedList>


          </ModalBody>

          {/* <ModalFooter> */}
            <Center>
            <Button colorScheme='blue' m={3} onClick={() => {
              window.location.assign(registerLink);
            }}>
              Register Now
            </Button>
            </Center>

          {/* </ModalFooter> */}
        </ModalContent>
      </Modal>


          
        </Box>
  );
}


export default Workshop;
