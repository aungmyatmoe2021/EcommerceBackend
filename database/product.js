const db = require('./db');
const Product = db.Product;

let all = () => {
  return new Promise((resolve, reject) => {
    Product.find((err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

let paginate = (start, count) => {
  var options = {
    sort: { _id: 1 },
    lean: true,
    page: start,
    limit: count,
  };
  return new Promise((resolve, reject) => {
    Product.paginate({}, options, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

let save = objProduct => {
  return new Promise((resolve, reject) => {
    objProduct['since'] = Date.now();
    let product = new Product(objProduct);
    product.save((err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

let update = objProduct => {
  return new Promise((resolve, reject) => {
    Product.findById(objProduct.id, (err, data) => {
      if (err) reject(err);
      data.cat_id = objProduct.cat_id;
      data.name = objProduct.name;
      data.price = objProduct.price;
      data.image = objProduct.image;
      data.description = objProduct.description;
      data.since = Date.now();
      data.save((err, dat) => {
        if (err) reject(err);
        resolve(dat);
      });
    });
  });
};

let destroy = id => {
  return new Promise((resolve, reject) => {
    Product.deleteOne({ _id: id }, err => {
      if (err) reject(err);
      resolve('OK');
    });
  });
};

let destroyall = () => {
  return new Promise((resolve, reject) => {
    Product.deleteMany({}, err => {
      if (err) reject(err);
      resolve('OK');
    });
  });
};

module.exports = {
  save,
  all,
  update,
  destroy,
  destroyall,
  paginate,
};
