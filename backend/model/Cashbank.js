const mongoose = require("mongoose");
const cashbankSchema = new mongoose.Schema({
    
     holder: String,
    accounts: Number,
    inhand: Number,
    cheques: String,
    loanaccount:String,
    //balance: [{ type: Schema.Types.ObjectId, ref: '' }]
   // Date:Date

});
module.exports = mongoose.model("Cashbank",cashbankSchema);