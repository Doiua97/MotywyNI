// ==UserScript==
// @name Winter Atelier
// @namespace Doiua/MotywyNI/Winter-Atelier
// @version 1.2.2
// @author Doiua
// @icon https://cdn.jsdelivr.net/gh/Doiua97/MotywyNI@b26085c3c7a9e8886d8a11b8195fbc55221a2e69/Winter-Atelier/assets/winter-atelier-icon.png
// @description Zimowy motyw interfejsu Margonem.
// @match https://*.margonem.pl/*
// @exclude https://margonem.pl/*
// @exclude https://www.margonem.pl/*
// @exclude https://forum.margonem.pl/*
// @exclude https://pomoc.margonem.pl/*
// @updateURL https://cdn.jsdelivr.net/gh/Doiua97/MotywyNI@main/Winter-Atelier/install/winter-atelier.user.js
// @downloadURL https://cdn.jsdelivr.net/gh/Doiua97/MotywyNI@main/Winter-Atelier/install/winter-atelier.user.js
// @grant none
// @sandbox raw
// @run-at document-end
// @noframes
// ==/UserScript==

(async function f(d,a){const m=/^([a-z0-9-]+)\.margonem\.pl$/i.exec(location.hostname);if(!m||/^(www|forum|pomoc|support|blog|panel|api|static|cdn|account|accounts|auth|login)$/i.test(m[1]))return;const c="motywy-ni-winter-atelier-rebuild",o="winter-atelier.release.v1";if(document.getElementById(c))return;const t=document.createElement("link");t.id=c;t.rel="stylesheet";document.head.appendChild(t);const n=e=>e&&e.schema===1&&/^[a-f0-9]{40}$/.test(e.assetRef)&&/^\d+\.\d+\.\d+$/.test(e.version)&&/^[a-f0-9]{16}$/.test(e.build);let r;try{r=JSON.parse(localStorage.getItem(o))}catch{}const l=[];try{const e=await fetch(d.releaseURL,{cache:"no-store",signal:AbortSignal.timeout(6e3)});if(!e.ok)throw Error("HTTP "+e.status);const s=await e.json();if(!n(s))throw Error("Nieprawidłowe wydanie");l.push(s)}catch{}l.push(r,d.fallback);const w=new Set;for(const e of l){if(!n(e)||w.has(e.assetRef))continue;w.add(e.assetRef);const s="https://cdn.jsdelivr.net/gh/Doiua97/MotywyNI@"+e.assetRef+"/Winter-Atelier/";try{await new Promise((p,g)=>{const y=setTimeout(()=>u(Error("CSS timeout")),12e3);function u(h){clearTimeout(y);t.onload=t.onerror=null;h?g(h):p()}t.onload=()=>u();t.onerror=()=>u(Error("CSS error"));t.href=s+"css/winter-atelier.css"});t.dataset.themeVersion=e.version;t.dataset.themeBuild=e.build;const i=document.createElement("script");i.src=s+"scripts/palette-bindings.js";i.onload=()=>i.remove();i.onerror=()=>{i.remove();console.warn("Winter Atelier: nie załadowano palety UI.")};document.head.appendChild(i);a(s+"assets/move-marker.png");try{localStorage.setItem(o,JSON.stringify(e))}catch{}return}catch{}}t.remove();console.warn("Winter Atelier: nie załadowano motywu.")})({"releaseURL":"https://cdn.jsdelivr.net/gh/Doiua97/MotywyNI@main/Winter-Atelier/release.json","fallback":{"schema":1,"assetRef":"b26085c3c7a9e8886d8a11b8195fbc55221a2e69","version":"1.2.0","build":"81bdc9dd3944d467"}},async function f(d){try{const a=await fetch(d);if(!a.ok)throw Error("HTTP "+a.status);const m=await a.blob();const c=await new Promise((t,n)=>{const r=new FileReader;r.onload=()=>t(r.result);r.onerror=n;r.readAsDataURL(m)});const o=new Image;o.src=c;await o.decode();if(o.naturalWidth!==32||o.naturalHeight!==32)throw Error("Marker dimensions must be 32x32");for(let t=0;t<150;t++){const n=window.Engine?.imgLoader;const r=n?.checkExist?.("/img/cross.gif",false);if(r&&typeof r.src==="string"){r.src=c;return}await new Promise(l=>setTimeout(l,200))}console.warn("Winter Atelier: klient nie udostępnił znacznika X.")}catch(a){console.warn("Winter Atelier: nie załadowano znacznika X.",a)}});
