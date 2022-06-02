const mongoose = require('mongoose');
require('dotenv').config();


const mongoURI =
  process.env.NODE_ENV === 'production'
    ? process.env.DB_URL
    :process.env.DEV_DB_URL

mongoose.connect(mongoURI);


module.exports = mongoose;
