const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var saleSchema = new Schema ({
  
  invoice_number: {
    type: Number
  }, 
  
  Products: {
    type: String
  },
  company: {
    type: String
  },
  
  date: {
    type: Date,
    default: Date.now
  },
 
  totalamount: {
    type: String
  },

  received: {
    type: String
  },
  balancedue: {
    type: String
  },
  
 
  Total: {
    type: String
  },
   company: {
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
        country:{
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


module.exports = mongoose.model("Sale",saleSchema);