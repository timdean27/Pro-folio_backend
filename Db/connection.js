const mongoose = require('mongoose');
require('dotenv').config();


const { MONGODB_URL } = process.env;

mongoose.connect(MONGODB_URL);


module.exports = mongoose;
