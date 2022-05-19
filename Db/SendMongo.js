const setFirstShema = require('../Models/projectSchema.js');
const seedData = require('./seedData.json');


setFirstShema.deleteMany({})
  .then(() => {

    return setFirstShema.insertMany(seedData);
  })
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    process.exit();
  });