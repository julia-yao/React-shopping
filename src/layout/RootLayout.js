import { Link, Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import FootLayout from "./FootLayout";
import Breadcrumbs from "../components/Breadcrumbs";

function RootLayout() {
return (
  <div className="RootLayout">
    <header>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand>
            <Link to="/"><Image src="https://www.svgrepo.com/show/484441/ring.svg" style={{width: '40px'}} />Sara's Lunch</Link>
          </Navbar.Brand>
          <Nav className="ms-auto mb-lg-0">
            <Link className="Nav.Link mx-2" to="/">Home</Link>
            <Link className="Nav.Link mx-2" to="products">Products</Link>
            <Link className="Nav.Link mx-2" to="help">Help</Link>
          </Nav>
        </Container>
      </Navbar>
      <Breadcrumbs />
    </header>
    <main>
      <Outlet />
    </main>
    <footer>
      <FootLayout/>
    </footer>

  

  </div>
  
  
        
);
}

export default RootLayout;