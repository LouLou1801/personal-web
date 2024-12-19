import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './styles.css';  // Correct relative path


const Home = () => {
    return(
     <section id = "home" className=" home-section d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <div>
              <h1 className= "text-home text-center">Hi, I'm laura!</h1>
              <p className = "text-home-p text-center">Hello everyone, I am currently a new learner in web development who wants to learn about front-end and back-end development.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};  


export default Home;