// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t,r,e){return t.replace(r,e)}var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,c=o.__defineSetter__,f=o.__lookupGetter__,a=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,e){var n,l,p,s;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(f.call(t,r)||a.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),p="get"in e,s="set"in e,l&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,r,e.get),s&&c&&c.call(t,r,e.set),t};var l=e;function p(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return s&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var b=Object.prototype.hasOwnProperty;function g(t,r){return null!=t&&b.call(t,r)}var d="function"==typeof Symbol?Symbol.toStringTag:"";var j=y()?function(t){var r,e,n;if(null==t)return v.call(t);e=t[d],r=g(t,d);try{t[d]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[d]=e:delete t[d],n}:function(t){return v.call(t)};var _=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};var w=/./;function m(t){return"boolean"==typeof t}var O=Boolean.prototype.toString;var h=y();function E(t){return"object"==typeof t&&(t instanceof Boolean||(h?function(t){try{return O.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function S(t){return m(t)||E(t)}function A(){return new Function("return this;")()}p(S,"isPrimitive",m),p(S,"isObject",E);var P="object"==typeof self?self:null,T="object"==typeof window?window:null,F="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},B="object"==typeof F?F:null;var C=function(t){if(arguments.length){if(!m(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return A()}if(P)return P;if(T)return T;if(B)return B;throw new Error("unexpected error. Unable to resolve global object.")}(),x=C.document&&C.document.childNodes,R=Int8Array;function G(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;function $(t){return null!==t&&"object"==typeof t}function L(t){var r,e,n,o;if(("Object"===(e=j(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=V.exec(n.toString()))return r[1]}return $(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}p(G,"REGEXP",V),p($,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!_(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}($));var k="function"==typeof w||"object"==typeof R||"function"==typeof x?function(t){return L(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?L(t).toLowerCase():r};function U(t){return"function"===k(t)}var X,M=Object.getPrototypeOf;X=U(Object.getPrototypeOf)?M:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===j(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var z=X;var D=Object.prototype;function I(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!_(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),z(t))}(t),!r||!g(t,"constructor")&&g(r,"constructor")&&U(r.constructor)&&"[object Function]"===j(r.constructor)&&g(r,"isPrototypeOf")&&U(r.isPrototypeOf)&&(r===D||function(t){var r;for(r in t)if(!g(t,r))return!1;return!0}(t)))}function N(t){return"string"==typeof t}var Z=String.prototype.valueOf;var q=y();function H(t){return"object"==typeof t&&(t instanceof String||(q?function(t){try{return Z.call(t),!0}catch(t){return!1}}(t):"[object String]"===j(t)))}function J(t){return N(t)||H(t)}function K(t,r){return I(r)?g(r,"flags")&&(t.flags=r.flags,!N(t.flags))?new TypeError("invalid option. `flags` option must be a string primitive. Option: `"+t.flags+"`."):g(r,"capture")&&(t.capture=r.capture,!m(t.capture))?new TypeError("invalid option. `capture` option must be a boolean primitive. Option: `"+t.capture+"`."):null:new TypeError("invalid argument. Options must be an object. Value: `"+r+"`.")}p(J,"isPrimitive",N),p(J,"isObject",H);var Q="[\t\n\v\f\r              \u2028\u2029  　\ufeff]";function W(t){var r,e;if(arguments.length>0){if(e=K(r={},t))throw e;return r.capture?new RegExp("("+Q+")",r.flags):new RegExp(Q,r.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}var Y=W({capture:!0}),tt=W();p(W,"REGEXP",tt),p(W,"REGEXP_CAPTURE",Y);var rt=void 0!==String.prototype.trim,et=String.prototype.trim;var nt=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;var ot=rt&&""===et.call(" \n\t\r\n\f\v            \u2028\u2029  　\ufeff")&&"᠎"===et.call("᠎")?function(t){return et.call(t)}:function(r){return t(r,nt,"$1")},ut=/\s+/g,it=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,ct=/([a-z0-9])([A-Z])/g;function ft(r){return r=t(r,it," "),r=t(r,ct,"$1 $2"),t(r=function(t){var r,e,n,o;for(r=!0,e="",o=0;o<t.length;o++)n=t.charAt(o),tt.test(n)?r=!0:r&&(n=n.toUpperCase(),r=!1),e+=n;return e}(r=function(t){return t.toLowerCase()}(r=ot(r))),ut,"-")}export{ft as default};
//# sourceMappingURL=mod.js.map
