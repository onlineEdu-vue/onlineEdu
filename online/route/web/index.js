const express=require('express');
const mysql=require('mysql');

let db=mysql.createPool({
  host:'60.205.205.170',
  port:'3306',
  user:'root',
  password:'N@123456',
  database:'online'
});

module.exports=function (){
  var router=express.Router();

  router.get('/home', (req, res)=>{
    db.query('SELECT * FROM courseDescription_table', (err, data)=>{
      if(err){
        console.error(err);
        res.status(500).send('database error').end();
      }else{
        console.log(data);
        res.send(data).end();
      }
    });
  });
  router.get('/course', (req, res)=>{
    db.query('SELECT * FROM course_table', (err, data)=>{
      if(err){
        console.error(err);
        res.status(500).send('database error').end();
      }else{
        console.log(data);
        res.send(data).end();
      }
    });
  });
  router.get('/coursecontent', (req, res)=>{
    db.query('SELECT * FROM coursecontent_table', (err, data)=>{
      if(err){
        console.error(err);
        res.status(500).send('database error').end();
      }else{
        console.log(data);
        res.send(data).end();
      }
    });
  });
  router.get('/message', (req, res)=>{
    db.query('SELECT * FROM msg_table', (err, data)=>{
      if(err){
        console.error(err);
        res.status(500).send('database error').end();
      }else{
        console.log(data);
        res.send(data).end();
      }
    });
  });
  return router;
};
