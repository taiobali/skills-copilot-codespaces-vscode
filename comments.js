// Create web server with express
// Add route to get all comments
// Add route to create a new comment

const express = require('express');
const router = express.Router();

const Comment = require('../models/comment');

router.get('/', (req, res) => {
    Comment.find({})
        .populate('author', 'username')
        .exec((err, comments) => {
            if (err) {
                res.json({
                    success: false,
                    message: 'Failed to retrieve comments',
                    error: err
                });
            } else {
                res.json({
                    success: true,
                    message: 'Successfully retrieved comments',
                    data: comments
                });
            }
        });
});

router.post('/', (req, res) => {
    const comment = new Comment({
