const express = require('express');
const app=express();
const PORT =8000;

app.get('/',(req,res)=>{
    res.end("thsi is the route endpoint")
})

app.listen(PORT,()=>{
    console.log(`server is running on post ${PORT}`)
})