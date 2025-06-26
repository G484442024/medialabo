b=document.querySelector('button#calc');
b.addEventListener('click',greeting);
function greeting(){
    let l=document.querySelector('input[name="left"]');
    l.getAttribute('name');
    l.value;
    let r=document.querySelector('input[name="right"]');
    r.getAttribute('name');
    r.value;
    let ls=Number(l.value);
    let rs=Number(r.value);
    let p=document.querySelector('span#answer');
    p.textContent=ls+rs;
}