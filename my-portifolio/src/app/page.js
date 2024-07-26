import React from 'react';
import NavigationBar from '../@core/components/Navigation';
import { Container } from 'react-bootstrap';
import About from '../@core/components/About';
import Experience from '../@core/components/Experience';
// import Projects from '../@core/components/Projects';




const Page = () =>{
return (
  <Container>
    {/* navbar */}
    
   <NavigationBar/>



   <h2>I am Maureen Mwangi . A Software Developer</h2>
   <About/>

   <Experience/>

   {/* <Projects/> */}
     
      

  






    <div className="container-fluid m-2 border border-success text-center">
      <h4>Components</h4>{" "}
      <div className="row m-2 ">
        <div className="col-sm">First Component</div>
        <div className="col-sm">Second Component</div>
        <div className="col-sm">Third Component</div>
      </div>
    </div>
    <div className="container-fluid m-2 border text-center">
      <h4>Buttons</h4>
      <div className="row m-2 justify-content-between ">
        <div className="col-sm-auto">
          <button type="button" className="btn btn-primary">
            Primary
          </button>
        </div>
        <div className="col-sm-auto">
          <button type="button" className="btn btn-secondary">
            Secondary
          </button>
        </div>
        <div className="col-sm-auto">
          <button type="button" className="btn btn-success">
            Success
          </button>
        </div>
        <div className="col-sm-auto">
          <button type="button" className="btn btn-danger">
            Danger
          </button>
        </div>
      </div>
    </div>
  </Container>
);
}
export default Page