//  npm run dev

const express = require('express');
const app = express();

app.use(express.static('static'));

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
            opened:false
        };
    }
}
//ランダムに10個の爆弾を作成
let count = 0;
while(count < bomCount){

    const rand_x = Math.floor(Math.random()*10);
    const rand_y = Math.floor(Math.random()*10);


    if(ary[rand_y][rand_x].hasBom === true){
        continue;
    }
    ary[rand_y][rand_x].hasBom = true;
    count ++;
}

//open初期設定
for ( let i = width/2-1;  i < width/2+1;  i++) {           
    for(let j = height/2-1; j < height/2+1; j++) {        
            ary[i][j].opened = true;       
    }
}

//console.log(ary);
app.get('/board',(req,res)=>{
    //console.log('board_js_ok');
    //console.log('req.query');
    //console.log(req.query);
    //console.log('res');
    //console.log(res);
  //res.contentType("application/json");
  //res.end(JSON.stringify({"test": "hoge"}));
  
  
  let user = req.query.user;
  console.log(req.query);
  
  //テスト用
  //**************** */
  //req.query.x=0;
  //req.query.y=0;
  //************** */
  /**************
  元データ書き換え  
  **************/
 //openedをtrueに
 if(req.query.user===undefined){
  req.query.user='hiro';
 }
 if(req.query.x===undefined ||req.query.y===undefined){
    
 }else{
     
        ary[req.query.x][req.query.y].opened = true;
    


    if(ary[req.query.x][req.query.y].hasBom === true){
        //ary[req.query.y][req.query.x].exploded = true;
        // ミスで誘爆した
        for (  let i = 0;  i < width;  i++) {           
            for(let j = 0; j < height; j++) {
                if(ary[i][j].hasBom === true){
                    ary[i][j].exploded = true;
                };
            }
        }
    }
 }
 
  
  /*課題4
          [
              { // アクセスした場所に爆弾があった
                exploded: true,
                opened: true, // 開いている
              },
              { // 上のミスで誘爆した
                exploded: true,
                opened: false, // 閉じたまま
              },
              { // その他、関係ない座標
                opened: false, // またはtrue
              },
            ]
            */
   //爆弾判定  アクセスした場所に爆弾があった
      
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
          
          console.log(ary_f);

          ary_f[i][j].next_to= ary_next_to_sum;

          /*if(ary[i][j].hasBom === true){
              ary_f[i][j].next_to= "●";
          }*/
                          
                          
                      
           
      }
  }
  /*
  if(req.query.opened === 'hata'){

    ary_f[req.query.x][req.query.y].opened = "hata";
    console.log(ary_f[req.query.x][req.query.y].opened);
  }*/

//console.dir(ary_f);
  //res.json(ary);
  res.json(ary_f);
  //res.json(ary_next_to);
  //console.log(ary);
  

});

app.listen(8000);
