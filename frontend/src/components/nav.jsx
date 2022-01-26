import {
  Box,
  Flex,
  Link,
  Button,

  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  Image,
  Collapse,
  HStack,
  useColorMode,
  Center,
  IconButton,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons';

import {Link as RouterLink} from "react-router-dom";

import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import logo from '../assets/svgs/white-logo.svg'
import logo1 from '../assets/svgs/logo.svg'
import whitelogo from '../assets/svgs/logo-w.svg'
import {  useParams, useLocation  } from 'react-router-dom';
const Links = [{
  label: 'Home',
  path: '/'
}, {
  label: 'Workshop',
  path: '/workshop'
}, {
  label: 'Events',
  path: '/events'
}];


const NavLink = ({ children,current }) => (
  
  <Link  as={RouterLink}
  to={children.path}
    px={2}
    py={1}
    rounded={'md'}
    fontWeight={current===children.path?'900':'400'} 
    color={current===children.path?'accent':'gray.100'}
    _hover={{
      textDecoration: 'none',
      color: 'gray.300',
    }}
    >
    {children.label}
  </Link>
);

export default function Nav() {

  const { isOpen, onToggle } = useDisclosure();

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <Flex
      zIndex={12}
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        
        width={'100%'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        display={{ base: 'flex', md: 'none' }}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Center alignContent={'center'}></Center>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
          <Center alignContent={'center'}>
         {colorMode === 'light' ? <Image src={logo1} width="50px" height="50px"  /> : <Image src={whitelogo} boxSize={50}/>}
       
        </Center> 
        </Flex>
        
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
          
        
            
       
      </Flex>
      <DesktopNav />

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}


const DesktopNav = () => {
  // const linkColor = useColorModeValue('gray.600', 'gray.200');
  // const linkHoverColor = useColorModeValue('gray.800', 'white');
  // const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  const { colorMode, toggleColorMode } = useColorMode();
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const { page } = useParams();
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      {console.log(page)}
      <Box zIndex={12} bg={' rgba(10, 12, 32, 0.45)'} px={4} position={'fixed'} width={'100%'} display={{ base: 'none', md: 'block' }}> 
        <Flex h={70} alignItems={'center'} justifyContent={'space-between'}>
          <Box mt={4}><Image src={logo} boxSize={180} /></Box>
          <Stack direction={'row'} alignItems={'center'}>
          
         
          <HStack spacing={8} alignItems={'center'}>
          
            <HStack
              as={'nav'}
              spacing={9}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.path} current={location.pathname}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          
         



          </Stack>
          <Flex alignItems={'center'} ml={138}>                                           {/* remove the ML if the register button is uncommented */}
            <Stack direction={'row'} spacing={7}>
            {/* <Button
            display={{ base: 'none', md: 'none-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'accent'}
            width={'9em'}
            borderRadius={'4px'}
            
            href={'#'}
            _hover={{
              bg: '#1F51FF',
            }}>
            Register
          </Button> */}
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}


const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4} pt={15}
      display={{ md: 'none' }}>
      {Links.map((link) => (
        <MobileNavItem key={link.path} >{link}</MobileNavItem>
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const { isOpen, onToggle } = useDisclosure();
  // {console.log(children,href,label)}
  return (
    
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={RouterLink}
        to={children.path ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {children.label}
        </Text>
        
      </Flex>

      
    </Stack>
  );
};
