import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const ConceptIntro = () => {
    useAuth(); 

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!location.state || !location.state.subject) {
            navigate('/login');
        }
    }, [location, navigate]);

    // ? While rendering of the component the if condition is checked first before useEffect() because useEffect() is not called before the component finishes its rendering.. so to avoid the component to attemp a false rendering if condition returns null resulting in immidiate completion of the component & causes useEffect() to be called which then handles the redirection

    if (!location.state || !location.state.subject) {
        return null; 
    }

    const { subject } = location.state;

    const backgroundImage = 'https://via.placeholder.com/1500x500';

    return (
        <>
            <div
                className="concept-intro"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    height: '50vh',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    color: 'white',
                }}
            >
                <div
                    className="overlay"
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {/* This is the Title of the Subject */}
                    <Container>
                        <Row className="justify-content-center text-center">
                            <Col md={8}>
                                <h1 className="concept-title" style={{ fontSize: '3rem', fontWeight: 'bold' }}>
                                    {subject.name}
                                </h1>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            {/* This is the introduction about the subject */}
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Col md={10}>
                        <p className="intro-text" style={{ fontSize: '1.25rem', lineHeight: '1.6' }}>
                            {subject.introText}
                        </p>
                        <h3 className="mt-4">Key Concepts</h3>
                        <ul>
                            {subject.keyConcepts.map((concept, index) => (
                                <li key={index}>{concept}</li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className="text-center my-5">
                <Button variant="primary" size="lg" onClick={() => navigate(`/quiz`, { state: { subject } })}>Start The Quiz →</Button>
            </div>
        </>
    );
};

export default ConceptIntro;
