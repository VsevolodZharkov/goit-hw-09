const e=document.querySelector("input"),t=document.querySelector("button"),n=document.querySelector(".timer"),o=document.querySelector("span[data-days]"),r=document.querySelector("span[data-hours]"),a=document.querySelector("span[data-minutes]"),s=document.querySelector("span[data-seconds]"),c=new Date;let d="",u="";t.setAttribute("disabled","disabled"),e.addEventListener("click",(function(){const n={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]===c||e[0]<c?window.alert("Please choose a date in the future"):e[0]>c&&(d=e[0],t.removeAttribute("disabled","disabled"))}};flatpickr(e,n)})),t.addEventListener("click",(function(){setInterval((()=>{let e=new Date;const t=new Date(d);if(u=t-e,u<0)clearInterval(),n.textContent="Отсчет окончен!";else{const{days:e,hours:t,minutes:n,seconds:c}=function(e){const t=1e3,n=60*t,o=60*n,r=24*o,a=Math.floor(e/r),s=Math.floor(e%r/o),c=Math.floor(e%r%o/n),d=Math.floor(e%r%o%n/t);return{days:a,hours:s,minutes:c,seconds:d}}(u);s.innerHTML=c<10?"0"+c:c,a.innerHTML=n<10?"0"+n:n,r.innerHTML=t<10?"0"+t:t,o.innerHTML=e<10?"0"+e:e}}),1e3)}));
//# sourceMappingURL=02-timer.f74714f2.js.map
