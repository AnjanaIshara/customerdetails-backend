const mongoose=require ('mongoose');
const user=new mongoose.Schema({
    SupplierName:{
        type : String
    },
    ContactPerson:{
        type:String
    },
    MobileNumber:{
        type:String
    },
    Basket:[String]
});
module.exports User=mongoose.model('user',user);
