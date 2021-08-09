const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Like = require('../../models/Like');

router.get('/:painting_id', (req, res) => {
  debugger
  Like.find({ painting: req.params.painting_id })
    .then(likes => {
      debugger
      return (
      res.json(likes)
    )
  })
    .catch(() => res.status(404).json({
      nolikesfound: "Painting has no likes"
    }));
});

router.post('/painting/:painting_id',
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // const { isValid, errors } = validateComment(req.body);

    // if (!isValid) {
    //   return res.status(400).json(errors);
    // }

      console.log('like post route');

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