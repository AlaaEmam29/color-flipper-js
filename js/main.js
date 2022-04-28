"use strict";

let btn = document.querySelector(".btn"),
color = document.querySelector(".color");
const colors = ["Green", "Red", "RGBA(133,122,200)", "#F15025"];
btn.addEventListener("click",function(){
   
        let randomColor = Math.floor(Math.random()*colors.length);
      document.querySelector("section").style.backgroundColor = colors[randomColor];

      color.innerHTML = colors[randomColor];

})
