import React from 'react';
import { Container, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function NavbarComponent() {
  let navigate = useNavigate();
  const location1=useLocation();
  const location2=useLocation();
  const isLoggedIn = localStorage.getItem('token') !== null;

  const scrollToContactUs = () => {
    const contactSection = document.getElementById('contactUs');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    else{
      navigate('/',{state:{scrollToContactUs:true}});
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    alert("User logged out successfully");
    navigate('/login');
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('About');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    else{
      navigate('/',{State:{scrollToAbout:true}});
    }
  };

  React.useEffect(()=>{
    if(location1.state && location1.state.scrollToContactUs){
      const contactSection= document.getElementById('contactUs');
      if(contactSection){
        contactSection.scrollIntoView({behavior:'smooth', block:'start'});
      }
    }
  },[location1.state]);

  React.useEffect(()=>{
    if(location2.state && location2.state.scrollToAbout){
      const aboutSection=document.getElementById('About');
      if(aboutSection){
        aboutSection.scrollIntoView({behavior:'smooth',block:'start'});
      }
    }
  },[location2.state]);

  return (
    <>
      <Navbar expand="lg" sticky="top" variant="dark" style={{ background: 'linear-gradient(to right, #0D1A1F, #214551)' }}>
        <Container fluid>
          <Navbar.Brand as={Link} to="/" style={{ color: '#66FCF1' }}>RedHouseEdTech</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mx-auto">
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="mr-2 mx-2"
                  aria-label="Search"
                  style={{ color: '#66FCF1' }}
                />
                <Button variant="outline-light" style={{ color: '#66FCF1' }}>Search</Button>
              </Form>
            </Nav>
            <Nav className="ml-auto d-flex align-items-center">
              <Nav.Link as={Link} className='mx-2' to="/" style={{ color: '#66FCF1' }}>Home</Nav.Link>
              <Nav.Link className='mx-2' onClick={scrollToAbout} style={{ color: '#66FCF1' }}>About</Nav.Link>
              <Nav.Link className='mx-2' onClick={scrollToContactUs} style={{ color: '#66FCF1' }}>Support</Nav.Link>
              {isLoggedIn ? (
                <Nav.Link onClick={handleLogout} className='mx-2' style={{ color: '#66FCF1' }}>Logout</Nav.Link>
              ) : (
                <Nav.Link as={Link} className='mx-2' to="/login" style={{ color: '#66FCF1' }}>Login</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default NavbarComponent;
