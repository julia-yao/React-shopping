import { Link, Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

function RootLayout() {
return (
  <div className="div">
    <header>
      <Navbar className="bg-light text-secondary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <Image src="https://www.svgrepo.com/show/484441/ring.svg" style={{width: '40px'}}/>Sara's Lunch
          </Navbar.Brand>
          <Nav className="ms-auto mb-lg-0">
            <Nav.Link>
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

  </div>
  
  
        
);
}

export default RootLayout;