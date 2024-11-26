import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MyNav from './components/Navbar';
import Navbar from './components/NavbarT.js';
import WritingsComponent from './components/Writing';
import Experience from './components/Experience';
import PortfolioSection from './components/Portfolio';
import writingsData from './writings_ajith.json';
import WritingDetailsComponent from './Utils/Cardpage.js';
import ChatWidget from './components/Chat.js';
import Footer from './components/Footer';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import {createTheme} from '@mui/material/styles';
import { themeSettings } from './theme.js';
import { Box, ThemeProvider} from "@mui/material";
import Achievements from '../src/components/Achivements.js'
import CssBaseline from '@mui/material/CssBaseline';
import MyComponent from './components/Sathish';
const writings = writingsData;

const App = () => {
  const mode = useSelector((state)=> state.user.mode)
  const theme = useMemo(()=> createTheme(themeSettings(mode)),[mode])
  return (
    <Box>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MyNav />
              <PortfolioSection />
              <Experience />
              <Achievements />
            </>
          }
        />
        <Route
          path="/writing"
          element={<WritingsComponent writings={writings} />}
        />
   {/*  <Route
        path="/test"
        element={<MyComponent/>}
      />*/
    }    
        <Route
          path="/writings/:writingId"
          element={<WritingDetailsComponent writings={writings} />}
        />
      </Routes>
      <Footer />
      <ChatWidget />
    </ThemeProvider>
  </Box>
  );
};
export default App;

