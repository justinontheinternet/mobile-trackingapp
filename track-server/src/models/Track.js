const mongoose = require('mongoose');

// pointSchema needs to defined here because trackSchema references it
const pointSchema = new mongoose.Schema({
  timestamp: Number
  ,coords: {
    latitude: Number
    ,longitude: Number
    ,altitude: Number
    ,accuracy: Number
    ,heading: Number
    ,speed: Number
  }
});

const trackSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId // indicates that userId refers to another object stored in MongoDb
    ,ref: 'User' // points to User model
  }
  ,name: {
    type: String
    ,default: ''
  }
  ,locations: [pointSchema] // refers to different Schema object. locations will be an array of points
});

// because points are essentially embedded in tracks, we don't want to tie Points to MongoDb
mongoose.model('Track', trackSchema);