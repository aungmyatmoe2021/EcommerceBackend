require('dotenv').config();

const express = require('express');
const app = express();
const category = require('./database/category');
const product = require('./database/product');
const user = require('./database/user');
const gallery = require('./database/gallery');
let passwordGenerator = require('./helper/passwordgenerator');

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
// let obj = {
//   cat_id: 1,
//   name: 'carrrrrrrr',
//   price: 3000,
//   image: 'corderrrrrr.png',
//   description: 'No Desc',
// };

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

// product
//   .paginate(5, 50)
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// let userObj = {
//   name: 'Aung Myat Moe',
//   email: 'aungmyatmoe2021@gmail.com',
//   password: '123123',
// };

// user
//   .save(userObj)
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// user
//   .all()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// user
//   .findById('608a683e9a7840174c4e6df0')
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// user
//   .findByEmail('aungmyatmoe2021@gmail.com')
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// let objGallery = {
//   name: 'car.png',
// };

// gallery
//   .save(objGallery)
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// gallery
//   .all()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// passwordGenerator
//   .encrypt('123123')
//   .then(res => console.log(res))
//   .catch(err => console.log(err));
passwordGenerator
  .compare(
    '123123',
    '$2a$10$oi6bfR47YNOuOanUj64JEuylhKwqI6UiOJgRnh8aecmnpuW55Jgh2'
  )
  .then(res => console.log(res))
  .catch(err => console.log(err));

app.listen(process.env.PORT, () =>
  console.log(
    `Ecommerce Backend Server is running at the port ${process.env.PORT}`
  )
);
