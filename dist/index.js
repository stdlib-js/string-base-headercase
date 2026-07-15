"use strict";var c=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(v){throw (r=0, v)}};};var u=c(function(R,i){
var E=require('@stdlib/string-base-lowercase/dist'),a=require('@stdlib/string-base-replace/dist'),q=require('@stdlib/string-base-startcase/dist'),n=require('@stdlib/string-base-trim/dist'),o=/\s+/g,A=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,_=/([a-z0-9])([A-Z])/g;function g(e){return e=a(e,A," "),e=a(e,_,"$1 $2"),e=n(e),e=E(e),e=q(e),a(e,o,"-")}i.exports=g
});var p=u();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
