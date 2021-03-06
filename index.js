//  npm run dev

const express = require('express');
const app = express();

app.use(express.static('static'));


let tensuu = 0;
//配列作成
let ary = [];
const width = 10;
const height = 10;
const bomCount = 10;
/*  初期データ作成*/
ary = basic_data_make();
//console.log(ary);
function basic_data_make(){   
        for (  let i = 0;  i < width;  i++) {
            ary[i] = new Array();
            for(let j = 0; j < height; j++) {
                ary[i][j] = {
                    hasBom:false,
                    exploded: false,
                    /*x:i,
                    y: j,*/
                    opened:false
                };
            }
        }

       //０連鎖 x=4; y=4; スタート
       ary[4][4].opened = true;

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
        
         //０連鎖 x=4; y=4; スタート
         //調べるセル
         x=4; y=4;
         //ary[i][j].opened = true;       
 

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
                if(x + ary_next_to[k][0]>=0 && y + ary_next_to[k][0]<=9){
                    if(y + ary_next_to[k][1]>=0 && y + ary_next_to[k][1]<=9){          
                        if(ary[x + ary_next_to[k][0]][y + ary_next_to[k][1]].hasBom === true){
                            ary_next_to_sum += 1; // 8マスに爆弾の数
                        }
                        /*オープン可能性選択 8マスに1つ以上openしたセルを持つかカウント*/
                        if(ary[x + ary_next_to[k][0]][y + ary_next_to[k][1]].opened === true){
                            opened_num += 1;　　
                        }
                    }
                }
            }

            console.log(ary_next_to_sum);
            console.log(opened_num);
            //ary[4][4].opened = true;
            if(ary_next_to_sum > 0){

            }else{

            }



            


        ary['user'] = new Array();

        //console.log(ary['user']);
        let addData ={id : '1234',mail : 'hiro@com',name:'hiro',tensuu:0,status:[]};
        ary['user'].push(addData);
        //console.log(ary['user'][0].status);
        statusData ={'hata':'hata'};
        ary['user'][0].status.push(statusData);
        //console.log(ary['user'][0].status);

        for (  let i = 0;  i < width;  i++) {
            ary['user'][0].status[i] = new Array();
            //console.log(ary['user'][0].status[i]);
            for(let j = 0; j < height; j++) {
                ary['user'][0].status[i][j] = {
                    //hasBom:false,
                    //exploded: false,
                    /*x:i,
                    y: j,*/
                    opened:false
                };
            }
        }
        //console.log(ary['user'][0].status[0][0]);
        console.log(ary['user'][0].status[0][0].opened);
        //console.log(ary);
    return ary; 
}

/*初期データ作成まで*/

/*  データを加工作成*/

function data_make(ary,x,y,user,opened){
    if(x === undefined || y === undefined){
            
    }else{      
        if(ary[x][y].hasBom === true){         
            
            if(opened === 'hata'){
                ary[x][y].opened = 'hata';
            }else if(opened === 'hata_reset'){
                ary[x][y].opened = false;
            }else{
                // ミスで誘爆した
                     /*爆弾選択 //爆弾判定  アクセスした場所に爆弾があった*/   
            ary[x][y].exploded = true;
            ary[x][y].opened = true;                 
            /*{ // 上のミスで誘爆した
                exploded: true,
                opened: false, // 閉じたまま
                },*/
            }                                    
        }else{
            /*爆弾以外を選択*/
            if(opened === 'hata'){
                ary[x][y].opened = 'hata';
            }else if(opened === 'hata_reset'){
                ary[x][y].opened = false;
            }else{
                ary[x][y].opened = true;
            }
            ary[x][y].user = user;
        }
     }     
    return ary; 
}
/*データを加工作成まで*/

/*ポーリング*/

app.get('/reset',(req,res)=>{
    ary = basic_data_make();
    tensuu = 0;
    ary_f = res_make(ary,width,height);
    //console.log(ary_f);
    /*点数データ追加*/
    let addData =
    {"tensuu":0};
    ary_f.push(addData);
    res.json(ary_f);
});

app.get('/board',(req,res)=>{
  let user = req.query.user;
  let x = req.query.x;
  let y = req.query.y;
  let opened = req.query.opened;
  
  /*console.log(user);
  console.log(x);
  console.log(y);
  console.log(opened);*/
  
  //テスト用
  //**************** */
  //req.query.x=0;
  //req.query.y=0;
  //************** */
  /**************
  元データ書き換え  
  **************/
 //openedをtrueに

data_make(ary,x,y,user,opened);

 
if(user === undefined || x === undefined || y === undefined){  
    ary_f = res_make(ary,width,height);
    /*点数データ追加*/
    let addData =
    {"tensuu":tensuu};
    ary_f.push(addData);
    res.json(ary_f);
 }else{
    if(ary[x][y].hasBom === true){
        // ミスで誘爆した   
                 /*爆弾選択 //爆弾判定  アクセスした場所に爆弾があった*/   
                    /*{ // 上のミスで誘爆した
                        exploded: true,
                        opened: false, // 閉じたまま
                      },*/
                
        if(opened === 'hata' || opened === 'hata_reset'){                       
            /*ゲームレスポンスデータ作成*/
            let ary_f = res_make(ary,width,height);
            /*点数データ追加*/
            let addData =
            {"tensuu":tensuu};
            ary_f.push(addData);
            res.json(ary_f);
        }else{   
            /*ゲームレスポンスデータ作成*/
            let ary_f = res_make(ary,width,height);
            //game_overと追加
            let addData ={"tensuu":tensuu};
            ary_f.push(addData);
            addData =
            {game_over:'game_over'};
            ary_f.push(addData);
            res.json(ary_f);
        }                
    }else{
        /*爆弾以外を選択*/
        /*点数計算*/
        if(opened === 'hata' || opened === 'hata_reset'){
        }else{
            tensuu += 1;
        }
        /*ゲームレスポンスデータ作成*/
        let ary_f = res_make(ary,width,height);
        /*点数データ追加*/
        let addData =
        {"tensuu":tensuu};
        ary_f.push(addData);
        res.json(ary_f);
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
});

   
/************************************************** */  
  //res用配列
  //let ary_f = res_make(ary,width,height);

/*ゲームレスポンスデータ作成*/
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
                    user: '',
                    opened:false,
                    exploded:false,
                    /*x:i,
                    y:j,*/
                    next_to:0
                };
            }else{
                ary_f[i][j] = {
                    //テスト用
                    /************** */
                    /*hasBom:false,*/
                    //************** */
                    //user: user,
                    opened:false,
                    exploded:false,
                    /*x:i,
                    y:j,*/
                    next_to:0
                };
            }
            if(ary[i][j].user){
                ary_f[i][j].user = ary[i][j].user;
            }
            //テスト用
            /************** */
            /*ary_f[i][j].hasBom = ary[i][j].hasBom;*/
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
                            ary_next_to_sum += 1; // 8マスに爆弾の数
                        }
                        /*オープン可能性選択 8マスに1つ以上openしたセルを持つかカウント*/
                        if(ary[i + ary_next_to[k][0]][j + ary_next_to[k][1]].opened === true){
                            opened_num += 1;　　
                        }
                    }
                }
            }
            /*オープン可能性選択 8マスに1つ以上openしたセルを持つかカウントしまだ開いていないところをクリック可能にする*/
            if(opened_num > 0 && ary[i][j].opened !== true && ary[i][j].opened !== 'hata'){
                ary_f[i][j].opened = "click_ok";
            }
        ary_f[i][j].next_to= ary_next_to_sum;　　// 8マスに爆弾の数表示用
        }
    }
    //console.log(ary_f);
    return ary_f;
} 

app.listen(8000);
