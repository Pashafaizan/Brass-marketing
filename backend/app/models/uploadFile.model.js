const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const uploadSchema = new Schema({
image_name:{
    type:String,
    required:true
}
,
image_path:{
    type:String,
    required:true
},

})

module.exports = mongoose.model("uploadSchema", form_schema);
