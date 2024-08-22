const var_1 = document.querySelector(".var1");
const var_2 = document.querySelector(".var2");
const answer = document.querySelector(".answer");

const message = document.querySelector(".message");
const new_que = document.querySelector(".btn");

const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
let operator = "+";

add.addEventListener("click",()=>{
    operator = "+"
});
subtract.addEventListener("click",()=>{
    operator = "-"
});
multiply.addEventListener("click",()=>{
    operator = "*"
})
divide.addEventListener("click",()=>{
    operator = "/"
});


const topElement = document.querySelector(".top");
const middle = document.querySelector(".middle");
const bottom = document.querySelector(".bottom");
const selector_array = [topElement, middle, bottom];
let x;
let y;
let z;

const create_question = () => {
    message.style.background="white";
  x = Math.floor(Math.random() * 10) + 1;
  var_1.innerHTML = x;

  y = Math.floor(Math.random() * 10) + 1;
  var_2.innerHTML = y;

  z = Math.floor(Math.random() * 3);

  selector_array[z].innerHTML = x + y;
  
};

selector_array.forEach((selector) => {
  selector.addEventListener("click", () => {
    let a = selector.innerHTML;
    console.log(a);
    console.log(x + y);

    if (a == x + y) {
      message.innerHTML = "correct";
      message.style.background="green"
    } else {
      message.innerHTML="incorrect";
      message.style.background="red"
    }
  });
});

create_question()

new_que.addEventListener("click",create_question)
