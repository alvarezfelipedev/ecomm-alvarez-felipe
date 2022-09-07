import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carrito from '../CartWidget/CartWidget';
import './NavBar.css'


const NavBar = () => {
  return (
    <Navbar className='bg' expand="lg">
      <Container>
      <Navbar.Brand className='titulo' href="#home">
            ESSENTIALS
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className='categorias'>
            <Nav.Link href="#link">CATEGORIA 1</Nav.Link>
            <Nav.Link href="#link">CATEGORIA 2</Nav.Link>
            <Nav.Link href="#link">CATEGORIA 3</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item className='carrito'>
          <Nav.Link className='carrito' href="/compras"><Carrito/></Nav.Link>
        </Nav.Item>
      </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;