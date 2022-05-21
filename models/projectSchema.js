const mongoose = require('../Db/connection');

const FirstSchema = new mongoose.Schema({
    user:{
        username: String,
        profilePic: String,
        password: String
        },
        
        Marketing_info:{
        gitHub:String,
        linkedIn:String,
        resume:String,
        coverLetter:String
        },
        
        reach_out_to_Dev:{
        yourEmail:String,
        yourName:String,
        yourQuestion:String
        },
        
        Projects:{

           project:{
                      image:String,
                      shortVideo:String,
                      Description:String,
                      
                    },

           updates:{
                      updateDescription:String,
                      additions:String,
                      updatedAt: {type: Date, default: Date.now}
                      },
        }
    });
  
  const setFirstShema = mongoose.model('pro3schema', FirstSchema);
  
  module.exports = setFirstShema;