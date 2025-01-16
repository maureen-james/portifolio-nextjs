import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

const About = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
      {/* Section Wrapper */}
      <Box
        sx={{
          backgroundColor: "#f9f9f9",
          borderRadius: 2,
          p: 4,
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
  

        {/* Heading */}
        <Typography
          variant="h4"
          component="h2"
          sx={{ mb: 1, textAlign: "center", fontWeight: "bold" }}
        >
          ABOUT ME
        </Typography>
        <Divider sx={{ mb: 3, width: "50%" }} />

        {/* Body Text */}
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.1rem",
            lineHeight: 1.8,
            textAlign: "center",
            maxWidth: "80%",
          }}
        >
          I am Maureen Mwangi, a passionate software developer and a graduate of
          Moringa School. I also hold a degree in BSc Soil Science with IT from
          Maseno University. I have hands-on experience with tools like Figma
          and technologies such as HTML, CSS, JavaScript, Angular, Python
          Flask, and Python Django.
          <br />
          <br />
          Beyond coding, I enjoy reading, cooking, and swimming. I am
          open-minded, love learning new things, and am always eager to try new
          ideas and perspectives.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
