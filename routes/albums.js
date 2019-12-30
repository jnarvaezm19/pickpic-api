const express = require('express');
const router = express.Router();
const Album = require('../models/Album');

//Get back all Albums in DB 
router.get('/', async (req,res) => {
    try {
        const albums = await Album.find();
        res.json(albums);
    } catch (err) {
        res.json({message: err});
    }
});

//Submit An Album 
router.post('/',async(req,res) => {
    const album = new Album({
        albumName: req.body.albumName,
        createdDate: req.body.createdDate
    });
    try {
        const savedAlbum = await album.save();
        res.json(savedAlbum);
    } catch (err) {
        res.json({message: err});
    }finally{
        //console.log(res.json());
    }
});

//Search a specific album
router.get('/:albumId', async(req,res) => {
    try {
        const album = await Album.findById(req.params.albumId);
        res.json(album);
    } catch (error) {
        res.json({message: error});
    }
});

//Delete an Album
router.delete('/:albumId', async(req,res) => {
    try {
        console.log(req.params.albumId);
        const removedAlbum = await Album.remove({
            _id: req.params.albumId
        });
        res.json(removedAlbum);
    } catch (error) {
        res.json({message: error});
    }
});

//Update an Album
router.patch('/:albumtId', async (req,res) => {
    try {
        const updatedAlbum = await Album.updateOne(
            {_id: req.params.albumtId},
            {
                $set: {
                    albumName: req.body.albumName,
                    PathBannerImage: req.body.PathBannerImage
                }
            }
        );
        res.json(updatedAlbum);
    } catch (error) {
        res.json({message: error});
    }
});

module.exports = router;