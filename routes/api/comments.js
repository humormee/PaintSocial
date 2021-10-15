const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const User = require('../../models/User');
const Comment = require('../../models/Comment');
const validateComment = require('../../validation/comments');

router.get('/painting/:painting_id', (req, res) => {
  Comment.find({ painting: req.params.painting_id })
    .populate({path: 'commenter', model: 'User'})
    .sort({ date: -1 })
    .then(comments => res.json(comments))
    .catch(err => res.status(404).json({
      nocommentsfound: "Painting has no comments"
    }));
});

router.get('/:id', (req, res) => {
 
  Comment.findById(req.params.id)
    .populate({path: 'commenter', model: 'User'})
    .then(comment => {
      res.json(comment)
    })
    .catch(err =>{
      res.status(404).json({
        nocommentfound: 'No comment found with that ID'
      })});
});

router.post('/painting/:painting_id',
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { isValid, errors } = validateComment(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newComment = new Comment ({
      commenter: req.user.id,
      painting: req.params.painting_id,
      description: req.body.description
    })

    newComment.save()
        .then(comment => {
          res.json(comment)})
        // .populate('commenter')
        .catch(err => res.status(404).json({
          commentnotposted: 'comment did not save correctly'
    }))
  }
)
router.post('/painting/update/:painting_id',
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { isValid, errors } = validateComment(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    Comment.findById(req.params.id)
      .then(comment => {
        comment.commenter = req.user.id;
        comment.painting = req.params.painting_id;
        comment.description = req.body.description;
        comment.save()
          .then(comment => {
            res.json(comment)})
          .catch(err => res.status(404).json({
            commentnotposted: 'comment did not update correctly'
      }))

      })
    
    
  }
)

// router.post('/painting/update/:id', (req, res) => {
//   Comment.findById(req.params.id)
//     .then(() => console.log("updating..."))
// })
// router.put('painting/:painting_id', (req, res) => {
//   const comment = Comment.findById(req.params.id)
// })

router.delete('/:id', (req, res) => {
  
  Comment.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json(
      {deletedComment: req.params.id}
    )
    .catch( err => 
      res.status(404).json({
        nocommentfound: "no comment found for deletion with that ID"
      }))
    );
});

module.exports = router;
