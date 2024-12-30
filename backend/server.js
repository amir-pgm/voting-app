const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoUsername = process.env.MONGO_USERNAME;
const mongoPassword = process.env.MONGO_PASSWORD;

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Replace 'mongo' with your MongoDB connection string if not using Kubernetes
mongoose.connect(`mongodb://${mongoUsername}:${mongoPassword}@mongo:27017/voting`, { useNewUrlParser: true, useUnifiedTopology: true });

const voteSchema = new mongoose.Schema({
  party: String,
});

const Vote = mongoose.model('Vote', voteSchema);

app.post('/vote', (req, res) => {
  const vote = new Vote({ party: req.body.party });
  vote.save()
    .then(() => res.status(201).send('Vote recorded'))
    .catch(err => res.status(500).send('Error recording vote'));
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});