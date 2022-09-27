import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Carrito from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar className="bg" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src="/adidas.svg" alt="Logo de Adidas" width={50} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav className="categorias">
            <Nav.Link>
              <Link className="categoria" to="category/jersey">
                Jersey
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="category/ball" className="categoria">
                Ball
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="categoria" to="category/cleats">
                Cleats
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item className="carrito">
            <Link to="/cart">
              <Carrito />
            </Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
