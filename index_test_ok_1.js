const express = require('express');
const app = express();
//配列作成

const width = 10;
const height = 10;

//console.log(ary);
app.get('/board',(req,res)=>{ 
  /*
    const ary = 
    [[{"om":0,"opened":1,"exposure":0,"to":0},  //0
    {"om":1,"to":0},
    {"om":0,"to":0},
    {"om":1,"to":0},
    {"om":1,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":1,"to":0},
    {"om":1,"to":0}],
    [{"om":1,"to":0},  //1
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":1,"to":0}],
    [{"om":0,"to":0},  //2
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":1,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0}],
    [{"om":0,"to":0},  //3
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0}],
    [{"om":0,"to":0},   //4
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0}],
    [{"om":0,"to":0},   //5
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0}],
    [{"om":0,"to":0},   //6
    {"om":1,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":1,"to":0},
    {"om":0,"to":0}],
    [{"om":0,"to":0},   //7
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":1,"to":0},
    {"om":0,"to":0},
    {"om":1,"to":0}],
    [{"om":1,"to":0},  //8
    {"om":0,"to":0},
    {"om":1,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":1,"to":0},
    {"om":1,"to":0}],
    [{"om":1,"to":0},  //9
    {"om":1,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":1,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":1,"to":0},
    {"om":0,"to":0}]];
    */
    const ary = 
    [[{"om":0,"to":0},  //0
    {"om":1,"to":0},
    {"om":0,"to":0},
    {"om":1,"to":0},
    {"om":1,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":1,"to":0},
    {"om":1,"to":0}],
    [{"om":1,"to":0},  //1
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":1,"to":0}],
    [{"om":0,"to":0},  //2
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":1,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0}],
    [{"om":0,"to":0},  //3
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0}],
    [{"om":0,"to":0},   //4
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0}],
    [{"om":0,"to":0},   //5
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0}],
    [{"om":0,"to":0},   //6
    {"om":1,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":1,"to":0},
    {"om":0,"to":0}],
    [{"om":0,"to":0},   //7
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":1,"to":0},
    {"om":0,"to":0},
    {"om":1,"to":0}],
    [{"om":1,"to":0},  //8
    {"om":0,"to":0},
    {"om":1,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":1,"to":0},
    {"om":1,"to":0}],
    [{"om":1,"to":0},  //9
    {"om":1,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":1,"to":0},
    {"om":0,"to":0},
    {"om":0,"to":0},
    {"om":1,"to":0},
    {"om":0,"to":0}]];
    //8マス爆弾の数
    for (let i = 0; i < width;  i++) {       
        for(let j = 0; j < height; j++) {
//テスト用
                /************** */
                //let i = 0;
                //let j = 9;
                //************** */

            
            //8マス判定配列
            const ary_to = [];
            
            //let ary_to_cnt = 0; 
            let ary_to_sum = 0; 
            for(let m = 0;  m <= 2; m++) {
                ary_to[m] = [];
                
                
                //ary_to[m-1] = []; 
                
                for(let n = 0; n <= 2; n++) {
                    ary_to[m][n] = [];
                    ary_to[m][n] = {
                        om:0,
                        x:0,
                        y:0
                    };
                //for(let n = 0; n <= 2-n_max; n++) {
                    //if(ary[i + (m-1)][j + (n-1)].om === 1 && m !== 1 && n !== 1){
                        if(i === 0 && j === 0){
                            if(m === 0 | n === 0){
                                ary_to[m][n].x = -1;
                                ary_to[m][n].y = -1;                               
                            }else{
                                if(ary[i + m-1][j + n-1].om === 1){
                                    //ary_to[m][n].om = 1;
                                    if(!(m === 1 && n === 1)){
                                        ary_to_sum += 1;
                                    }
                                }
                            }
                        }else if(i === 9 && j === 0){
                            if(m === 2 | n === 0){
                                ary_to[m][n].x = -1;
                                ary_to[m][n].y = -1;                               
                            }else{
                                if(ary[i + m-1][j + n-1].om === 1){
                                    //ary_to[m][n].om = 1;
            
                                    if(!(m === 1 && n === 1)){
                                        ary_to_sum += 1;
                                    }
            
                                }
                            }
                        }else if(i === 0 && j === 9){
                            if(m === 0 | n === 2){
                                ary_to[m][n].x = -1;
                                ary_to[m][n].y = -1;                               
                            }else{
                                if(ary[i + m-1][j + n-1].om === 1){
                                    //ary_to[m][n].om = 1;
            
                                    if(!(m === 1 && n === 1)){
                                        ary_to_sum += 1;
                                    }
            
                                }
                            }
                        }else if(i === 9 && j === 9){
                            if(m === 2 | n === 2){
                                ary_to[m][n].x = -1;
                                ary_to[m][n].y = -1;                               
                            }else{
                                if(ary[i + m-1][j + n-1].om === 1){
                                    //ary_to[m][n].om = 1;
            
                                    if(!(m === 1 && n === 1)){
                                        ary_to_sum += 1;
                                    }
            
                                }
                            }
                        }else if(i === 0){
                            if(m === 0){
                                ary_to[m][n].x = -1;
                                ary_to[m][n].y = -1;                               
                            }else{
                                if(ary[i + m-1][j + n-1].om === 1){
                                    //ary_to[m][n].om = 1;
            
                                    if(!(m === 1 && n === 1)){
                                        ary_to_sum += 1;
                                    }
            
                                }
                            }
                        }else if(i === 9){
                            if(m === 2){
                                ary_to[m][n].x = -1;
                                ary_to[m][n].y = -1;                               
                            }else{
                                if(ary[i + m-1][j + n-1].om === 1){
                                    //ary_to[m][n].om = 1;
            
                                    if(!(m === 1 && n === 1)){
                                        ary_to_sum += 1;
                                    }
            
                                }
                            }
                        }else if(j === 0){
                            if(n === 0){
                                ary_to[m][n].x = -1;
                                ary_to[m][n].y = -1;                               
                            }else{
                                if(ary[i + m-1][j + n-1].om === 1){
                                    //ary_to[m][n].om = 1;
            
                                    if(!(m === 1 && n === 1)){
                                        ary_to_sum += 1;
                                    }
            
                                }
                            }
                        }else if(j === 9){
                            if(n === 2){
                                ary_to[m][n].x = -1;
                                ary_to[m][n].y = -1;                               
                            }else{
                                if(ary[i + m-1][j + n-1].om === 1){
                                    //ary_to[m][n].om = 1;
            
                                    if(!(m === 1 && n === 1)){
                                        ary_to_sum += 1;
                                    }
            
                                }
                            }
                        }else{                           
                            if(ary[i + m-1][j + n-1].om === 1){
                                //ary_to[m][n].om = 1;
        
                                if(!(m === 1 && n === 1)){
                                    ary_to_sum += 1;
                                }
        
                            }
                        }
                        ary[i][j].to= ary_to_sum;
                            
                            
                        
                        
                    
                    
                }
            }
            //ary_to[i][j] = ary_to_sum;
            //let ary_to_cnt = sum(ary_to);        
        }
    }
    



    //console.dir(ary);
    res.json(ary);
    //res.json(ary_to);
    //res.json(ary_to_sum);

});

app.listen(8000);