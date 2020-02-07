'use strict';

// inject relevant script tag into DOM
const script = document.createElement('script');
script.setAttribute('type', 'module');
script.setAttribute('src', chrome.extension.getURL('src/wasp.js'));
const head =
  document.head ||
  document.getElementsByTagName('head')[0] ||
  document.documentElement;
head.insertBefore(script, head.lastChild);
