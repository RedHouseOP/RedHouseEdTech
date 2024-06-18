const mongoose = require('mongoose');
const db = require('./config/db'); // Ensure this is your actual path to the db connection file
const Quiz = require('./models/Quiz');
const Subject = require('./models/Subject');

(async function seedDatabase() {
    try {
        // Create a new Quiz
        const newQuiz = new Quiz({
            title: 'JavaScript Basics',
            description: 'A quiz on JavaScript basics.',
            questions: [
                {
                    questionText: 'What is the use of isNaN function?',
                    answerOptions: ['Check if the input is a number', 'Check if the input is not a number'],
                    correctAnswer: 'Check if the input is not a number',
                },
                // Add more questions here
            ],
        });

        await newQuiz.save();

        // Create a new Subject
        const newSubject = new Subject({
            name: 'JavaScript',
            description: 'Quizzes on JavaScript topics.',
            quizzes: [newQuiz._id], // Array of quiz ObjectId(s)
        });

        await newSubject.save();

        console.log('Database seeded successfully');
    } catch (error) {
        console.error('Error seeding the database:', error);
    } finally {
        mongoose.connection.close();
    }
})();
