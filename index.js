require('dotenv').config()
const express = require('express')
const app = express()
const dbConnection = require('./dbConnection/connection')
const cors = require('cors')
const menuRoutes = require('./routes/menu')

dbConnection()

app.use(cors({
  origin: 'https://deep-net-frontend.vercel.app',  // Specify the frontend URL you want to allow
}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.use('/',menuRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`server started at ${process.env.PORT}`);
})