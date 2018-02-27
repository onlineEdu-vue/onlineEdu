const express=require('express');
const mysql=require('mysql');
//上传文件用的
const pathLib=require('path')
const fs=require('fs')
//连接数据库
let db=mysql.createPool({
  host:'60.205.205.170',
  port:'3306',
  user:'root',
  password:'N@123456',
  database:'online'
});

module.exports=function (){
  var router=express.Router();
  router.get('/', function (req, res){
    switch(req.query.act){
      case 'del':
        db.query(`SELECT * FROM courseDescription_table WHERE ID=${req.query.id}`, (err, data)=>{
          if(err){
            console.error(err);
            res.status(500).send('database error').end();
          }else{
            if(data.length==0){
              res.status(404).send('no this coursesummary evaluation').end();
            }else{
              fs.unlink('static/upload/'+data[0].src, (err)=>{
                if(err){
                  console.error(err);
                  res.status(500).send('file opration error').end();
                }else{
                  db.query(`DELETE FROM courseDescription_table WHERE ID=${req.query.id}`, (err, data)=>{
                    if(err){
                      console.error(err);
                      res.status(500).send('database error').end();
                    }else{
                      res.redirect('/admin/');
                    }
                  });
                }
              });
            }
          }
        });
        break;
      case 'mod':
        db.query(`SELECT * FROM courseDescription_table WHERE ID=${req.query.id}`, (err, data)=>{
          if(err){
            console.error(err);
            res.status(500).send('database error').end();
          }else if(data.length==0){
            res.status(404).send('no this evaluation').end();
          }else{
            db.query(`SELECT * FROM courseDescription_table`, (err, home)=>{
              if(err){
                console.error(err);
                req.status(500).send('database error').end();
              }else{
                res.render('admin/index.ejs', {home, mod_data: data[0]});
              }
            });
          }
        });
        break;
      default:
        db.query(`SELECT * FROM courseDescription_table`, (err, home)=>{
          if(err){
            console.error(err);
            req.status(500).send('database error').end();
          }else{
            //console.log(home);
            res.render('admin/index.ejs', {home});
          }
        });
    }
  });
  router.post('/', function (req, res){    
    const title=req.body.title;
    const summary=req.body.summary;
    const tag1=req.body.tag1;
    const tag2=req.body.tag2;
    const number=req.body.number;
    const href=req.body.href;
    if(req.files[0]){
      var ext=pathLib.parse(req.files[0].originalname).ext;

      var oldPath=req.files[0].path;
      var newPath=req.files[0].path+ext;

      var newFileName=req.files[0].filename+ext;
    }else{
      var newFileName=null;
    }

    if(newFileName){
      fs.rename(oldPath, newPath, (err)=>{
        if(err){
          //console.error(err);
          res.status(500).send('file opration error').end();
        }else{
          if(req.body.mod_id){  //修改
            //先删除老的
            db.query(`SELECT * FROM courseDescription_table WHERE ID=${req.body.mod_id}`, (err, data)=>{
              if(err){
                console.error(err);
                res.status(500).send('database error').end();
              }else if(data.length==0){
                res.status(404).send('old file not found').end();
              }else{
                fs.unlink('static/upload/'+data[0].src, (err)=>{
                  if(err){
                    console.log(data[0].src);
                    //console.error(err);
                    res.status(500).send('file opration error').end();
                  }else{
                    db.query(`UPDATE courseDescription_table SET \
                      src='${newFileName}',title='${req.body.title}',\
                      summary='${req.body.summary}',tag1='${req.body.tag1}',tag2='${req.body.tag2}',\
                     number='${req.body.number}', href='${req.body.href}'\
                      WHERE ID=${req.body.mod_id}`, (err)=>{
                        if(err){
                          console.error(err);
                          res.status(500).send('database error').end();
                        }else{
                          res.redirect('/admin/');
                        }
                      });
                  }
                });
              }
            });
          }else{                //添加
            db.query(`INSERT INTO courseDescription_table 
              (src,title,summary,tag1,tag2,number,href)
              VALUE ('${newFileName}', '${title}','${summary}', '${tag1}', '${tag2}','${number}', 
              '${href}')`, (err, data)=>{
              if(err){
                console.error(err);
                res.status(500).send('database error').end();
              }else{
                res.redirect('/admin/');
              }
            });
          }
        }
      });
    }else{
      if(req.body.mod_id){  //修改
        //直接改
        db.query(`UPDATE courseDescription_table SET \
          title='${req.body.title}',\
          summary='${req.body.summary}',tag1='${req.body.tag1}',tag2='${req.body.tag2}',\
          number='${req.body.number}',href='${req.body.href}'\
          WHERE ID=${req.body.mod_id}`, (err)=>{
            if(err){
              console.error(err);
              res.status(500).send('database error').end();
            }else{
              res.redirect('/admin/');
            }
          });
      }else{
      db.query(`INSERT INTO courseDescription_table 
      (src,title,summary,tag1,tag2,number, href)
      VALUE ('${newFileName}', '${title}','${summary}','${tag1}', '${tag2}', '${number}',
      '${href}')`, (err, data)=>{
          if(err){
            console.error(err);
            res.status(500).send('database error').end();
          }else{
            res.redirect('/admin/');
          }
        });
      }
    }
  });

  return router;
};

