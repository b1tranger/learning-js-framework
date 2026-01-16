const express = require('express');
const router = express.Router();
const Activity = require('../models/Activity');
const Quote = require('../models/Quote');

// --- Activities ---

// Get all activities
router.get('/activities', async (req, res) => {
    try {
        const activities = await Activity.find().sort({ createdAt: -1 });
        res.json(activities);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add new activity
router.post('/activities', async (req, res) => {
    const activity = new Activity({
        name: req.body.name,
        points: req.body.points || 10
    });

    try {
        const newActivity = await activity.save();
        res.status(201).json(newActivity);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update activity status (Toggle)
router.patch('/activities/:id', async (req, res) => {
    try {
        const activity = await Activity.findById(req.params.id);
        if (!activity) return res.status(404).json({ message: 'Activity not found' });

        activity.status = activity.status === 'pending' ? 'completed' : 'pending';
        const updatedActivity = await activity.save();
        res.json(updatedActivity);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// --- Quotes ---

// Get a random quote (or seed if empty)
router.get('/quote', async (req, res) => {
    try {
        const count = await Quote.countDocuments();
        if (count === 0) {
            // Seed defaults if empty
            const defaultQuotes = [
                { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
                { text: "Consistency is the key to achieving any goal.", author: "Unknown" },
                { text: "Code helps us understand the world, and change it.", author: "Unknown" }
            ];
            await Quote.insertMany(defaultQuotes);
        }

        const random = Math.floor(Math.random() * (await Quote.countDocuments()));
        const quote = await Quote.findOne().skip(random);
        res.json(quote);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
