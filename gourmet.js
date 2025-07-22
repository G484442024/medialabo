
function print(data) {
  for(let i=0;i<2;i++){
    console.log((i+1)+"件目の検索結果");
    console.log(data.results.shop[i].access);
    console.log(data.results.shop[i].address);
    console.log(data.results.shop[i].budget.name);
    console.log(data.results.shop[i].catch);
    console.log(data.results.shop[i].genre.name);
    console.log(data.results.shop[i].name);
    console.log(data.results.shop[i].open);
    console.log(data.results.shop[i].station_name);
    console.log(data.results.shop[i].sub_genre.name);
  }
  }

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  let old=document.querySelector('div#result');
  if(old){old.remove()};
  let mold=document.querySelector('ul');
  if(mold){mold.remove()};

  let m=document.createElement('ul');
  m.textContent="検索結果："+data.results.shop.length+"件";
  m.classList.add('result-count');
  let u=document.querySelector('#result');
  u.insertAdjacentElement('beforeend',m);

  let a=document.createElement("div");
  a.setAttribute('id','result');

  for(let i=0;i<data.results.shop.length;i++){
    let l=document.createElement('li');
    l.textContent="";
    a.insertAdjacentElement('beforeend',l);
    l=document.createElement('li');
    l.textContent="⚫︎"+(i+1)+"件目の検索結果";
    l.classList.add("result-title");
    a.insertAdjacentElement('beforeend',l);
    l=document.createElement('li');
    l.textContent=data.results.shop[i].access;
    a.insertAdjacentElement('beforeend',l);
    l=document.createElement('li');
    l.textContent=data.results.shop[i].address;
    a.insertAdjacentElement('beforeend',l);
    l=document.createElement('li');
    l.textContent=data.results.shop[i].budget.name;
    a.insertAdjacentElement('beforeend',l);
    l=document.createElement('li');
    l.textContent=data.results.shop[i].catch;
    a.insertAdjacentElement('beforeend',l);
    l=document.createElement('li');
    l.textContent=data.results.shop[i].genre.name;
    a.insertAdjacentElement('beforeend',l);
    l=document.createElement('li');
    l.textContent=data.results.shop[i].name;
    a.insertAdjacentElement('beforeend',l);
    l=document.createElement('li');
    l.textContent=data.results.shop[i].open;
    a.insertAdjacentElement('beforeend',l);
    l=document.createElement('li');
    l.textContent=data.results.shop[i].station_name;
    a.insertAdjacentElement('beforeend',l);
    l=document.createElement('li');
    l.textContent=data.results.shop[i].urls.pc;
    a.insertAdjacentElement('beforeend',l);
    let p=document.querySelector('p#result');
    p.insertAdjacentElement('afterend',a);
  }
}


// 課題6-1 のイベントハンドラ登録処理は以下に記述
let b=document.querySelector('#sendRequest');
b.addEventListener('click',sendRequest);



// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let genre=document.getElementById("genre").value;
  let url='https://www.nishita-lab.org/web-contents/jsons/hotpepper/'+genre+'.json';
  axios.get(url).then(showResult).catch(showError).then(finish);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data=resp.data;
  if(typeof data === 'string'){
    data=JSON.parse(data);
  }
  printDom(data);
  console.log(data);
  console.log(data.x);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

      


