import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaGithub } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the form data to the console
    emailjs
      .sendForm(
        'service_8smxv1p', // Your EmailJS service ID
        'template_xp37f0g', // Your EmailJS template ID
        e.target, // Use the form element to send all inputs
        'JEVxlyxqGzcLk1UuD' // Your EmailJS user ID
      )
      .then(
        (response) => {
          console.log('Success:', response);
          setStatus('Message sent successfully!');
          setFormData({ fullName: '', email: '', message: '' }); // Reset form fields
        },
        (error) => {
          console.error('Failed:', error);
          setStatus('Failed to send message. Please try again later.');
        }
      );
    console.log(formData);
  };

  return (
    <section id="contact" className="contact-section section">
      <h1 className="text-contact pb-5">Contact</h1>
      <Container className="mt-3 contact-platform">
        <Row className="contact-platform d-flex justify-content-start align-items-center">
          <Col xs={12} md={12} className=" col-email email-box ">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formFullName">
                <Form.Label className="text-start label-name" >Name</Form.Label>
                <Form.Control 
                  type="text"
                  placeholder="Enter your full name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label className="text-start label-name">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label className="text-start label-name">Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button variant="btn btn-dark" type="submit" className="mt-5 ">
                Send Email
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
