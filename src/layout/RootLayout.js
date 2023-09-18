import { Link, Outlet } from "react-router-dom";
import { Container, Nav, Navbar, Image } from 'react-bootstrap';
import FootLayout from "./FootLayout";
import Breadcrumbs from "../components/Breadcrumbs";
import { useEffect, useState } from "react";


function RootLayout() {
 
  const Navi = ()=>{
    const [ navbar, setNavbar ] = useState(false);
    const [ color, setColor ] = useState(false);

    const changeBgColor = () => {
      if(window.scrollY >= 90){
        setNavbar(true)
        setColor('navFixed2')
      } else {
        setNavbar(false)
        setColor('navFixed')
      }
    };

    useEffect(() => {
      window.addEventListener('navFixed', changeBgColor, true );
      return () => window.removeEventListener('navFixed', changeBgColor );
    }, []);
  

  }
      
  

  
return (
  <div className="RootLayout" >
    <header 
      className={Navbar ? 'navFixed' : 'navbar'}
      style={{
        position: 'fixed',
        top: '0',
        background: 'rgba(23, 152, 152, 0.67)!important',
        zIndex: '1',
      }}
    >
      <Navbar bg="light" data-bs-theme="light">
        <Container className="headers">
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
    <main style={{marginTop:"60px"}}>
      <Outlet />
    </main>
    <footer>
      <FootLayout />
    </footer>

  

  </div>
  
  
        
);
}

export default RootLayout;