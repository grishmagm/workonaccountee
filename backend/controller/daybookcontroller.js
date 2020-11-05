
const express = require("express").Router();
import { Mongoose } from "mongoose";
const sale = require("../model/Sale");



let matchobj = {};

if(req.query.saleId){
    matchobj['saleId'] = Mongoose.Types.ObjectId(saleId)
}
let arg = {
qurey:[
   {
    $match: {...matchobj,isDelete:false},
},
{
    $lookup:{
        from:"saleSchema",
        localfield:"saleid",
        foreignfield:"_id",
        as:"sale"

    },
},
{$unwind:"$sale"},
{
    $lookup:{
        from:"productSchema",
        localfield:"productid",
        foreignfield:"_id",
        as:"product"

    },
},
{$unwind:"$custmer"},

{
    $daybook:{
        item:req.body.item,
        HSN_SAC:req.body.HSN_SAC,
        quantity:req.body.quantity,
        price:req.body.price, 
        Unit:req.body.Unit,
        amount:req.body.amount,
        received:req.body.received,
        balance:req.body.balance,
        signature:req.body.signature,
        logo:req.body.logo,
        custmername =  "$custmer.name",
        custmerid= "$custmer._id",
       productname = "$product.name"
        

    },
},







]
}
let product_data = await genericFunction._baseFetch(ProductModel, arg, 'Aggregate')
if(!product_data.status) {
    return _responseWrapper(false, product_data.error['message'], 400);

}
return _responseWrapper(true,"fetch success",200 , product_data)
