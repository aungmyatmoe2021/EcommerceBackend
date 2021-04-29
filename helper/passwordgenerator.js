const bcrypt = require('bcryptjs');

const encrypt = password => {
  return new Promise((resolve, reject) => {
    let salt = bcrypt.genSaltSync(10);
    let encoded = bcrypt.hash(password, salt);
    if (encoded != null) {
      resolve(encoded);
    } else {
      reject('Password Encoded Error!');
    }
  });
};

const compare = (plain, encode) => {
  return new Promise((resolve, reject) => {
    let con = bcrypt.compare(plain, encode);
    if (con) {
      resolve(con);
    } else {
      reject(con);
    }
  });
};

module.exports = {
  encrypt,
  compare,
};
