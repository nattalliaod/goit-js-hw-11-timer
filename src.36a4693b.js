parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"VyiV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={daysC:document.querySelector('[data-value="days"]'),hoursC:document.querySelector('[data-value="hours"]'),minsC:document.querySelector('[data-value="mins"]'),secondsC:document.querySelector('[data-value="secs"]')};exports.default=e;
},{}],"yCUT":[function(require,module,exports) {
"use strict";var s=t(require("./refs"));function t(s){return s&&s.__esModule?s:{default:s}}const{daysC:e,hoursC:r,minsC:a,secondsC:n}=s.default;class i{constructor({targetDate:s,markup:t}){this.refs={daysC:e,hoursC:r,minsC:a,secondsC:n},this.targetDate=s,this.deltaTime=0,this.markup=t}start(){setInterval(()=>{const s=Date.now(),t=this.targetDate-s,e=this.getTimeComponents(t);this.insertValues(e)},1e3)}getTimeComponents(s){return{days:this.pad(Math.floor(s/864e5)),hours:this.pad(Math.floor(s%864e5/36e5)),mins:this.pad(Math.floor(s%36e5/6e4)),seconds:this.pad(Math.floor(s%6e4/1e3))}}pad(s){return String(s).padStart(2,"0")}insertValues({days:s,hours:t,mins:e,seconds:r}){this.refs.daysC.innerHTML=s,this.refs.hoursC.innerHTML=t,this.refs.minsC.innerHTML=e,this.refs.secondsC.innerHTML=r}}const o=new i({targetDate:new Date("jan 1, 2022")});o.start();
},{"./refs":"VyiV"}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/timer.js");
},{"./sass/main.scss":"clu1","./js/timer.js":"yCUT"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-timer/src.36a4693b.js.map