import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ItemCount from './components/ItemCount';


import { CartWidget } from "./CartWidget"
export const NavBar = () => (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">MarketCat</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/category/Comida Seca">Comida Seca</Nav.Link>
          <Nav.Link href="/category/Snack">Snack</Nav.Link>
        </Nav><CartWidget />
      </Container>
    </Navbar>


)