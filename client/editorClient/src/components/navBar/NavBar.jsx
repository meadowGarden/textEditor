import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const isLoggedIn = !!localStorage.getItem("jwtToken");
  const navigate = useNavigate();

  const handleLogout = () => {
    if (isLoggedIn) {
      localStorage.removeItem("jwtToken");
      navigate("/");
    }
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">home</Navbar.Brand>
        <Nav className="me-auto">
          {!isLoggedIn && <Nav.Link href="/register">register</Nav.Link>}
          {!isLoggedIn && <Nav.Link href="/login">login</Nav.Link>}
          {isLoggedIn && <Nav.Link href="/documents">documents</Nav.Link>}
          {isLoggedIn && <Nav.Link href="/users">users</Nav.Link>}
          {isLoggedIn && <Nav.Link onClick={handleLogout}>logout</Nav.Link>}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
