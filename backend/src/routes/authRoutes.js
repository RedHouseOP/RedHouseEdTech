const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logoutUser, fetchUser, updateFinishedSubjects } = require('../controllers/authController');

router.post('/register', registerUser);

router.get('/fetchUser', fetchUser);

router.post('/updateFinishedSubjects', updateFinishedSubjects);

router.post('/login', loginUser);

router.post('/logout', logoutUser);

module.exports = router;
