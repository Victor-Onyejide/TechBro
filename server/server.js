const dotenv = require ("dotenv");
const bp = require('body-parser');
dotenv.config({path:'./server/.env'});
const express = require('express');
const routes = require('./routes/index')
const app = express();
const dbConfig = require('./config/dbConfig');
app.use(express.json())
app.use('/api', routes)

app.listen(process.env.PORT, ()=>  {console.log(`Listening on port ${process.env.PORT}`)})