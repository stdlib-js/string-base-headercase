// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-lowercase@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-replace@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-startcase@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-trim@v0.1.1-esm/index.mjs";var i=/\s+/g,n=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,d=/([a-z0-9])([A-Z])/g;function m(m){return m=t(m,n," "),m=t(m,d,"$1 $2"),m=r(m),m=s(m),m=e(m),t(m,i,"-")}export{m as default};
//# sourceMappingURL=index.mjs.map
