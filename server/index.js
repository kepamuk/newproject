const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const user = require('./routes/auth')(router);

mongoose.connect('mongodb://localhost/myshop');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/auth', user);

app.listen(3000, () => console.log('Example app listening on port 3000!'));