import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactUs = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:1313/api/contactUs/contact', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.text())
            .then(data => {
                alert(data);
            })
            .catch(error => {
                console.error('Error: ', error)
            });
    };

    return (
        <section id="contactUs" className='my-5' style={{
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
            backgroundColor: '#FFFFFF'
        }}>
            <Container className='px-5'>
                <Row className="justify-content-center mb-5">
                    <Col md={12} className="text-center">
                        <h1 className="mb-4 my-5" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#0089EA' }}>Contact Us</h1>
                        <p className="mb-4" style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: '#0089EA' }}>
                            Please fill out the form below and we will get back to you as soon as possible.
                        </p>
                    </Col>
                </Row>
                <Row className="align-items-center justify-content-center">
                    <Col md={6}>
                        <img className="w-100 rounded" src="https://res.cloudinary.com/dq3uubb5s/image/upload/v1719088799/kbfmwblqlszm19hqg9yd.png" alt="Contact" />
                    </Col>
                    <Col md={6}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: '#0089EA' }}>Your Name</Form.Label>
                                <Form.Control
                                    style={{
                                        boxShadow: '0 0 10px rgba(0, 137, 234, 0.3)',
                                        backgroundColor: '#FFFFFF',
                                        color: '#0089EA'
                                    }}
                                    type="text"
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: '#0089EA' }}>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    style={{
                                        boxShadow: '0 0 10px rgba(0, 137, 234, 0.3)',
                                        backgroundColor: '#FFFFFF',
                                        color: '#0089EA'
                                    }}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formMessage">
                                <Form.Label style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: '#0089EA' }}>Message</Form.Label>
                                <Form.Control
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    style={{
                                        boxShadow: '0 0 10px rgba(0, 137, 234, 0.3)',
                                        backgroundColor: '#FFFFFF',
                                        color: '#0089EA'
                                    }}
                                    as="textarea"
                                    rows={6} />
                            </Form.Group>
                            <div className='d-flex justify-content-center'>
                                <Button variant="primary" type="submit" style={{ color: '#0089EA', borderColor: '#0089EA', backgroundColor: '#FFFFFF', outlineColor: '#66FCF1' }}>
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