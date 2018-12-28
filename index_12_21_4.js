//  npm run dev

const express = require('express');
const app = express();

app.use(express.static('static'));


let tensuu = 0;
//配列作成
const ary = [];
const width = 10;
const height = 10;
const bomCount = 10;
for (  let i = 0;  i < width;  i++) {
    ary[i] = new Array();
    for(let j = 0; j < height; j++) {
        ary[i][j] = {
            hasBom:false,
            exploded: false,
            x:i,
            y: j,
            opened:false
        };
    }
}

for ( let i = width/2-1;  i < width/2+1;  i++) {           
    for(let j = height/2-1; j < height/2+1; j++) {        
            ary[i][j].opened = true;       
    }
}

//ランダムに10個の爆弾を作成
let count = 0;
while(count < bomCount){

    const rand_x = Math.floor(Math.random()*10);
    const rand_y = Math.floor(Math.random()*10);


    if(ary[rand_y][rand_x].hasBom === true || ary[rand_y][rand_x].opened === true){
        continue;
    }
    ary[rand_y][rand_x].hasBom = true;
    count ++;
}


app.get('/board',(req,res)=>{
    
  
  
  let user = req.query.user;
  //console.log(req.query);
  
  //テスト用
  //**************** */
  //req.query.x=0;
  //req.query.y=0;
  //************** */
  /**************
  元データ書き換え  
  **************/
 //openedをtrueに
 /*console.log(ary);
    console.log(width);
    console.log(height);*/    
 
    let ary_f = res_make(ary,width,height);
     console.log(ary_f);
     //console.log(ary_f);     
   //爆弾判定  アクセスした場所に爆弾があった
   /************************************************** */


function res_make(ary,width,height){
    /*console.log(ary);
    console.log(width);
    console.log(height); */   
  //res用配列
  const ary_f = [];
  for (  let i = 0;  i < width;  i++) {
      ary_f[i] = new Array();
      for(let j = 0; j < height; j++) {
          if(ary[i][j].opened===true){
              ary_f[i][j] = {
                  //テスト用
                  /************** */
                  hasBom:false,
                  //************** */
                  user: user,
                  opened:false,
                  exploded:false,
                  next_to:0
              };
          }else{
              ary_f[i][j] = {
                  //テスト用
                  /************** */
                  hasBom:false,
                  //************** */
                  //user: user,
                  opened:false,
                  exploded:false,
                  next_to:0
              };
          }
          //テスト用
          /************** */
          ary_f[i][j].hasBom = ary[i][j].hasBom;
          //************** */
          ary_f[i][j].opened = ary[i][j].opened;
          ary_f[i][j].exploded = ary[i][j].exploded;
      }
  }
  
  
  //8マス爆弾の数
  for (let i = 0; i < width;  i++) {       
      for(let j = 0; j < height; j++) {
//テスト用
              /************** */
              //let i = 0;
              //let j = 9;
              //************** */

          
          //8マス判定配列
          const ary_next_to = [[-1,1],
              [-1,0],
              [-1,-1],
              [0,1],
              [0,-1],
              [1,1],
              [1,0],
              [1,-1]];
          
          //let ary_next_to_cnt = 0; 
          let ary_next_to_sum = 0;
          let opened_num = 0;
          for(let k = 0; k < 8; k++) {
              if(i + ary_next_to[k][0]>=0 && i + ary_next_to[k][0]<=9){
                  if(j + ary_next_to[k][1]>=0 && j + ary_next_to[k][1]<=9){          
                      if(ary[i + ary_next_to[k][0]][j + ary_next_to[k][1]].hasBom === true){
                          ary_next_to_sum += 1;
  
                      }else{
                          //ary_f[i][j].next_to+= 1;
                      }
                      //click_okは　　ary_f[i][j].opened = "click_ok";
                      if(ary[i + ary_next_to[k][0]][j + ary_next_to[k][1]].opened === true){
                          opened_num += 1;
                      }else{
                           
                      }

                  }
              }
          }
          if(opened_num > 0 && ary[i][j].opened !== true){
            ary_f[i][j].opened = "click_ok";
          }
          
          //console.log(ary_f);

          ary_f[i][j].next_to= ary_next_to_sum;

          /*if(ary[i][j].hasBom === true){
              ary_f[i][j].next_to= "●";
          }*/
                          
                          
                      
          //console.log(ary_f);
      }
  }
  //console.log(ary_f);
  return ary_f;
} 
/*************************************************************** */
//console.log(ary_f);
  //res.json(ary_f);

/*function game_over(){
    let addData =
    {game_over:'game_over'};
    ary_f.push(addData);
}*/
  
  
  //console.dir(ary_f);


  
 
  //console.log(ary);
  

});

function game_over(){
    let addData =
    {game_over:'game_over'};
    ary_f.push(addData);
}

app.listen(8000);
