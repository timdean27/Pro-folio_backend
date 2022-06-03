const {setUserSchema,setMarketingSchema,setContactSchema ,setProjectsSchema,setUpdatesSchema}= require('../models/projectSchema.js')
const userSeedData = require('./seedData/userSeedData.json');
const marketingSeedData = require('./seedData/marketingSeedData.json');
const contactSeedData = require('./seedData/contactSeedData.json');
const projectsSeedData = require('./seedData/projectsSeedData.json');
const UpdatesSeedData = require('./seedData/UpdatesSeedData.json');

setUserSchema.deleteMany({})
  .then(() => {

    return setUserSchema.insertMany(userSeedData);
  })
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    process.exit();
  });

  setMarketingSchema.deleteMany({})
  .then(() => {

    return setMarketingSchema.insertMany(marketingSeedData);
  })
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    process.exit();
  });

  setContactSchema.deleteMany({})
  .then(() => {

    return setContactSchema.insertMany(contactSeedData);
  })
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    process.exit();
  });
  
  setProjectsSchema.deleteMany({})
  .then(() => {

    return setProjectsSchema.insertMany(projectsSeedData);
  })
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    process.exit();
  });


  setUpdatesSchema.deleteMany({})
  .then(() => {

    return setUpdatesSchema.insertMany(UpdatesSeedData);
  })
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    process.exit();
  });