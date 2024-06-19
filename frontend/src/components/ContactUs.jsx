import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import contactImage from '../assets/contactUs.png';

const ContactUs = () => {
    return (
        <section id="contactUs" className='my-5' style={{
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 0 10px rgba(102,252,241,1)',
            backgroundColor: '#1F2833'
        }}>
            <Container className='py-0 px-5'>
                <Row className="justify-content-center mb-5">
                    <Col md={12} className="text-center">
                        <h1 className="mb-4 my-5" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#66FCF1' }}>Contact Us</h1>
                        <p className="mb-4" style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: '#66FCF1' }}>
                            Please fill out the form below and we will get back to you as soon as possible.
                        </p>
                    </Col>
                </Row>
                <Row className="my-5 align-items-center justify-content-center">
                    <Col md={6}>
                        <img className="w-100 rounded" src={contactImage} alt="Contact" />
                    </Col>
                    <Col md={6}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: '#66FCF1' }}>Your Name</Form.Label>
                                <Form.Control style={{
                                    boxShadow: '0 0 10px rgba(102,252,241,1)',
                                    backgroundColor: '#214551', 
                                    color: '#66FCF1'
                                }} type="text" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: '#66FCF1' }}>Email address</Form.Label>
                                <Form.Control style={{
                                    boxShadow: '0 0 10px rgba(102,252,241,1)',
                                    backgroundColor: '#214551', 
                                    color: '#66FCF1'
                                }} type="email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formMessage">
                                <Form.Label style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: '#66FCF1' }}>Message</Form.Label>
                                <Form.Control style={{
                                    boxShadow: '0 0 10px rgba(102,252,241,1)',
                                    backgroundColor: '#214551', 
                                    color: '#66FCF1'
                                }} as="textarea" rows={6} />
                            </Form.Group>
                            <div className='d-flex justify-content-center'>
                                <Button variant="primary" type="submit" style={{ color: '#66FCF1', borderColor: '#66FCF1', backgroundColor: '#1F2833', outlineColor: '#66FCF1' }}>
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactUs;
