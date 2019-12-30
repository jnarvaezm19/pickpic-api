const express = require('express');
const router = express.Router();
const EventLog = require('../models/EventLog');

//Get back all EventLogs in DB 
router.get('/', async (req,res) => {
    try {
        const eventLog = await EventLog.find();
        res.json(eventLog);
    } catch (err) {
        res.json({message: err});
    }
});

//Submit a event 
router.post('/',async(req,res) => {
    const eventLog = new EventLog({
        eventName: req.body.eventName,
        typeEvent: req.body.typeEvent,
        eventDescription: req.body.eventDescription,
        eventStatus: req.body.eventStatus
    });
    try {
        const savedAlbum = await album.save();
        res.json(savedAlbum);
    } catch (err) {
        res.json({message: err});
    }
});

//Clear eventLog data
router.delete('/', async(req,res) => {
    try {
        const clearEventLog = await EventLog.remove();
        res.json(clearEventLog);
    } catch (error) {
        res.json({message: error});
    }
});



module.exports = router;