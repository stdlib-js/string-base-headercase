// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r,e,t){return r.replace(e,t)}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function o(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+o(i):o(i)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function c(r){var e,t,o;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,o=parseInt(t,10),!isFinite(o)){if(!n(t))throw new Error("invalid integer. Value: "+t);o=0}return o<0&&("u"===r.specifier||10!==e)&&(o=4294967295+o+1),o<0?(t=(-o).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=o.toString(e),o||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===u.call(r.specifier)?u.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(r){return"string"==typeof r}var l=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,y=/e-(\d)$/,b=/^(\d+)$/,v=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,m=/(\..*[^0])0*e/;function j(r){var e,t,o=parseFloat(r.arg);if(!isFinite(o)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);o=r.arg}switch(r.specifier){case"e":case"E":t=o.toExponential(r.precision);break;case"f":case"F":t=o.toFixed(r.precision);break;case"g":case"G":l(o)<1e-4?((e=r.precision)>0&&(e-=1),t=o.toExponential(e)):t=o.toPrecision(r.precision),r.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,w,"e"),t=g.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=g.call(t,d,"e+0$1"),t=g.call(t,y,"e-0$1"),r.alternate&&(t=g.call(t,b,"$1."),t=g.call(t,v,"$1.e")),o>=0&&r.sign&&(t=r.sign+t),t=r.specifier===p.call(r.specifier)?p.call(t):s.call(t)}function E(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+E(n):E(n)+r}var S=String.fromCharCode,O=isNaN,x=Array.isArray;function A(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,o,a,u,l,s,p;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",l=1,s=0;s<r.length;s++)if(f(n=r[s]))u+=n;else{if(e=void 0!==n.precision,!(n=A(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,O(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):S(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=j(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),u+=n.arg||"",l+=1}return u}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function P(r){var e,t,n,o;for(t=[],o=0,n=T.exec(r);n;)(e=r.slice(o,T.lastIndex-n[0].length)).length&&t.push(e),t.push(F(n)),o=T.lastIndex,n=T.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function $(r){return"string"==typeof r}function V(r){var e,t;if(!$(r))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[P(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return k.apply(null,e)}var C,R=Object.prototype,I=R.toString,B=R.__defineGetter__,G=R.__defineSetter__,L=R.__lookupGetter__,Z=R.__lookupSetter__;C=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===I.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===I.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(L.call(r,e)||Z.call(r,e)?(n=r.__proto__,r.__proto__=R,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&B&&B.call(r,e,t.get),a&&G&&G.call(r,e,t.set),r};var U=C;function X(r,e,t){U(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return W&&"symbol"==typeof Symbol.toStringTag}var N=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;function D(r,e){return null!=r&&z.call(r,e)}var q="function"==typeof Symbol?Symbol:void 0,H="function"==typeof q?q.toStringTag:"";var J=M()?function(r){var e,t,n;if(null==r)return N.call(r);t=r[H],e=D(r,H);try{r[H]=void 0}catch(e){return N.call(r)}return n=N.call(r),e?r[H]=t:delete r[H],n}:function(r){return N.call(r)};var K=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};var Q=/./;function Y(r){return"boolean"==typeof r}var rr=Boolean,er=Boolean.prototype.toString;var tr=M();function nr(r){return"object"==typeof r&&(r instanceof rr||(tr?function(r){try{return er.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function or(r){return Y(r)||nr(r)}function ir(){return new Function("return this;")()}X(or,"isPrimitive",Y),X(or,"isObject",nr);var ar="object"==typeof self?self:null,ur="object"==typeof window?window:null,cr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},fr="object"==typeof cr?cr:null,lr="object"==typeof globalThis?globalThis:null;var sr=function(r){if(arguments.length){if(!Y(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return ir()}if(lr)return lr;if(ar)return ar;if(ur)return ur;if(fr)return fr;throw new Error("unexpected error. Unable to resolve global object.")}(),pr=sr.document&&sr.document.childNodes,gr=Int8Array;function dr(){return/^\s*function\s*([^(]*)/i}var yr=/^\s*function\s*([^(]*)/i;function br(r){return null!==r&&"object"==typeof r}function vr(r){var e,t,n,o;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=yr.exec(n.toString()))return e[1]}return br(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}X(dr,"REGEXP",yr),X(br,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!K(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(br));var hr="function"==typeof Q||"object"==typeof gr||"function"==typeof pr?function(r){return vr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?vr(r).toLowerCase():e};function wr(r){return"function"===hr(r)}var mr,jr=Object,Er=Object.getPrototypeOf;mr=wr(Object.getPrototypeOf)?Er:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var _r=mr;var Sr=Object.prototype;function Or(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!K(r)}(r)&&(e=function(r){return null==r?null:(r=jr(r),_r(r))}(r),!e||!D(r,"constructor")&&D(e,"constructor")&&wr(e.constructor)&&"[object Function]"===J(e.constructor)&&D(e,"isPrototypeOf")&&wr(e.isPrototypeOf)&&(e===Sr||function(r){var e;for(e in r)if(!D(r,e))return!1;return!0}(r)))}function xr(r){return"string"==typeof r}var Ar=String.prototype.valueOf;var kr=M();function Tr(r){return"object"==typeof r&&(r instanceof String||(kr?function(r){try{return Ar.call(r),!0}catch(r){return!1}}(r):"[object String]"===J(r)))}function Fr(r){return xr(r)||Tr(r)}function Pr(r,e){return Or(e)?D(e,"flags")&&(r.flags=e.flags,!xr(r.flags))?new TypeError(V("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):D(e,"capture")&&(r.capture=e.capture,!Y(r.capture))?new TypeError(V("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(V("invalid argument. Options argument must be an object. Value: `%s`.",e))}X(Fr,"isPrimitive",xr),X(Fr,"isObject",Tr);var $r="[\t\n\v\f\r              \u2028\u2029  　\ufeff]";function Vr(r){var e,t;if(arguments.length>0){if(t=Pr(e={},r))throw t;return e.capture?new RegExp("("+$r+")",e.flags):new RegExp($r,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}var Cr=Vr({capture:!0}),Rr=Vr();X(Vr,"REGEXP",Rr),X(Vr,"REGEXP_CAPTURE",Cr);var Ir=void 0!==String.prototype.trim,Br=String.prototype.trim;var Gr=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;var Lr=Ir&&""===Br.call(" \n\t\r\n\f\v            \u2028\u2029  　\ufeff")&&"᠎"===Br.call("᠎")?function(r){return Br.call(r)}:function(e){return r(e,Gr,"$1")},Zr=/\s+/g,Ur=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Xr=/([a-z0-9])([A-Z])/g;function Wr(e){return e=r(e,Ur," "),e=r(e,Xr,"$1 $2"),r(e=function(r){var e,t,n,o;for(e=!0,t="",o=0;o<r.length;o++)n=r.charAt(o),Rr.test(n)?e=!0:e&&(n=n.toUpperCase(),e=!1),t+=n;return t}(e=function(r){return r.toLowerCase()}(e=Lr(e))),Zr,"-")}export{Wr as default};
//# sourceMappingURL=mod.js.map
