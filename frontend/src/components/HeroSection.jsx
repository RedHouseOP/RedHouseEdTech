import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ReactTypingEffect from 'react-typing-effect';
import heroSectionImg from '../assets/heroSection.jpg';

const HeroSection = () => {
    let navigate = useNavigate();
    const handleOnClick = () => {
        navigate('/subject')
    }

    const subjects = [
        "Personal Safety",
        "Sex Education",
        "Traffic Rules",
        "First Aid",
        "Cyber Safety",
        "Mental Health Awareness",
    ];

    const buttonStyle = {
        color: '#0089EA',
        backgroundColor: '#FFF',
        borderColor: '#0089EA',
        transition: 'all 0.3s ease',
    };

    const buttonHoverStyle = {
        color: '#FFF',
        backgroundColor: '#0089EA',
        borderColor: '#0089EA',
    };

    return (
        <div>
            <Container className="my-5" fluid style={{
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 0 10px rgba(0,0,0,0.3)',
            }} >
                <Row className="align-items-center">
                    <Col md={6} className="text-center text-md-left">
                        <h1 style={{ color: '#0089EA' }} className="display-4">Empower Yourself with Essential Life Skills</h1>
                        <p style={{ fontSize: '1.25rem' }} className="my-4">
                            Discover a wealth of knowledge on personal safety, sex education, traffic rules, and more. Our interactive quizzes and story-based modules are designed to educate and engage learners of all ages. Start your journey to a safer, smarter, and more informed life today.
                        </p>
                        <h3 className='my-4' style={{ color: '#0089EA' }}>
                            <ReactTypingEffect
                                text={subjects}
                                speed={100}
                                eraseSpeed={50}
                                eraseDelay={2000}
                                typingDelay={1000}
                                displayTextRenderer={(text, i) => {
                                    return (
                                        <span>
                                            {text.split('').map((char, i) => {
                                                const key = `${i}`;
                                                return (
                                                    <span key={key} style={{ color: '#0089EA' }}>{char}</span>
                                                );
                                            })}
                                        </span>
                                    );
                                }}
                            />
                        </h3>
                        <Button
                            style={buttonStyle}
                            onMouseEnter={(e) => e.currentTarget.style = { ...buttonStyle, ...buttonHoverStyle }}
                            onMouseLeave={(e) => e.currentTarget.style = buttonStyle}
                            onClick={handleOnClick}
                            variant="primary"
                            size="lg"
                        >
                            Get Started
                        </Button>
                    </Col>
                    <Col md={6} className="text-center">
                        <img src={heroSectionImg} alt="Hero" className="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HeroSection;
