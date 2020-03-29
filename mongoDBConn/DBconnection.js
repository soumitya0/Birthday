const mongodb = require('mongodb');
const mongodbClient=mongodb.MongoClient;
const dbName="birthdayAdd";
const collectionName="birthday";
const connectDB=mongodbClient.connect(url,{ useUnifiedTopology: true },function(err,client){
    if(err){

      console.log(err);

    }
    console.log("Database created!");
    
    var dbo=client.db(dbName); //db name 

    var dbCollection=dbo.collection(collectionName);  //connected with collection

    dbCollection.insertOne({
      "name":"soumitya",
      "DOB":"20-11-1998"
    })

    var query={};

    dbCollection.find(query).toArray(function(err,data){

      console.log("i am findindg....")
      console.log(data);
      client.close();

    })

  });

  

    module.exports= connectDB;
