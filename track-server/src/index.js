// models are only ever required in index.js because the model instantiation lines are only expected to be run once
// ( mongoose.model('User', userSchema); )
// to get access to a model in another file, you grab it via mongoose (see authRoutes.js)
// ( const mongoose = require('mongoose'); )
// ( const User = mongoose.model('User'); )
require('./models/User');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const requireAuth = require('./middlewares/requireAuth');

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

app.get('/', requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});

