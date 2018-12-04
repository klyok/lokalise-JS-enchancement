// ==UserScript==
// @namespace     https://openuserjs.org/users/klyok
// @name          Lokalise.co bigger screenshots
// @description   Lokalise.co bigger screenshots
// @copyright     2018, klyok (https://openuserjs.org/users/klyok)
// @license       MIT
// @version       0.0.1
// @include       https://lokalise.co/*
// @grant none
// @run-at document-end
// @icon url
// @updateURL https://openuserjs.org/meta/klyok/bigScreenshots.meta.js
// ==/UserScript==

// ==OpenUserJS==
// @author klyok
// ==/OpenUserJS==

window.addEventListener("scroll", onScrollStart, false);
onScrollStart();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function onScrollStart(){ 

await sleep(100);
var list = document.getElementsByClassName("editor-screenshot");

for (let item of list) {
    item.style = "height: 400px";
}
}
