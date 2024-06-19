import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ReactTypingEffect from 'react-typing-effect';
import heroSectionImg from '../assets/heroSection.jpg'

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

    return (
        <div>
            <Container className="my-5" fluid style={{
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 0 10px rgba(102,252,241,1)',
                backgroundColor: '#1F2833'
            }} >
                <Row className="align-items-center">
                    <Col md={6} className="text-center text-md-left">
                        <h1 style={{ color: '#66FCF1' }} className="display-4 font-weight-bold">Empower Yourself with Essential Life Skills</h1>
                        <p style={{ color: '#66FCF1' }} className="my-4">
                            Discover a wealth of knowledge on personal safety, sex education, traffic rules, and more. Our interactive quizzes and story-based modules are designed to educate and engage learners of all ages. Start your journey to a safer, smarter, and more informed life today.
                        </p>
                        <h3 className='my-4' style={{ color: '#66FCF1' }}>
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
                                                    <span key={key} style={{ color: '#66FCF1' }}>{char}</span>
                                                );
                                            })}
                                        </span>
                                    );
                                }}
                            />
                        </h3>
                        <Button style={{ color: '#66FCF1', backgroundColor: '#1F2833', borderColor: '#66FCF1' }} onClick={handleOnClick} variant="primary" size="lg">Get Started</Button>
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
