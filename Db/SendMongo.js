const projectModel = require('../models/projectSchema.js');
const seedData = require('./seedData.json');


SchemaSetUp.deleteMany({})
  .then(() => {

    return SchemaSetUp.insertMany(seedData);
  })
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    process.exit();
  });