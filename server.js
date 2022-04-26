'use strict';
const express1 = require('express');
const recData=require("./data.json");
function Data(title,path,overview)
{
    this.title=title;
    this.path=path;
    this.overview=overview;
}

const app1 = express1();
const port = 3000;
app1.listen(port, () => {
  //console.log(recData);
  })


app1.get("/",handleHome);
function handleHome(req,res)
{
   let result =new Data( recData.title,recData.poster_path,recData.overview);
  //let result =new Data( "yes","yes","yes");
   res.json(result);
  
}

app1.get("/fav",handleFav);
function handleFav(req,res)
{
  res.send("Welcome to Favorite Page");
}
app1.use(handleErr500);
function handleErr500 (req,res){
let error ={
  "status": 500,
  "responseText": "Sorry, something went wrong"
  }
 
  res.status(500).json(error);
  
}

app1.get("*",handleErr404);
function handleErr404 (req,res){
let error ={
  "status": 404,
  "responseText": "page not found error"
  }
  res.status(404).json(error);
  
}

