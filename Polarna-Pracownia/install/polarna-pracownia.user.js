// ==UserScript==
// @name         Polarna Pracownia
// @namespace    Doiua97/MotywyNI
// @version      1.1.0
// @description  Autorski motyw zimowy Margonem NI; natywne pozycje i rozmiary klienta.
// @homepageURL  https://github.com/Doiua97/MotywyNI/tree/main/Polarna-Pracownia
// @downloadURL  https://raw.githubusercontent.com/Doiua97/MotywyNI/main/Polarna-Pracownia/install/polarna-pracownia.user.js
// @updateURL    https://raw.githubusercontent.com/Doiua97/MotywyNI/main/Polarna-Pracownia/install/polarna-pracownia.user.js
// @match        https://*.margonem.pl/*
// @match        https://*.margonem.com/*
// @resource     themeCSS https://raw.githubusercontent.com/Doiua97/MotywyNI/123ad2f5d39320133d42c3c3d310ffe4a069a948/Polarna-Pracownia/css/polarna-pracownia.css
// @resource     moveMarker https://raw.githubusercontent.com/Doiua97/MotywyNI/123ad2f5d39320133d42c3c3d310ffe4a069a948/Polarna-Pracownia/assets-production/img/polarna/move-marker.png
// @grant        GM_getResourceText
// @grant        GM_getResourceURL
// @grant        unsafeWindow
// @run-at       document-end
// @noframes
// ==/UserScript==

(() => {
  'use strict';
  const THEME_ID = 'polarna-pracownia';
  const CSS_URL = 'https://raw.githubusercontent.com/Doiua97/MotywyNI/123ad2f5d39320133d42c3c3d310ffe4a069a948/Polarna-Pracownia/css/polarna-pracownia.css';
  const raw = GM_getResourceText('themeCSS');
  if (!raw || !raw.includes('Polarna Pracownia 1.1.0')) {
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

  const installMarker = async () => {
    let source = GM_getResourceURL('moveMarker');
    if (!source.startsWith('data:')) {
      const blob = await (await fetch(source)).blob();
      source = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    }
    const marker = new unsafeWindow.Image();
    await new Promise((resolve, reject) => {
      marker.onload = resolve;
      marker.onerror = reject;
      marker.src = source;
    });
    if (marker.naturalWidth !== 32 || marker.naturalHeight !== 32) throw new Error('Nieprawidłowy wymiar znacznika mapy');
    let attempts = 0;
    const connect = () => {
      const engine = unsafeWindow.Engine;
      if (engine?.imgLoader?.add && engine?.mapGoMark?.init) {
        engine.imgLoader.add('/img/cross.gif', false, marker);
        engine.mapGoMark.init();
      } else if (++attempts < 150) setTimeout(connect, 200);
    };
    connect();
  };
  installMarker().catch(error => console.warn('Polarna Pracownia: nie załadowano znacznika mapy.', error));
})();
