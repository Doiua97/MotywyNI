// ==UserScript==
// @name Winter Atelier — nowa przebudowa TEST
// @namespace Doiua97/MotywyNI/rebuild-test
// @version 0.2.2-test
// @description Arkusz motywu i celowane podłączenie znacznika X do klienta.
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
// @updateURL https://raw.githubusercontent.com/Doiua97/MotywyNI/main/Winter-Atelier-Test/install/winter-atelier-rebuild-test.user.js
// @downloadURL https://raw.githubusercontent.com/Doiua97/MotywyNI/main/Winter-Atelier-Test/install/winter-atelier-rebuild-test.user.js
// @grant none
// @sandbox raw
// @run-at document-end
// @noframes
// ==/UserScript==

(() => {
  'use strict';
  const host = /^([a-z0-9-]+)\.margonem\.pl$/i.exec(location.hostname);
  if (!host || /^(www|forum|pomoc|support|blog|panel|api|static|cdn|account|accounts|auth|login)$/i.test(host[1])) return;
  const id = 'motywy-ni-winter-atelier-rebuild';
  if (document.getElementById(id)) return;
  const link = document.createElement('link');
  link.id = id;
  link.rel = 'stylesheet';
  link.href = 'https://cdn.jsdelivr.net/gh/Doiua97/MotywyNI@f42dde4c225ab245785687c62732fd1616f9dd3e/Winter-Atelier-Test/css/winter-atelier.css';
  document.head.appendChild(link);
  (async function installMapMarker(url){
 try{
  const response=await fetch(url);if(!response.ok)throw Error('HTTP '+response.status);
  const blob=await response.blob();
  const source=await new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=reject;reader.readAsDataURL(blob);});
  const image=new Image();image.src=source;await image.decode();
  if(image.naturalWidth!==32||image.naturalHeight!==32)throw Error('Marker dimensions must be 32x32');
  for(let attempt=0;attempt<150;attempt++){
   const loader=window.Engine?.imgLoader;
   const cached=loader?.checkExist?.('/img/cross.gif',false);
   if(cached&&typeof cached.src==='string'){cached.src=source;return;}
   await new Promise(resolve=>setTimeout(resolve,200));
  }
  console.warn('Winter Atelier: klient nie udostępnił znacznika X.');
 }catch(error){console.warn('Winter Atelier: nie załadowano znacznika X.',error);}
})('https://cdn.jsdelivr.net/gh/Doiua97/MotywyNI@f42dde4c225ab245785687c62732fd1616f9dd3e/Winter-Atelier-Test/assets/move-marker.png');
})();
