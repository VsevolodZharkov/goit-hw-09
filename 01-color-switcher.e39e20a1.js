var startRef=document.querySelector("button[data-start]"),stopRef=document.querySelector("button[data-stop]"),intervalId=null,randomColor="",RANDOM_COLOR="randomColor",startWorkRandomColor=function(){startRef.setAttribute("disabled","disabled"),stopRef.removeAttribute("disabled","disabled"),intervalId=setInterval((function(){randomColor=document.body.style.backgroundColor=getRandomHexColor(),console.log(randomColor),localStorage.setItem(RANDOM_COLOR,JSON.stringify(randomColor))}),1e3)},stopWorkRandomColor=function(){clearTimeout(intervalId),startRef.removeAttribute("disabled","disabled"),stopRef.setAttribute("disabled","disabled");var o=localStorage.getItem(RANDOM_COLOR),t=JSON.parse(o);document.body.style.backgroundColor=t};function getRandomHexColor(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}startRef.addEventListener("click",startWorkRandomColor),stopRef.addEventListener("click",stopWorkRandomColor);
//# sourceMappingURL=01-color-switcher.e39e20a1.js.map
