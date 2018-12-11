import express from 'express';

// Express app setup
const app = express();

const morgan = require('morgan');

app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.send('hello, world!');
});

console.log(app);
