const { find } = require("../models/form.model");
const formModel = require("../models/form.model");

const form = async (data, uploadData) => {
  console.log(data);
  const formData = await new formModel(data);
  await formData.save();
};
const allListItems = async (page, limit) => {
  const listItem = await formModel
    .find()
    .skip(page * limit)
    .limit(limit);
  console.log(listItem);
  return listItem;
};
const productGet = async (id) => {
  console.log("this is product get");
  const item = await formModel.findById(id);
  console.log(item);
  return item;
};
module.exports = {
  form,
  productGet,
  allListItems,
};

// {
//     items_name:data.items_name,
//     items_price:data.items_price,
//     desc_model:data.desc_model,
//     final_price:data.final_price,
//     image_name:uploadData.image_name,
//     image_path:uploadData.image_path
// }
