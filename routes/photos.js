const express = require('express');
const router = express.Router();
const Photo = require('../models/Photo');
const EventLogs = require('../models/EventLog');
const Regex = require('regex');

//Get back all Photos per Album in DB 
router.get('/:albumId', async (req,res) => {
    try {
        const photos = await Photo.find(
            { albumId : req.params.albumId }
            );
        res.json(photos);
    } catch (err) {
        res.json({message: err});
    }
});

//Submit An Photo 
router.post('/',async(req,res) => {
    const photo = new Photo({
        albumId: req.body.albumId,
        photoName: req.body.photoName,
        photoDescription: req.body.photoDescription,
        photoUrl: req.body.photoUrl,
        photoDateCreated: req.body.photoDateCreated
    });
    try {
        const savedPhoto = await photo.save();
        res.json(savedPhoto);
    } catch (err) {
        res.json({message: err});
    }finally{
        console.log('asdasd' + res);
    }
});

//Search a specific Photo by name or description
router.get('/search/:search', async(req,res) => {
    try {
        var query={
            $text:{$search: req.params.search}
        }
        const photos = await Photo.find(query);
        res.json(photos);
    } catch (err) {
        res.json({message: err});
    }
});

//Search a specific Photo by date
router.get('/search/date/:search', async(req,res) => {
    try {
        var query={photoDateCreated: req.params.search};
        const photos = await Photo.find(query);
        res.json(photos);
    } catch (err) {
        res.json({message: err});
    }
});

//Delete an Photo
router.delete('/:photoId', async(req,res) => {
    try {
        const removedPhoto = await Photo.remove({
            _id: req.params.photoId
        });
        res.json(removedPhoto);
    } catch (error) {
        res.json({message: error});
    }
});

//Delete photos by album deleted
router.delete('/album/:albumId', async(req,res) => {
    try {
        const removedPhoto = await Photo.remove({
            albumId: req.params.albumId
        });
        res.json(removedPhoto);
    } catch (error) {
        res.json({message: error});
    }
});

//Update an Photo
router.patch('/:phototId', async (req,res) => {
    try {
        const updatedPhoto = await Photo.updateOne(
            {_id: req.params.phototId},
            {
                $set: {
                    photoName: req.body.photoName,
                    photoDescription: req.body.photoDescription
                }
            }
        );
        res.json(updatedPhoto);
    } catch (error) {
        res.json({message: error});
    }
});

module.exports = router;