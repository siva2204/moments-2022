import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,


} from '@chakra-ui/react';
import "@fontsource/plus-jakarta-sans";
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Home from './pages/home';
import Aboutpage from './pages/about'
import Events from './pages/events'
import Workshop from './pages/workshop'
import Navbar from './components/nav'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import theme from './components/customtheme.js'

// const theme= extendTheme({body:'monospace'},)


function App() {
  {console.log(theme)}
  return (
    
    <ChakraProvider theme={theme}>
          {/* <Home /> */}
          <Router>
        <Routes>
        <Route path='/:page' element={<Navbar/>} />
        <Route exact path='/' element={<Home/>} /> 
        <Route exact path='/home' element={<Home/>} />
        <Route exact path='/about' element={<Aboutpage/>} />
        <Route exact path='/events' element={<Events/>} />
        <Route exact path='/workshop' element={<Workshop/>} />

        </Routes>
      </Router>
      
    </ChakraProvider>
  );
}

export default App;
