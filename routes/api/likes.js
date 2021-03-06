const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Like = require('../../models/Like');

router.get('/:painting_id', (req, res) => {
  Like.find({ painting: req.params.painting_id })
    .then(likes => {
      return (
      res.json(likes)
    )
  })
    .catch(() => res.status(404).json({
      nolikesfound: "Painting has no likes"
    }));
});

router.get('/', (req, res) => {
  Like.find()
    .then(likes => res.json(likes))
    .catch(err => 
      res.status(404).json({nolikesfound: 'no likes found'}
      )
    );
});

router.post('/painting/:painting_id',
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    
    const newLike = new Like ({
      liker: req.user.id,
      painting: req.params.painting_id
    })

    newLike.save().then(like => res.json(like)).catch(err => res.status(404).json({
      likenotposted: 'like did not save correctly'
    }))
  }
)

router.delete('/:id', (req, res) => {
  

  Like.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json(
      {deletedLike: req.params.id}
    )
    .catch( err => 
      res.status(404).json({
        nolikefound: "no like found for deletion with that ID"
      }))
    );
});

module.exports = router;