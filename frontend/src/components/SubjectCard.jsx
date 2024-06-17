// frontend/src/components/SubjectCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SubjectCard = ({ subject }) => {
    const navigate = useNavigate();

    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>{subject.name}</Card.Title>
                <Card.Text>{subject.description}</Card.Text>
                <Button onClick={() => navigate(`/subject/${subject._id}`)}>View Quizzes</Button>
            </Card.Body>
        </Card>
    );
};

export default SubjectCard;
