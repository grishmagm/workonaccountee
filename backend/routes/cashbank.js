const router = require("express").Router();
const Cashbank = require("../model/Cashbank");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

router.post("/addaccount", async (req, res)=>{

    const cashbank = new Cashbank({
  
    holder: req.body.holder,
    accounts: req.body.accounts,
   inhand: req.body.inhand,
    cheques: req.body.cheques,
     loanaccount: req.body.loanaccount,
     Date: req.body.Date,
   
});

    const savedCashbank = await cashbank.save();
    res.send(savedCashbank);
    res.json("created gannu");

});
router.post('/showdetail', async (req ,res)=>{
    const result = await Cashbank.find()
 res.send(result)
 console.log(result)
});

router.use(cors());

module.exports = router;