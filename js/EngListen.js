(()=>{"use strict";var t={188:(t,e,n)=>{n.d(e,{Z:()=>p});var r=n(81),i=n.n(r),a=n(645),o=n.n(a),s=n(667),c=n.n(s),l=new URL(n(512),n.b),d=o()(i()),u=c()(l);d.push([t.id,`.player-container{display:flex;justify-content:center}.player-container .audio-player{border-radius:15pt;border:1pt #000 solid;display:flex;flex-direction:column;justify-content:space-around;transition:all .2s;width:90vw;max-width:700px;background:#f5f5f5;box-sizing:border-box}@media screen and (max-width: 560px){.player-container .audio-player{width:90vw;background:#f5f5f5}}.player-container .info{flex:1;height:20px;padding:8px 32px}.player-container .info h3{margin:auto}.time{width:16%;display:inline-block;padding-right:20px;margin:12px auto}.progressbar{display:inline-block;width:80%}.player-container .progressbar_slide{width:100%;background:#d0d0d0;height:6px}#progressbar_range{width:0%;background:#000;height:6px}.player-container .controls{display:flex;width:100%;height:40px;background:#f5f5f5;border-radius:15px;margin-top:-1px;margin-bottom:10px;padding:0px 20pt;box-sizing:border-box;transition:all .2s}.player-container .controls_plays{flex:1;display:flex;justify-content:space-around}@media screen and (max-width: 420px){.player-container .controls{flex-direction:column;height:100px}}#file-input{padding-left:7px}#prev_btn{width:26px;transition:all .2s}#prev_btn:hover{fill:#565349}#plays_btn{cursor:pointer;width:18px;transition:all .2s}#plays_btn:hover{fill:#565349}#pause_btn{display:none}@font-face{font-family:"Kalam";src:url(${u}) format("truetype")}.writingBox{padding:20px;display:flex;justify-content:center}#wbox{padding:10px;width:90vw;max-width:675px;height:15em;font-size:20px;line-height:32px;font-family:"Kalam",sans-serif}`,""]);const p=d},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,i,a){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);r&&o[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},667:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},o=[],s=0;s<t.length;s++){var c=t[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=n(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=i(f,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:h,references:1})}o.push(u)}return o}function i(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var a=r(t=t||[],i=i||{});return function(t){t=t||[];for(var o=0;o<a.length;o++){var s=n(a[o]);e[s].references--}for(var c=r(t,i),l=0;l<a.length;l++){var d=n(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},512:(t,e,n)=>{t.exports=n.p+"60a6d33ff4d53272ebbd.ttf"}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,n),a.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&!t;)t=r[i--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var t=n(379),e=n.n(t),r=n(795),i=n.n(r),a=n(569),o=n.n(a),s=n(565),c=n.n(s),l=n(216),d=n.n(l),u=n(589),p=n.n(u),f=n(188),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=o().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=d(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;new class{constructor(){this.audio=new Audio,this.fileInput=document.getElementById("file-input"),this.playPauseButton=document.getElementById("play-pause-button"),this.playerTitle=document.getElementById("player-title"),this.pauseBtnIcon=document.getElementById("pause_btn"),this.playBtnIcon=document.getElementById("play_btn"),this.progressBar=document.getElementById("progressbar_range"),this.currentTimeDisplay=document.getElementById("current-time"),this.totalTimeDisplay=document.getElementById("total-time"),this.loadMusic()}loadMusic(){this.fileInput.addEventListener("change",(t=>{return e=this,n=void 0,i=function*(){const e=t.target.files[0];e&&(this.audio.src=URL.createObjectURL(e),this.playerTitle.textContent=e.name,this.addListener())},new((r=void 0)||(r=Promise))((function(t,a){function o(t){try{c(i.next(t))}catch(t){a(t)}}function s(t){try{c(i.throw(t))}catch(t){a(t)}}function c(e){var n;e.done?t(e.value):(n=e.value,n instanceof r?n:new r((function(t){t(n)}))).then(o,s)}c((i=i.apply(e,n||[])).next())}));var e,n,r,i}))}addListener(){var t;this.playPauseButton.addEventListener("click",(()=>{this.togglePlayPause()})),null===(t=document.getElementById("prev_button"))||void 0===t||t.addEventListener("click",(()=>{this.prevSec(5)})),document.addEventListener("keydown",(t=>{t.ctrlKey&&"q"===t.key&&this.togglePlayPause(),t.ctrlKey&&"ArrowLeft"===t.key&&this.prevSec(5)})),this.audio.addEventListener("timeupdate",(()=>{this.updateProgressBarAndTime()}))}play(){this.audio.play(),this.playBtnIcon.style.display="none",this.pauseBtnIcon.style.display="inline"}pause(){this.audio.pause(),this.playBtnIcon.style.display="inline",this.pauseBtnIcon.style.display="none"}togglePlayPause(){this.audio.paused?this.play():this.pause()}formatTime(t){const e=Math.floor(t/60),n=Math.floor(t%60);return`${e}:${n<10?"0":""}${n}`}updateProgressBarAndTime(){this.currentTimeDisplay.textContent=this.formatTime(this.audio.currentTime),this.totalTimeDisplay.textContent=this.formatTime(this.audio.duration);const t=this.audio.currentTime/this.audio.duration*100;this.progressBar.style.width=t+"%"}set currentTime(t){this.audio.currentTime=t}prevSec(t){this.audio.currentTime-=t}}})()})();