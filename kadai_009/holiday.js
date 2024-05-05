 const holidays = [
    "正月",
    "成人の日",
    "建国記念日",
    "天皇誕生日",
    "春分の日",
    "昭和の日",
    "憲法記念日",
    "みどりの日",
    "こどもの日",
    "海の日",
    "山の日",
    "敬老の日",
    "秋分の日",
    "スポーツの日",
    "文化の日",
    "勤労感謝の日"]
console.log(holidays);

let num = Math.floor(Math.random() * 16);

// 変数numの値が0以外である間、変数numの値を出力し続ける
while (num !== 0) {
    num = Math.floor(Math.random() * 16);
    console.log(num);
  }
  
   // 1～16までの数値を順番に出力する
   for (const i of holidays) {
    console.log(i);
  }
  
  