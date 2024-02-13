import {  useState } from "react";
import {
  Box,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import {
  DarkMode,
  LightMode,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setMode} from '../redux/user/userSlice.js'
import { Link, useNavigate } from 'react-router-dom';
import FlexBetween from "../Utils/FlexBetween.js";
import AnchorLink from "react-anchor-link-smooth-scroll";
import WidgetWrapper from "./Widget.js";



const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const theme = useTheme();
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  return (
  
          <>
        {isNonMobileScreens && (
          <FlexBetween gap="1.75rem" padding="1rem 6%" backgroundColor={alt} >
          <Link to="/">
          <a
            href="#Home"
            style={{ textDecoration: 'none' }} // Set textDecoration to none
          >
            <Typography
              fontWeight="bold"
              fontSize="clamp(1rem, 2rem, 2.25rem)"
              color="primary"
              sx={{
                "&:hover": {
                  color: primaryLight,
                  cursor: "pointer",
                },
              }}
            >
              Home
            </Typography>
          </a>
        </Link>
          <a href="#experience">
          <Typography
            fontWeight="bold"
            fontSize="clamp(1rem, 2rem, 2.25rem)"
            color="primary"
            sx={{
              "&:hover": {
                color: primaryLight,
                cursor: "pointer",
              },
            }}
          >
            Experience
          </Typography>
          </a>
         
          <AnchorLink offset={() => 100} href="#portfolio">
          <Typography
            fontWeight="bold"
            fontSize="clamp(1rem, 2rem, 2.25rem)"
            color="primary"
            
            sx={{
              "&:hover": {
                color: primaryLight,
                cursor: "pointer",
              },
            }}
          >
            Portfolio
          </Typography>
          </AnchorLink>
          <AnchorLink offset={() => 100} href="#achievements">
          <Typography
            fontWeight="bold"
            fontSize="clamp(1rem, 2rem, 2.25rem)"
            color="primary"
      
            sx={{
              "&:hover": {
                color: primaryLight,
                cursor: "pointer",
              },
            }}
          >
            Achievements
          </Typography>
          </AnchorLink>


          <Typography
            fontWeight="bold"
            fontSize="clamp(1rem, 2rem, 2.25rem)"
            color="primary"
            onClick={() => {
              navigate("/writing");
            }}
            sx={{
              "&:hover": {
                color: primaryLight,
                cursor: "pointer",
              },
            }}
          >
            Writing
          </Typography>

          <IconButton onClick={() => dispatch(setMode())}>
          {theme.palette.mode === "dark" ? (
            <DarkMode sx={{ fontSize: "25px" }} />
          ) : (
            <LightMode sx={{ color: dark, fontSize: "25px" }} />
          )}
        </IconButton>

        
          </FlexBetween>
        )}
     
     
      {!isNonMobileScreens  && (
        <Box
        padding="1rem" backgroundColor={alt}
          position="fixed"
          bottom="0"
          zIndex="10"
          maxWidth="500px"
          minWidth="100vw"
        >

         <FlexBetween
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            gap="1rem"
          >
          <Link onClick={()=>{navigate('/')} }>
          Home
          </Link>
            <IconButton
            onClick={() => {
              dispatch(setMode());
            }}
              sx={{ fontSize: "25px" }}
            >
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} />
              ) : (
                <LightMode sx={{ color: dark, fontSize: "25px" }} />
              )}
            </IconButton>
           
          </FlexBetween>
        </Box>
      )}
    </>
  );
};

export default Navbar;