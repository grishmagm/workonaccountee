const mongoose = require("mongoose");
const custmerSchema = new mongoose.Schema({
    
     name: String,
    number: String,
    email: String,
    billingaddress:String
});
module.exports = mongoose.model("Custmer",custmerSchema);