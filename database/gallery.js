const db = require('./db');
const Gallery = db.Gallery;

const save = objGallery => {
  return new Promise((resolve, reject) => {
    let gallery = new Gallery(objGallery);
    gallery['since'] = Date.now();
    gallery.save((err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

const all = () => {
  return new Promise((resolve, reject) => {
    Gallery.find((err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

module.exports = {
  save,
  all,
};
