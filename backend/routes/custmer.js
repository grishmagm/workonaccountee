const router = require("express").Router();
const Custmer = require("../model/Custmer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
router.post("/register", async (req, res)=>{

    const custmer = new Custmer({
    name: req.body.name,
    number: req.body.number,
    email: req.body.email,
    billingaddress: req.body.billingaddress
});

    const savedCustmer = await custmer.save();
    res.send(savedCustmer);
    res.json("created g successfully");

});

router.use(cors());

module.exports = router;