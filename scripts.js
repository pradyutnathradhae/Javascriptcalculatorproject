function getHistory(){
  return document.getElementById("history-value").innerText;
}
function printHistory(num){
  document.getElementById('history-value').innerText = num;
}
function getOutput(){
  return document.getElementById("output-value").innerText;
}
function printOutput(num){
  if(num === ""){
    document.getElementById('output-value').innerText = num;
  }
  else{
    document.getElementById('output-value').innerText = getFormattedText(num);
  }
}
function getFormattedText(num){
  if(num === '-'){
    return "";
  }
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
}
function reverseNumberFormat(num){
  return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName('operator');
for(var i=0;i<operator.length;i++){
  operator[i].addEventListener("click",function(){
      if(this.id === 'clear'){
        printHistory("");
        printOutput("");
      }
      else if (this.id === 'backspace') {
        var output = reverseNumberFormat(getOutput()).toString();
        if(output){//check if output has a value
          output = output.substr(0,output.length - 1);
          printOutput(output);
        }
      }
      else{
        var output1 = getOutput();
        var history = getHistory();
        if(output1 === "" && history !== ""){
          if(isNaN(history[history.length - 1])){
            history = history.substr(0,history.length - 1);
          }
          if(output1 !== "" || history !== ""){
            output1 = output1 === ""?output1:reverseNumberFormat(output1);
            history = history + output1;
            if(this.id === "="){
              var result = eval(history);
              printHistory("");
              printOutput(result);
            }
            else{
              history = history + this.id;
              printHistory(history);
              printOutput("");
            }
          }
        }
      }
  });
}
var number = document.getElementsByClassName('number');
for(var i=0;i<number.length;i++){
  number[i].addEventListener("click",function(){
      var output = reverseNumberFormat(getOutput());
      if(!isNaN(output)){//check if prevoutput format is number
        output = output + this.id;
        printOutput(output);
      }
  });
}
