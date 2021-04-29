const db = require('./db');
const User = db.User;

const all = () => {
  return new Promise((resolve, reject) => {
    User.find((err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

const findById = id => {
  return new Promise((resolve, reject) => {
    User.findById(id, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

const findByEmail = email => {
  return new Promise((resolve, reject) => {
    User.findOne({ email: email }, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

const save = userObj => {
  return new Promise((resolve, reject) => {
    let user = new User(userObj);
    user['since'] = Date.now();
    user.save((err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

module.exports = {
  save,
  all,
  findById,
  findByEmail,
};
