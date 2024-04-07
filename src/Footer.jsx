






import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5>About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis justo sit amet nunc maximus, in eleifend libero finibus.
            </p>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li><FaMapMarkerAlt /> 123 Main Street, New York, NY 10001</li>
              <li><FaEnvelope /> info@example.com</li>
              <li><FaPhone style={{ transform: 'rotateY(180deg)' }} /> +1 (123) 456-7890</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="bg-secondary text-center py-2">
        <Container>
          <small>&copy; 2024 Your Company. All rights reserved.</small>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;













