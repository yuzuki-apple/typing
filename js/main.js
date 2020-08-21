var _sentence = document.getElementById("sentence");
var _point = document.getElementById("point");
var _comment = document.getElementById("comment");


query = [
  "Hello",
  "aiueo",
  "python"
];
index = 10000;
mod = 97;

nowSentence = ''
nowPoint = 0;

getNowSentence();
document.body.addEventListener('keydown', event => {push_button(event.key)});



function getNowSentence(){
  index += 1;
  nowSentence = query[index % query.length];
  nowPoint = 0;
  _sentence.textContent = nowSentence;
}

function isAlphabet(alphabet){
  if(alphabet.length != 1) return false;
  if("A" <= alphabet && alphabet <= "Z") return true;
  if("a" <= alphabet && alphabet <= "z") return true;
  return false;
}

function judge(alphabet){
  if(alphabet == nowSentence.charAt(nowPoint)){
    _comment.textContent = "ok";
    return true;
  }
  _comment.textContent = "ng";
  return false;
}

function changePoint(point){
  _point.textContent = String(Math.max(Number(_point.textContent) + point, 0))
}

function push_button(alphabet){
  if(!isAlphabet(alphabet)) return;
  if(!judge(alphabet)){
    changePoint(-1);
    return;
  }
  changePoint(1);
  nowPoint += 1;
  if(nowPoint == nowSentence.length){
    getNowSentence();
  }
}
