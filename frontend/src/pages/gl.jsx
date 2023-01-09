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
  Image,
} from '@chakra-ui/react';

import banner from '../assets/images/banner.png';
import Navbar from '../components/nav';
import Footer from '../components/footer';

const gl1 = [
  "Moments '23 is all set to bring you some of the best guest lectures across the globe. To kick off this year's Moments, we have Professor Peter Collin from Luleå University of Technology all the way from Sweden to deliver an exemplary lecture on 'Efficient bridge construction'. Join us live on 23rd January at 1:30 pm."
];

function Guestlecture() {
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

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        spacing={{ base: 10, md: 15 }}
        p={50}
      >
        <GLCard
          title="Dr. Peter Collin Guest Lecture"
          description="Moments '23 is all set to bring you some of the best guest lectures across the globe. To kick off this year's Moments, we have Professor Peter Collin from Luleå University of Technology all the way from Sweden to deliver an exemplary lecture on Efficient bridge construction. Join us live on 23rd January at 1:30 pm."
          rules={gl1}
          url="https://i.imgur.com/U0IA78y.png"
          registerLink="https://forms.gle/wj739jH1DJzfmgGP8"
          tag="Guest Lecture"
        />
      </SimpleGrid>

      <Footer />
    </Box>
  );
}

function GLCard({ title, description, rules, tag, url, registerLink }) {
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

export default Guestlecture;
