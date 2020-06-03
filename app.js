const exporess = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = exporess();

async function start() {
    try {
        const PORT = config.get('port') || 5000;
        
        await mongoose.connect(config.get('mongoUri'), {
            useUnifiedTopology: true,
            useCreateIndex: true,
            useNewUrlParser: true
        });
        app.listen(PORT, () => console.log(`server run, port ${PORT}`));
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

start();
