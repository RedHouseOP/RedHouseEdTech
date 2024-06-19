import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap';

const QuizResultPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { subject, quiz, answers } = location.state;

    const calculateScore = () => {
        let score = 0;
        quiz.questions.forEach((question, index) => {
            if (question.correctAnswer === answers[index]) {
                score++;
            }
        });
        return score;
    };

    const score = calculateScore();

    return (
        <Container className="results-page mt-5">
            <Row className="justify-content-center">
                <Col md={8} className="text-center">
                    <h2>Your Score: {score} / {quiz.questions.length}</h2>
                    <ListGroup className="mt-4">
                        {quiz.questions.map((question, index) => (
                            <ListGroup.Item key={index}>
                                <h5>{question.questionText}</h5>
                                <p>Your Answer: {answers[index]}</p>
                                <p>Correct Answer: {question.correctAnswer}</p>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                    <Button className="mt-4" onClick={() => navigate(`/quiz`, { state: { subject } })} variant="primary" size="lg">
                        Retake Quiz
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default QuizResultPage;
