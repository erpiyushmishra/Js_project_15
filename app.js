const add_ = document.querySelector(".add");
const subtract_ = document.querySelector(".subtract");
const multiply_ = document.querySelector(".multiply");
const divide_ = document.querySelector(".divide");

const topBlock=document.querySelector(".top");
const middleBlock=document.querySelector(".middle");
const bottomBlock=document.querySelector(".bottom");
const Blocks =[topBlock,middleBlock,bottomBlock]

const var1 = document.querySelector(".var1");
const sign = document.querySelector(".operator");
const var2 = document.querySelector(".var2");

const message = document.querySelector(".message");
const new_ques = document.querySelector(".btn")

const operators = ["+","-","*","/"]


var operator;
var x; 
var y;

var m;
var n;

add_.addEventListener("click",()=>{
  operator="+"

});
subtract_.addEventListener("click",()=>{
  operator="-"

});
multiply_.addEventListener("click",()=>{
  operator="*"

});
divide_.addEventListener("click",()=>{
  operator="/"

});

const eval = (a,operator,b)=>{
  if(operator==="+"){
    return a+b;
  }else if(operator==="-"){
    return a-b;
  }else if(operator==="*"){
    return a*b;
  }else if(operator==="/"){
    return a/b;
  }
}

const creating_options=(f)=>{
  var m = Math.floor(Math.random()*10);
  var n = Math.floor(Math.random()*10);
  console.log(m,n);
  options = [m,n,z];
  var i = Math.floor(Math.random()*3);
  Blocks[i].innerHTML=f;
  Blocks.forEach((block)=>{
    if (block!=Blocks[i]){
      block.innerHTML=Math.floor(Math.random()*30);
    }
  })

}





const new_question=()=>{
  message.style.background="white";
  x=Math.floor(Math.random()*10);
  y=Math.floor(Math.random()*10);
  operator = operators[Math.floor(Math.random()*4)];
  z=eval(x,operator,y);
  creating_options(z);
  var1.innerHTML=x;
  var2.innerHTML=y;
  sign.innerHTML=operator;


  
}

new_question();

Blocks.forEach((block)=>{
  block.addEventListener("click",()=>{
    if(block.innerHTML==z){
      message.innerHTML="correct";
      message.style.background="green"

    }else{
      message.innerHTML="incorrect";
      message.style.background="red";
    }
  })
})
new_ques.addEventListener("click",new_question)

new_question();



