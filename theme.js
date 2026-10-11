(function(){
var T={candy:"Candy Pop",matcha:"Matcha Light",ink:"Midnight Ink"},d=document.documentElement,t="candy";
try{t=localStorage.getItem("hubtheme")||t}catch(e){}
if(!T[t])t="candy";d.dataset.t=t;
var s=document.createElement("style");s.textContent=`
html[data-t=matcha]{--bg:#eef2e6;--surface:#fbfdf6;--cream:#1f2a1c;--muted:#5d6b57;--yellow:#e9b949;--pink:#f2a0a0;--teal:#6fb78a;--ink:#1f2a1c;--shadow:#1f2a1c;color-scheme:light}
html[data-t=ink]{--bg:#0e1424;--surface:#182038;--cream:#e8ecff;--muted:#9aa6d1;--yellow:#8f9bff;--pink:#ff9ec7;--teal:#5ee0c0;--ink:#0e1424;--shadow:#050810}
html[data-t=matcha] body,html[data-t=ink] body{background:var(--bg)!important}
html[data-t=matcha] .back,html[data-t=ink] .back,html[data-t=matcha] .bubble,html[data-t=ink] .bubble{background:var(--surface);color:var(--cream)}
html[data-t=matcha] .bubble::before,html[data-t=ink] .bubble::before{border-right-color:var(--surface)}
html[data-t=matcha] .all>div,html[data-t=ink] .all>div{color:var(--ink)}
html[data-t=matcha] .all .k,html[data-t=ink] .all .k{background:var(--teal)}html[data-t=matcha] .all .u,html[data-t=ink] .all .u{background:var(--pink)}
html[data-t] .all .n{color:var(--cream)}
.hubtabs{display:flex;gap:6px;flex-wrap:wrap;grid-column:1/-1}
.hubtabs button{font:700 13px system-ui,sans-serif;border:3px solid var(--cream);background:var(--surface);color:var(--cream);border-radius:99px;padding:6px 14px;cursor:pointer}
.hubtabs button.on{background:var(--yellow);color:var(--ink)}`;
(document.head||d).appendChild(s);
addEventListener("DOMContentLoaded",function(){
var b=document.createElement("div");b.className="hubtabs";
b.innerHTML=Object.keys(T).map(function(k){return'<button data-k="'+k+'"'+(k==t?' class="on"':'')+'>'+T[k]+'</button>'}).join("");
b.onclick=function(e){var k=e.target.dataset.k;if(!k)return;d.dataset.t=k;try{localStorage.setItem("hubtheme",k)}catch(x){}
[].forEach.call(b.children,function(c){c.classList.toggle("on",c.dataset.k==k)})};
var top=document.querySelector(".top"),h=document.querySelector("h1");
if(top)top.parentNode.insertBefore(b,top.nextSibling);else if(h)h.parentNode.insertBefore(b,h.nextSibling)});
})();
window.MOCHI={A:{none:"",hat:'<path d="M44 34L60 4L76 34Z" fill="#f9c733" stroke="#241812" stroke-width="3" stroke-linejoin="round"/><circle cx="60" cy="4" r="4" fill="#ff8ee0" stroke="#241812" stroke-width="2"/>',glasses:'<circle cx="45" cy="58" r="11" fill="#ffffff33" stroke="#241812" stroke-width="3"/><circle cx="75" cy="58" r="11" fill="#ffffff33" stroke="#241812" stroke-width="3"/><path d="M56 58h8" stroke="#241812" stroke-width="3"/>',bow:'<path d="M86 34l16-8v20zM86 34l-2-13-13 7z" fill="#ff8ee0" stroke="#241812" stroke-width="2.5" stroke-linejoin="round"/><circle cx="86" cy="34" r="4" fill="#f9c733" stroke="#241812" stroke-width="2"/>',crown:'<path d="M42 36L44 12L52 22L60 8L68 22L76 12L78 36Z" fill="#f9c733" stroke="#241812" stroke-width="3" stroke-linejoin="round"/>'},load:function(){try{return JSON.parse(localStorage.getItem("mochi")||"{}")}catch(e){return{}}}};
