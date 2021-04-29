const fs = require('fs');
const category = require('./category');
const product = require('./product');

const seedCategory = () => {
  fs.readFile('categories.json', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      let cats = JSON.parse(data);
      cats.forEach(cat => {
        let obj = {
          id: cat.id,
          name: cat.name,
          image: cat.image,
          since: Date.now(),
        };
        category
          .save(obj)
          .then(res => console.log(res))
          .catch(err => console.log(err));
      });
    }
  });
};

let seedProduct = () => {
  fs.readFile('products.json', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      let products = JSON.parse(data);
      products.forEach(prd => {
        let obj = {
          cat_id: prd.cat_id,
          name: prd.name,
          price: prd.price,
          image: prd.image,
          description: prd.description,
          since: Date.now(),
        };
        product
          .save(obj)
          .then(res => console.log(res))
          .catch(err => console.log(err));
      });
    }
  });
};

module.exports = {
  seedCategory,
  seedProduct,
};
