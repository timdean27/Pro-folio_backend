import express from 'express';
//import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


import postRoutes from './Routes/routes.js'

const app = express();

app.use('/home', postRoutes)


app.use(cors());

//const CONNECTION_URL = 'mongodb_link'
const CONNECTION_URL = 'http://localhost'
const PORT = process.env.PORT || 4000;

// mongoose.connect(CONNECTION_URL)
// .then(() => {app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`))})
// .catch((error)=>console.error(error.message))


app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`))




