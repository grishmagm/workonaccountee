const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var invoiceSchema = new Schema ({
  item: {
    type: String
  },
  notes: {
    type: String
  },
  date: {
    type: String
  },
  amount: {
    type: String
  },
  owed: {
    type: String
  },
  isPaid: {
    type: String
  },
  invoice_customer: {
    type: String
  }
});
module.exports = mongoose.model("Invoice",invoiceSchema);