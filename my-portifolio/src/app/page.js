"use client";

import React, { useState, useMemo } from 'react';
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


      {/* navbar */}
     

      <NavigationBar />
      <div class="intro">
        <div class="title">
          <h3>
            I'm Maureen Mwangi
          </h3>
          <p>Software Developer and Web Designer</p>
        </div>
        {/* <img src="/static/images/me1.png" alt="" class="left"></img> */}
      </div>

      <About />

      <Experience />

      <Projects />
      <Contact/>

      <Footer/>
     
    </> 
  );
}
export default Page