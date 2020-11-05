const router = require("express").Router();
const Sale = require("../model/Sale");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
var easyinvoice = require('easyinvoice');
const fs = require("fs");
let matchobj = {};

router.post("/addsaleinvoice", async (req, res)=>{

    const sale = new Sale({
  
     invoice_number: req.body.invoice_number,
     additem: req.body.additem,
   custmername: req.body.custmername,
    date: req.body.date,
     totalamount: req.body.totalamount,
    moneyout: req.body.moneyout,
    balancedue:req.body.balancedue,
     Paid:req.body.Paid
});

    const savedSale = await sale.save();
   
    res.send(savedSale);
    console.log(savedSale)
    res.json("created gannu");
    

});

//let arg = {
//qurey:[
   // {
    //$match: {...matchobj,isdelete:false},
//},
//{
    //$lookup:{
       // from:"custmerSchema",
       // localfield:"custmerid",
        //foreignfield:"_id",
       // as:"custmer"

    //},
//},
//{$unwind:"$custmer"},
//{
    //$lookup:{
       // from:"productSchema",
       // localfield:"productid",
       // foreignfield:"_id",
       // as:"product"

   // },
//},
//{$unwind:"$custmer"},

//{
   // $invoice:{
        //item:req.body.item,
       // HSN_SAC:req.body.HSN_SAC,
       // quantity:req.body.quantity,
       // price:req.body.price, 
       // Unit:req.body.Unit,
       // amount:req.body.amount,
       // received:req.body.received,
       // balance:req.body.balance,
       // signature:req.body.signature,
       // logo:req.body.logo,
       // custmername =  "$custmer.name",
       // custmerid= "$custmer._id",
      //  productname = "$product.name"
        

   // },
//},







//]
//}

router.post("/invoicepdf", async (req, res)=>{
var data = {
    //"documentTitle": "RECEIPT", //Defaults to INVOICE
    "currency": "INR",
    "taxNotation": "vat", //or gst
    "marginTop": 25,
    "marginRight": 25,
    "marginLeft": 25,
    "marginBottom": 25,
    "logo": "https://www.easyinvoice.cloud/img/logo.png",

    // sender: {
       // $company: req.body.$company,
       // $address: req.body.$address,
       // $zip: req.body.$zip,
       // $city: req.body.$city,
       // $country: req.body.$country
       // },
        //client: {
       	company: req.body.company,
       	//$address: req.body.$address,
       //	$zip: req.body.$zip,
       //	$city: req.body.$city,
          // $country: req.body.$country
           // },
             invoiceNumber: req.body.invoice_number,
    invoiceDate: req.body.date,
    
    products: [
        {
            Products: req.body.Products,
           quantity: req.body.quantity,
            description: req.body.description,
          tax: req.body.tax,
         price: req.body.price,
        },
        
        ],
    "bottomNotice": "have a good day"
};
 easyinvoice.createInvoice(data,  async function (result) {
    //The response will contain a base64 encoded PDF file
    console.log(result.pdf);

     savedSale = await fs.writeFileSync("invoice.pdf", result.pdf, 'base64').save();
         
     res.send(savedSale)
});

});




router.use(cors());

module.exports = router;