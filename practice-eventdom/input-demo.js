b = document.querySelector('button#print');
b.addEventListener('click', greeting);
let i=document.querySelector('input[name="shimei"]');
i.getAttribute('name');
let shimei=i.value;
let aisatu="こんにちは,"+shimei+"さん";
function greeting() {
    console.log(aisatu);
}
let p=document.querySelector('p#message');
p.textContent=aisatu;
