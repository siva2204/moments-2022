import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,

  extendTheme
} from '@chakra-ui/react';
import "@fontsource/plus-jakarta-sans";
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Home from './pages/home';
import Members from './components/members';
import About from './components/about';
import Footer from './components/footer';

const theme = extendTheme({
  fonts: {
    body: 'Plus Jakarta Display',
    heading: 'Inter',
  },
})


function App() {
  return (
    <ChakraProvider theme={theme}>
          <Home />
          
      
    </ChakraProvider>
  );
}

export default App;
