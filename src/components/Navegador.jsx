import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/Navegador.css';

function BasicExample() {
  return (
    <Navbar collapseOnSelect expand="md"  variant="dark">
      <Container>

        {/* Botón de colapso alineado a la derecha */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />

        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ms-auto nav-links">
            <Nav.Link href="#sobre_Mi" className="link-nav">SOBRE MÍ</Nav.Link>
            <Nav.Link href="#soft_Skills" className="link-nav">HABILIDADES</Nav.Link>
            <Nav.Link href="#proyectos" className="link-nav">PROYECTOS</Nav.Link>
            <Nav.Link href="#experiencia" className="link-nav">EXPERIENCIA</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;

