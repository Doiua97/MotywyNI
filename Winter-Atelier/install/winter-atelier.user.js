// ==UserScript==
// @name Winter Atelier
// @namespace Doiua/MotywyNI/Winter-Atelier
// @version 1.2.0
// @author Doiua
// @icon https://cdn.jsdelivr.net/gh/Doiua97/MotywyNI@main/Winter-Atelier/assets/winter-atelier-icon.png
// @description Zimowy motyw interfejsu Margonem.
// @match https://*.margonem.pl/*
// @exclude https://margonem.pl/*
// @exclude https://www.margonem.pl/*
// @exclude https://forum.margonem.pl/*
// @exclude https://pomoc.margonem.pl/*
// @exclude https://support.margonem.pl/*
// @exclude https://blog.margonem.pl/*
// @exclude https://panel.margonem.pl/*
// @exclude https://api.margonem.pl/*
// @exclude https://static.margonem.pl/*
// @exclude https://cdn.margonem.pl/*
// @exclude https://account.margonem.pl/*
// @exclude https://accounts.margonem.pl/*
// @exclude https://auth.margonem.pl/*
// @exclude https://login.margonem.pl/*
// @updateURL https://cdn.jsdelivr.net/gh/Doiua97/MotywyNI@main/Winter-Atelier/install/winter-atelier.user.js
// @downloadURL https://cdn.jsdelivr.net/gh/Doiua97/MotywyNI@main/Winter-Atelier/install/winter-atelier.user.js
// @grant none
// @sandbox raw
// @run-at document-end
// @noframes
// ==/UserScript==

(()=>{"use strict";const s=/^([a-z0-9-]+)\.margonem\.pl$/i.exec(location.hostname);if(!s||/^(www|forum|pomoc|support|blog|panel|api|static|cdn|account|accounts|auth|login)$/i.test(s[1]))return;const c="motywy-ni-winter-atelier-rebuild";if(document.getElementById(c))return;const r=document.createElement("link");r.id=c;r.rel="stylesheet";r.href="https://cdn.jsdelivr.net/gh/Doiua97/MotywyNI@main/Winter-Atelier/css/winter-atelier.css";document.head.appendChild(r);const t=document.createElement("script");t.src="https://cdn.jsdelivr.net/gh/Doiua97/MotywyNI@main/Winter-Atelier/scripts/palette-bindings.js";t.onload=()=>t.remove();t.onerror=()=>console.warn("Winter Atelier: nie załadowano palety UI.");document.head.appendChild(t);(async function w(d){try{const n=await fetch(d);if(!n.ok)throw Error("HTTP "+n.status);const m=await n.blob();const l=await new Promise((o,a)=>{const e=new FileReader;e.onload=()=>o(e.result);e.onerror=a;e.readAsDataURL(m)});const i=new Image;i.src=l;await i.decode();if(i.naturalWidth!==32||i.naturalHeight!==32)throw Error("Marker dimensions must be 32x32");for(let o=0;o<150;o++){const a=window.Engine?.imgLoader;const e=a?.checkExist?.("/img/cross.gif",false);if(e&&typeof e.src==="string"){e.src=l;return}await new Promise(u=>setTimeout(u,200))}console.warn("Winter Atelier: klient nie udostępnił znacznika X.")}catch(n){console.warn("Winter Atelier: nie załadowano znacznika X.",n)}})("https://cdn.jsdelivr.net/gh/Doiua97/MotywyNI@main/Winter-Atelier/assets/move-marker.png")})();
