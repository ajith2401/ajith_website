import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import myImage from '../aji_home.png';
import WidgetWrapper from './Widget';

const MyNav = () => {
  return (
    <Container className="mt-3">
    <WidgetWrapper id="Home" sx={{ display: 'flex', alignItems: 'center', mt: 4 }}>
      <Grid container spacing={2}>
        <Grid item lg={6} mt={4}>
          <Typography variant="h4" id="name" gutterBottom>
            Hi, my name is <b>Ajithkumar</b>
          </Typography>
          <Typography variant="body1">
            Experienced Backend developer and GovTechThon award holder seeking a full-stack developer role in a dynamic work culture. I am looking forward to working on diverse projects that provide opportunities for my professional growth and foster collaboration with multidisciplinary teams with experience in Python, Flask, Node.js, React, and JavaScript.
          </Typography>
        </Grid>
        <Grid item lg={6} mt={4}>
          <img src={myImage} alt="Description of the image" style={{ width: '100%', borderRadius: '8px' }} />
        </Grid>
      </Grid>
    </WidgetWrapper>
    </Container>
  );
};

export default MyNav;
