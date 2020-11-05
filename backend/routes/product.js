const router = require("express").Router();
const Product = require("../model/Product");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");


router.post("/add", async (req, res)=>{

    const product = new Product({
  
    name: req.body.name,
    itemcode: req.body.itemcode,
   primaryunit: req.body.primaryunit,
    secondaryunit: req.body.secondaryunit,
     saleprice: req.body.saleprice,
    purchaseprice: req.body.purchaseprice,
    taxrate:req.body.taxrate
});

    const savedProduct = await product.save();
    res.send(savedProduct);
    res.json("created gannu");

});


router.post('/showmproduct', async (req ,res)=>{
    const result = await Product.find()
 res.send(result)
 console.log(result)
});

router.post('/editproduct/:id', async (req, res)=>{
     const product = new Product({
  
    name: req.body.name,
    quantity: req.body.quantity,
    unit: req.body.unit,
    price: req.body.price
});
 const savedProduct = await product.save();
    res.send(savedProduct);
 });


router.use(cors());

module.exports = router;