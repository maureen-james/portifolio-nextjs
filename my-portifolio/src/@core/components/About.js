import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


const About = () => {
  return (
    <>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Grid container spacing={2}  sx={{ mt: 5, mb:3 }}>
          <Typography variant="h4" component="h2" sx={{ paddingLeft: '310px',paddingBottom: 5 }} >
            ABOUT ME
          </Typography>
          <Typography variant="body1">
            Am Maureen Mwangi. Am a software developer. A graduate
            of Moringa School. Am also a graduate from Maseno
            University with a degree in BSc Soil Science with IT.
            I have experience in using Figma, HTML, CSS, Javascript
            Angular, Python Flask and Python Django. Apart from coding, I love
            reading, cooking and swimming. Am an open minded who loves to learn
            more and willing to trying new things and considering new ideas.
          </Typography>
        </Grid>
      </Container>
    </>
  );
};

export default About;
