import"./assets/styles-d195b8d2.js";import{i as o}from"./assets/vendor-d19ad561.js";const c=document.querySelector(".form");c.addEventListener("submit",m);function m(s){s.preventDefault();const i=document.querySelector(".delay-input"),n=document.querySelector('input[name="state"]:checked'),t=parseInt(i.value);new Promise((e,r)=>{setTimeout(()=>{n.value==="fulfilled"?e(t):r(t)},t)}).then(e=>{o.success({title:"Success",position:"topCenter",message:`✅ Fulfilled promise in ${e}ms`})}).catch(e=>{o.error({title:"Error",position:"topCenter",message:`❌ Rejected promise in ${e}ms`})})}
//# sourceMappingURL=commonHelpers2.js.map