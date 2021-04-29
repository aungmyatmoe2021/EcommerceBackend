const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/ecommercedb';
const connect = mongoose.connect(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
//Mongoose Auto Increment (to auto generate ID for database)
const autoicrement = require('mongoose-auto-increment');
autoicrement.initialize(mongoose.connection);
//Pagination
const mongoosePaginate = require('mongoose-paginate');

const Schema = mongoose.Schema;

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const CategorySchema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  since: { type: Date, required: true },
});

const ProductSchema = new Schema({
  cat_id: { type: Number, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  since: { type: Date, required: true },
});

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  since: { type: Date, required: true },
});

const GallerySchema = new Schema({
  name: { type: String, required: true },
  since: { type: Date, required: true },
});

const Category = mongoose.model('category', CategorySchema);
ProductSchema.plugin(autoicrement.plugin, 'product');
ProductSchema.plugin(mongoosePaginate);
const Product = mongoose.model('product', ProductSchema);
const User = mongoose.model('user', UserSchema);
GallerySchema.plugin(autoicrement.plugin, 'gallery');
const Gallery = mongoose.model('gallery', GallerySchema);

module.exports = {
  Category,
  Product,
  User,
  Gallery,
};
