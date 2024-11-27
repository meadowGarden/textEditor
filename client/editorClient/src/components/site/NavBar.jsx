import axios from "axios";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/documents">documents</Nav.Link>
          <Nav.Link href="/users">users</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
