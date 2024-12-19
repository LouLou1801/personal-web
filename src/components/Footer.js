// Footer.js
import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <Container className="d-flex justify-content-center">
        <div className="text-center">
          <p>&copy; 2024 LauraDev. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;