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
            opened:false
        };
    }
}
let count = 0;
while(count < bomCount){
//for (  let i = 0;  i < bomCount;  i++) {
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
    req.query.x=0;
    req.query.y=0;
    //************** */
    ary[req.query.y][req.query.x].opened = true;     
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
                exposure:false,
                next_to:0
            };
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
              [
                  課題5
            { // 周りに爆弾がない場所を開いた
                number: 0,
                opened: true, // 開いている
            },
            { // 周りに4つ爆弾がある
                number: 4,
                opened: true, // 開いている
            },
            { // 開いてない場所にnumberはいらない
                opened: false, // 閉じたまま
            },
            ]
            */
            ary_f[i][j].hasBom = ary[i][j].hasBom;
            ary_f[i][j].opened = ary[i][j].opened;
        }
    }
    //爆弾判定
    if(ary[req.query.y][req.query.x].hasBom === true){
        ary_f[req.query.y][req.query.x].exposure = true;
    }
    let ary = [];
    ary = JSON.parse([[{"hasBom":false,"opened":true,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":true,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":true,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0}],
    [{"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0}],
    [{"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":true,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0}],
    [{"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0}],
    [{"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0}],
    [{"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0}],
    [{"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":true,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":true,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0}],
    [{"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":true,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":true,"opened":false,"exposure":false,"next_to":0}],
    [{"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":true,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":true,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0}],
    [{"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":true,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0}]]);
    //8マス爆弾の数
    //for (let i = 0; i < width;  i++) {       
     //   for(let j = 0; j < height; j++) {
//テスト用
                /************** */
                let i = 0;
                let j = 0;
                //************** */

            let m_min = 0;
            let n_min = 0;
            let m_max = 2;
            let n_max = 2;
            //8マス判定配列
            const ary_next_to = [];
            if(i === 0 && j === 0){
                
                m_max = 1;
                n_max = 1;
            }
            /*if(i === 10 && j === 0){
                m_min = 1;
                n_max = 1;
                
            }
            if(i === 0 && j === 10){
                
                n_min = 1;
                m_max = 1;
            }
            if(i === 10 && j === 10){
                m_min = 1;
                n_min = 1;
                
            }
            */
            //let ary_next_to_cnt = 0; 
            let ary_next_to_sum = 0; 
            for(let m = m_min;  m <= m_max; m++) {
                ary_next_to[m] = [];
                
                
                //ary_next_to[m-1] = []; 
                
                for(let n = n_min; n <= n_max; n++) {
                    ary_next_to[m][n] = 0;
                //for(let n = 0; n <= 2-n_max; n++) {
                    //if(ary[i + (m-1)][j + (n-1)].hasBom === true && m !== 1 && n !== 1){
                    //if(ary[i + m-1][j + n-1].hasBom === true){
                    //    ary_next_to_sum += 1;
                    //}
                    
                }
            }
            //let ary_next_to_cnt = sum(ary_next_to);        
        //}
    //}
    



    //console.dir(ary);
    res.json(ary_f);
    //res.json(ary_next_to);

});

app.listen(8000);