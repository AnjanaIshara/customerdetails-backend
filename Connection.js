const mongoose=require('mongoose');
const URI="mongodb+srv://root:root@cluster0.jnmhr.mongodb.net/test?retryWrites=true&w=majority";
const connectDB=async()=>{
    await mongoose.connect(URI,{
        useUnifiedTopology:true,
        useNewUrlParser:true
    });
    console.log('db connected..!');
}
module.exports =connectDB;