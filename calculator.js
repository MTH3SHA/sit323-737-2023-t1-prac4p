const express= require("express");
const res = require("express/lib/response");
const app = express();
const addition= (num1,num2) => {
    return num1+num2;
}
const subtraction= (num1,num2) => {
    return num1-num2;
}
const multiplication= (num1,num2) => {
    return num1*num2;
}
const division= (num1,num2) => {
    return num1/num2;
}

//addition endpoint
app.get("/addition", (req,res) => {
    try{
    const num1= parseFloat(req.query.num1);
    const num2= parseFloat(req.query.num2);
    if(isNaN(num1)){
        throw new Error("num1 is not properly defined. Retry again!");
    }
    if(isNaN(num2)){
        throw new Error("num2 is not properly defined. Retry again!");
    }

    const result = addition(num1,num2);
    res.status(200).json({statuscocde:200, data: result});
    }catch(error){
        console.error(error)
        res.status(500).json({statuscocde:500, msg: error.toString()})
    }
});

//subtraction endpoint
app.get("/subtraction", (req,res) => {
    try{
    const num1= parseFloat(req.query.num1);
    const num2= parseFloat(req.query.num2);
    if(isNaN(num1)){
        throw new Error("num1 is not properly defined. Retry again!");
    }
    if(isNaN(num2)){
        throw new Error("num2 is not properly defined. Retry again!");
    }

    const result = subtraction(num1,num2);
    res.status(200).json({statuscocde:200, data: result});
    }catch(error){
        console.error(error)
        res.status(500).json({statuscocde:500, msg: error.toString()})
    }
});

//multiplication endpoint
app.get("/multiplication", (req,res) => {
    try{
    const num1= parseFloat(req.query.num1);
    const num2= parseFloat(req.query.num2);
    if(isNaN(num1)){
        throw new Error("num1 is not properly defined. Retry again!");
    }
    if(isNaN(num2)){
        throw new Error("num2 is not properly defined. Retry again!");
    }

    const result = multiplication(num1,num2);
    res.status(200).json({statuscocde:200, data: result});
    }catch(error){
        console.error(error)
        res.status(500).json({statuscocde:500, msg: error.toString()})
    }
});

//division endpoint
app.get("/division", (req,res)=>{
    try{
        const num1= parseFloat(req.query.num1);
        const num2= parseFloat(req.query.num2);
        if(isNaN(num1)){
            throw new Error("num1 is not properly defined. Retry again!");
        }
        if(isNaN(num2)){
            throw new Error("num2 is not properly defined. Retry again!");
        }
    
        const result = division(num1,num2);
        res.status(200).json({statuscocde:200, data: result});
        }catch(error){
            console.error(error)
            res.status(500).json({statuscocde:500, msg: error.toString()})
        }
});

const port=4000;
app.listen(port,()=>{
    console.log("Hello I'm listening to port: "+ port);
})