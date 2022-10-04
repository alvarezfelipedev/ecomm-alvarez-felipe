import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Carrito from "../CartWidget/CartWidget";
import "./NavBar.css";
// import { CgAdidas } from "react-icons/cg";


const NavBar = () => {
  return (
    <>
      <Navbar className="bg" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              {/* <CgAdidas className="logo"/>  */}
              <img className="logo" src="/adidas.svg" alt="Logo de Adidas" width={50} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center">
            <Nav className="categorias">
              <Nav.Link>
                {/* link, en caso de tener problemas reemplazarlo por el */}
                <Link to="category/jersey" className="categoria-">
                  Jersey
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="category/ball" className="categoria-">
                  Ball
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="category/cleats" className="categoria-">
                  Cleats
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav className="justify-content-end  " activeKey="/home">
            <Nav.Item>
              <Link to="/cart">
                <Carrito className="carrito" />
              </Link>
            </Nav.Item>
            <Navbar.Brand>
              <Link to="/cart">
              </Link>
            </Navbar.Brand>

          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
