const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

const app = express();

// order of these two is important as Express does not deal with JSON by default
// this ensures the JSON is parsed before being passed to the request handler
app.use(bodyParser.json());
app.use(authRoutes);

const mongoUri = 'mongodb+srv://admin:passwordpassword@cluster0-xjynx.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoUri, {
  useNewUrlParser: true
  ,useCreateIndex: true
  ,useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
  console.log('connected to mongo instance boiii');
});
mongoose.connection.on('error', (err) => {
  console.error('Error connecting to Mongo: ', err);
});

app.get('/', (req, res) => {
  res.send('Hi there!');
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});

