const User = require('../models/user');

module.exports = (router) => {

  router.get('/hello', (req, res) => {
    res.end('Hello World!');
  });

  router.post('/login', (req, res) => {
    User.findOne({username: 'stas'}, function (err, user) {
      let temp = user.comparePassword(req.body.password, user.password);
      console.log(temp);
    });
  });

  router.post('/registration', (req, res) => {

    if (!req.body.username) {
      res.send({status: false, message: 'You must provide an username'});
    } else if (!req.body.email) {
      res.send({status: false, message: 'You must provide an e-mail'});
    } else if (!req.body.password) {
      res.send({status: false, message: 'You must provide a password'});
    } else {

      let user = new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
      });

      user.save((err) => {
        if (err) {
          if (err.code === 11000) {
            res.send({success: false, message: 'duplicate', err: err});
          } else if (err.errors) {
            if (err.errors.email) {
              res.send({success: false, message: 'registration', err: err.errors.email.message});
            } else if (err.errors.username) {
              res.send({success: false, message: 'registration', err: err.errors.username.message});
            } else if (err.errors.password) {
              res.send({success: false, message: 'registration', err: err.errors.password.message});
            } else {
              res.send({success: false, message: 'registration', err: err});
            }
          }
        } else {
          res.send({success: true, message: 'registration', back: req.body});
        }
      });

    }

  });

  router.get('/checkField', (req, res) => {
    let query;
    if (req.query.type === 'username') {
      query = User.findOne({username: req.query.value});
    } else if (req.query.type === 'email') {
      query = User.findOne({email: req.query.value});
    }

    query.exec(function (err, user) {
      if (user) {
        res.send({success: false, message: `Duplicate ${req.query.type}`});
      } else {
        res.send({success: true, message: 'You can use it'});
      }
    });

  });

  return router;
};