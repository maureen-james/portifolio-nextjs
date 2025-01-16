import React from "react";
import NavigationBar from "../@core/components/Navigation";
import { Container } from "react-bootstrap";
import About from "../@core/components/About";
import Experience from "../@core/components/Experience";
import Projects from "../@core/components/Projects";
import Contact from "@/@core/components/Contact";
import Footer from "@/@core/components/Footer";

const Page = () => {
  return (
    <>
      {/* Navbar */}
      <NavigationBar />

      {/* Main Content */}
      <Container fluid style={{ padding: 0, margin: 0 }}>
        {/* Intro Section */}
        <div
          className="intro"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center", // Center the content horizontally
            backgroundColor: "#f0f8ff", // Light blue background
            padding: "30px 15px", // Reduced padding
            gap: "20px", // Add spacing between elements
          }}
        >
          <div id="home" className="title" style={{ textAlign: "center", flex: 1 }}> 
            <h3 style={{ marginBottom: "10px", fontWeight: "bold", fontSize: "1.8rem" }}>
              I'm Maureen Mwangi
            </h3>
            <p style={{ fontSize: "1rem", lineHeight: "1.5" }}>
              Software Developer and Web Designer
            </p>
          </div>
          <img
            src="/static/images/me1.png"
            alt="Maureen Mwangi"
            style={{
              maxWidth: "60%",// Limit image size
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            }}
          />
        </div>

        {/* About Section */}
        <div id="about"
          style={{
            backgroundColor: "#ffffff",
            padding: "30px 15px", // Reduced padding
          }}
        >
          <About />
        </div>

        {/* Experience Section */}
        <div id="experience"
          style={{
            backgroundColor: "#f9f9f9",
            padding: "30px 15px", // Reduced padding
          }}
        >
          <Experience />
        </div>

        {/* Projects Section */}
        <div id="projects"
          style={{
            backgroundColor: "#eef7f6",
            padding: "30px 15px", // Reduced padding
          }}
        >
          <Projects />
        </div>

        {/* Contact Section */}
        <div id="contact"
          style={{
            backgroundColor: "#ffffff",
            padding: "30px 15px", // Reduced padding
          }}
        >
          <Contact />
        </div>
      </Container>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Page;