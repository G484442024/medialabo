// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let k = 0;

for(let i=0;i<4;i++){
  document.getElementById("kaito").addEventListener("click", hantei);
}

function hantei() {
  k=k+1;
  let l=document.querySelector('input[name="yoso"]');
  l.getAttribute('name');
  l.value;
  let yoso=Number(l.value);
  let result=document.querySelector('p#result');
  let kaisu=document.querySelector('span#kaisu');
  kaisu.textContent=k;
  let answer=document.querySelector('span#answer');
  answer.textContent=yoso;
  console.log(k+"回目の予想："+yoso);
  if(yoso === kotae){
    if(k < 4){
    result.textContent="正解です.おめでとう！";
    while(k < 3){
      k =k+1;
    }
    }else{
      result.textContent="答えは"+kotae+"でした.すでにゲームは終わっています";
    }
  }else if(3 < k){
    result.textContent="答えは"+kotae+"でした.すでにゲームは終わっています";
  }
  else if(k <= 2){
    if(yoso < kotae){
      result.textContent="まちがい.答えはもっと大きいですよ";
    }else{
      result.textContent="まちがい.答えはもっと小さいですよ";
    }
  }else{
    result.textContent="まちがい.残念でした答えは"+kotae+"です.";
  }
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}
