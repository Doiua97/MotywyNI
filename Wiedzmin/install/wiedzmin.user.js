// ==UserScript==
// @name Wiedźmin
// @namespace Doiua.MotywyNI.Wiedzmin
// @version 1.0.0
// @author Doiua
// @description Wiedźmiński interfejs Margonem NI.
// @match https://*.margonem.pl/*
// @exclude https://margonem.pl/*
// @exclude https://www.margonem.pl/*
// @exclude https://forum.margonem.pl/*
// @exclude https://pomoc.margonem.pl/*
// @updateURL https://cdn.jsdelivr.net/gh/Doiua97/MotywyNI@main/Wiedzmin/install/wiedzmin.user.js
// @downloadURL https://cdn.jsdelivr.net/gh/Doiua97/MotywyNI@main/Wiedzmin/install/wiedzmin.user.js
// @grant none
// @sandbox raw
// @run-at document-end
// @noframes
// ==/UserScript==
(async function(u,h){if(!/^([a-z0-9-]+)\.margonem\.pl$/i.test(location.hostname)||/^(www|forum|pomoc)\./i.test(location.hostname)||/(?:^|;\s*)interface=si(?:;|$)/.test(document.cookie)||document.getElementById("motywy-ni-wiedzmin"))return;const c="motywy.wiedzmin.release.v1",l=e=>e?.schema===1&&/^[a-f0-9]{40}$/.test(e.assetRef)&&/^\d+\.\d+\.\d+$/.test(e.version)&&/^[a-f0-9]{64}$/.test(e.cssSHA256)&&/^[a-f0-9]{64}$/.test(e.runtimeSHA256),s=[];try{const e=await fetch(u+"?check="+Math.floor(Date.now()/3e5),{cache:"no-store",signal:AbortSignal.timeout(6e3)});e.ok&&s.push(await e.json())}catch{}try{s.push(JSON.parse(localStorage.getItem(c)))}catch{}s.push(h);const r=new Set,d=e=>btoa(String.fromCharCode(...e.match(/../g).map(n=>parseInt(n,16))));for(const e of s){let o=function(t,m){return new Promise((y,w)=>{const g=setTimeout(()=>i(Error("Timeout")),15e3);function i(f){clearTimeout(g),t.onload=t.onerror=null,f?(t.remove(),w(f)):y()}t.onload=()=>i(),t.onerror=()=>i(Error("Load failed")),t.tagName==="LINK"?t.href=m:t.src=m,document.head.append(t)})};var p=o;if(!l(e)||r.has(e.assetRef))continue;r.add(e.assetRef);const n="https://cdn.jsdelivr.net/gh/Doiua97/MotywyNI@"+e.assetRef+"/Wiedzmin/",a=document.createElement("link");a.id="motywy-ni-wiedzmin",a.rel="stylesheet",a.crossOrigin="anonymous",a.integrity="sha256-"+d(e.cssSHA256);try{await o(a,n+"css/wiedzmin.css"),a.dataset.themeBuild=e.build;const t=document.createElement("script");t.dataset.themeBuild=e.build,t.crossOrigin="anonymous",t.integrity="sha256-"+d(e.runtimeSHA256),await o(t,n+"scripts/client-ui.js"),t.remove(),a.dataset.themeVersion=e.version,a.dataset.themeBuild=e.build;try{localStorage.setItem(c,JSON.stringify(e))}catch{}return}catch{a.remove()}}console.warn("Wied\u017Amin: nie uda\u0142o si\u0119 za\u0142adowa\u0107 motywu.")})("https://cdn.jsdelivr.net/gh/Doiua97/MotywyNI@main/Wiedzmin/release.json",{schema:1,assetRef:"49889511c6e26654d6915f63c02f7e6552c3f953",version:"0.1.0",build:"4dadccd10ffcc21a",cssSHA256:"aa4b9b83b0df7615f9034adcf358670957c45b78597c0d360d3ce2aa54ac36e9",runtimeSHA256:"4c554f0431b54e1ffe566f084af41dcdb37e64e4d5c90ea74998b2ce143f20b0"});
