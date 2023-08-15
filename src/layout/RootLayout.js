import { Link, Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import FootLayout from "./FootLayout";

function RootLayout() {
return (
  <div className="div">
    <header>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand>
            <Link to="/"><Image src="https://www.svgrepo.com/show/484441/ring.svg" style={{width: '40px'}} />Sara's Lunch</Link>
          </Navbar.Brand>
          <Nav className="ms-auto mb-lg-0">
            <Nav.Link variant="success">
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="products">Products</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="help">Help</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
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