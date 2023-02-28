import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Badge,
  Form,
  Dropdown,
  DropdownButton,
  Button,
  InputGroup,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>PANYA</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <InputGroup>
                <DropdownButton id="dropdown-basic-button" title="All">
                  <Dropdown.Item href="#">All</Dropdown.Item>
                  <Dropdown.Item href="#">Electronics</Dropdown.Item>
                  <Dropdown.Item href="#">Cars</Dropdown.Item>
                  <Dropdown.Item href="#">Books</Dropdown.Item>
                  <Dropdown.Item href="#">Kitchens</Dropdown.Item>
                </DropdownButton>
                <Form.Control placeholder="Search..." />

                <Button variant="warning">
                  <i className="bi bi-search"></i>
                </Button>
              </InputGroup>
            </Nav>
            <Nav>
              <LinkContainer to="/admin/orders">
                <Nav.Link>
                  Admin
                  <span className="position-absolute top-1 start-10 translate-middle p-2 bg-danger border border-ligh rounded-circle"></span>
                </Nav.Link>
              </LinkContainer>
              <NavDropdown title="Prakash" id="collasible-nav-dropdown">
                <NavDropdown.Item
                  eventKey="/user/myOrders"
                  as={Link}
                  to="/user/myOrders"
                >
                  My Orders
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/user" as={Link} to="/user">
                  My Profile
                </NavDropdown.Item>
                <NavDropdown.Item>LogOut</NavDropdown.Item>
              </NavDropdown>
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/register">
                <Nav.Link>Register</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <Badge bg="danger">2</Badge>
                  <i className="bi bi-cart4"></i>

                  <span className="ms-1">CART</span>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderComponent;
