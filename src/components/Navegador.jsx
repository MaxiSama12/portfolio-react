import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {
  return (
    <Navbar data-bs-theme="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className=" centrador_texto">
            <Nav.Link href="#sobre_Mi" className='link-nav'>SOBRE MÍ</Nav.Link>
            <Nav.Link href="#soft_Skills" className='link-nav'>HABILIDADES</Nav.Link>
            <Nav.Link href="#proyectos" className='link-nav'>PROYECTOS</Nav.Link>
            <Nav.Link href="#experiencia" className='link-nav'>EXPERIENCIA</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default BasicExample;