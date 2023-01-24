import React from 'react';
import {
  Box,
  Flex,
  SimpleGrid,
  Stack,
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
  Image,
} from '@chakra-ui/react';
// import {
//   Box,
//   Flex,
//   Stack,
//   Text,
//   Center

// } from '@chakra-ui/react';

import banner from '../assets/images/banner.png';
import Navbar from '../components/nav';
import Footer from '../components/footer';

const workshop1 = [
  'Getting exposed to real-world challenges is a primary need for attaining the practical approach. One of the best tools for getting exposed to many practical challenges of the construction industry is Building Information Modeling (BIM).',
  'To know more about BIM and to enhance your analysing skills,  do register for the BIM(Building Information Modelling) workshop and join us live on 4th February at 10 AM.',
  'Registration fee: ₹200',
  'Date & Time : 4th Feb 10 AM to 12:30 PM',
  'Check out the workshop description for more information.',
];

// const workshop2 = [
//   'In this evolving world, technology has advanced in various fields including construction industry. Study of special concrete has become an integral part of construction. Keeping in view, MOMENTS ’23 is elated to announce an offline workshop session about the special and modern concrete, ‘Fundamentals of Fibre Reinforced and Textile Reinforced Concrete’.',
//   'Registration fee: ₹400',
//   'Date & Time : 5th Feb 10 AM to 1 PM',
//   'Check out the workshop description for more information.',
// ];

const workshop3 = [
  'Bridges constitute a significant portion of the national economy of a country and serve as a foundation for infrastructure development. As a civil engineer, it is essential to know about the basics of bridge engineering and technology. MOMENTS ’23 presents a workshop session on ‘Overview Of Bridge Engineering and Technology’, where budding engineers will gain deep understanding of modern bridge technology.',
  'Registration fee: ₹200',
  'Date & Time : 3rd Feb 2 PM to 4:30 PM',
  'Check out the workshop description for more information.',
];

// const workshop4 = [
//   'To thrive as a pro in designing multi-storey buildings is still an aspiration for many. Fret Not! Moments 22 is here to present a workshop on ETABS, which is the ultimate software package for structural analysis. Udhaya Sankar Ramasamy would provide detailed mentoring all the way through.',
//   'Registration fee: ₹250',
//   'Date & Time : 10th Apr 2 PM to 5 PM',
// ];

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
      ></Flex>

<Center as="section" w="100%">
          <Stack
            w="60%"
            rounded="md"
            borderWidth={1}
            zIndex={2}
            boxShadow={'md'}
            borderRadius={20}
            m={30}
            p={6}
            spacing={4}
          >
            <Center spacing={10} mb={25}>
              <Text fontSize={'3xl'} color={'black'}>
                For Workshop Description:-
              </Text>{' '}
              <Text ml={'0.5rem'} fontSize={'3xl'} color={'red'}>
              <a href="https://drive.google.com/file/d/1lFsp11KZ_U8ZYTwmF_REX2IAlll9PtUR/view?usp=sharing"> Click here</a>
              </Text>
            </Center>
            <Text color={'gray.600'} align={'center'} fontSize={'2xl'}>
            <b>Registration for workshops will give you free entry to technical events.</b>
            </Text>
          </Stack>
        </Center>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        spacing={{ base: 10, md: 15 }}
        p={50}
      >
        <WorkshopCard
          title="BIM(Building Information Modelling)"
          description="Getting exposed to real-world challenges is a primary need for attaining the practical approach. One of the best tools for getting exposed to many practical challenges of the construction industry is Building Information Modeling (BIM)."
          tag="4th Feb 10 AM to 12:30 PM"
          rules={workshop1}
          url="https://i.imgur.com/LEo1glx.png"
          registerLink="https://forms.gle/A2WxoECbn1SKCTuq8"
        />

        {/* <WorkshopCard
          title="Fundamentals of Fibre Reinforced and Textile Reinforced Concrete"
          description="In this evolving world, technology has advanced in various fields including  construction industry. Study of special concrete has become an integral part of construction. Keeping in view, MOMENTS ’23 is elated to announce an offline workshop session about the special and modern concrete, ‘Fundamentals of Fibre Reinforced and Textile Reinforced Concrete’."
          tag="5th Feb 10 AM to 1 PM"
          rules={workshop2}
          url="https://i.imgur.com/Yg4wtgc.png"
          registerLink="https://forms.gle/A2WxoECbn1SKCTuq8"
        /> */}

        <WorkshopCard
          title="‘Overview Of Bridge Engineering and Technology"
          description="Bridges constitute a significant portion of the national economy of a country and serve as a foundation for infrastructure development. As a civil engineer, it is essential to know about the basics of bridge engineering and technology. MOMENTS ’23 presents a workshop session on ‘Overview Of Bridge Engineering and Technology’, where budding engineers will gain deep understanding of modern bridge technology."
          tag="3rd Feb 2 PM to 4:30 PM"
          rules={workshop3}
          url="https://i.imgur.com/jY9L3hI.png"
          registerLink="https://forms.gle/cuBUYzh7vkC2B1YFA"
        />

        {/* <WorkshopCard
          title="ETABS workshop"
          description="To thrive as a pro in designing multi-storey buildings is still an aspiration for many. Fret Not! Moments 22 is here to present a workshop on ETABS, which is the ultimate software package for structural analysis."
          tag="10th Apr 2 PM to 5 PM"
          rules={workshop4}
          url="https://i.imgur.com/bamZh62.png"
          registerLink="https://forms.gle/CUvxqvwiLxmYb9pN9"
        /> */}
      </SimpleGrid>

      {
        // Code for Site Under construction
        /* <Center as="section" w="100%">
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
              Take Diversion <br /> ------------------&gt;
            </Text>
          </Stack>
        </Center> */
      }

      <Footer />
    </Box>
  );
}

function WorkshopCard({ title, description, rules, tag, url, registerLink }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      maxW="sm"
      borderWidth="2px"
      borderRadius="lg"
      overflow="hidden"
      p={15}
      pb={20}
      position="relative"
    >
      <Badge borderRadius="full" px="5" py="1">
        {tag}
      </Badge>

      <Text as="h3" my={5} fontWeight="bold" fontSize="2xl">
        {title}
      </Text>
      <Text>
        {description === ''
          ? 'Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam duaisdhusia dusa duashu duasdhusahd saudusahud ausdhuisahdui ddcdsfd'
          : description}
      </Text>
      <Center>
        <Button
          mt={25}
          size="md"
          height="40px"
          width="100px"
          border="1px"
          borderColor="#C0C1D1"
          borderRadius={4}
          zIndex={1}
          _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('accent', 'accent'),
            color: 'white',
          }}
          onClick={onOpen}
          style={{ position: 'absolute', bottom: '20px' }}
        >
          View more
        </Button>
      </Center>

      <Modal
        scrollBehavior="inside"
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <Image height="400" src={url} alt={title} />
            </Center>

            <UnorderedList>
              {rules.map((s, i) => {
                return <ListItem key={i}>{s}</ListItem>;
              })}
            </UnorderedList>
          </ModalBody>

          {/* <ModalFooter> */}
          <Center>
            <Button
              colorScheme="blue"
              m={3}
              onClick={() => {
                window.location.assign(registerLink);
              }}
            >
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
