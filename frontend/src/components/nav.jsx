// import React from "react"
// import { SimpleGrid } from "@chakra-ui/layout"

// import { Box, Center, Divider } from "@chakra-ui/react"

// const DesktopNavMenu = ({ internalLinks, externalLinks }) => (
//   <SimpleGrid alignItems="center" rows={1} spacing={10} display={{ base: "none", md: "flex" }}>

//     {
//       Links.map((link) => (
        
//           <NavLink>
//             {link}
//           </NavLink>

//       ))
//     }



 

//   </SimpleGrid>

// )

// export default DesktopNavMenu






// here




// import React from "react"
// import { Flex , Box} from "@chakra-ui/react"
// import { SimpleGrid } from "@chakra-ui/layout"
// const Links = ['Dashboard', 'Projects', 'Team','Ok'];


// const Navbar = ({ internalLinks, externalLinks }) => {
//   const NavLink = props => (
//     <Box
//       padding={0.6}
//       as="button"
//       w="100%"
//       fontSize="xl"
//       textAlign="center"
//       fontWeight="medium"
//       transition="0.2s ease-in-out"
//       textTransform="capitalize"
//       _hover={{
//         color: "aqua.900",
//       }}
//     >
//       {props.children}
//     </Box>
//   )

//   return (
//     <Flex
//       position="fixed"
//       width="100%"
//       bgColor="rgb(0, 40, 63, 0.7)"
//       top="0"
//       as="nav"
//       zIndex="5"
      
//     >
//       <Flex
        
//         w="100%"
//         justifyContent="space-between"
//         alignItems="center"
//         paddingY={{ base: 5, md: 6 }}
//         paddingX={10}
//         zIndex="5"
//       >
        

//         <Flex alignItems="center">
//         <SimpleGrid alignContent={"center"} rows={1} spacing={20} display={{ base: "none", md: "flex" }}>

// {
//   Links.map((link) => (
    
//       <NavLink>
//         {link}
//       </NavLink>
    
//   ))
// }


// </SimpleGrid>

//         </Flex>
//       </Flex>


//     </Flex>
//   )
// }



// export default Navbar



// end
















import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useBreakpointValue,
  Text,
  Image,
  Collapse,
  Icon,
  HStack,
  useColorMode,
  Center,
  IconButton,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import logo from '../white-logo.svg'
import {  useParams, useLocation  } from 'react-router-dom';
const Links = [{
  label: 'Home',
  path: '/'
}, {
  label: 'About',
  path: '/about'
}, {
  label: 'Workshop',
  path: '/workshop'
}, {
  label: 'Events',
  path: '/events'
}];

// const Links=['a','b']








const NavLink = ({ children,current }: { children: ReactNode }) => (
  // console.log(children)
  
  <Link
    px={2}
    py={1}
    rounded={'md'}
    fontWeight={current===children.path?'900':'500'} 
    color={current===children.path?'accent':'gray.100'}
    _hover={{
      textDecoration: 'none',
      color: 'gray.300',
    }}
    href={children.path}>
    {console.log(current,'22')}
    {children.label}
  </Link>
);

export default function Nav() {

  const { isOpen, onToggle } = useDisclosure();


  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        position={'fixed'}
        width={'100%'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        display={{ base: 'flex', md: 'none' }}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
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
        </Flex>
        

          
            
          
        

       
      </Flex>
      <DesktopNav />

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}


















const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { page } = useParams();
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      {console.log(page)}
      <Box zIndex={12} bg={' rgba(10, 12, 32, 0.35)'} px={4} position={'fixed'} width={'100%'} display={{ base: 'none', md: 'block' }}> 
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
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
            <Button
            display={{ base: 'none', md: 'inline-flex' }}
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
          </Button>
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
      p={4}
      display={{ md: 'none' }}>
      {Links.map((link) => (
        <MobileNavItem key={link.path} >{link}</MobileNavItem>
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ children }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();
  // {console.log(children,href,label)}
  return (
    
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={children.path ?? '#'}
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














