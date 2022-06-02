require('dotenv').config();
const express = require('express')
const app = express()
const cors = require("cors");
const postRoutes = require('./Routes/routes.js')


app.get('/favicon.ico', (req, res) => {res.send("dummy")})
app.use(cors());
app.use(express.json())
app.use('/home', postRoutes)

const PORT = process.env.PORT || '8080'

app.set("port", PORT)




