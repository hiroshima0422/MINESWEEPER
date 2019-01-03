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

/******************************** */
let a = [];
//8マス爆弾の数
for (let i = 0; i < width;  i++) {       
    for(let j = 0; j < height; j++) {
    //テスト用
            /************** */
            //let i = 0;
            //let j = 9;
            //************** */
        //8マス判定配列
        
        //rensa(x,y);
        ///function rensa(x,y){
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
                    }
                }
            }
            /*オープン可能性選択 8マスに1つ以上openしたセルを持つかカウントしまだ開いていないところをクリック可能にする*/
            if(ary_next_to_sum === 0){
                k_x = x;
                k_y = y;

            }

        //}
        /*オープン可能性選択 8マスに1つ以上openしたセルを持つかカウントしまだ開いていないところをクリック可能にする*/
        
    


    }
}
//console.log(ary_f);

