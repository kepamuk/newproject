const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

let emailLengthChecker = (email) => {
  if (!email) {
    return false;
  } else {
    if (email.length < 5 || email.length > 30) {
      return false;
    } else {
      return true;
    }
  }
};

let validEmailChecker = (email) => {
  if (!email) {
    return false;
  } else {
    const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return regExp.test(email);
  }
};

const emailValidators = [
  {
    validator: emailLengthChecker,
    message: 'E-mail must be at least 5 characters but no more than 30'
  },
  {
    validator: validEmailChecker,
    message: 'E-mail must be valid'
  }
];

let usernameLengthChecker = (username) => {
  if (!username) {
    return false;
  } else {
    if (username.length < 3 || username.length > 15) {
      return false;
    } else {
      return true;
    }
  }
};

let validUsername = (username) => {
  if (!username) {
    return false;
  } else {
    const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
    return regExp.test(username);
  }
};

const usernameValidators = [
  {
    validator: usernameLengthChecker,
    message: 'Username must be at least 3 characters but no more than 15'
  },
  {
    validator: validUsername,
    message: 'Username must be valid'
  }
];

let validPassword = (password) => {
  if (!password) {
    return false;
  } else if (password.length < 5) {
    return false;
  } else {
    return true;
  }
};

const passwordValidators = [
  {
    validator: validPassword,
    message: 'Password must be at least 5 characters'
  }
];

const userSchema = new Schema({
  email: {type: String, required: true, unique: true, lowercase: true, validate: emailValidators},
  username: {type: String, required: true, unique: true, lowercase: true, validate: usernameValidators},
  password: {type: String, required: true, validate: passwordValidators}
});

userSchema.pre('save', function (next) {

  bcrypt.hash(this.password, 10, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    next();
  });

});

userSchema.methods.comparePassword = function(password, hash) {
  bcrypt.compare(password, hash, function(err, res) {
    console.log(res);
    return res;
  });
};

module.exports = mongoose.model('User', userSchema);