import React from 'react';
// import {
//   Box,
//   Flex,
//   SimpleGrid,
//   Stack,
//   Badge,
//   Button,
//   Text,
//   useColorModeValue,
//   Center,
//   useDisclosure,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalCloseButton,
//   ModalBody,
//   UnorderedList,
//   ListItem,
//   Image

// } from '@chakra-ui/react';

import {
  Box,
  Flex,
  Stack,
  Text,
  Center

} from '@chakra-ui/react';

import banner from '../assets/images/banner.png'
import Navbar from '../components/nav';
import Footer from '../components/footer';

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

      {/* <SimpleGrid columns={{ base: 1, md: 2, lg:4}} spacing={{base:10,md:15}} p={50}>

       <WorkshopCard title="Geopolymer concrete workshop" description="Construction industry is turning to the use of environmentally friendly materials. The increasing global warming has raised concerns about the extensive use of Portland cement due to the high amount of CO2 emission, depletion of natural resources." tag="9th Apr 10 AM to 1 PM" rules={workshop1} url='https://i.imgur.com/0vd5Qho.jpg' registerLink='https://forms.gle/ZwbVPxC5jdQsBW3K8'/>

       <WorkshopCard title="Geotechnical Applications in Industry with special emphasis on Earthquake Engineering" description="This workshop is aimed at introducing the major applications and examples of geotechnical engineering projects of the industry relevant to today’s society. This will show the magic of ground engineering unfold before your eyes and display the beauty of designing sustainable futures." tag="9th Apr 2 PM to 5 PM" rules={workshop2} url='https://i.imgur.com/Cnn9Fnr.jpg' registerLink='https://forms.gle/utbK86ejygXQ2HH69'/>

      <WorkshopCard title="Engineering Applications of Finite Element Methods" description="Whether you are building a simple residential building or the next Burj Khalifa, understanding the structural behaviour and integrity of your building is extremely important to ensure the safety of its occupants" tag="10th Apr 10 AM to 1 PM" rules={workshop3} url= 'https://i.imgur.com/3jLqLoa.jpg' registerLink='https://forms.gle/4Rn9hcs9FGKc9VKNA'/>

       <WorkshopCard title="ETABS workshop" description="To thrive as a pro in designing multi-storey buildings is still an aspiration for many. Fret Not! Moments 22 is here to present a workshop on ETABS, which is the ultimate software package for structural analysis." tag="10th Apr 2 PM to 5 PM" rules={workshop4} url='https://i.imgur.com/bamZh62.png' registerLink='https://forms.gle/CUvxqvwiLxmYb9pN9' />
      </SimpleGrid> */}
          <Center as="section" w="100%">
          <Stack
            w="100%"
            rounded="md"
            borderWidth={1}
            zIndex={2}
            // boxShadow={'md'}
            borderRadius={20}
            m={30}
            p={6}
            spacing={4}
          >
            <Center spacing={10} mb={25}>
              <Text fontSize={'4xl'} color={'accent'}>
                Under
              </Text>{' '}
              <Text ml={'0.5rem'} fontSize={'4xl'}>
                Construction
              </Text>
            </Center>
            <Text color={'gray.600'} align={'center'}>
              Take Diversion <br /> --------------&gt;
            </Text>
          </Stack>
        </Center>

      <Footer/>
    </Box>
  );
}

// function Event1 () {
//       const { isOpen, onOpen, onClose } = useDisclosure();
//   return <> 
//    <Box maxW='sm' borderWidth='2px' borderRadius='lg' overflow='hidden' p={15} pb={20} position="relative">

//         <Badge borderRadius='full' px='5' py='1'>
//             event
//         </Badge>

//         <Text as='h3' my={5}  fontWeight='bold' fontSize='2xl'>CIVIGYAN</Text>
//         <Text>Unleash your technical knowledge and assert your intellectual skills as you take up the Civigyan consisting of two rounds.</Text>
//         <Center>
//         <Button
//               mt={25}
//                 size='md'
//                 height='40px'
//                 width='100px'
//                 border='1px'
//                 borderColor='#C0C1D1'
//                 borderRadius={4}
//                 zIndex={1}
//                 _hover={{
//                 textDecoration: 'none',
//                 bg: useColorModeValue('accent','accent'),
//                 color:'white'
//               }}
//               onClick={onOpen}
//               style={{position: 'absolute', bottom:'20px'}}
              
//               >
//                 View more
//         </Button>

//         </Center>

//          <Modal scrollBehavior="inside" isOpen={isOpen} onClose={onClose} isCentered motionPreset='slideInBottom' size="xl">
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>CIVIGYAN</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
            
//             <Center>
//                <Image height="400" src="https://i.imgur.com/uKSgDgK.png" alt="CIVIGYAN" />
//             </Center>

//              <Text as='h3' my={5}  fontWeight='bold' fontSize='xl'>Event description</Text>
//              <Text as='p' my={5}>Unleash your technical knowledge and assert your intellectual skills as you take up the Civigyan consisting of two rounds.</Text>


//              <Text as='h3' my={5}  fontWeight='bold' fontSize='xl'>Format</Text>
//              <Text as='p' my={5} >Round 1: Online quiz consisting of objective questions (comprising of both Structural and Non-structural)</Text>
//               <Text as='p' my={5}>Round 2: six teams who have secured the highest marks in Level 1 will qualify for Level 2 and they will acquire a chance to exhibit their proficiency in the field of civil engineering through six rounds of online quizzing. After 6 rounds of strenuous quizzing, teams retaining the top three positions will be awarded.</Text>


//             <Text as='h3' my={5}  fontWeight='bold' fontSize='xl'>Platform</Text>
//            <Text as='p' my={5}>Round 1 – HackerEarth</Text>
//               <Text as='p' my={5}>Round 2 – MS Teams</Text>

//           <Text as='h3' my={5}  fontWeight='bold' fontSize='xl'>Rules</Text>
//             <UnorderedList>
//               <ListItem>
//                 Each team can have maximum of 2 members.
//               </ListItem>

//               <ListItem>
//                 Calculators will be allowed for first round only
//               </ListItem>

//             </UnorderedList>

//             <Text as='h3' my={5}  fontWeight='bold' fontSize='xl'>Judging criteria</Text>
//             <UnorderedList>
//               <ListItem>
//                The teams with maximum score will be qualified for the 2nd round. (6 teams).
//               </ListItem>

//               <ListItem>
//                 In case of tie the first-round scores will also be taken into account.
//               </ListItem>

//             </UnorderedList>


//           </ModalBody>

//           {/* <ModalFooter> */}
//             <Center>
//             <Button colorScheme='blue' m={3} onClick={() => {
//               window.location.assign("https://forms.gle/4KPm8Qxr4ksyfY6Y7");
//             }}>
//               Register Now
//             </Button>
//             </Center>

//           {/* </ModalFooter> */}
//         </ModalContent>
//       </Modal>


          
//         </Box>

  
//   </>;
// }


// function Event2 () {
//       const { isOpen, onOpen, onClose } = useDisclosure();
//  return  <Box maxW='sm' borderWidth='2px' borderRadius='lg' overflow='hidden' p={15} pb={20} position="relative">

//         <Badge borderRadius='full' px='5' py='1'>
//             event
//         </Badge>

//         <Text as='h3' my={5}  fontWeight='bold' fontSize='2xl'>CADPLOT</Text>
//         <Text>The contestants are required to solve the problem statement in CAD in a specific period of time. The Participants, will be given a specified area (with conditions) and the participants will have to come up with an economical plan to move the panel of judges.</Text>
//         <Center>
//         <Button
//               mt={25}
//                 size='md'
//                 height='40px'
//                 width='100px'
//                 border='1px'
//                 borderColor='#C0C1D1'
//                 borderRadius={4}
//                 zIndex={1}
//                 _hover={{
//                 textDecoration: 'none',
//                 bg: useColorModeValue('accent','accent'),
//                 color:'white'
//               }}
//               onClick={onOpen}
//               style={{position: 'absolute', bottom:'20px'}}
              
//               >
//                 View more
//         </Button>

//         </Center>

//          <Modal scrollBehavior="inside" isOpen={isOpen} onClose={onClose} isCentered motionPreset='slideInBottom' size="xl">
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>CADPLOT</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
            
//             <Center>
//                <Image height="400" src="https://i.imgur.com/QpUPiD8.png" alt="CADPLOT" />
//             </Center>

//              <Text as='h3' my={5}  fontWeight='bold' fontSize='xl'>Event description</Text>
//              <Text as='p' my={5}>CAD Competition – The contestants are required to solve the problem statement in CAD in a specific period of time. The Participants, will be given a specified area (with conditions) and the participants will have to come up with an economical plan to move the panel of judges. The top 3 contestants will be bestowed with exciting prizes.</Text>


//              <Text as='h3' my={5}  fontWeight='bold' fontSize='xl'>Format</Text>
//              <Text as='p' my={5} >An economical plan has to be designed in AutoCAD in the specific area given. Problem statement contains few conditions to follow in the planning.</Text>
//               <Text as='p' my={5}> In the given time you have to complete the given Problem.</Text>
//               <Text as='p' my={5} >Online quiz consisting of objective questions (Questions on AUTOCAD software).</Text>
//               <Text as='p' my={5}>Round 2: Eight teams who have secured the highest marks in Level 1 will qualify for Level 2.</Text>


//             <Text as='h3' my={5}  fontWeight='bold' fontSize='xl'>Platform</Text>
//            <Text as='p' my={5}>Round 1 – HackerEarth</Text>
//               <Text as='p' my={5}>Round 2 – MS Teams</Text>

//           <Text as='h3' my={5}  fontWeight='bold' fontSize='xl'>Rules</Text>
//             <UnorderedList>
//               <ListItem>
//                 Maximum participants in a team: 2
//               </ListItem>

//               <ListItem>
//                 Plagiarism is not allowed.
//               </ListItem>


//               <ListItem>
//                 Autocad software is necessary.
//               </ListItem>

//             </UnorderedList>

//             <Text as='h3' my={5}  fontWeight='bold' fontSize='xl'>Judging criteria</Text>
//             <UnorderedList>
//               <ListItem>
//                Economical and efficient design is considered
//               </ListItem>

//               <ListItem>
//                Team with early submission is given preference
//               </ListItem>

//               <ListItem>
//                Judges word is final
//               </ListItem>

//             </UnorderedList>


//           </ModalBody>

//           {/* <ModalFooter> */}
//             <Center>
//             <Button colorScheme='blue' m={3} onClick={() => {
//               window.location.assign("https://forms.gle/EJ5aRkK9LzU4dmt39");
//             }}>
//               Register Now
//             </Button>
//             </Center>

//           {/* </ModalFooter> */}
//         </ModalContent>
//       </Modal>


          
//         </Box>
// }

// function Event3 () {
//    const { isOpen, onOpen, onClose } = useDisclosure();
//   return <Box maxW='sm' borderWidth='2px' borderRadius='lg' overflow='hidden' p={15} pb={20} position="relative">

//         <Badge borderRadius='full' px='5' py='1'>
//             event
//         </Badge>

//         <Text as='h3' my={5}  fontWeight='bold' fontSize='2xl'>QUOTE OR QUIT</Text>
//         <Text>‘Quote or Quit’, a Estimation and Bidding Competition, where the contestants will be provided with a plan and other required materials and will be required to quote an amount by the end of the event. The top two contestants to quote the least valid prices will be bestowed with cash prizes.</Text>
//         <Center>
//         <Button
//               mt={25}
//                 size='md'
//                 height='40px'
//                 width='100px'
//                 border='1px'
//                 borderColor='#C0C1D1'
//                 borderRadius={4}
//                 zIndex={1}
//                 _hover={{
//                 textDecoration: 'none',
//                 bg: useColorModeValue('accent','accent'),
//                 color:'white'
//               }}
//               onClick={onOpen}
//               style={{position: 'absolute', bottom:'20px'}}
              
//               >
//                 View more
//         </Button>

//         </Center>

//          <Modal scrollBehavior="inside" isOpen={isOpen} onClose={onClose} isCentered motionPreset='slideInBottom' size="xl">
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>QUOTE OR QUIT</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
            
//             <Center>
//                <Image height="400" src="https://i.imgur.com/7BZvVCs.png" alt="CIVIGYAN" />
//             </Center>

//              <Text as='h3' my={5}  fontWeight='bold' fontSize='xl'>Event description</Text>
//              <Text as='p' my={5}>‘Quote or Quit’, a Estimation and Bidding Competition, where the contestants will be provided with a plan and other required materials and will be required to quote an amount by the end of the event. The top two contestants to quote the least valid prices will be bestowed with cash prizes.</Text>
//              <Text as='p' my={5}>Maximum participants in a team: 2</Text>


//             <UnorderedList>
//               <ListItem>
//               Team with early submission is given preference.
//               </ListItem>

//               <ListItem>
//                 Judges word is final.
//               </ListItem>

//             </UnorderedList>


//           </ModalBody>

//           {/* <ModalFooter> */}
//             <Center>
//             <Button colorScheme='blue' m={3} onClick={() => {
//               window.location.assign("https://forms.gle/fmwRuvFwZ3bX3we86");
//             }}>
//               Register Now
//             </Button>
//             </Center>

//           {/* </ModalFooter> */}
//         </ModalContent>
//       </Modal>


          
//         </Box>

// }

// function Event4 () {
//      const { isOpen, onOpen, onClose } = useDisclosure();
//   return <Box maxW='sm' borderWidth='2px' borderRadius='lg' overflow='hidden' p={15} pb={20} position="relative">

//         <Badge borderRadius='full' px='5' py='1'>
//             event
//         </Badge>

//         <Text as='h3' my={5}  fontWeight='bold' fontSize='2xl'>POWERPOINT PRESENTATION</Text>
//         <Text>“PowerPoint Presentation”, an event where you’ll be tasked with preparing a presentation based on a subtopic related to structures, which will be given on the spot. You will be given a time of 90 minutes to come up with the presentation.</Text>
//         <Center>
//         <Button
//               mt={25}
//                 size='md'
//                 height='40px'
//                 width='100px'
//                 border='1px'
//                 borderColor='#C0C1D1'
//                 borderRadius={4}
//                 zIndex={1}
//                 _hover={{
//                 textDecoration: 'none',
//                 bg: useColorModeValue('accent','accent'),
//                 color:'white'
//               }}
//               onClick={onOpen}
//               style={{position: 'absolute', bottom:'20px'}}
              
//               >
//                 View more
//         </Button>

//         </Center>

//          <Modal scrollBehavior="inside" isOpen={isOpen} onClose={onClose} isCentered motionPreset='slideInBottom' size="xl">
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>POWERPOINT PRESENTATION</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
            
//             <Center>
//                <Image height="400" src="https://i.imgur.com/iKrKk44.png" alt="POWERPOINT PRESENTATION" />
//             </Center>

//              <Text as='h3' my={5}  fontWeight='bold' fontSize='xl'>Event description</Text>
//              <Text as='p' my={5}>“PowerPoint Presentation”, an event where you’ll be tasked with preparing a presentation based on a subtopic related to structures, which will be given on the spot. You will be given a time of 90 minutes to come up with the presentation.</Text>

//              <Text as='p' my={5} >Team: Maximum of 3 students</Text>
//               <Text as='p' my={5}>Platform: MS Teams</Text>

//             <Text as='h3' my={5}  fontWeight='bold' fontSize='xl'>Judging criteria</Text>
//             <UnorderedList>
//               <ListItem>
//              Presentation will be judged based on the Presentation skills, quality of the content.
//               </ListItem>

//               <ListItem>
//               Judges word is final.
//               </ListItem>

//             </UnorderedList>


//           </ModalBody>

//           {/* <ModalFooter> */}
//             <Center>
//             <Button colorScheme='blue' m={3} onClick={() => {
//               window.location.assign("https://forms.gle/yrcRmWgh4665qhJq5");
//             }}>
//               Register Now
//             </Button>
//             </Center>

//           {/* </ModalFooter> */}
//         </ModalContent>
//       </Modal>


          
//         </Box>
// }

// function Event5 () {
//        const { isOpen, onOpen, onClose } = useDisclosure();
//   return <Box maxW='sm' borderWidth='2px' borderRadius='lg' overflow='hidden' p={15} pb={20} position="relative">

//         <Badge borderRadius='full' px='5' py='1'>
//             event
//         </Badge>

//         <Text as='h3' my={5}  fontWeight='bold' fontSize='2xl'>TECHMARATHON</Text>
//         <Text>Tech marathon event is conducted prior to MOMENTS, a quiz type contest where all you have to do is answer easy questions in time and walk away with a free workshop. Groovy goodies awaits for the top 10 contestants! Top 3 contestants will be rewarded with free tickets to any one of the workshops.</Text>
//         <Center>
//         <Button
//               mt={25}
//                 size='md'
//                 height='40px'
//                 width='100px'
//                 border='1px'
//                 borderColor='#C0C1D1'
//                 borderRadius={4}
//                 zIndex={1}
//                 _hover={{
//                 textDecoration: 'none',
//                 bg: useColorModeValue('accent','accent'),
//                 color:'white'
//               }}
//               onClick={onOpen}
//               style={{position: 'absolute', bottom:'20px'}}
              
//               >
//                 View more
//         </Button>

//         </Center>

//          <Modal scrollBehavior="inside" isOpen={isOpen} onClose={onClose} isCentered motionPreset='slideInBottom' size="xl">
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>TECHMARATHON</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
            
//             <Center>
//                <Image height="400" src="https://i.imgur.com/TtWelJL.png" alt="TECHMARATHON" />
//             </Center>

//              <Text as='h3' my={5}  fontWeight='bold' fontSize='xl'>Event description</Text>
//              <Text as='p' my={5}>Tech marathon event is conducted prior to MOMENTS, a quiz type contest where all you have to do is answer easy questions in time and walk away with a free workshop. Groovy goodies awaits for the top 10 contestants! Top 3 contestants will be rewarded with free tickets to any one of the workshops.</Text>

//             <Text as='h3' my={5}  fontWeight='bold' fontSize='xl'>Individual Participation</Text>


//           </ModalBody>

//           {/* <ModalFooter> */}
//             <Center>
//             <Button colorScheme='blue' m={3} onClick={() => {
//               window.location.assign("https://forms.gle/74GcrtcfBmqVXqR8A");
//             }}>
//               Register Now
//             </Button>
//             </Center>

//           {/* </ModalFooter> */}
//         </ModalContent>
//       </Modal>


          
//         </Box>

// }


export default Events;
