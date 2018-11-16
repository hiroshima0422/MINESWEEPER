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
            
            ary_f[i][j].hasBom = ary[i][j].hasBom;
            ary_f[i][j].opened = ary[i][j].opened;
        }
    }
    //爆弾判定
    if(ary[req.query.y][req.query.x].hasBom === true){
        ary_f[req.query.y][req.query.x].exposure = true;
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
                                if(ary[i + m-1][j + n-1].hasBom === 1){
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
                                if(ary[i + m-1][j + n-1].hasBom === 1){
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
                                if(ary[i + m-1][j + n-1].hasBom === 1){
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
                                if(ary[i + m-1][j + n-1].hasBom === 1){
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
                                if(ary[i + m-1][j + n-1].hasBom === 1){
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
                                if(ary[i + m-1][j + n-1].hasBom === 1){
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
                                if(ary[i + m-1][j + n-1].hasBom === 1){
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
                                if(ary[i + m-1][j + n-1].hasBom === 1){
                                    //ary_next_to[m][n].hasBom = 1;
            
                                    if(!(m === 1 && n === 1)){
                                        ary_next_to_sum += 1;
                                    }
            
                                }
                            }
                        }else{                           
                            if(ary[i + m-1][j + n-1].hasBom === 1){
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
/*

11月16日までの課題です。

①widthとheightを利用して0の2次元配列を入れ子のforで生成する
const width = 10;
const height = 10;
const board = [];

for () { // ここ

}

app.get('/', (req, res) => {
  // ここは編集しない
});


②2次元配列の0を連想配列に置き換えて、「ブロックを開く」を実装する
// 0を以下の連想配列に置き換える
{
  hasBom: false,
  opened: false,
}


localhost:8000/board/?x=3&y=7
でアクセスした座標のopenedをtrueに変えてブラウザに返す

{
  hasBom: false,
  opened: true,
}


同じ座標に2度アクセスされた場合は、すでに開いているので変化がないまま返す。
ただし、hasBomは「爆弾がある場所の答え」になってしまうのでブラウザには返さないようにする。
app.get('/', (req, res) => {
  // ここで2次元配列のコピーを作ってhasBomを除外してからres.jsonする
});


③Node.js(nodemon)がリフレッシュするたびに爆弾10個をwhileでランダムに配置する
const width = 10;
const height = 10;
const bomCount = 10; // 追加
const board = [];

for () { // ここは課題①で終わってる

}

while () { // ここが課題

}

app.get('/', (req, res) => {

});


なぜforではなくwhileなのか。それはきっかり10回で爆弾を配置できるとは限らないから。
ランダムに生成した結果、すでに爆弾が存在する座標にまた生成してしまう可能性がある。
その場合はもう一度生成しなおす必要があって、このような処理にはwhileが適切。
（もちろんforでも可能だが、アンチパターンになりやすいのでおススメしない）

④アクセスした座標に爆弾があったら全ての爆弾にexploded: trueを付けて返す

マインスイーパーの特徴として、ミスをしたら全ての爆弾が一斉に爆発するようになっています。
hasBomは②で除外されているはずなので返り値のイメージはこうなります。
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


⑤アクセスした座標が爆弾ではなかった場合はnumberを付けて返す

マインスイーパーはブロックを開くと「その座標の周りにいくつ爆弾が存在するか」が表示されます。
爆弾ではない場所、つまり正解の座標にアクセスした場合はnumberを返してあげましょう。
[
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


独自に進んでいる三島さん宮本さんを除けば現在広島さんだけが⑤に到達しています。（④に昨日はなかった誘爆要件を追加したのでもう一度実装しておいてください）
来週は全員が⑤まで完了している前提で講習が進むので死ぬ気で課題を片付けてくださいね！(編集済)
Miyamoto前週日曜日 午前10時39分
:thumbsup:
matsuda前週日曜日 午前10時48分
今週だけではなく、毎日GitHubに「ターミナルから」プッシュしてくださいね。
$ git add .
$ git commit -m "日本語でおｋ"
$ git push origin master

gitコマンドに慣れるのが目的なのでひとまずブランチはmasterでいいですよ。
（もちろんdevelopを切ってもOKですが、その場合はメインブランチを変えないとGitHubに草が付かないかも）(編集済)
Miyamoto前週日曜日 午前10時53分
承知しました！
rennie前週日曜日 午後1時26分
ありがとうございます！
satoshi shiratsuchi前週日曜日 午後7時28分
了解しました！
2018年11月13日
Miyamoto昨日 午前12時7分
@matsuda さん、ネットの接続が途中で切れた際に途中から再開できたりする機能や、爆弾のマスに旗を立てる機能まで実装したら、クリックしたマスの周囲１マス以上の連鎖爆発機能を実装したりすれば良いでしょうか？
matsuda昨日 午前6時22分
@Miyamoto 
凄まじく早い！さすがだなｗ
そこまで来たなら一旦公開して欲しいな。触ってみて色々イチャモンつけるわ。
米国サーバーだけどNodeアプリ無料で公開できるからこれ使ってみるといいかも。
https://zeit.co/now
Now
Global Serverless Deployments

Miyamoto昨日 午前9時4分
承知しました！
公開＆微調整が完了したら、再度ご報告いたします！
matsuda昨日 午前9時21分
早くも⑤まで終わった人が現れたので新しい課題を用意しました。
もちろん16日までに終わっている必要はないですが、早い人に合わせて進行していくのでみなさん必死に付いてきてくださいね。

⑥ユーザー情報を付与する
http://localhost:8000/board/?x=3&y=5&user=matsuda
のようにuser名を増やす。
ブロックを開いたユーザー名をブラウザに返す
[
  { // 開いた場所には全てuserがいる
      user: 'matsuda',
    opened: true,
  },
  { // 開いてない場所にuserは不要
    opened: false,
  },
]


⑦フロント開発を始める
プロジェクトのルートに「static」ディレクトリを作る。
static/index.html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
    </head>
    <body>
        <div id="app"></div>
        <style>
        </style>
        <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
        <script>
        </script>
    </body>
</html>


Node.jsに以下を追加
app.use(express.static('static'));


http://localhost:8000/
にアクセスすると真っ白なページが表示される

localStorageにuserがなければ簡易なモーダルを表示して入力させる

⑧ポーリングでサーバーに問い合わせながらフロント開発
だいたい以下のイメージでフロント開発
xやyのクエリが無くても盤面の情報を返せるようにNode.jsを修正する必要がありそう
const render = (board) => {
  // DOMを破棄して再構築
};

setInterval(() => {
  // 0.5秒ごとにサーバーにポーリング
  $.getJSON('/board', render);
}, 500);

$('.block').click(function() {
  // xとyを算出する
  $.getJSON('/board', {
    x: x,
    y: y,
    user: user,
  }, render);
});


説明が雑なのでわからない部分は聞いてください。
getJSONがブラウザのキャッシュで上手く動かない可能性があるのでその場合はggrks
2018年11月14日
Miyamoto今日 午前3時45分
@matsuda さん、Nowでデプロイしたのですが、
挙動がおかしかったので、herokuでデプロイし直してみました。
ご確認よろしくお願いいたします。
https://miyamoto-msweeper.herokuapp.com/

※再戦機能や退出機能ですが、window.confirmをサーバー側から受領したフラグを使って動かそうとしたところ、ブラウザに止められてしまったため、上手く動作しておりません。。。
（ローカルやcloud9上では動作しておりました）
‼
1
新着メッセージ
matsuda今日 午前7時43分
@Miyamoto 
おお！デザインとUXは最低だがマインスイーパーになってるぞ！
反応が悪いのは海外サーバーだからかな。
実装が早すぎて課題が追いつかないのでUXの向上と0連鎖を進めるくらいしかないかな

*/