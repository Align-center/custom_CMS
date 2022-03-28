const express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    { router } = require('./routes/routes');

app.use(express.json());

async function start () {

    try {
        
        await mongoose.connect('mongodb://localhost:27017/custom_CMS');

        app.listen(3000, () => {
            console.log('Listening on port 3000');
        });

        router(app);
    } catch (error) {
        
        console.error(error);
        process.exit();
    }
}

start();