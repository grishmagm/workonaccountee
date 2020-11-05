const router = require("express").Router();
const Purchase = require("../model/Purchase");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
var easyinvoice = require('easyinvoice');
const fs = require("fs");
let matchobj = {};

router.post("/addsaleinvoice", async (req, res)=>{

    const purchase = new Purchase({
  
     billnumber: req.body.invoice_number,
     Products: req.body.additem,
   name: req.body.name,
    date: req.body.date,
     total: req.body.total,
    received: req.body.received,
    balancedue:req.body.balancedue,
    // Paid:req.body.Paid
});

    const savedPurchase = await purchase.save();
   
    res.send(savedPurchase);
    console.log(savedPurchase)
    res.json("created gannu");
    

});