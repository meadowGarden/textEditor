import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
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
