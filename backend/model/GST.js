const mongoose = require("mongoose");
const gstSchema = new mongoose.Schema({
    
     name: String,
    quantity: String,
    unit: String,
    price:String
});
module.exports = mongoose.model("GST",gstSchema);