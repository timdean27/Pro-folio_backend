const mongoose = require('mongoose');


const mongoURI =
  process.env.NODE_ENV === 'production'
    ? process.env.MONGODB_URL
    :"mongodb+srv://TeamNJT:3umw3yvjajBzn3D6@cluster0.qo3ry.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoURI, {
  })

  .then((instance) =>
    console.log(`Connected to db: ${instance.connections[0].name}`)
  )
  .catch((error) => console.log('Connection failed!', error));

module.exports = mongoose;
