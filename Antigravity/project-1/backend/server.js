require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const apiRoutes = require('./routes/api');

// Routes
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.send('Productivity App Backend Running');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
