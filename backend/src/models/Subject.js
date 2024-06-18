
const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    introText: {
        type: String,
    },
    keyConcepts: {
        type: Array,
    },
    quizzes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz',
    }],
});
// TODO: Concepts and image is to be added
module.exports = mongoose.model('Subject', SubjectSchema);
