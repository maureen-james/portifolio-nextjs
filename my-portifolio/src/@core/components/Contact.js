"use client";
// pages/contact.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography,  Grid, IconButton, Box } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, YouTube } from "@mui/icons-material";


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, message });
  };

  return (
    <Container maxWidth="md">
      <Box mt={5}>
        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Full Name
            </Typography>
            <form onSubmit={handleSubmit}>
              <Box mb={2}>
                <TextField
                  fullWidth
                  label="Full Name"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Box>
              <Box mb={2}>
                <TextField
                  fullWidth
                  label="Your Email"
                  variant="outlined"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Box>
              <Box mb={2}>
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </Box>
              <Button
                variant="contained"
                style={{ backgroundColor: "#fdd835", color: "black" }}
                type="submit"
              >
                Send
              </Button>
            </form>
          </Grid>

          {/* Say Hello Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Say hello
            </Typography>
            <Typography variant="body1" gutterBottom>
              +254711861542
            </Typography>
            <Typography variant="body1" gutterBottom>
              <a
                href="mailto:hello@company.co"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                maureenmwangi487@gmail.com
              </a>
            </Typography>
            <Box mt={2} mb={2}>
              <IconButton
                component="a"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
              >
                <Facebook />
              </IconButton>
              <IconButton
                component="a"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
              >
                <Twitter />
              </IconButton>
              <IconButton
                component="a"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
              >
                <Instagram />
              </IconButton>
              <IconButton
                component="a"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                component="a"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
              >
              
              </IconButton>
            </Box>
           
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Contact;