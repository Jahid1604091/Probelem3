const express = require('express');
const app = express();
const bodyParser = require("body-parser")    
const PORT = 5003 || process.env.PORT;
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
connectDB();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/orders', require('./routes/orders'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
})