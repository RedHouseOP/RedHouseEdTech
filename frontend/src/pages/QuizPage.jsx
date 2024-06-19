import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, ProgressBar } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';
const QuizPage = () => {
    useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!location.state || !location.state.subject) {
            navigate('/login');
        }
    }, [location, navigate]);

    if (!location.state || !location.state.subject) {
        return null;
    }

    const [quiz, setQuiz] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
    const { subject } = location.state;
    useEffect(() => {
        const fetchQuiz = async () => {
            try {
                setQuiz(subject.quizzes[0]); 
            } catch (error) {
                console.error('Error fetching quiz:', error);
            }
        };

        fetchQuiz();
    }, [subject]);

    const handleAnswer = (answer) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestionIndex] = answer;
        setAnswers(newAnswers);
    };

    const handleNext = () => {
        if (currentQuestionIndex < quiz.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1); 
        } else {
            navigate('/quiz-result', { state: { subject, quiz, answers } });
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    if (!quiz) {
        return <div>Loading...</div>;
    }

    const currentQuestion = quiz.questions[currentQuestionIndex];

    return (
        <Container className="question-page mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <ProgressBar now={(currentQuestionIndex / quiz.questions.length) * 100} />
                    {/* 4 Options using map */}
                    <h3 className="mt-4">{currentQuestion.questionText}</h3>
                    {currentQuestion.answerOptions.map((option, index) => (
                        <Button
                            key={index}
                            className="d-block mt-2"
                            onClick={() => handleAnswer(option)}
                            variant={answers[currentQuestionIndex] === option ? 'primary' : 'outline-primary'}
                            size="lg"
                            block="true"
                        >
                            {option}
                        </Button>
                    ))}

                    <div className="mt-4 d-flex justify-content-between">
                        <Button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
                            Previous
                        </Button>
                        <Button onClick={handleNext}>
                            {currentQuestionIndex < quiz.questions.length - 1 ? 'Next' : 'Submit'}
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default QuizPage;
