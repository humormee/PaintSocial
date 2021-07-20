const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Painting = require('../../models/Painting');
const validatePainting = require('../../validation/paintings');

router.get('/', (req, res) => {
    Painting.find()
        .sort({ date: -1 })
        .then(paintings => res.json(paintings))
        .catch(err => res.status(404).json({ nopaintingsfound: 'No paintings found' }));
});

router.get('/user/:user_id', (req, res) => {
    Painting.find({ artist: req.params.user_id })
        .sort({ date: -1 })
        .then(paintings => res.json(paintings))
        .catch(err =>
            res.status(404).json({ nopaintingsfound: 'No paintings found from that user' }
        )
    );
});

router.get('/:id', (req, res) => {
    Painting.findById(req.params.id)
        .then(painting => res.json(painting))
        .catch(err =>
            res.status(404).json({ nopaintingfound: 'No painting found with that ID' })
        );
});

router.delete('/:id', (req, res) => {
    debugger
    var id = req.params.id;
    var collection = db.get().collection('paintings');

    collection.deleteOne( { _id: new mongo.ObjectId(id) }, function(err, results ) {  
    });
    res.json({ success: id })
});

router.post('/', 
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
    const { isValid, errors } = validatePainting(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }


    // painting_image: req.body.painting_image,

    const newPainting = new Painting ({
        artist: req.user.id,
        painting_image: 'temp value',
        title: req.body.title
    })

    newPainting.save().then(painting => res.json(painting)).catch(err =>
            res.status(404).json({ paintingnotposted: 'painting did not save correctly' }
        )
    )
})

module.exports = router;