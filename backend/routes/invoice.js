const router = require("express").Router();
const Invoice = require("../model/Invoice");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
var easyinvoice = require('easyinvoice');
const fs = require("fs");
let matchobj = {};

router.post("/addsaleinvoice", async (req, res)=>{

    const invoice = new Invoice({
  
     item: req.body.item,
     notes: req.body.notes,
   date: req.body.date,
    amount: req.body.amount,
     owed: req.body.owed,
    isPaid: req.body.isPaid,
   invoice_customer:req.body.invoice_customer
});

    const savedInvoice = await invoice.save();
    res.send(savedInvoice);
    console.log(savedInvoice)
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
    $currency: "USD",
    "taxNotation": "vat", //or gst
    "marginTop": 25,
    "marginRight": 25,
    "marginLeft": 25,
    "marginBottom": 25,
    "logo": "https://www.easyinvoice.cloud/img/logo.png",

     sender: {
        $company: req.body.$company,
        $address: req.body.$address,
        $zip: req.body.$zip,
        $city: req.body.$city,
        $country: req.body.$country
        },
        client: {
       	$company: req.body.$company,
       	$address: req.body.$address,
       	$zip: req.body.$zip,
       	$city: req.body.$city,
           $country: req.body.$country
            },
             $invoiceNumber: req.body.$invoiceNumber,
    $invoiceDate: req.body.$invoiceDate,
    products: [
        {
            $quantity: req.body.$quantity,
            $description: req.body.$description,
            $tax: req.body.$tax,
            price: req.body.price,
        },
        
        ],
    bottomNotice: req.body.bottomNotice
};
 easyinvoice.createInvoice(data,  async function (result) {
    //The response will contain a base64 encoded PDF file
    console.log(result.pdf);

    await fs.writeFileSync("invoice.pdf", result.pdf, 'base64');
});

});

router.use(cors());

module.exports = router;