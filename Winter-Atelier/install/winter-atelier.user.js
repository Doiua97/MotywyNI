// ==UserScript==
// @name         Winter Atelier
// @namespace    Doiua97/MotywyNI
// @version      1.1.2
// @description  Autorski motyw zimowy Margonem NI; natywne pozycje i rozmiary klienta.
// @homepageURL  https://github.com/Doiua97/MotywyNI/tree/main/Winter-Atelier
// @downloadURL  https://raw.githubusercontent.com/Doiua97/MotywyNI/main/Winter-Atelier/install/winter-atelier.user.js
// @updateURL    https://raw.githubusercontent.com/Doiua97/MotywyNI/main/Winter-Atelier/install/winter-atelier.user.js
// @match        https://*.margonem.pl/*
// @match        https://*.margonem.com/*
// @resource     themeCSS https://raw.githubusercontent.com/Doiua97/MotywyNI/cd9ba650ee3f5d7e0f9fb1ee5902c6dd14e73b60/Winter-Atelier/css/winter-atelier.css
// @resource     moveMarker https://raw.githubusercontent.com/Doiua97/MotywyNI/cd9ba650ee3f5d7e0f9fb1ee5902c6dd14e73b60/Winter-Atelier/assets-production/img/winter-atelier/move-marker.png
// @grant        GM_getResourceText
// @grant        GM_getResourceURL
// @grant        unsafeWindow
// @run-at       document-end
// @noframes
// ==/UserScript==

(() => {
  'use strict';
  const THEME_ID = 'winter-atelier';
  const CSS_URL = 'https://raw.githubusercontent.com/Doiua97/MotywyNI/cd9ba650ee3f5d7e0f9fb1ee5902c6dd14e73b60/Winter-Atelier/css/winter-atelier.css';
  const raw = GM_getResourceText('themeCSS');
  if (!raw || !raw.includes('../assets-production/img/winter-atelier/hud-bottom.png') || !raw.includes('.bottom-panel-of-bottom-positioner')) {
    console.error('Winter Atelier: brak arkusza wydania. Zainstaluj skrypt ponownie z repozytorium MotywyNI.');
    return;
  }
  const css = raw.replace(/url\(\s*(['"]?)(\.\.\/assets-production\/[^'")\s]+)\1\s*\)/g,
    (_match, _quote, relative) => 'url("' + new URL(relative, CSS_URL).href + '")');
  const id = 'motywy-ni-' + THEME_ID;
  document.getElementById('motywy-ni-polarna-pracownia')?.remove();
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
      let cached;
      try { cached = engine?.imgLoader?.checkExist?.('/img/cross.gif', false); } catch (_) {}
      if (cached && typeof cached.src === 'string') {
        cached.src = source;
      } else if (++attempts < 150) setTimeout(connect, 200);
      else console.warn('Winter Atelier: obraz znacznika mapy nie został udostępniony przez klienta.');
    };
    connect();
  };
  installMarker().catch(error => console.warn('Winter Atelier: nie załadowano znacznika mapy.', error));
  function installLegendAnimation(attempt = 0) {
    const engine = unsafeWindow.Engine;
    const settings = engine?.legendaryNotificator?.getSettings?.();
    const storage = settings?.LnStorage;
    const animator = settings?.LnNotifier?.LnAnimations;
    if (!storage?.getDefaultAnimationList || !animator?.animation || !settings.createMenu || !settings.getPresetValue || !settings.onSelected) {
      if (attempt < 149) setTimeout(() => installLegendAnimation(attempt + 1), 200);
      return;
    }
    if (animator.winterAtelierInstalled) return;
    const option = 970097, presetId = 970098, animation = 'WINTER_ATELIER', memory = new Map();
    const presetKey = 'winter-atelier:preset:' + location.host + ':' + (engine.hero?.d?.id ?? engine.hero?.id ?? 'guest');
    let winterActive = false;
    const winter = { id: presetId, opacity: 65, size: 24, frame_map: true, frame_map_color: '#8bb9d5', frame_loot: true, frame_loot_color: '#c3e2f0', frame_item: true, frame_item_color: '#edb77b', message: true, sound: 0, animation: option };
    try { const saved = JSON.parse(localStorage.getItem(presetKey) || 'null'); winterActive = saved?.active === true; if (saved?.data) for (const key of Object.keys(winter)) if (key !== 'id' && key in saved.data) winter[key] = saved.data[key]; } catch (_) {}
    const saveWinter = () => { try { localStorage.setItem(presetKey, JSON.stringify({ active: winterActive, data: winter })); } catch (_) {} };
    const showWinter = () => {
      document.body.classList.toggle('wa-legend-preset', winterActive);
      if (!winterActive) return;
      for (const field of settings.fieldsData || []) {
        if (field.setCssVariable) settings.setCssVariable?.(field.name, String(winter[field.name]), field.setCssVariable.unit);
        if (field.setCssClass) settings.setOrRemoveCssClass?.(field.setCssClass, winter[field.name]);
      }
    };
    const originalPresets = storage.getDefaultPresetList;
    if (originalPresets) storage.getDefaultPresetList = function (...args) { return [...originalPresets.apply(this, args), { id: presetId, val: presetId, text: 'Winter Atelier — Rubinowa zorza' }]; };
    const originalCurrentPreset = storage.getCurrentPresetData;
    storage.getCurrentPresetData = function (...args) { return winterActive ? winter : originalCurrentPreset.apply(this, args); };
    const originalPresetData = storage.getPresetData;
    if (originalPresetData) storage.getPresetData = function (id) { return Number(id) === presetId ? winter : originalPresetData.call(this, id); };
    const originalChangePreset = storage.changePreset;
    if (originalChangePreset) storage.changePreset = function (id, callback) {
      winterActive = Number(id) === presetId; saveWinter(); showWinter();
      if (winterActive) { callback?.(); return; }
      return originalChangePreset.call(this, id, callback);
    };
    const originalChangeSetting = storage.changeSetting;
    if (originalChangeSetting) storage.changeSetting = function (name, value) {
      if (winterActive && name in winter && name !== 'id') { winter[name] = value; saveWinter(); return; }
      return originalChangeSetting.call(this, name, value);
    };
    if (winterActive) settings.currentPresetData = winter;
    showWinter();
    const key = () => 'winter-atelier:legend:' + location.host + ':' + (engine.hero?.d?.id ?? engine.hero?.id ?? 'guest') + ':' + (settings.currentPresetData?.id ?? storage.getCurrentPresetData?.()?.id ?? 0);
    const selected = () => {
      if (winterActive) return winter.animation === option;
      const k = key();
      if (memory.has(k)) return memory.get(k);
      try { return localStorage.getItem(k) === '1'; } catch (_) { return false; }
    };
    const choose = enabled => {
      const k = key(); memory.set(k, enabled);
      try { if (enabled) localStorage.setItem(k, '1'); else localStorage.removeItem(k); } catch (_) {}
    };
    const originalList = storage.getDefaultAnimationList;
    storage.getDefaultAnimationList = function (...args) {
      return [...originalList.apply(this, args), { id: option, val: option, text: 'Winter Atelier — Rubinowa zorza' }];
    };
    const originalName = storage.getAnimationName;
    storage.getAnimationName = function (...args) { return selected() ? animation : originalName.apply(this, args); };
    const originalValue = settings.getPresetValue;
    settings.getPresetValue = function (name) { return name === 'animation' && selected() ? option : originalValue.call(this, name); };
    const originalSelect = settings.onSelected;
    settings.onSelected = function (name, value) {
      if (name === 'animation') {
        choose(Number(value) === option);
        if (Number(value) === option) { if (winterActive) { winter.animation = option; saveWinter(); } return; }
      }
      return originalSelect.call(this, name, value);
    };
    const originalMenu = settings.createMenu;
    settings.createMenu = function (field) {
      if (field.name === 'animation') field = { ...field, menuData: storage.getDefaultAnimationList() };
      if (field.name === 'presets' && storage.getDefaultPresetList) field = { ...field, menuData: storage.getDefaultPresetList() };
      return originalMenu.call(this, field);
    };
    for (const name of ['animation', 'presets']) {
      const field = settings.fieldsData?.find(f => f.name === name);
      const oldMenu = settings.formControls?.[name]?.[0];
      if (field && oldMenu) oldMenu.replaceWith(settings.createMenu(field));
    }
    let canvas, frame = 0;
    const stop = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0; canvas?.remove(); canvas = null;
      document.body.classList.remove('wa-legend-active');
    };
    const play = () => {
      stop();
      if (document.hidden) return;
      const area = document.querySelector('.game-window-positioner');
      if (!area) return;
      const bounds = area.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;
      const loot = area.querySelector('.loot-wnd:has([data-item-type="t-leg"])');
      const box = loot?.getBoundingClientRect();
      const cx = box ? box.x + box.width / 2 - bounds.x : bounds.width / 2;
      const cy = box ? box.y + box.height / 2 - bounds.y : bounds.height / 2;
      const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
      const opacity = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--ln-opacity'));
      const configuredSize = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--ln-size'));
      const particleScale = Number.isFinite(configuredSize) ? Math.max(.25, Math.min(3, configuredSize / 24)) : 1;
      const strength = Number.isFinite(opacity) ? Math.max(0, Math.min(1, opacity / 100)) : .7;
      if (!strength) return;
      canvas = document.createElement('canvas');
      const dpr = Math.min(devicePixelRatio || 1, 2);
      canvas.width = Math.ceil(bounds.width * dpr); canvas.height = Math.ceil(bounds.height * dpr);
      canvas.className = 'wa-legend-canvas';
      canvas.style.cssText = `position:fixed;left:${bounds.x}px;top:${bounds.y}px;width:${bounds.width}px;height:${bounds.height}px;pointer-events:none;z-index:123`;
      document.body.append(canvas);document.body.classList.add('wa-legend-active');
      const ctx = canvas.getContext('2d');
      if (!ctx) { stop(); return; }
      ctx.scale(dpr, dpr);
      const duration = reduced ? 900 : 2600;
      const particles = Array.from({ length: reduced ? 18 : 64 }, (_, i) => {
        const a = Math.random() * Math.PI * 2, speed = 70 + Math.random() * 150;
        const radius = box ? Math.min((box.width / 2 + 10) / Math.max(.001, Math.abs(Math.cos(a))), (box.height / 2 + 10) / Math.max(.001, Math.abs(Math.sin(a)))) : 35;
        return { x: cx + Math.cos(a) * radius, y: cy + Math.sin(a) * radius, vx: Math.cos(a) * speed, vy: Math.sin(a) * speed - 30, size: (3 + Math.random() * 5) * particleScale, spin: Math.random() * 6 - 3, angle: a, ruby: i % 7 === 0, amber: i % 11 === 0 };
      });
      let start;
      const draw = now => {
        frame = 0;
        if (start === undefined) start = now;
        const age = now - start, t = age / 1000;
        if (age >= duration || document.hidden || !document.getElementById(id) || loot && !loot.isConnected) { stop(); return; }
        ctx.clearRect(0, 0, bounds.width, bounds.height);
        ctx.save();
        if (box) {
          ctx.beginPath();ctx.rect(0, 0, bounds.width, bounds.height);
          ctx.rect(box.x - bounds.x - 2, box.y - bounds.y - 2, box.width + 4, box.height + 4);ctx.clip('evenodd');
        }
        if (!reduced && age < 550) {
          const halo = ctx.createRadialGradient(cx, cy, 10, cx, cy, 80 + age * .25);
          halo.addColorStop(0, '#ecfaff00');halo.addColorStop(.6, `rgba(164,18,53,${.12 * strength * (1 - age / 550)})`);halo.addColorStop(1, '#ecfaff00');
          ctx.fillStyle = halo;ctx.fillRect(0, 0, bounds.width, bounds.height);
        }
        for (const p of particles) {
          const fade = Math.max(0, 1 - age / duration);
          ctx.save();ctx.translate(p.x + p.vx * t, p.y + p.vy * t + 58 * t * t);ctx.rotate(p.angle + p.spin * t);ctx.scale(p.size, p.size);
          ctx.globalAlpha = fade * strength;
          const ice = ctx.createLinearGradient(-.5, -1, .5, 1);
          ice.addColorStop(0, '#ffffff');ice.addColorStop(.4, p.ruby ? '#e24f72' : p.amber ? '#ffcc88' : '#a0d9f7');ice.addColorStop(.5, '#edfaff');ice.addColorStop(1, p.ruby ? '#720d2e' : '#496f99');
          ctx.fillStyle = ice;ctx.strokeStyle = '#eaf8ff';ctx.lineWidth = .12;
          ctx.beginPath();ctx.moveTo(0, -1);ctx.lineTo(.45, -.25);ctx.lineTo(.28, .55);ctx.lineTo(0, 1);ctx.lineTo(-.28, .55);ctx.lineTo(-.45, -.25);ctx.closePath();ctx.fill();ctx.stroke();
          ctx.beginPath();ctx.moveTo(0, -1);ctx.lineTo(0, 1);ctx.moveTo(-.45, -.25);ctx.lineTo(.28, .55);ctx.stroke();ctx.restore();
        }
        ctx.restore();
        frame = requestAnimationFrame(draw);
      };
      frame = requestAnimationFrame(draw);
    };
    const originalAnimation = animator.animation;
    animator.animation = function (kind, ...args) {
      stop();
      if (kind === animation && document.getElementById(id)) {
        try { originalAnimation.call(this, 'NONE'); } catch (_) {}
        play(); return;
      }
      return originalAnimation.call(this, kind, ...args);
    };
    animator.winterAtelierInstalled = true;
  }
  installLegendAnimation();

})();
