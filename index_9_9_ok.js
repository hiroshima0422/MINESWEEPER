const express = require('express');
const app = express();
//配列作成

const width = 10;
const height = 10;

//console.log(ary);
app.get('/board',(req,res)=>{ 
  
    const ary = 
    [[{"hasBom":false,"opened":true,"exposure":false,"next_to":0},  //0
    {"hasBom":true,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":true,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":true,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0}],
    [{"hasBom":true,"opened":false,"exposure":false,"next_to":0},  //1
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0}],
    [{"hasBom":false,"opened":false,"exposure":false,"next_to":0},  //2
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":true,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0}],
    [{"hasBom":false,"opened":false,"exposure":false,"next_to":0},  //3
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0}],
    [{"hasBom":false,"opened":false,"exposure":false,"next_to":0},   //4
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0}],
    [{"hasBom":false,"opened":false,"exposure":false,"next_to":0},   //5
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0}],
    [{"hasBom":false,"opened":false,"exposure":false,"next_to":0},   //6
    {"hasBom":true,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":true,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0}],
    [{"hasBom":false,"opened":false,"exposure":false,"next_to":0},   //7
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":true,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":true,"opened":false,"exposure":false,"next_to":0}],
    [{"hasBom":false,"opened":false,"exposure":false,"next_to":0},  //8
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":true,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":true,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":true,"opened":false,"exposure":false,"next_to":0}],
    [{"hasBom":false,"opened":false,"exposure":false,"next_to":0},  //9
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":true,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":true,"opened":false,"exposure":false,"next_to":0},
    {"hasBom":false,"opened":false,"exposure":false,"next_to":0}]];
    //8マス爆弾の数
    //for (let i = 0; i < width;  i++) {       
     //   for(let j = 0; j < height; j++) {
//テスト用
                /************** */
                let i = 9;
                let j = 9;
                //************** */

            let m_min = 0;
            let n_min = 0;
            let m_max = 2;
            let n_max = 2;
            //8マス判定配列
            const ary_next_to = [];
            /*if(i === 0 && j === 0){
                
                m_max = 1;
                n_max = 1;
            }*/
            /*if(i === 10 && j === 0){
                m_min = 1;
                n_max = 1;
                
            }
            if(i === 0 && j === 10){
                
                n_min = 1;
                m_max = 1;
            }
            
            if(i === 9 && j === 9){
                m_max = 1;
                n_max = 1;
                
            }
            */
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
                    //if(ary[i + (m-1)][j + (n-1)].hasBom === true && m !== 1 && n !== 1){
                        
                            if(m === 2 | n === 2){
                                ary_next_to[m][n].x = -1;
                                ary_next_to[m][n].y = -1;
                                
                            }else{
                                if(ary[i + m-1][j + n-1].hasBom === true){
                                    ary_next_to[m][n].hasBom = 1;
            
                                    ary_next_to_sum += 1;
            
                                }
                            }
                            
                            
                        
                        
                    
                    
                }
            }
            //ary_next_to[i][j] = ary_next_to_sum;
            //let ary_next_to_cnt = sum(ary_next_to);        
        //}
    //}
    



    //console.dir(ary);
    //res.json(ary);
    //res.json(ary_next_to);
    res.json(ary_next_to_sum);

});

app.listen(8000);