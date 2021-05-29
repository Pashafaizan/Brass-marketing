const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const formSchema = new Schema({
  item_name: {
    type: String,
    required: true,
  },
  item_price: {
    type: Number,
    required: true,
  },
  item_description: {
    type: String,
  },
  final_price: {
    type: Number,
  },
  fileName: {
    type: String,
    required: true,
  },
  filePath: {
    type: String,
    required: true,
  },
  placeOFOrigin: {
    type: String,
    required: true,
  },
  filePath: {
    type: String,
    required: true,
  },
  material: {
    type: String,
    required: true,
  },
  itemColor: {
    type: String,
    required: true,
  },
  itemType: {
    type: String,
    required: true,
  },
  mirrorColor: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  itemWeight: {
    type: Number,
    required: true,
  },
  itemShape: {
    type: String,
    required: true,
  },

  itemBrandName: {
    type: String,
    required: true,
  },
  Application: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("form_schema", formSchema);
