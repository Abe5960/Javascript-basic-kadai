const btn = document.getElementById('btn');
const txt =document.getElementById('text');
btn.addEventListener('click', () =>{
        setTimeout(()=>{
            txt.textContent=('ボタンがクリックされました')
        },2000); 
    });
