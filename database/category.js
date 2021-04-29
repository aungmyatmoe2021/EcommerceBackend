let db = require('./db');
let category = db.Category;

let all = () => {
  return new Promise((resolve, reject) => {
    category.find({}, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

let save = categoryObj => {
  return new Promise((resolve, reject) => {
    let cat = new category(categoryObj);
    cat.save((err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

let update = categoryObj => {
  return new Promise((resolve, reject) => {
    category.findById(categoryObj.id, (err, data) => {
      if (err) reject(err);
      data.name = categoryObj.name;
      data.image = categoryObj.image;
      data.since = Date.now();
      data.save((err, categorydata) => {
        if (err) reject(err);
        resolve(categorydata);
      });
    });
  });
};

let destroy = id => {
  return new Promise((resolve, reject) => {
    category.deleteOne({ id: id }, err => {
      if (err) reject(err);
      resolve('OK');
    });
  });
};

let getPost = (localID, foreignID, table) => {
  return new Promise((resolve, reject) => {
    category
      .aggregate([
        {
          $lookup: {
            from: table,
            localField: localID,
            foreignField: foreignID,
            as: 'catposts',
          },
        },
      ])
      .exec((err, data) => {
        if (err) reject(err);
        resolve(data);
      });
  });
};

module.exports = {
  all,
  save,
  update,
  destroy,
  getPost,
};
