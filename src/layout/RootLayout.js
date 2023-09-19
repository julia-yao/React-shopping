import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Container, Nav, Navbar, Image } from 'react-bootstrap';
import FootLayout from "./FootLayout";
import Breadcrumbs from "../components/Breadcrumbs";



function RootLayout() {

  const [ color, setColor ] = useState('navFixed');
  
  const changeBgColor = () => {
    if(window.scrollY >= 70){
      setColor('navFixed2')
    } else {
      setColor('navFixed')
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBgColor, true );
    return () => window.removeEventListener('scroll', changeBgColor );
  }, []);
  
return (
  <div className="RootLayout" >
    <header className={color}>
      <Navbar expand="lg" className="">
        <Container className="headers">
          <Navbar.Brand>
            <Link to="/"><Image src="https://www.svgrepo.com/show/484441/ring.svg" style={{width: '40px'}} className="mx-2"/>Sara's Lunch</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="ms-5 mb-lg-0">
            <Nav className="ms-auto mb-lg-0">
              <Link className="Nav.Link mx-2 py-2" to="/">Home</Link>
              <Link className="Nav.Link mx-2 py-2" to="products">Products</Link>
              <Link className="Nav.Link mx-2 py-2" to="help">Help</Link>
              <Link className="Nav.Link mx-2 py-2" to="cart">Cart</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
    </header>

    <main style={{marginTop:"60px"}}>
      <Breadcrumbs />
      <Outlet />
    </main>

    <footer>
      <FootLayout />
    </footer>

  

  </div>
  
  
        
);
}

export default RootLayout;