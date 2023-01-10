require('dotenv').config()
let express = require('express');
let mongoose = require('mongoose');
let fillerRouter = require('./routers/filler');

let app = express();
mongoose.connect(process.env.DATABASE_URL);

let db = mongoose.connection;
db.on('error', (err) => console.log(err));
db.once('open', () => console.log('db started'))

app.use(express.json());

app.use('/filler/form', fillerRouter);


app.listen('1000', () => console.log('server started'))