// ==UserScript==
// @name Wiedźmin
// @namespace Doiua.MotywyNI.Wiedzmin
// @version 1.0.1
// @author Doiua
// @description Wiedźmiński interfejs Margonem NI.
// @match https://*.margonem.pl/*
// @exclude https://margonem.pl/*
// @exclude https://www.margonem.pl/*
// @exclude https://forum.margonem.pl/*
// @exclude https://pomoc.margonem.pl/*
// @updateURL https://cdn.jsdelivr.net/gh/Doiua97/MotywyNI@main/Wiedzmin/install/wiedzmin.user.js
// @downloadURL https://cdn.jsdelivr.net/gh/Doiua97/MotywyNI@main/Wiedzmin/install/wiedzmin.user.js
// @grant GM_getValue
// @grant GM_setValue
// @sandbox DOM
// @run-at document-end
// @noframes
// ==/UserScript==
(async function(h,g){if(!/^([a-z0-9-]+)\.margonem\.pl$/i.test(location.hostname)||/^(www|forum|pomoc)\./i.test(location.hostname)||/(?:^|;\s*)interface=si(?:;|$)/.test(document.cookie)||document.getElementById("motywy-ni-wiedzmin"))return;if(typeof GM_getValue=="function"&&typeof GM_setValue=="function"&&!document.getElementById("motywy-wiedzmin-widget-storage")){const t="motywy.wiedzmin.widgets.v1",o=document.createElement("meta");o.id="motywy-wiedzmin-widget-storage";const n=e=>{if(typeof e!="string"||e.length>65536)return null;try{const i=JSON.parse(e);if(i?.schema!==1||!i.positions||Array.isArray(i.positions)||typeof i.positions!="object")return null;const d=Object.entries(i.positions);if(d.length>512)return null;for(const[r,s]of d)if(!r||r.length>180||["__proto__","prototype","constructor"].includes(r)||!(s===!1||Array.isArray(s)&&s.length===2&&Number.isInteger(s[0])&&s[0]>=0&&s[0]<7&&["top-left","top-right","bottom-left","bottom-right","bottom-left-additional","bottom-right-additional"].includes(s[1])))return null;return JSON.stringify(i)}catch{return null}};let a;try{a=n(GM_getValue(t,null))}catch{}o.setAttribute("content",a||"null"),o.addEventListener("motywy-wiedzmin-widgets-save",()=>{const e=n(o.getAttribute("content"));if(e)try{GM_setValue(t,e)}catch{}}),document.head.append(o)}const u="motywy.wiedzmin.release.v1",w=t=>t?.schema===1&&/^[a-f0-9]{40}$/.test(t.assetRef)&&/^\d+\.\d+\.\d+$/.test(t.version)&&/^[a-f0-9]{64}$/.test(t.cssSHA256)&&/^[a-f0-9]{64}$/.test(t.runtimeSHA256),c=[];try{const t=await fetch(h+"?check="+Math.floor(Date.now()/3e5),{cache:"no-store",signal:AbortSignal.timeout(6e3)});t.ok&&c.push(await t.json())}catch{}try{c.push(JSON.parse(localStorage.getItem(u)))}catch{}c.push(g);const l=new Set,f=t=>btoa(String.fromCharCode(...t.match(/../g).map(o=>parseInt(o,16))));for(const t of c){let a=function(e,i){return new Promise((d,r)=>{const s=setTimeout(()=>m(Error("Timeout")),15e3);function m(y){clearTimeout(s),e.onload=e.onerror=null,y?(e.remove(),r(y)):d()}e.onload=()=>m(),e.onerror=()=>m(Error("Load failed")),e.tagName==="LINK"?e.href=i:e.src=i,document.head.append(e)})};var b=a;if(!w(t)||l.has(t.assetRef))continue;l.add(t.assetRef);const o="https://cdn.jsdelivr.net/gh/Doiua97/MotywyNI@"+t.assetRef+"/Wiedzmin/",n=document.createElement("link");n.id="motywy-ni-wiedzmin",n.rel="stylesheet",n.crossOrigin="anonymous",n.integrity="sha256-"+f(t.cssSHA256);try{await a(n,o+"css/wiedzmin.css"),n.dataset.themeBuild=t.build;const e=document.createElement("script");e.dataset.themeBuild=t.build,e.crossOrigin="anonymous",e.integrity="sha256-"+f(t.runtimeSHA256),await a(e,o+"scripts/client-ui.js"),e.remove(),n.dataset.themeVersion=t.version,n.dataset.themeBuild=t.build;try{localStorage.setItem(u,JSON.stringify(t))}catch{}return}catch{n.remove()}}console.warn("Wied\u017Amin: nie uda\u0142o si\u0119 za\u0142adowa\u0107 motywu.")})("https://cdn.jsdelivr.net/gh/Doiua97/MotywyNI@main/Wiedzmin/release.json",{schema:1,assetRef:"b36faa5249956096a52de010ffd5ba07e3132b96",version:"0.3.2",build:"0857ee3ecba6e081",cssSHA256:"6d3840d7fe610376149d5a692826b1dee354f91050973906a76b070437c01a50",runtimeSHA256:"ae16a25f0e2ca477973798e5341f1fc3bfaa7d8c10cf127ce24777eea5b20579"});
