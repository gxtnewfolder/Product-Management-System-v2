const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const Product = require('./models/Product');
const { readdirSync } = require('fs');
// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:1234@cluster0.cooyb5m.mongodb.net/productDB');
        console.log('Database connected');
    } catch (err) {
        console.log(err);
    }
}

connectDB();

const app = express();
const port = 8000;

app.use(express.json());
app.use(morgan('dev'));

readdirSync('./routes').map((r) => app.use('/api', require('./routes/' + r)));

app.listen(port, () => {
    console.log(`Server starting on port ${port}!`);
});