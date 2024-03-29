const express=require("express");
let app=express();
let port=4000;
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.get("/register",(req,res)=>{
    let{username,password}=req.query;
    res.send(`Thank you for sumbbit!${username}`);
});
app.post("/register",(req,res)=>{
    let{username,password}=req.body;
    res.send(`Thank you for sumbbit!${username}`);
})
 app.listen(port,()=>{
    console.log(`listening the port ${port}`);
 })