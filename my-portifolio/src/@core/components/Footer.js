import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Box from '@mui/material/Box';

const Footer = () => {
  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{ mt: 5, mb: 3 }}
      >
        <Typography sx={{ paddingBottom: 2 }} align="center">
          Copyright 2024. All rights reserved.
        </Typography>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item>
            <FacebookIcon />
          </Grid>
          <Grid item>
            <TwitterIcon />
          </Grid>
          <Grid item>
            <LinkedInIcon />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Footer;
