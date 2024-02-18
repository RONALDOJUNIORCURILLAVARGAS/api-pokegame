//const bodyParser = require("body-parser");
/*const session = require("express-session");
const FileStore = require("session-file-store")(session);

const fileStoreOptions = {
    path: "sessions",
};*/
/* const dotenv=require('dotenv'); */
let resources = require("../config/index");
var api = resources.api;

/* const globales = require("../router/index"); */




module.exports = function(app){
    console.log('api => ',api)
    let version = api.version;
    let path = api.base;
    
    app.get(path,function(req,res){
        res.send("Este el API de LID")
    });
   
    
/*     app.use(path+version,[globales]); */
    InitApp(app);
}


function InitApp(app) {
    const PORT = api.port || 7001;

    var server = app.listen(PORT,function(){
        console.log(`Server run on port: ${PORT}`);
    })
    


   
    
    /* var http = require('http').createServer(app); */




}
