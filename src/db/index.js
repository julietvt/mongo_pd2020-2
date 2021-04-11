const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost:27017/db20202',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function (err) {
    if (err) {
      console.log('Failed connection');
    } else {
      console.log('Connection success!');
    }
  }
);

module.exports = mongoose.connection;
