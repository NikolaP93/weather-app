const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const urlEncoded = bodyParser.urlencoded({ extended: false });
const mongoose = require('mongoose');
const User = require('./schema');

// should be .env
mongoose.connect('mongodb+srv://demouser:demopass@cluster0-67j3p.gcp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });


const connection = mongoose.connection;
connection.once('open', async () => {
    console.log('successful mongo');
})

app.use(bodyParser.json());

app.post('/api/login', urlEncoded, async (req, res) => {
    const results = await User.find({});
    if (!req.body) return res.sendStatus(400);
    if (req.body.email === results[0].email && req.body.password === results[0].password) {
        res.send(true)
    } else {
        res.send(false);
    }

})

const port = 5000;

app.listen(port, () => console.log('Server started on port 5000'))