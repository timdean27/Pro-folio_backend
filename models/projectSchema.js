const mongoose = require('../Db/connection');

const UserSchema = new mongoose.Schema({
    user:{
        username: String,
        profilePic: String,
        password: String
        },
})
const MarketingSchema = new mongoose.Schema({
        Marketing_info:{
        gitHub:String,
        linkedIn:String,
        resume:String,
        coverLetter:String
        }
      })
const ContactSchema = new mongoose.Schema({        
        reach_out_to_Dev:{
        yourEmail:String,
        yourName:String,
        yourQuestion:String
        }
})
const ProjectsSchema = new mongoose.Schema({         

           project:{
                      image:String,
                      shortVideo:String,
                      Description:String,
                      
                    }
        
    })
    
const UpdatesSchema = new mongoose.Schema({   
    updates:{
      updateDescription:String,
      additions:String,
      comments:String,
      projectID:String,
      updatedAt: {type: Date, default: Date.now}
      }
    })

  const setUserSchema = mongoose.model('Users', UserSchema);
  const setMarketingSchema= mongoose.model('Marketing', MarketingSchema);
  const setContactSchema = mongoose.model('Contacts', ContactSchema);
  const setProjectsSchema = mongoose.model('Projects', ProjectsSchema);
  const setUpdatesSchema = mongoose.model('Updates', UpdatesSchema);

  module.exports = {
    setUserSchema,
    setMarketingSchema,
    setContactSchema ,
    setProjectsSchema,
    setUpdatesSchema 
  }