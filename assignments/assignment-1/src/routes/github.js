const express = require('express');
const router = express.Router();
const githubController = require('../controllers/githubController');

// POST endpoint to save GitHub data to MongoDB
router.post('/', githubController.saveToMongoDB);

// GET endpoint to retrieve saved GitHub data from MongoDB
router.get('/:id', githubController.getFromMongoDB);

module.exports = router;
