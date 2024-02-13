import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMediaQuery, Typography, Box, IconButton, Container } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { styled } from '@mui/system';
import WidgetWrapper from './Widget';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useDispatch } from 'react-redux';
import { useTheme } from '@emotion/react';
import FlexBetween from '../Utils/FlexBetween';


const SocialIcons = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
  marginBottom: '1rem',
});

const Footer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const theme = useTheme();
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;
  

  return (
    <Container className="mt-3">
    <WidgetWrapper marginTop={'20px'}>
      <SocialIcons>
        <IconButton component="a" href="mailto:ajith24ram@gmail.com" target="_blank" rel="noopener noreferrer">
          <MailIcon />
        </IconButton>
        <IconButton component="a" href="https://www.linkedin.com/in/ajithkumar-rangappan-a6531a232" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </IconButton>
        <IconButton component="a" href="https://github.com/ajith2401" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </IconButton>
        <IconButton component="a" href="#" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </IconButton>
        <IconButton component="a" href="https://www.facebook.com/putinakkavi" target="_blank" rel="noopener noreferrer">
          <FacebookIcon />
        </IconButton>
      </SocialIcons>
      <Typography variant="h5" gutterBottom textAlign={'center'} color={'GrayText'}>
        Ajithkumar &copy; 2023
      </Typography>
    </WidgetWrapper>
    </Container>
  );
};

export default Footer;
