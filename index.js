require('dotenv').config();
const express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    { router } = require('./routes/routes'),
    config = require('./config/config.json'),
    cors = require('cors');

app.use(cors());
app.use(express.json());

async function start () {

    try {

        await mongoose.connect("mongodb+srv://Align-center:"+encodeURIComponent(process.env.PASSWORD)+"@cluster0.zc0ii.mongodb.net/custom_CMS?retryWrites=true&w=majority");

        app.listen(process.env.PORT, () => {
            console.log('Listening on port 3000');
        });

        router(app);
    } catch (error) {
        
        console.error(error);
        process.exit();
    }
}

start();