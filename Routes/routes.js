const ObjectID = require("mongodb").ObjectID; 
const collectionName="birthdayAdd";
module.exports = function(app, db) {




    // fetch mongodb data 
    app.get('/api' ,function(req,res){
    
        res.send("i am working routes")


    })



    
}

