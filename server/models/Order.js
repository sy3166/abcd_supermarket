const mongoose = require('mongoose');

const { Schema } = mongoose;

const OrderSchema = new Schema({
  name: String,
  mobileno: String,
  totprice: String,
  date: String,
  items: Array,
});

const OrderModel = mongoose.model('ordersss', OrderSchema);
module.exports = OrderModel;
