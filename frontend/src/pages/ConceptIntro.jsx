// frontend/src/components/ConceptIntro.jsx
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ConceptIntro = () => {
    const { title } = useParams();

    const introText = `At RedHouseEdTech, we believe that education is the key to a brighter future. Our mission is to provide accessible, interactive, and engaging learning resources for young adults and adults alike. Whether you're looking to understand your basic human rights, learn essential first aid techniques, or gain insights into personal and traffic safety, we've got you covered.`;

    const keyConcepts = [
        'Right to Life',
        'Freedom from Torture',
        'Freedom of Speech',
        'Right to Education',
        'Right to Privacy'
    ];

    const backgroundImage = 'https://via.placeholder.com/1500x500';

    return (
        <>
            <div
                className="concept-intro"
                style={{
                    backgroundImage: `url(${ backgroundImage })`,
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
                    <Container>
                        <Row className="justify-content-center text-center">
                            <Col md={8}>
                                <h1 className="concept-title" style={{ fontSize: '3rem', fontWeight: 'bold' }}>
                                    {title}
                                </h1>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Col md={10}>
                        <p className="intro-text" style={{ fontSize: '1.25rem', lineHeight: '1.6' }}>
                            {introText}
                        </p>
                        <h3 className="mt-4">Key Concepts</h3>
                        <ul>
                            {keyConcepts.map((concept, index) => (
                                <li key={index}>{concept}</li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ConceptIntro;
