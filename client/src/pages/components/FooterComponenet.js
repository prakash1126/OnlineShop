import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const FooterComponenet = () => {
  return (
    <footer>
      <Container fluid>
        <Row className='mt-5'>
          <Col className="bg-dark text-white py-5 text-center">
            All &copy; CopyRight reservered by Panya
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponenet;
