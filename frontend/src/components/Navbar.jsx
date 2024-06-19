import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';

function NavbarComponent() {
  let navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('token') !== null;

  const scrollToContactUs = () => {
    const contactSection = document.getElementById('contactUs');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
  };

  return (
    <>
      <Navbar sticky="top" variant="dark" style={{ background: 'linear-gradient(to right, #0D1A1F, #214551)' }}>
        <Container>
          <Navbar.Brand as={Link} to="/" style={{ color: '#66FCF1' }}>RedHouseEdTech</Navbar.Brand>
          <div className="mx-auto">
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
          </div>
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
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default NavbarComponent;
