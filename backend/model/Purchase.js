const mongoose = require("mongoose");
const Schema = mongoose.Schema;


var purchaseSchema = new Schema ({
  
  billnumber: {
    type: Number
  }, 
  
  Products: {
    type: String
  },
  name: {
    type: String
  },
  
  date: {
    type: Date,
    default: Date.now
  },
 
  moneyout: {
    type: String
  },

 
  
  balancedue: {
    type: String
  },
  
 
  Total: {
    type: String
  },
  
        address: {
             type: String
        },
        zip: {
            type: String
        },
        city: {
            type: String
        },
       
         quantity: {
              type: String
         },
            description: {
                 type: String
            },

            tax: {
                 type: String
            },
            price: {
                 type: String
            }
 
});
module.exports = mongoose.model("Purchase",purchaseSchema);