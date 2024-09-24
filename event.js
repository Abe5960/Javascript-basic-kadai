//　output-btn というidを持つHTML要素を取り出し、定数に代入する
const btn = document.getElementById('output-btn');

//　HTML要素がクリックされたときにイベント処理を行う
btn.addEventListener('click', () => {
    console.log('クリックされました！')
});

//　add-btnというidを持つHTML要素を取り出し、定数に代入する
const addBtn = document.getElementById('add-btn');
//　parentlistというidを持つHTML要素を取り出し、定数に代入する
const parentList = document.getElementById('parent-list');

//　HTML要素がクリックされたときに、リストを追加する処理を行う
addBtn.addEventListener('click', () => {
    //　新しくリスト要素を追加し、定数に代入する
    const childList = document.createElement('li');
    //　作成したリスト要素に文字を入れる
    childList.textContent = 'これはリスト要素です';
    parentList.appendChild(childList);
});




//　textFormというname属性を持つフォームを取得する
document.forms.textForm;

// textBoxというname属性を持つテキストボックスを取得する
document.forms.textForm.textBox;

// textBoxというname属性を持つテキストボックスの値を取得する
document.forms.textForm.textBox.value;



//文字数の取得
// count-btnというidを持つHTML要素を取得し、定数に代入する
const countBtn = document.getElementById('count-btn');
//　HTML要素がクリックされたときに、イベント処理を行う
countBtn.addEventListener('click', () => {
    //テキストボックスに入力された文字列を取得する
    const text = document.forms.textForm.textBox.value;
    //取得した文字列の文字数を出力する
    console.log(text.length + '文字');
});



//ラジオボタンの値の取得
const areaBtn = document.getElementById('area-btn');
//値の取得ボタンを押したら値が
areaBtn.addEventListener('click', () => {
    const area =document.forms.areaForm.area.value;
    console.log(area);
});


// os-btnというidを持つHTML要素を取得し、定数に代入する
const osBtn = document.getElementById('os-btn');
 
// HTML要素がクリックされたときにイベント処理を実行する
osBtn.addEventListener('click', () => {
  // すべてのチェックボックスを配列風のデータで取得する
  const items = document.forms.osForm.os;

  // 繰り返し処理でチェックボックスを1つずつ取り出し、もし選択されていれば値を出力する
  for (let i = 0; i < items.length; i++) {
    if (items[i].checked) {
      console.log(items[i].value);
    }
  }
});

