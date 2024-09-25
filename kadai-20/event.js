
const btn= document.getElementById('change-btn');

const txt= document.getElementById('text');

btn.addEventListener('click', () => {
    txt.textContent=('ボタンがクリックされました');
});
