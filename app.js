require('dotenv').config();

const express = require('express');
const app = express();
const category = require('./database/category');
const { Product } = require('./database/db');
const product = require('./database/product');
const seed = require('./database/seed');

const catObj = {
  id: '608a332e20492a0e78e91f03',
  name: 'car',
  image: 'car.png',
  since: Date.now(),
};

// category
//   .save(catObj)
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// category
//   .all()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// category
//   .update(catObj)
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// category
//   .destroy(1)
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// seed.seedCategory();

// Product Section //
let obj = {
  cat_id: 1,
  name: 'carrrrrrrr',
  price: 3000,
  image: 'corderrrrrr.png',
  description: 'No Desc',
};

// product
//   .save(obj)
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// product
//   .all()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// product
//   .update(obj)
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// product
//   .destroy(2)
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// product
//   .destroyall()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// seed.seedProduct();

// category
//   .getPost('id', 'cat_id', 'products')
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

product
  .paginate(5, 50)
  .then(res => console.log(res))
  .catch(err => console.log(err));

app.listen(process.env.PORT, () =>
  console.log(
    `Ecommerce Backend Server is running at the port ${process.env.PORT}`
  )
);
