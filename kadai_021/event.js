const btn = document.getElementById('btn');
const txt =document.getElementById('text');


setTimeout(() => {
    btn.addEventListener('click', () =>{
        txt.textContent=('ボタンがクリックされました');    
    });
},2000);
