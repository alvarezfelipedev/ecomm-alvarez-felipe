import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <Navbar bg="success" expand="lg">
      <Container>
      <Navbar.Brand href="#home">
            essentials
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-center">
            <Nav.Link href="#link">CATEGORIA 1</Nav.Link>
            <Nav.Link href="#link">CATEGORIA 2</Nav.Link>
            <Nav.Link href="#link">CATEGORIA 3</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">CARRITO</Nav.Link>
        </Nav.Item>
      </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;