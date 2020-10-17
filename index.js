const express = require('express')
const { MongoClient } = require("mongodb");
const URI="mongodb+srv://root:root@cluster0.jnmhr.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(URI);
var assert=require('assert');
const dbName = "test";
const app = express();
const port = process.env.PORT || 8000;
var cors = require('cors')
const bodyParser = require('body-parser');
const { get, mongo } = require('mongoose');
app.use(bodyParser.json());
app.use(cors())


app.use(
    express.urlencoded({
      extended: true
    })
)
 



async function stordata(obj){
try{
    await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);
         const col = db.collection("people");
         const p = await col.insertOne(obj);

}catch(err){
    console.log(err)
}
    

}
app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.post('/getdata', (req, res) => {
    console.log(req.body);
    stordata(req.body);
    res.send({
        message:"Data received"
    })
  });


async function getData(){
    var resultArr=[];
    try{
        await client.connect();
    const db = client.db(dbName);
    var cursor=db.collection("people").find();
    cursor.forEach(function(doc,err){
        resultArr.push(doc);
    },function(){
        db.close();
        console.log(resultArr)
    }
    )
    
    


    }catch(err){
        console.log(err);
    }
}

app.get('/getregistered',(req,res)=>{
    var resultArray=[];
    mongo.connect(URI,function(err,db){
        assert.equal(null,err);
        var cursor=db.collection("people").find();
        cursor.forEach(function(doc,err){
        assert.equal(null,err);

            resultArray.push(doc);
        },function(){
            db.close();

        });
    });
    console.log(resultArray);
    
    
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});