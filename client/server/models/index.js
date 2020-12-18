const mongoose = require('mongoose')
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected successfully ~! Database: bloopBuild')
})

mongoose.connection.on('error', (err) => {
  console.log(err);
});

module.exports = {
  Bloop: require('./Bloop'),
  User: require('./User')
}