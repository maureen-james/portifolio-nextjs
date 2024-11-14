"use client";

import React from 'react';
import NavigationBar from '../@core/components/Navigation';
import { Container } from 'react-bootstrap';
import About from '../@core/components/About';
import Experience from '../@core/components/Experience';
import Projects from '../@core/components/Projects';
import Contact from '@/@core/components/Contact';
import Footer from '@/@core/components/Footer';

const Page = () => {
  return (
    <>
      {/* Navbar */}
      <Container>
      <NavigationBar />
      
      {/* Main Content */}
        <div className="intro">
          <div className="title">
            <h3>I'm Maureen Mwangi</h3>
            <p>Software Developer and Web Designer</p>
          </div>
          <img src="/static/images/me1.png" alt="Maureen Mwangi" className="left" />
        </div>

        <About />
        <Experience />
        <Projects />
        <Contact />
      </Container>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Page;
