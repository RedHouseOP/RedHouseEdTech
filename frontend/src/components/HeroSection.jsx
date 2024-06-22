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
        "Human Rights",
"Stranger Danger",
"Cyber Related Safety",
"Home Safety Tips",
"Water Safety and Drowning Prevention",
"Fire Safety and Emergency Preparedness",
"Social Media Etiquette and Safety",
"Conflict Resolution and Peer Pressure",
"Workplace Safety and Occupational Health",
"Diversity and Inclusion",
"Understanding Democracy and Citizenship",
"Quick Response During Natural Disasters",
"Rights and Responsibilities of Young Citizens",
"Importance of Voting and Community Participation",
"Fire Prevention Measures at Home and Workplace",
"Emergency Response",
"Sex Education",
"Signs of Heart Attack and Stroke",
"Dealing with Cuts, Burns, and Fractures",
"Basic First Aid Techniques (CPR, Heimlich Maneuver)",
"Handling Emergencies on the Road",
"Pedestrian Safety",
"Defensive Driving Techniques",
"Road rules and Traffic Signs",
"Intellectual Property Rights",
"Civil and Criminal Laws",
"Legal Rights as a Citizen",
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
