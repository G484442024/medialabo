//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];

//////////////// ここから下にプログラムを書きたそう!
b=document.querySelector('button#show').addEventListener('click',show);
function show(){
let zyusho=document.createElement('zyusho');
zyusho.textContent=campus.address;
let u=document.querySelector('p#zyusho');
u.insertAdjacentElement('afterend',zyusho);
let a=document.createElement('ul');
for(let q of gakka){
    let l=document.createElement('li');
	l.textContent=q.name;
	a.insertAdjacentElement('beforeend',l);
	let p=document.querySelector('p#gakka');
    p.insertAdjacentElement('afterend',a);
}
}
