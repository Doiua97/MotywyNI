// ==UserScript==
// @name         Polarna Pracownia
// @namespace    Doiua97/MotywyNI
// @version      1.0.0
// @description  Autorski motyw zimowy Margonem NI; natywne pozycje i rozmiary klienta.
// @homepageURL  https://github.com/Doiua97/MotywyNI/tree/main/Polarna-Pracownia
// @downloadURL  https://raw.githubusercontent.com/Doiua97/MotywyNI/main/Polarna-Pracownia/install/polarna-pracownia.user.js
// @updateURL    https://raw.githubusercontent.com/Doiua97/MotywyNI/main/Polarna-Pracownia/install/polarna-pracownia.user.js
// @match        https://*.margonem.pl/*
// @match        https://*.margonem.com/*
// @resource     themeCSS https://raw.githubusercontent.com/Doiua97/MotywyNI/70a0bc77e2b9505595ae8dd47225ad9b6664251c/Polarna-Pracownia/css/polarna-pracownia.css
// @grant        GM_getResourceText
// @run-at       document-end
// @noframes
// ==/UserScript==

(() => {
  'use strict';
  const THEME_ID = 'polarna-pracownia';
  const CSS_URL = 'https://raw.githubusercontent.com/Doiua97/MotywyNI/70a0bc77e2b9505595ae8dd47225ad9b6664251c/Polarna-Pracownia/css/polarna-pracownia.css';
  const raw = GM_getResourceText('themeCSS');
  if (!raw || !raw.includes('Polarna Pracownia 1.0.0')) {
    console.error('Polarna Pracownia: brak arkusza wydania. Zainstaluj skrypt ponownie z repozytorium MotywyNI.');
    return;
  }
  const css = raw.replace(/url\(\s*(['"]?)(\.\.\/assets-production\/[^'")\s]+)\1\s*\)/g,
    (_match, _quote, relative) => 'url("' + new URL(relative, CSS_URL).href + '")');
  const id = 'motywy-ni-' + THEME_ID;
  document.getElementById(id)?.remove();
  const style = document.createElement('style');
  style.id = id;
  style.textContent = css;
  (document.head || document.documentElement).append(style);
})();
