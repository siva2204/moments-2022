/* eslint-disable no-unused-vars */
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Image,
  useColorMode
  
} from '@chakra-ui/react';
import {FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';
import logo from '../assets/svgs/logo.svg';
import whitelogo from '../assets/svgs/logo-w.svg'


const ListHeader = ({ children }) => {
  
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'8xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={10}>
          <Stack align={'flex-start'}>
            <ListHeader>PAGES</ListHeader>
            <Link href={'/home'}>Home</Link>
            {/* <Link href={'/about'}>About</Link> */}
            <Link href={'/workshops'}>Workshops</Link>
            <Link href={'/events'}>Events</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>CONTACTS</ListHeader>
            
            <Text >Merciidus R E<Link href={'#'} color={'accent'} ml={2}>+91 9677614593</Link></Text>
            
            
            
            <Text >Ezhilarasan V<Link href={'#'} color={'accent'} ml={2}>+91 7502550473</Link></Text>
            
            
            
            <Text >Prasanna P<Link href={'#'} color={'accent'} ml={5}>+91 7358836573</Link></Text>
            
            
          </Stack>


          <Stack align={'flex-start'}>
            <ListHeader >FOLLOW US ON</ListHeader>
            <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Facebook'} href={'https://www.facebook.com/momentsnittrichy/'} >
              <FaFacebook />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'https://instagram.com/moments.nitt'}>
              <FaInstagram />
            </SocialButton>
            <SocialButton label={'Youtube'} href={'https://youtube.com/channel/UCC3RfmE-enzmzcMWHtIumag'}>
              <FaYoutube />
            </SocialButton>


{/* 
            <SocialButton label={'Linkedin'} href={'#'}>
              <FaLinkedin />
            </SocialButton>
            
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton> */}
          </Stack>
            
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Stack direction={'row'} alignItems={'center'}>


          {colorMode === 'light' ? <Image src={logo} mr={0} boxSize={70}/> : <Image src={whitelogo} mr={0} boxSize={70}/>}
          
          <Text >CIVIL ENGINEERING ASSOCIATION</Text>
          </Stack>
          <Text alignContents={'right'}>Official website for Moments, the annual  symposium of the Civil Engineering department, NIT Trichy</Text>
          </Container>
      </Box>
    </Box>
  );
}