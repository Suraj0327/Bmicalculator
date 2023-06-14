const express=require("express");
const bodyparser=require("body-parser");
const app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.post("/", function(req,res){
    var w=Number(req.body.W);
    var H=Number(req.body.H);
    var result =w*10000/(H*H);
    var adv;
    if(result< 18.5){
        adv="You are underweight";
    }
    else if(result >= 18.5 && result < 25){
        adv="You are normal weight";
    }
    else if( result >= 25 && result < 30){
        adv="you are overweight";
    }
    else if(result>=30){
        adv="your are obese";
    }
    res.send("your bmi is"+" "+result.toFixed(2)+"."+adv+".");
})
app.listen(3000,function(){
    console.log("server is running at port :3000");
})