require('dotenv').config();
const express = require('express')
const app = express()
const cors = require("cors");
const postRoutes = require('./Routes/routes.js')



app.use(cors());
app.use(express.json())
app.use('/home', postRoutes)

app.set('port', process.env.PORT || 4000);

app.listen(process.env.PORT || 4000, function(){
  console.log("Express server listening on port", this.address().port, app.settings.env);
});





