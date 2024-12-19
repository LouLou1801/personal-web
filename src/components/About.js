import React from "react";
import './styles.css';
import { Container, Row, Col } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,

} from "react-icons/di";

const About = () => {
    return(
        <section id = "about" className= "section" > 
          <h1 className ="text-about">About Me</h1>  
          <Container className ="container">  
            <Row className = "about-row about-row-color">
              <Col xs={12} md={6} className ="about-col border-end about-color">
                <h2 className ="text-about-content"><strong>Get to know me </strong></h2>
                <p className= "know-me-text text-start pt-3 pe-5 ">I'm currently interested in learning software development, both front-end and back-end. In front-end,
                I'm open to job opportunities where I can learn to help enhance my skills and contribute to the projects.
                If you have a good opportunity that matches my skills, you can click on contact section and say hi!

                When I have free time, I like to draw, play games, and garden.</p>
              </Col>
              <Col xs={12} md={6} className = "about-col about-color">
                <h2 className ="text-about-content"> Skillset</h2>
                <Row className ="about-row">
                 <Col xs={12} md={4} className ="tech-icons">
                  <DiJavascript1 size="5em" style={{color:'white'}}/>
                 </Col>
                 <Col xs={12} md={4} className ="tech-icons">
                  <DiPython  size="5em" style={{color:'white'}}/>
                 </Col>
                 <Col xs={12} md={4} className ="tech-icons">
                  <DiNodejs  size="5em" style={{color:'white'}}/>
                 </Col>
                 <Col xs={12} md={4} className ="tech-icons">
                 <DiReact  size="5em" style={{color:'white'}}/>
                 </Col>
                 <Col xs={12} md={4} className ="tech-icons">
                 <DiGit  size="5em" style={{color:'white'}}/>
                 </Col>
                </Row>
              </Col>
            </Row>
            
            <Row>
              <Col xs={12} md={6} style={{paddingTop: '30px'}}></Col>
              <h1 className=" edu-text text-center pt 5 ps-3 pe-3" > Education</h1>
              <p className="pt-1 edu-text">2018-2023</p> 
              <h4 className="pt-1 edu-text">Maranatha Christian Univerity</h4>
              <h5 className="pt-1 edu-text">Bachelor of Electrical Engineering</h5>
            </Row>
           </Container>
        </section>
      );
}

export default About;