require('dotenv').config()
let express = require('express');
let mongoose = require('mongoose');
let fillerRouter = require('./routers/filler');
let cors = require('cors');

let app = express();
mongoose.connect(process.env.DATABASE_URL);

app.use(cors());
let db = mongoose.connection;
db.on('error', (err) => console.log(err));
db.once('open', () => console.log('db started'))

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/assets/index.html');
})

app.use('/filler/form', fillerRouter);


app.listen(process.env.PORT, () => console.log('server started'))