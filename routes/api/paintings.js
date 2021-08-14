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
    debugger
    Painting.findById(req.params.id)
        .then(painting => {
            debugger
            return (res.json(painting))})
        .catch(err =>
            res.status(404).json({ nopaintingfound: 'No painting found with that ID' })
        );
});

router.delete('/:id', (req, res) => {


    Painting.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({message: 'Deleted Successfully!'})
        .catch( err =>
            res.status(404).json({ nopaintingfound: 'No painting found with that ID' }))
        );
});

router.post('/', 
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
    const { isValid, errors } = validatePainting(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }


    // painting_image: req.body.painting_image,

    debugger
    const newPainting = new Painting ({
        artist: req.user.id,
        painting_image: req.body.painting_image,
        // painting_image: 'temp value',
        title: req.body.title
    })

    newPainting.save().then(painting => res.json(painting)).catch(err =>
            res.status(404).json({ paintingnotposted: 'painting did not save correctly' }
        )
    )
})

module.exports = router;