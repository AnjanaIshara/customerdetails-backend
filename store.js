const express=require('express');
const mongoose=require('mongoose');
const User=require('./user');
const route=express.Router();
route.post('/save',async(req,res)=>{
    const {SupplierName,ContactPerson,MobileNumber}=req.body;
    let user={};
    user.SupplierName=SupplierName;
    user.ContactPerson=ContactPerson;
    user.MobileNumber=MobileNumber;
    let userModel=new User(user);
    await userModel.save();
    res.json(userModel);
})
module.exports= route;