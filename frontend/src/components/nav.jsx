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
  Text,
  Image,
  HStack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import logo from '../white-logo.svg'
const Links = ['HOME','ABOUT','WORKSHOP','EVENTS'];
const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    fontWeight={'500'} 
    color={'gray.100'}
    _hover={{
      textDecoration: 'none',
      color: 'gray.300',
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box zIndex={12} bg={' rgba(10, 12, 32, 0.35)'} px={4} position={'fixed'} width={'100%'}>
        <Flex h={70} alignItems={'center'} justifyContent={'space-between'}>
          <Box mt={4}><Image src={logo} boxSize={180} /></Box>
          <Stack direction={'row'} alignItems={'center'}>
          
         
          <HStack spacing={8} alignItems={'center'}>
          
            <HStack
              as={'nav'}
              spacing={9}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
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
            bg={'#316BFF'}
            width={'9em'}
            borderRadius={'4px'}
            
            href={'#'}
            _hover={{
              bg: '#1F51FF',
            }}>
            REGISTER
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