//  npm run dev

const express = require('express');
const app = express();
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
//console.log(ary);
app.get('/board',(req,res)=>{ 
    //テスト用
    //**************** */
    //req.query.x=0;
    //req.query.y=0;
    //************** */
    /**************
    元データ書き換え  
    **************/
   //openedをtrueに
    ary[req.query.y][req.query.x].opened = true;
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
    if(ary[req.query.y][req.query.x].hasBom === true){
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
    //res用配列
    const ary_f = [];
    for (  let i = 0;  i < width;  i++) {
        ary_f[i] = new Array();
        for(let j = 0; j < height; j++) {
            ary_f[i][j] = {
                //テスト用
                /************** */
                hasBom:false,
                //************** */
                opened:false,
                exploded:false,
                next_to:0
            };
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
            const ary_next_to = [];
            
            //let ary_next_to_cnt = 0; 
            let ary_next_to_sum = 0; 
            for(let m = 0;  m <= 2; m++) {
                ary_next_to[m] = [];
                
                
                //ary_next_to[m-1] = []; 
                
                for(let n = 0; n <= 2; n++) {
                    ary_next_to[m][n] = [];
                    ary_next_to[m][n] = {
                        hasBom:0,
                        x:0,
                        y:0
                    };
                //for(let n = 0; n <= 2-n_max; n++) {
                    //if(ary[i + (m-1)][j + (n-1)].hasBom === 1 && m !== 1 && n !== 1){
                        if(i === 0 && j === 0){
                            if(m === 0 | n === 0){
                                ary_next_to[m][n].x = -1;
                                ary_next_to[m][n].y = -1;                               
                            }else{
                                if(ary[i + m-1][j + n-1].hasBom === true){
                                    //ary_next_to[m][n].hasBom = 1;
                                    if(!(m === 1 && n === 1)){
                                        ary_next_to_sum += 1;
                                    }
                                }
                            }
                        }else if(i === 9 && j === 0){
                            if(m === 2 | n === 0){
                                ary_next_to[m][n].x = -1;
                                ary_next_to[m][n].y = -1;                               
                            }else{
                                if(ary[i + m-1][j + n-1].hasBom === true){
                                    //ary_next_to[m][n].hasBom = 1;
            
                                    if(!(m === 1 && n === 1)){
                                        ary_next_to_sum += 1;
                                    }
            
                                }
                            }
                        }else if(i === 0 && j === 9){
                            if(m === 0 | n === 2){
                                ary_next_to[m][n].x = -1;
                                ary_next_to[m][n].y = -1;                               
                            }else{
                                if(ary[i + m-1][j + n-1].hasBom === true){
                                    //ary_next_to[m][n].hasBom = 1;
            
                                    if(!(m === 1 && n === 1)){
                                        ary_next_to_sum += 1;
                                    }
            
                                }
                            }
                        }else if(i === 9 && j === 9){
                            if(m === 2 | n === 2){
                                ary_next_to[m][n].x = -1;
                                ary_next_to[m][n].y = -1;                               
                            }else{
                                if(ary[i + m-1][j + n-1].hasBom === true){
                                    //ary_next_to[m][n].hasBom = 1;
            
                                    if(!(m === 1 && n === 1)){
                                        ary_next_to_sum += 1;
                                    }
            
                                }
                            }
                        }else if(i === 0){
                            if(m === 0){
                                ary_next_to[m][n].x = -1;
                                ary_next_to[m][n].y = -1;                               
                            }else{
                                if(ary[i + m-1][j + n-1].hasBom === true){
                                    //ary_next_to[m][n].hasBom = 1;
            
                                    if(!(m === 1 && n === 1)){
                                        ary_next_to_sum += 1;
                                    }
            
                                }
                            }
                        }else if(i === 9){
                            if(m === 2){
                                ary_next_to[m][n].x = -1;
                                ary_next_to[m][n].y = -1;                               
                            }else{
                                if(ary[i + m-1][j + n-1].hasBom === true){
                                    //ary_next_to[m][n].hasBom = 1;
            
                                    if(!(m === 1 && n === 1)){
                                        ary_next_to_sum += 1;
                                    }
            
                                }
                            }
                        }else if(j === 0){
                            if(n === 0){
                                ary_next_to[m][n].x = -1;
                                ary_next_to[m][n].y = -1;                               
                            }else{
                                if(ary[i + m-1][j + n-1].hasBom === true){
                                    //ary_next_to[m][n].hasBom = 1;
            
                                    if(!(m === 1 && n === 1)){
                                        ary_next_to_sum += 1;
                                    }
            
                                }
                            }
                        }else if(j === 9){
                            if(n === 2){
                                ary_next_to[m][n].x = -1;
                                ary_next_to[m][n].y = -1;                               
                            }else{
                                if(ary[i + m-1][j + n-1].hasBom === true){
                                    //ary_next_to[m][n].hasBom = 1;
            
                                    if(!(m === 1 && n === 1)){
                                        ary_next_to_sum += 1;
                                    }
            
                                }
                            }
                        }else{                           
                            if(ary[i + m-1][j + n-1].hasBom === true){
                                //ary_next_to[m][n].hasBom = 1;
        
                                if(!(m === 1 && n === 1)){
                                    ary_next_to_sum += 1;
                                }
        
                            }
                        }
                        ary[i][j].next_to= ary_next_to_sum;
                            
                            
                        
                        
                    
                    
                }
            }
            //ary_next_to[i][j] = ary_next_to_sum;
            //let ary_next_to_cnt = sum(ary_next_to);        
        }
    }



    //console.dir(ary);
    res.json(ary);
    //res.json(ary_f);
    //res.json(ary_next_to);

});

app.listen(8000);
