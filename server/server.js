const dotenv = require ("dotenv");
const bp = require('body-parser');
const path =  require('path');
dotenv.config({path:'./server/.env'});
const express = require('express');
const routes = require('./routes/index')
const app = express();
const dbConfig = require('./config/dbConfig');
app.use(express.json())
app.use('/api', routes)

//Live SetUp
const __dir = path.resolve();
app.use(express.static(path.join(__dir, '/client/build')));
app.get('*', (req,res) => {
    res.sendFile(path.join(__dir, '/client/build/index.html'))
})


app.listen(process.env.PORT, ()=>  {console.log(`Listening on port ${process.env.PORT}`)})