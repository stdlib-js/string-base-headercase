"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=v(function(C,i){
var c=require('@stdlib/string-base-lowercase/dist'),a=require('@stdlib/string-base-replace/dist'),E=require('@stdlib/string-base-startcase/dist'),q=require('@stdlib/string-base-trim/dist'),n=/\s+/g,o=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,A=/([a-z0-9])([A-Z])/g;function _(e){return e=a(e,o," "),e=a(e,A,"$1 $2"),e=q(e),e=c(e),e=E(e),a(e,n,"-")}i.exports=_
});var g=u();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
