const express = require("express");
const bodyparser=require("body-parser");
const app = express();
app.use(bodyparser.urlencoded({extended : true}));
app.use(express.static(__dirname+"/public"));
          
app.get("/about",function(req,res)
    {
        res.send("<h1>this is the about page</h1>");
    }
    );
app.post("/",function(req,res)
    {
        var name1="udit";
        var pass1="123";
        var name=(req.body.username);
        var pass=(req.body.password);
        if(name==name1 & pass==pass1){
            res.sendFile(__dirname+"/indexcal.html");
        }
        else{
            res.send("<h1>wrong input</h1>");
        }
        
    }
    );
     

app.listen(3000,function()
    {
        console.log("server running on port 3000");
    }
    );