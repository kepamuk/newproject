const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const user = require('./routes/auth')(router);

const port = process.env.PORT || 8080;

mongoose.connect('mongodb://kepamuk:qqq777erqqq@ds119258.mlab.com:19258/myproject', function (err, db) {
  if (!err) {
  } else console.log(err);
});

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '../client/public_html'));

app.use('/api/auth', user);

app.get('*',(req,res) => {
  res.sendFile(path.join(__dirname + '../../public_html/index.html'))
});

app.listen(port, () => console.log(`Example app listening on port ${[port]}!`));