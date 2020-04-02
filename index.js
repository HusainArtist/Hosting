const express = require('express');
const userRoute = require('./routes/api/user');
const itemRoute = require('./routes/api/items');
const orderRoute = require('./routes/api/orders');

const locationRoute = require('./routes/api/location.js');


 
const connectDB = require('./config/connectDB');
const cors = require('cors');
// connect to DB
connectDB();

const app = express();
//set a middleware to parse data
app.use(express.json()); 
app.use(cors());

app.use('/api/location', locationRoute);
app.use('/api/user', userRoute);
app.use('/api/items', itemRoute);

app.use('/api/orders', orderRoute);

app.listen(8001);
 
