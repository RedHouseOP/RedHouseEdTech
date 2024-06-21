// frontend/src/pages/SubjectPage.jsx
import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { SubjectContext } from '../context/subjectContext';  // Correct import
import SubjectCard from '../components/SubjectCard';
import useAuth from '../hooks/useAuth';
const SubjectPage = () => {
    useAuth(); 
    
    // ? To check whether the user is logged in or not
    if (localStorage.getItem('token') == null) {
        return null;
    }
    
    const { subjects } = useContext(SubjectContext);
    if (!subjects || subjects.length === 0) {
        return <div>Loading subjects...</div>;
    }

    return (
        <Container className="mt-5">
            <Row>
                {subjects.map(subject => (
                    <Col key={subject._id} md={4}>
                        <SubjectCard subject={subject} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default SubjectPage;
