import { Link, Outlet } from "react-router-dom";
import { Container, Nav, Navbar, Image } from 'react-bootstrap';
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
            <Link className="Nav.Link mx-2" to="cart">Cart</Link>
          </Nav>
        </Container>
      </Navbar>
      <Breadcrumbs />
    </header>
    <main>
      <Outlet />
    </main>
    <footer>
      <FootLayout />
    </footer>

  

  </div>
  
  
        
);
}

export default RootLayout;