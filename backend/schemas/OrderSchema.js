const { Schema } = require("mongoose");
const OrderSchema = new Schema({
  name: String,
  qyt: Number,
  price: Number,
  mode: String,
});

module.export = { OrderSchema };
