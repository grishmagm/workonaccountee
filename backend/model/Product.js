
const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    
     name: String,
    itemcode: String,
    primaryunit: String,
    secondaryunit:String,
    saleprice:String,
    purchaseprice:String,
    taxrate:String
});
module.exports = mongoose.model("Product",productSchema);