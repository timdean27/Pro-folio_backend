const mongoose = require('../Db/connection');

const FirstSchema = new mongoose.Schema(
    {
        name: {type: String},
        img: {type: String},
        title: {type: String},
    },
    
  );
  
  const setFirstShema = mongoose.model('pro3schema', FirstSchema);
  
  module.exports = setFirstShema;